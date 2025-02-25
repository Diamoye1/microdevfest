import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { ReactWrapperComponent } from './components/react-wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: ReactWrapperComponent,
    data: {
      elementName: 'home-react',
      loadChildren: () => import('home/Module'),
    },
  },
  {
    path: '',
    component: ReactWrapperComponent,
    data: {
      elementName: 'home-react',
      loadChildren: () => import('home/Module'),
    },
  },
  {
    path: 'shop',
    loadChildren: () =>
      loadRemote<typeof import('shop/Routes')>('shop/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
];
