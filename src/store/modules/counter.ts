import { createAction, handleActions } from 'redux-actions';
import CounterActionCreators, { CounterState } from 'store/models/counter';

// Action Types
const INCREASE: string = 'counter/INCREASE';
const DECREASE: string = 'counter/DECREASE';

// Action Creators
export const actionCreators: CounterActionCreators = {
  increase: createAction<void>(INCREASE, () => {}),
  decrease: createAction<void>(DECREASE, () => {})
};

// States
const initialState: CounterState = {
  count: 0
};

// Reducers
export default handleActions<CounterState>({
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
}, initialState);