import dayjs from 'dayjs';
import React from 'react';

import Card from '@/components/Card';

import s from './index.scss';

interface Props {
  title?: string;
  content?: string;
  date?: number;
  tags?: string[];
}

const PostCard: React.FC<Props> = ({ title, content, date, tags }) => {
  return (
    <Card className={s.card} isStatic={true}>
      <div className={s.title}>{title}</div>
      <p className={s.content}>
        {content!.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
      </p>
      <div className={s.info}>
        <span className={s.date}>{dayjs(date!).format('YYYY-MM-DD')}</span>
        <div className={s.tags}>
          {tags!.map(tag => (
            <span className={s.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
