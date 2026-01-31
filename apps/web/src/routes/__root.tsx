import React from 'react';
import Header from './-components/header';
import Footer from './-components/footer';

import type { QueryClient } from '@tanstack/react-query';

import { createRootRouteWithContext, Outlet, useRouterState } from '@tanstack/react-router';
import type { FileRouteTypes } from '@/routeTree.gen';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    const router = useRouterState();
    const currentPath = router.location.pathname;

    const hideHeaderOn: FileRouteTypes['to'][] = ['/auth', '/manufacturer'];
    const hideFooterOn: string[] = ['/auth', '/manufacturer', '/customize'];

    const hideHeader = hideHeaderOn.some((path) => currentPath.startsWith(path));
    const hideFooter = hideFooterOn.some((path) => currentPath.startsWith(path));

    return (
      <React.Fragment>
        {!hideHeader && <Header />}
        <main className='lg:p-global-padding-horizontal p-global-padding-horizontal-mobile min-h-screen w-full flex flex-col'>
          <Outlet />
        </main>
        {!hideFooter && <Footer />}
      </React.Fragment>
    );
  },
});
