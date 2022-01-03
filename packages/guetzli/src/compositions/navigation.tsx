import { AnimatePresence, m as motion } from 'framer-motion';
import React, { FC, Fragment, Key, ReactElement, ReactNode, useRef, useState } from 'react';
import { Label, Link, LinkButton, LinkProps, LinkVariants } from '../elements';
import { Heading2 } from '../identity';
import { useLockBodyScroll } from '../utils/use-body-scroll-lock';

export type NavigationProps = {
  currentPathname: string;
  home: string | ReactNode;
  mainLinks: { label: string; link: string }[];
  metaLinks?: { label: string; link: string }[];
  linkWrapper?: FC<{ key?: Key; href: string }>;
  onMainLinkClick?: (value: string) => void;
  onMetaLinkClick?: (value: string) => void;
  onHomeLinkContextMenu?: () => void;
};

type Props = {
  children: ReactElement<LinkProps>;
  linkWrapper?: FC<{ key?: Key; href: string }>;
};

const LinkWithOptionalWrapper: FC<Props> = ({ children, linkWrapper }) => {
  return linkWrapper ? linkWrapper({ children, href: children.props.href || '' }) : <Fragment>{children}</Fragment>;
};

export const Navigation: FC<NavigationProps> = ({
  currentPathname,
  home,
  mainLinks,
  metaLinks = [],
  linkWrapper,
  onMainLinkClick,
  onMetaLinkClick,
  onHomeLinkContextMenu,
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(mobileNavOpen, mobileNavRef);

  return (
    <nav className="grid grid-flow-col content-start lg:container lg:mx-auto px-4 pt-8 font-sans font-bold text-xs">
      <div className="z-50 flex items-center">
        <LinkWithOptionalWrapper linkWrapper={linkWrapper}>
          <Link
            href="/"
            variant={LinkVariants.Navigation}
            onClick={() => setMobileNavOpen(false)}
            onContextMenu={(e) => {
              if (!onHomeLinkContextMenu) {
                return;
              }
              e.preventDefault();
              onHomeLinkContextMenu();
            }}
          >
            {home}
          </Link>
        </LinkWithOptionalWrapper>
      </div>
      <ul className="hidden lg:grid grid-flow-col gap-8">
        {mainLinks.map(({ label, link }) => (
          <li key={label}>
            <LinkWithOptionalWrapper linkWrapper={linkWrapper}>
              <Link
                href={link}
                variant={LinkVariants.Navigation}
                active={currentPathname.includes(link)}
                onClick={() => onMainLinkClick && onMainLinkClick(label)}
              >
                {label}
              </Link>
            </LinkWithOptionalWrapper>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block text-right">
        {metaLinks.map(({ label, link }) => (
          <LinkWithOptionalWrapper key={label} linkWrapper={linkWrapper}>
            <Link
              href={link}
              variant={LinkVariants.Navigation}
              className="mr-8 last:mr-0"
              onClick={() => onMetaLinkClick && onMetaLinkClick(label)}
            >
              {label}
            </Link>
          </LinkWithOptionalWrapper>
        ))}
      </div>
      <div className="text-right z-50 lg:hidden">
        <LinkButton
          className="relative font-sans font-bold text-xs"
          variant={LinkVariants.Navigation}
          onClick={() => setMobileNavOpen((current) => !current)}
        >
          {mobileNavOpen ? 'Schliessen' : 'Menü'}
        </LinkButton>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed inset-0 h-screen grid place-items-center text-center place-content-center overflow-hidden z-40 bg-mint-500 ${
          mobileNavOpen ? 'visible' : 'invisible'
        }`}
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
              {mainLinks.map(({ label, link }) => (
                <Heading2 key={label} as="li" noSpacing>
                  <LinkWithOptionalWrapper linkWrapper={linkWrapper}>
                    <Link
                      href={link}
                      variant={LinkVariants.Navigation}
                      onClick={() => {
                        setMobileNavOpen(false);
                        onMainLinkClick && onMainLinkClick(label);
                      }}
                      active={currentPathname.includes(link)}
                    >
                      {label}
                    </Link>
                  </LinkWithOptionalWrapper>
                </Heading2>
              ))}
              <br />
              {metaLinks.map(({ label, link }) => (
                <Label key={label} as="li">
                  <LinkWithOptionalWrapper linkWrapper={linkWrapper}>
                    <Link
                      href={link}
                      variant={LinkVariants.Navigation}
                      onClick={() => {
                        setMobileNavOpen(false);
                        onMetaLinkClick && onMetaLinkClick(label);
                      }}
                    >
                      {label}
                    </Link>
                  </LinkWithOptionalWrapper>
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
