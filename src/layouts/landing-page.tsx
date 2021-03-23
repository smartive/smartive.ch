import { AnimatePresence, m as motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';
import LogoHeader from '../components/logo-header';

const LandingPage: FC = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div>
      <LogoHeader />
      <AnimatePresence>
        <motion.div
          className="lg:container lg:mx-auto px-4 pt-8"
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
