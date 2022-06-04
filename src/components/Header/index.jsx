import style from './Header.module.css';
import logo from '../../assets/ignite_logo.svg';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <img src={logo} alt={'ignite logo'} />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  );
}
