import styles from './Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {
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
            <li>
              <a href="#sobre">PRÊMIOS</a>
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
            <div className={styles.footer}>
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

          <Swiper spaceBetween={50} slidesPerView={3} className={styles.slider}>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src="/assets/csgo.jpg" alt="CS:GO" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide">
                <div className={styles.slide}>
                  <img src="/assets/lol.jpg" alt="LOL" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className={styles.slide}>
                  <img src="/assets/valorant.jpg" alt="Valorant" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className={styles.slide}>
                  <img src="/assets/overwatch.jpg" alt="Overwatch" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    </>
  );
}

export default App;
