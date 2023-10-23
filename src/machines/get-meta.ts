import { State, StateMachine } from 'xstate';

type Params = { state: State<unknown>; machine: StateMachine<unknown, any, any> };

export const getMeta = (field: string, { state, machine }: Params) => state.meta[`${machine.id}.${state.value}`]?.[field];
