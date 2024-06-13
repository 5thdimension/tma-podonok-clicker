import type { ComponentType, JSX } from 'react';

import { GamePage } from '@/pages/GamePage/index';
import { QuestPage } from '@/pages/QuestPage/QuestPage';
import { ShopPage } from '@/pages/ShopPage/ShopPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [


  { path: '/', Component: GamePage },
  { path: '/game', Component: GamePage, title: 'Game Page' },

  { path: '/quest', Component: QuestPage, title: 'Quest Page' },
  { path: '/shop', Component: ShopPage, title: 'Shop Page' },

  { path: '/empty', Component: GamePage, title: 'Empty Page' }
];
