import React from 'react';

import LayoutLoading from '@/components/LayoutLoading';

import s from './index.scss';
import MsgItem from './MsgItem';

interface MsgType {
  avatar?: string;
  content?: string;
  date?: number;
  email?: string;
  link?: string;
  name?: string;
  replyId?: string;
  _id?: string;
}

interface Props {
  msgs?: MsgType[];
  replys?: MsgType[];
  loading?: boolean;
}

const MsgList: React.FC<Props> = ({ msgs, replys, loading }) => {
  const openReplyBox = (id: string) => {};

  return (
    <>
      {loading ? (
        <LayoutLoading />
      ) : (
        msgs?.map((msg: MsgType) => {
          return (
            <div key={msg._id} className={s.completeMsg}>
              <MsgItem
                _id={msg._id}
                avatar={msg.avatar}
                openReplyBox={openReplyBox}
                link={msg.link}
                name={msg.name}
                date={msg.date}
                content={msg.content}
                email={msg.email}
                isReply={false}
              />
              {replys
                ?.filter(item => item.replyId === msg._id)
                .map((reply: MsgType) => (
                  <MsgItem
                    key={reply._id}
                    _id={reply._id}
                    avatar={reply.avatar}
                    link={reply.link}
                    name={reply.name}
                    date={reply.date}
                    content={reply.content}
                    email={reply.email}
                    isReply={true}
                  />
                ))}
            </div>
          );
        })
      )}
    </>
  );
};

export default MsgList;
