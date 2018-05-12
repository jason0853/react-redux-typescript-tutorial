import { CounterState } from './counter';
import { TodoState } from './todo';

export type StoreState = {
  counter: CounterState;
  todo: TodoState;
}