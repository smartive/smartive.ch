import 'next-plausible';

declare module 'next-plausible' {
  // default typeing of plausible returns any which is not allowed by eslint rules
  export function usePlausible<E extends Events = unknown>(): <N extends keyof E>(
    eventName: N,
    ...rest: E[N] extends never ? [] : { props?: Record<string, unknown>; callback?: () => void }[]
  ) => void;
}
