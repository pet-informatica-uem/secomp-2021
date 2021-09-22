import styles from './Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

function App() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <a href="#cronograma">CRONOGRAMA</a>
            </li>
            <li>
              <a href="#campeonato">CAMPEONATO</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="sobre" className={styles.sHero}>
          <div className={styles.left}>
            <p>
              A Semana da Computação, carinhosamente chamada de SECOMP, é um
              evento que ocorre uma vez por ano na UEM (Universidade Estadual de
              Maringá) e é promovido pelo Departamento de Informática, o DIN. A
              SECOMP 2021 será a quarta edição do evento e acontecerá nos dias
              04, 05, 06, 07 e 08 de outubro de 2021. As inscrições são
              gratuitas e todos podem participar! A programação inclui
              palestras, painéis de discussões, campeonato de jogos e sorteios,
              tudo isto com o intuito de levar tecnologia e informação aos
              participantes. Confira a programação aqui pelo site. Quando você
              fizer sua inscrição, irá receber um e-mail com mais detalhes sobre
              o evento e convidamos você a participar do Discord da V SECOMP e
              ficar por dentro de qualquer atualização, ou tirar suas dúvidas.
              Aproveite!
            </p>
            <div className={styles.footerHero}>
              <button>INSCREVA-SE</button>
              <div className={styles.social}>
                <ul>
                  <li>
                    <a href="https://www.youtube.com/c/PETInformáticaUEM">
                      <img src="./assets/youtube-icon.svg" alt="YouTube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/secompuem/">
                      <img src="./assets/instagram-icon.svg" alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/6XKBDnbFsQ">
                      <img src="./assets/discord-icon.svg" alt="Discord" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitch.tv/petinformaticauem">
                      <img src="./assets/twitch-icon.svg" alt="Twitch" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/assets/logo.svg" alt="Logo SECOMP" title="Logo SECOMP" />
          </div>
        </section>

        <section id="cronograma" className={styles.sCronograma}>
          <h2>Cronograma</h2>
        </section>

        <section id="campeonato" className={styles.sCampeonato}>
          <h2>Campeonato</h2>
          <p>
            O Campeonato de Jogos da Quinta Edição da SECOMP será composto por
            quatro jogos: <span>CS:GO</span>, <span>League of Legends</span>,{' '}
            <span>Overwatch</span> e <span>Valorant</span>. As Eliminatórias e
            Semifinais estão previstas para acontecer durante os dias 27 de
            setembro até 3 de outubro. A Final acontecerá AO VIVO na Twitch no
            final de semana que sucede a SECOMP (9 e 10 de outubro).
          </p>
          <p>
            Obs: nada impede que os outros não sejam ao vivo, isso pode ser
            acordado.
          </p>
          <h4>Horários</h4>
          <p>
            Durante a Semana: 17:30 às 19:30; Finais de Semana: Manhã, Tarde e
            Noite (horário ainda a definir).
          </p>

          <p>Clique nas imagens para ler o regulamento.</p>

          <Swiper
            spaceBetween={150}
            slidesPerView={3}
            className={styles['swiper-wrapper']}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 3.2,
                spaceBetween: 32,
              },
            }}
          >
            <SwiperSlide className={styles['swiper-slide']}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1QwpYuYufrqaMJ3Ag8RybtwZbIruME6hy/edit?usp=sharing&ouid=110308908067527417189&rtpof=true&sd=true"
              >
                <img src="/assets/csgo.jpg" alt="CS:GO" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['swiper-slide']}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/19Bs4l8aYTzeHkMUSC4mOuTHMtisjKjYe/edit?usp=sharing&ouid=110308908067527417189&rtpof=true&sd=true"
              >
                <img src="/assets/lol.jpg" alt="LOL" />
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles['swiper-slide']}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1XdoKxTONRs50p0aT8fHZ-ub66jyDCXHvK05juIoKVjs/edit"
              >
                <img src="/assets/valorant.jpg" alt="Valorant" />
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles['swiper-slide']}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1Cdo6gKPeWVbYWax1B6BODR2V7mQFWjgp/edit?usp=sharing&ouid=110308908067527417189&rtpof=true&sd=true"
              >
                <img src="/assets/overwatch.jpg" alt="Overwatch" />
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.realizacao}>
          <h3>Realização:</h3>
          <div className={styles.logos}>
            <a
              href="https://www.instagram.com/petinfouem/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/logo-pet.png" alt="Logo PET Informática" />
            </a>
            <a href="http://www.uem.br/" target="_blank" rel="noreferrer">
              <img src="/assets/logo-uem.png" alt="Logo UEM" />
            </a>
            <a href="http://www.din.uem.br/" target="_blank" rel="noreferrer">
              <img src="/assets/logo-din.png" alt="Logo DIN" />
            </a>
            <a
              href="https://www.instagram.com/cainfouem/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/logo-cainfo.png"
                alt="Logo Cainfo"
                style={{ width: '70px' }}
              />
            </a>
            <a
              href="https://www.instagram.com/caccomuem/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/logo-caccom.png"
                alt="Logo Caccom"
                style={{ width: '70px' }}
              />
            </a>
          </div>
        </div>
        <div className={styles.patrocinio}>
          <h3>Patrocínio:</h3>
          <div className={styles.logos}>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="/assets/logo-pet.png" alt="Logo PET Informática" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
