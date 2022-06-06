import styles from './Avatar.module.css';

export const Avatar = ({ avatar, hasBorder = false }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatar}
      alt={''}
    />
  );
};
