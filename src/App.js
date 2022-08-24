import styles from './Home.module.scss';
import './index.css';
import Cronograma from './pages/cronograma/Cronograma';
import Campeonato from './pages/campeonato/Campeonato';
import Rodape from './pages/rodape/Rodape';
import Menu from './pages/menu/Menu';
import Home from './pages/home/Home';
import Seta from './components/setaTopo/Seta';
function App() {
  return (
    <>
     <Menu/>
      <main className={styles.main}>
        <Home/>
        {/* <Cronograma/> */}
        <Campeonato/>
      </main>
      <Rodape/>
      <Seta/>
    </>
  );
}

export default App;
