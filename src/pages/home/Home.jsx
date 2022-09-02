import styles from '../../Home.module.scss';

export default function Home() {
  return (
    <section id="sobre" className={styles.sHero}>
      <div className={styles.left}>
        <p data-aos="fade-down">
          A Semana da Computação, carinhosamente chamada de{' '}
          <span>SECOMP</span>, é um evento que ocorre uma vez por ano na UEM
          (Universidade Estadual de Maringá) e é promovido pelo Departamento
          de Informática, o DIN. A SECOMP 2022 será a sexta edição do
          evento e acontecerá nos{' '}
          <span>dias 03, 04, 05, 06 e 07 de outubro</span> de 2022. A programação
          incluirá palestras, workshops, painéis de discussões, feiras de oportunidades,
          campeonatos de jogos e sorteios, tudo isto com o intuito de levar tecnologia
          e informação aos participantes. Mais informações em breve!
          {/* Convidamos você a participar do{' '}
            <a
              href="https://discord.gg/6XKBDnbFsQ"
              target="_blank"
              rel="noreferrer"
            >
              Discord da V SECOMP
            </a>{' '}
            e ficar por dentro de qualquer atualização, ou tirar suas dúvidas.
            <br></br>Todas as palestras serão transmitidas na Twitch e Youtube
            do PET-Informática, para acessá-los, clique nos ícones roxos
            abaixo. Aproveite! */}
        </p>
        <div className={styles.footerHero}>
          {/* <a
              href="https://forms.gle/7CX5Hn9ui1sGRaD39"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-left"
            >
              INSCREVA-SE
            </a> */}
          <div className={styles.social} data-aos="fade-up">
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/c/PETInformáticaUEM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/youtube-icon.svg" alt="YouTube" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/secompuem/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/instagram-icon.svg" alt="Instagram" />
                </a>
              </li>
              {/* <li>
                  <a
                    href="https://discord.gg/6XKBDnbFsQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="./assets/discord-icon.svg" alt="Discord" />
                  </a>
                </li> */}
              <li>
                <a
                  href="https://www.twitch.tv/secompuem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/twitch-icon.svg" alt="Twitch" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.image} data-aos="zoom-in">
        <img
          src="./assets/logoteste.png"
          alt="Logo SECOMP"
          title="Logo SECOMP"
        />
      </div>
    </section>
  )
}