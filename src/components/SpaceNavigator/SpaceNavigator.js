import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import {MdArrowBack} from 'react-icons/md/';
import {MdArrowForward} from 'react-icons/md';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => {
  return (
    <div className={cx('space-navigator')}>
      <div className={cx('left', 'end')}>
        <div className={cx('circle')} onClick={onPrev}>
            <MdArrowBack/>
        </div>
      </div>
      <div className={cx('right', 'end')}>
      <div className={cx('circle')} onClick={onNext}>
        <MdArrowForward/>
      </div>
     </div>
    </div>
  );
};

export default SpaceNavigator;