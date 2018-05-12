// State Type Definitions
export type TodoState = {
  input: string;
  list: TodoItemData[];
}

export type TodoItemData = {
  id: number;
  text: string;
  completed: boolean;
}

// Action Payload Type Definitions
export type AddPayload = {
  id: number;
  text: string;
}

// Action Creators Type Definitions
export default interface TodoActionCreators {
  [key: string]: any;
  changeInput(value: string): any;
  add(addPaylod: AddPayload): any;
  toggle(id: number): any;
  delete(id: number): any;
}