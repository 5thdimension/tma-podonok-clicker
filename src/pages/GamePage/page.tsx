import { Button, Section } from '@telegram-apps/telegram-ui';
import { useEffect, useState, type FC } from 'react';

import little from '../../../assets/characters/малыш.svg';
import pups from '../../../assets/characters/пууппс.svg';
import miska from '../../../assets/characters/миска фул.svg';

import { Page } from '@/shared/Page/ui/Page';
import { ButtonBlock } from '@/widgets/ButtonBlock/index';
import { Character } from '@/entities/characters';
import { UpScreen } from '@/widgets/UpScreen';
import { GameScreen } from '@/shared/GameScreen';

export const GamePage: FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('counter changed');
  }, [counter])

  // Function to increase image size
  function enlargeImg(id: string) {
    const img = document.getElementById(id);
    // Set image size to 1.5 times original
    if (img) {
      img.style.transform = "scale(1.3)";
      // Animation effect
      img.style.transition = "transform 0.25s ease";
    }
    setTimeout(() => resetImg(id), 300);
  }
  // // Function to reset image size
  function resetImg(id: string) {
    const img = document.getElementById(id);
    // Set image size to original
    if (img) {
      img.style.transform = "scale(1)";
      img.style.transition = "transform 0.25s ease";
    }
  }

  return (
    <Page>
      <Section
        header='GAИГРА'
        style={{
          textAlign: "center"
        }}
      >
        <GameScreen backgroundColor="linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(150,150,127,1) 67%, rgba(213,212,190,1) 98%)">
          <UpScreen>
            <>
              ИКОНКА / СЧЕТ / ЛИДЕРБОРД / ИКОНКА
              <Button
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
            height: "15vh",
            textAlign: "center"
          }}>
            {counter} МОНЕТ
          </div>
          <div className="экран средний (игра)"
            style={{
              height: "50vh",
              textAlign: "center"
            }}>
            <Character>
              <img src={little} id="img1" style={{
                position: "absolute",
                top: 0,
                left: 0,
              }} onClick={(event) => {
                setCounter(counter + 1)
                enlargeImg(event.currentTarget.id)
              }} />

              <img src={pups} id="img2" style={{
                top: 0,
                left: 0,
              }} onClick={(event) => {
                setCounter(counter + 1);
                enlargeImg(event.currentTarget.id)
              }} />

            </Character>
            <div>
              <img src={miska} style={{
              }} />
            </div>
          </div>
        </GameScreen>
        <ButtonBlock />
      </Section>
    </Page >

  );
};
