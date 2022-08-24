import styles from '../../Home.module.scss';

export default function Rodape(){
    return(
        <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.realizacao}>
            <h3>Realização:</h3>
            <div className={styles.logos}>
              <a
                href="https://www.instagram.com/petinfouem/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/logo-pet.png"
                  alt="Logo PET Informática"
                  style={{ width: '70px' }}
                />
              </a>
              <a href="http://www.uem.br/" target="_blank" rel="noreferrer">
                <img
                  src="./assets/logo-uem.png"
                  alt="Logo UEM"
                  style={{ width: '70px' }}
                />
              </a>
              <a href="http://www.din.uem.br/" target="_blank" rel="noreferrer">
                <img
                  src="./assets/logo-din.png"
                  alt="Logo DIN"
                  style={{ width: '70px' }}
                />
              </a>
              <a
                href="https://www.instagram.com/cainfouem/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/logo-cainfo.png"
                  alt="Logo Cainfo"
                  style={{ width: '60px' }}
                />
              </a>
              <a
                href="https://www.instagram.com/caccomuem/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/logo-caccom.png"
                  alt="Logo Caccom"
                  style={{ width: '60px' }}
                />
              </a>
              <a
                href="https://www.instagram.com/conectadasuem/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/logo-vertical.png"
                  alt="Logo Conectadas"
                  style={{ width: '60px' }}
                />
              </a>
            </div>
          </div>
          {/*<div className={styles.patrocinio}>
            <h3>Patrocínio:</h3>
            <div className={styles.logos}>
               <a
                href="https://www.olx.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/logo-olx.png"
                  alt="Logo OLX"
                  style={{ width: '120px' }}
                />
              </a>
              <a
                href="https://firstphoenixstudio.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/logo-first-phoenix.png"
                  alt="Logo First Phoenix"
                />
              </a> 
            </div>
          </div>*/}
        </div>
      </footer>
    )

}