import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src={'https://avatars.githubusercontent.com/u/53883371?v=4'}
        alt={''}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Ribeiro</strong>
              <time
                title={'06 de Junho as 20:30'}
                dateTime={'2022-06-05 20:23:30'}
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title={'Deletar comentário'}>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
