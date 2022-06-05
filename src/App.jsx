import { Header } from './components/Header';
import styles from './App.module.css';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={'Felipe Ribeiro'}
            content={'lorem implements dolor lore'}
          />
          <Post
            author={'Felipe Ribeiro'}
            content={'lorem implements dolor lore'}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
