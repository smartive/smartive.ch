import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, useRef, useState } from 'react';
import { Heading2 } from '../elements/heading-2';
import { Label } from '../elements/label';
import { Link, LinkButton, LinkVariants } from '../elements/link';
import { useLockBodyScroll } from '../utils/use-body-scroll-lock';

const Main = [
  { label: 'Angebot', link: '/angebot' },
  { label: 'Projekte', link: '/projekte' },
  { label: 'Team', link: '/team' },
  { label: 'Agentur', link: '/agentur' },
  { label: 'Blog', link: '/blog' },
] as const;

const Meta = [
  { label: '+41 44 552 55 99', link: 'tel:0041445525599' },
  { label: 'hello@smartive.ch', link: 'mailto:hello@smartive.ch' },
] as const;

export const Navigation: FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);
  useLockBodyScroll(mobileNavOpen, mobileNavRef);

  return (
    <nav className="grid grid-flow-col content-start font-sans font-bold text-xs">
      <div className="z-50">
        <Link variant={LinkVariants.NoUnderline} href="/" onClick={() => setMobileNavOpen(false)}>
          smartive
        </Link>
      </div>
      <ul className="hidden lg:grid grid-flow-col gap-8">
        {Main.map(({ label, link }) => (
          <li key={label}>
            <Link variant={LinkVariants.NoUnderline} href={link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block text-right">
        {Meta.map(({ label, link }) => (
          <Link key={label} variant={LinkVariants.NoUnderline} className="mr-8 last:mr-0" href={link}>
            {label}
          </Link>
        ))}
      </div>
      <div className="text-right z-50 lg:hidden">
        <LinkButton
          className="relative font-sans font-bold text-xs"
          variant={LinkVariants.NoUnderline}
          onClick={() => setMobileNavOpen((current) => !current)}
        >
          {mobileNavOpen ? 'Schliessen' : 'Menü'}
        </LinkButton>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed inset-0 grid place-items-center text-center overflow-hidden z-40 bg-mint-500"
        ref={mobileNavRef}
        initial={{ opacity: 0 }}
        animate={mobileNavOpen ? 'open' : 'closed'}
        variants={variants}
        custom={{ height: mobileNavRef?.current?.clientHeight, width: mobileNavRef?.current?.clientWidth }}
      >
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.ul
              className="grid grid-flow-row gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0 }}
            >
              {Main.map(({ label, link }) => (
                <Heading2 key={label} as="li" noSpacing>
                  <Link variant={LinkVariants.NoUnderline} href={link} onClick={() => setMobileNavOpen(false)}>
                    {label}
                  </Link>
                </Heading2>
              ))}
              <br />
              {Meta.map(({ label, link }) => (
                <Label key={label} as="li">
                  <Link variant={LinkVariants.NoUnderline} href={link} onClick={() => setMobileNavOpen(false)}>
                    {label}
                  </Link>
                </Label>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

const variants = {
  closed: ({ width = document?.body.clientWidth }) => ({
    clipPath: `circle(0px at ${width - 40}px 40px)`,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
  open: ({ height = document?.body.clientHeight, width = document?.body.clientWidth }) => ({
    clipPath: `circle(${height * 2 + 200}px at ${width - 40}px 40px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
};
