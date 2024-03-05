export const isTruthy = <T>(v: T | undefined | null | false | 0 | ''): v is T => !!v;
