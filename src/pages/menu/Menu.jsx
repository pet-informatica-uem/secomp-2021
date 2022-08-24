import styles from '../../Home.module.scss';

export default function Menu(){
    return(
        <header className={styles.header} id="inicio">
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
    )    
}