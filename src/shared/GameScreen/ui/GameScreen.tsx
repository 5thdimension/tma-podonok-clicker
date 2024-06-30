import type { FC, PropsWithChildren } from 'react';

import '../styles/style.scss';

export interface GameScreenProps extends PropsWithChildren {
  backgroundColor?: string;
}

export const GameScreen: FC<GameScreenProps> = ({ children, backgroundColor}) => (
  <div className="экран общий"
    style={{
      height: "90vh",
      background: backgroundColor || "black",
      textAlign: "center"
    }}>
    {children}
  </div>
);
