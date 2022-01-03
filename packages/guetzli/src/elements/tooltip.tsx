import React, { cloneElement, FC, ReactElement, ReactNode } from 'react';
import { Arrow, useLayer } from 'react-laag';

export type TooltipProps = {
  text: string;
  isOpen: boolean;
  children: ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ children, text, isOpen }) => {
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
    trigger = cloneElement(children as ReactElement, {
      ...triggerProps,
    });
  }

  return (
    <>
      {trigger}
      {isOpen &&
        renderLayer(
          <div className="bg-mint-500 py-2 px-4 mr-6 border border-black rounded z-30" {...layerProps}>
            {text}
            <Arrow {...arrowProps} backgroundColor="#7DDDD1" borderColor="#252525" borderWidth={1} />
          </div>
        )}
    </>
  );
};
