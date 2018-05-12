import { createAction, handleActions, Action } from 'redux-actions';
import produce from 'immer';
import TodoActionCreators, { TodoState, AddPayload } from 'store/models/todo';

// Action Types
const CHANGE_INPUT: string = 'todo/CHANGE_INPUT';
const ADD: string = 'todo/ADD';
const TOGGLE: string = 'todo/TOGGLE';
const DELETE: string = 'todo/DELETE';

// Action Creators
export const actionCreators: TodoActionCreators = {
  changeInput: createAction<string, string>(CHANGE_INPUT, (value: string): string => value),
  add: createAction<AddPayload, AddPayload>(ADD, ({ id, text }: AddPayload): AddPayload => ({ id, text })),
  toggle: createAction<number, number>(TOGGLE, (id: number): number => id),
  delete: createAction<number, number>(DELETE, (id: number) => id)
};

// States
const initialState: TodoState = {
  input: '',
  list: []
};

// Reducers
export default handleActions<TodoState, any>({
  [CHANGE_INPUT]: (state, action: Action<string>) => {
    return produce(state, draft => {
      draft.input = action.payload!;
    });
  },
  [ADD]: (state, action: Action<AddPayload>) => {
    return produce(state, draft => {
      const { id, text } = action.payload!;

      draft.list.push({ id, text, completed: false });
      draft.input = '';
    });
  },
  [TOGGLE]: (state, action: Action<number>) => {
    return produce(state, draft => {
      const selectedItem = draft.list.find(item => item.id === action.payload);

      selectedItem && (selectedItem.completed = !selectedItem.completed);
    });
  },
  [DELETE]: (state, action: Action<number>) => {
    return produce(state, draft => {
      const idx = draft.list.findIndex(item => item.id === action.payload);

      draft.list.splice(idx, 1);
    });
  }
}, initialState);