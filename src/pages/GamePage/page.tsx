import { Button, Section } from '@telegram-apps/telegram-ui';
import { useEffect, useState, type FC } from 'react';


import { Page } from '@/shared/Page/ui/Page';
import { ButtonBlock } from '@/widgets/ButtonBlock/index';
import { Character } from '@/entities/characters';
import { UpScreen } from '@/widgets/UpScreen';

export const GamePage: FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('counter changed');
  }, [counter])

  return (
    <>
      <Page>
        <Section
          header='GAИГРА'
          style={{
            textAlign: "center"
          }}
        >
          <div className="экран общий"
            style={{
              height: 500,
              background: "linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(150,150,127,1) 67%, rgba(213,212,190,1) 98%)",
              textAlign: "center"
            }}>


            <UpScreen>
              <>
                ИКОНКА / СЧЕТ / ЛИДЕРБОРД / ИКОНКА
                <Button
                  // loading={true}

                  style={{
                    padding: "5px 10px",
                    border: '2px solid black',
                    overflow: 'auto',
                    background: "linear-gradient(180deg, rgba(98,75,75,0.7175245098039216) 7%, rgba(228,228,213,0.9192051820728291) 62%)"
                  }}>
                  <div
                    style={{
                      fontSize: 6,
                    }}
                  >
                    connect wallet
                  </div>

                </Button>
              </>
            </UpScreen>


            <div style={{
              height: "15%",
              textAlign: "center"
            }}>
              {counter} МОНЕТ
            </div>



            <div className="экран средний (игра)"
              onClick={() => {
                setCounter(counter + 1)
              }}
              style={{
                height: "60%",
                textAlign: "center"
              }}>
              <Character />
            </div>

          </div>


        </Section>


        <ButtonBlock />
      </Page >

    </>
  );
};
