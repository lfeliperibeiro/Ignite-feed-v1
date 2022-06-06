import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import sidebarImg from '../../assets/background.svg';
import { Avatar } from '../Avatar';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={sidebarImg} alt="" />
      <div className={styles.profile}>
        <Avatar
          avatar={'https://avatars.githubusercontent.com/u/53883371?v=4'}
        />
        <strong>Felipe Ribeiro</strong>
        <span>Front-End Developer</span>
      </div>
      <footer>
        <a href={'#'}>
          <PencilLine size={20} />
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  );
};
