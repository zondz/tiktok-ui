import style from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(style);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo}></img>
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false}></input>
          <button className={cx('clear')}>{<FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>}</button>
          {<FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
          <button className={cx('search-btn')}>{<FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>}</button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
