import React from 'react';
import { ReactNode } from 'react';

import {
  AuthenticatedRoutesWrapper,
  useGetAccountInfo
} from '@elrondnetwork/dapp-core';

import { useLocation } from 'react-router-dom';
import routes, { routeNames } from 'routes';
import Navbar from './Navbar';

import styles from './styles.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  const { search } = useLocation();
  const { address } = useGetAccountInfo();

  return (
    <div className='layout d-flex flex-column flex-fill wrapper'>
      {Boolean(address) && <Navbar />}

      <main className={`d-flex flex-column flex-grow-1 ${styles.mainbg}`}>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
    </div>
  );
};

export default Layout;
