import { Section } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/shared/Page/ui/Page';
import { ButtonBlock } from '@/widgets/ButtonBlock/index';
import { GameScreen } from '@/shared/GameScreen';

export const ShopPage: FC = () => {
  return (
    <>
      <Page>
        <Section
          style={{
            textAlign: "center"
          }}
          header='ShopShop'
        >
          <GameScreen backgroundColor='linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(186,184,34,1) 67%, rgba(213,212,190,1) 98%)'>

          </GameScreen>
        </Section>


        <ButtonBlock />
      </Page>

    </>
  );
};
