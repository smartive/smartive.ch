import { State, StateMachine } from 'xstate';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Params = { state: State<unknown>; machine: StateMachine<unknown, unknown, any> };

export const getMeta = (field: string, { state, machine }: Params) => state.meta[`${machine.id}.${state.value}`]?.[field];
