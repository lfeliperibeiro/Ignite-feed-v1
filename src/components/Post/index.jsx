import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from './Post.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import { useState } from 'react';

export const Post = ({ author, publishedAt, content }) => {
  const publishedDateFormat = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const [comments, setComments] = useState(['Wow']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateRelativeToDateNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  async function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  async function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeleteOne);
  }

  async function newCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  async function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const isNewCommentInputEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar avatar={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToDateNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === 'link') {
            return (
              <p key={item.content}>
                <a href={'#'}>{item.content}</a>{' '}
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name={'comment'}
          placeholder={'deixe um comentário'}
          onChange={newCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentInputEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            onDeleteComment={deleteComment}
            content={comment}
          />
        ))}
      </div>
    </article>
  );
};
