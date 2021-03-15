import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, ReactElement } from 'react';
import { Arrow, useLayer } from 'react-laag';

type Props = {
  text: string;
  isOpen: boolean;
};

export const Tooltip: FC<Props> = ({ children, text, isOpen }) => {
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen,
    placement: 'bottom-center',
    triggerOffset: 12,
  });

  // when children equals text (string | number), we need to wrap it in an
  // extra span-element in order to attach props
  let trigger;
  if (['string', 'number'].includes(typeof children)) {
    trigger = (
      <span className="tooltip-text-wrapper" {...triggerProps}>
        {children}
      </span>
    );
  } else {
    // In case of an react-element, we need to clone it in order to attach our own props
    trigger = React.cloneElement(children as ReactElement, {
      ...triggerProps,
    });
  }

  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-mint-500 py-2 px-4 rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {text}
              <Arrow {...arrowProps} backgroundColor="#7DDDD1" />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
