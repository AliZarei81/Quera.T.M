import React, { useState } from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import Button from '../../Common/Button';
import { GrAttachment } from 'react-icons/gr';
import { HiOutlineAtSymbol } from 'react-icons/hi';
import { GrDocument } from 'react-icons/gr';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineShareAlt } from 'react-icons/ai';
import Input from '../../Common/Input';
import { BsPersonCircle } from 'react-icons/bs';

interface iComments {
  name: string;
  date?: string;
  comment: string;
}

const comments: iComments[] = [
  {
    name: 'شما',
    date: '۱۲ تیر',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
  {
    name: 'شما',
    date: '۱۲ تیر',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  }
];

const Comment: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };


  return (
    <div className='h-[100vh] flex flex-col justify-between'>
      <div className='pb-[20px] overflow-auto h-[180px]'>
        <div className='overflow-auto'>
          {comments.map((cm, index) => (
            <div key={index} className='h-[102px] flex mt-[24px]'>
              <div className='w-[36px] flex justify-center'>
                <BsPersonCircle className='w-[30px] h-[30px]' />
              </div>
              <div className='flex flex-col border-[1px] w-[583px] gap-[8px] rounded-[12px] border-gray-border'>
                <div className='flex justify-between pr-[12px] pl-[12px]'>
                  <div className='text-[16px] text-[#208D8E]'>{cm.name}</div>
                  <div className='text-[12px] text-gray-primary'>{cm.date}</div>
                </div>
                <div className='text-[12px] pr-[12px] pl-[12px]'>{cm.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div className='w-[657px] h-[57px] pl-[36] pr-[20px] flex justify-between '>
          <div onClick={handleDropdownToggle} className='w-[100px] h-[23px] text-[#AEAEAE] text-[16px] mt-[13px]'>
            کامنت شما
          </div>
          <BiCommentDetail className='w-[18px] h-[18px] opacity-30 mt-[14px] ml-[36px]' />
        </div>
      ) : (
        <div className='flex flex-col'>
          <div className='w-[657px] h-[209px] pl-[36] pr-[20px] flex justify-between'>
            <textarea
              name='comment'
              value={textValue}
              id='cm'
              placeholder='کامنت'
              onChange={handleChange}
              className='w-[550px] h-[180px] outline-none'
            ></textarea>
            <BiCommentDetail className='w-[18px] h-[18px] opacity-30 mt-[14px] ml-[36px]' />
          </div>
          <div>
            <div className='flex justify-between'>
              <div className='flex pr-[20px] pl-[20px] gap-[20px]'>
                <HiOutlineAtSymbol className='opacity-40' />
                <GrAttachment className='opacity-40' />
                <GrDocument className='opacity-40' />
                <BsEmojiSmile className='opacity-40' />
              </div>
              <div onClick={handleDropdownToggle} className='pr-[20px] pl-[20px]'>
                <Button
                  className='text-white bg-[#208D8E] rounded-[6px] gap-[4px] pr-[12px] pl-[12px] pb-[6px] pt-[6px]'
                  title='ثبت کامنت'
                  onClick={handleDropdownToggle}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;