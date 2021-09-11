import styles from './Home.module.scss';

function App() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <a href="#sobre">CRONOGRAMA</a>
          <a href="#sobre">CAMPEONATO</a>
          <a href="#sobre">PRÊMIOS</a>
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
            <div className="footer">
              <button>INSCREVA-SE</button>
              <div className="social">
                <a href="https://youtube.com">
                  <img src="./assets/youtube-icon.svg" alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/assets/logo.svg" alt="Logo SECOMP" title="Logo SECOMP" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
