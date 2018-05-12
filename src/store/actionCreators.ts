import { bindActionCreators } from 'redux';
import store from './index';

import { actionCreators as counterActionCreators } from './modules/counter';
import { actionCreators as todoActionCreators } from './modules/todo';
import CounterActionCreators from './models/counter';
import TodoActionCreators from './models/todo';

const { dispatch } = store;

export const CounterActions: CounterActionCreators = bindActionCreators(counterActionCreators, dispatch);
export const TodoActions: TodoActionCreators = bindActionCreators(todoActionCreators, dispatch);