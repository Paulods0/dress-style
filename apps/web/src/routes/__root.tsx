import React from 'react';
import Header from './-components/header';
import Footer from './-components/footer';

import type { QueryClient } from '@tanstack/react-query';

import { createRootRouteWithContext, Outlet, useRouterState } from '@tanstack/react-router';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    const router = useRouterState();
    const currentPath = router.location.pathname;

    const hideOn = ['/auth', '/manufacturer'];

    const hideComponent = hideOn.some((path) => currentPath.startsWith(path));

    return (
      <React.Fragment>
        {!hideComponent && <Header />}
        <main className='lg:p-global-padding-horizontal p-global-padding-horizontal-mobile min-h-screen w-full flex flex-col'>
          <Outlet />
        </main>
        {!hideComponent && <Footer />}
      </React.Fragment>
    );
  },
});
