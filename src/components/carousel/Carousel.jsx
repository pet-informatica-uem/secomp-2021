import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import SwiperCore, { Autoplay } from 'swiper';
import styles from '../../Home.module.scss';

export default function Carousel(){
    SwiperCore.use([Autoplay]);
    AOS.init({
      duration: 500,
      once: true,
    });
    return(
        <Swiper
        data-aos="fade-up"
        spaceBetween={150}
        slidesPerView={3}
        className={styles.swiperWrapper}
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
        <SwiperSlide className={styles.swiperSlide}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1QwpYuYufrqaMJ3Ag8RybtwZbIruME6hy/edit?usp=sharing&ouid=110308908067527417189&rtpof=true&sd=true"
          >
            <img src="./assets/csgo.jpg" alt="CS:GO" />
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/19Bs4l8aYTzeHkMUSC4mOuTHMtisjKjYe/edit?usp=sharing&ouid=110308908067527417189&rtpof=true&sd=true"
          >
            <img src="./assets/lol.jpg" alt="LOL" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1XdoKxTONRs50p0aT8fHZ-ub66jyDCXHvK05juIoKVjs/edit"
          >
            <img src="./assets/valorant.jpg" alt="Valorant" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1nWD8vvWZHfRcnANxoZyvGCmebOJdHvwUe_sd93UGNMk/edit?usp=sharing"
          >
            <img src="./assets/xadrez-mini.jpg" alt="Xadrez" />
          </a>
        </SwiperSlide>
      </Swiper>
    )
}