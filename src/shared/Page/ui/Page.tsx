import type { FC, PropsWithChildren, ReactNode } from 'react';

import '../styles/style.scss';

export interface PageProps extends PropsWithChildren {
  title?: string;
  disclaimer?: ReactNode;
}

export const Page: FC<PageProps> = ({ title, children, disclaimer }) => (
  <div className="page">
    <h1>{title}</h1>
    {disclaimer && <div className="page__disclaimer">{disclaimer}</div>}
    {children}
  </div>
);
