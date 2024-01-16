export const getMeta = (field: string, { state, machine }) => state.meta[`${machine.id}.${state.value}`]?.[field];
