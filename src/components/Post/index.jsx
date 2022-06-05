import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={'https://avatars.githubusercontent.com/u/53883371?v=4'}
            alt={''}
          />
          <div className={styles.authorInfo}>
            <strong>Felipe Ribeiro</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <time title={'06 de Junho as 20:30'} dateTime={'2022-06-05 20:23:30'}>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da
        </p>
        <p> Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          👉
          <a href={'#'}> jane.design/doctorcare</a>
        </p>

        <p>
          <a href={'#'}>#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
};
