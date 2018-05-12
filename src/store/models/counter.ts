// State Type Definitions
export type CounterState = {
  count: number;
}

// Action Creators Type Definitions
export default interface CounterActionCreators {
  [key: string]: any;
  increase(): any;
  decrease(): any;
}