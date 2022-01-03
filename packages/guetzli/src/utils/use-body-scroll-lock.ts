import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { MutableRefObject, useEffect } from 'react';

export const useLockBodyScroll = (active: boolean, ref: MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (active) {
      disableBodyScroll(ref.current, { reserveScrollBarGap: true });
    } else {
      enableBodyScroll(ref.current);
    }

    return clearAllBodyScrollLocks;
  }, [active]);
};
