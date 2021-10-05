import { ArrowUp } from '@smartive/guetzli';
import { LazyMotion, m as motion, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const loadFramerFeatures = () => import('../utils/framer-dom-animation').then((res) => res.default);

export const BackToTop = () => {
  const { scrollYProgress } = useViewportScroll();
  const [animate, setAnimate] = useState(false);

  useEffect(
    () =>
      scrollYProgress.onChange((e) => {
        const unsubscribe = setAnimate(e === 1);
        return unsubscribe;
      }),
    []
  );

  return (
    <LazyMotion strict features={loadFramerFeatures}>
      <button
        title="Zurück nach oben"
        aria-hidden
        className="grid grid-flow-col place-items-center gap-2 lg:col-start-4 lg:place-self-end mt-8 text-sm font-bold focus:outline-none focus:ring-[3px] focus:ring-mint-200"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        Beam me up Scotty!
        <motion.div
          className="inline-block"
          animate={
            animate
              ? {
                  // keyframes to give the arrow a bounce effect
                  translateY: [0, -15, 0, -8, 0, -5, 0],
                }
              : {}
          }
        >
          <ArrowUp className="h-6 w-6" />
        </motion.div>
      </button>
    </LazyMotion>
  );
};
