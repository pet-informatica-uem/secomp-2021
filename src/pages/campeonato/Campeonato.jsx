import 'swiper/swiper-bundle.css';
import styles from '../../Home.module.scss';
import Carousel from '../../components/carousel/Carousel';
import 'aos/dist/aos.css';


export default function Campeonato() {

  return (
    <section id="campeonato" className={styles.sCampeonato}>
      <h2 data-aos="fade-right">Campeonato</h2>
      <p data-aos="fade-down">
        O Campeonato de Jogos da Sexta Edição da SECOMP terá quatro modalidades:{' '}
        <span>Counter-Strike: Global Offensive</span>, <span>League of Legends</span>,{' '}
        <span>Valorant</span> e <span>Xadrez</span>. As Eliminatórias e
        Semifinais estão previstas para acontecer de forma online, e
        as finais acontecerão presencialmente na UEM no
        final de semana que sucede a SECOMP, dia 9 de outubro.
      </p>
      <p data-aos="fade-down">
        As oitavas, quartas e semifinais das competições serão transmitidas no{' '}
        <a
          href="https://www.twitch.com/secompuem/"
          target="_blank"
          rel="noreferrer"
        >
          Twitch
        </a>{' '}
        oficial da SECOMP, e as partidas e o chaveamento podem ser consultados no{' '}
        <a
          href="https://battlefy.com/secomp-uem"
          target="_blank"
          rel="noreferrer"
        >
          Battlefy
        </a>{' '}
        da SECOMP.
      </p>
      <p data-aos="fade-down">
        Para saber sobre horários, atualizações e novidades, siga-nos no{' '}
        <a
          href="https://www.instagram.com/secompuem/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>{' '}
        da SECOMP.<br></br>
      </p>

      <p data-aos="fade-down">Clique nas imagens para ler o regulamento.</p>
      <Carousel />

    </section>
  )
}