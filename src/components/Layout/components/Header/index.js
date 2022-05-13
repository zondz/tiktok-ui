import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import style from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import images from '../../../../assets/images';
import AccountItem from '../../../AccountItem';
// import 'tippy.js/dist/tippy.css'; // optional
const cx = classNames.bind(style);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  }, []);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt=""></img>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              {/* div boc ben ngoai result */}
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false}></input>
            <button className={cx('clear')}>{<FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>}</button>
            {<FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}

            <button className={cx('search-btn')}>{<FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>}</button>
          </div>
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
