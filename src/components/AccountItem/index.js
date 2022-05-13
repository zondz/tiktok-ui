import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
function AccountItem() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1631890742705154~c5_300x300.webp?x-expires=1652594400&x-signature=N5bsxlaacmUxopUdZvlUlb53X3A%3D"
        alt="Hoa"
      ></img>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>Nguyen van A</span>
      </div>
    </div>
  );
}

export default AccountItem;
