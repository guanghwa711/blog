import React from 'react';

import { useLazyImg } from '@/utils/hooks/useLazyImg';

import s from './index.scss';

interface Props {
  _id?: string;
  link?: string;
  avatar?: string;
  name?: string;
  descr?: string;
}

const LinkItem: React.FC<Props> = ({ _id, link, avatar, name, descr }) => {
  const { imgRef, imgUrl } = useLazyImg(avatar!);

  return (
    <div className={s.item} key={_id} ref={imgRef}>
      <a href={link} rel='noreferrer' target='_blank' className={s.link}>
        <img src={imgUrl} alt='avatar' className={s.avatar} />
        <div className={s.right}>
          <div className={s.title}>{name}</div>
          <div className={s.descr}>{descr}</div>
        </div>
      </a>
    </div>
  );
};

export default LinkItem;
