import React, { useState } from 'react'
import Comment from '../Comment'
import { BiCommentDetail } from 'react-icons/bi';
import Button from '../../Common/Button';
import { GrAttachment } from 'react-icons/gr';
import { HiOutlineAtSymbol } from 'react-icons/hi';
import { GrDocument } from 'react-icons/gr';
import { BsEmojiSmile } from 'react-icons/bs';
import { GoShareAndroid } from 'react-icons/go';
import { MdOutlineFlagCircle } from 'react-icons/md';
import TaskTitle from '../TaskTitle';
import { AiOutlineClose } from 'react-icons/ai';

interface iTaskIndo{
    BuildDate: string,
    Deadline: string
}

const TaskInfo: React.FC<iTaskIndo> = ({BuildDate, Deadline}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleDropdownToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
    <div className='w-[100%] h-[100%]  rounded-[20px] bg-white font-iran-yekan flex flex-col items-end z-20 border-[1px] '>
        <AiOutlineClose className='w-[24px] h-[24px] ml-[20px] mt-[20px] text-gray-border'></AiOutlineClose>
        <div className='w-[1316px] h-[506px] bg-white mt-[90px] flex '>
            <div className=' w-[659px] h-[506px]'>
            <div className='w-[657px] h-[57px] gap-m pl-[36] flex justify-between '>
                <div className='flex items-center pr-[16px] pl-[16px] w-[228px]'>
                <div><Button title='open' className='bg-red-primary text-white rounded-[6px] justify-center text-whiteX w-[111px] h-[30px]  gap-[2px] text-center'></Button>
                    </div>
                    <MdOutlineFlagCircle className='text-red-primary w-[34px] h-[34px] opacity-60'></MdOutlineFlagCircle>
                </div>
                <div className='flex items-center  pr-[16px] pl-[16px] gap-xs'>
                    <GoShareAndroid className='opacity-40 '></GoShareAndroid>
                    <div>اشتراک گذاری</div>
                </div>
            </div>
            <hr className='border-hr-gray'/>
            <TaskTitle></TaskTitle>
            </div>
            
            <div className='border-[1px] h-[] border-[#F4F4F4]'></div>

            <div className='flex flex-col justify-between w-[657px] h-[506px] '>
                <div className='w-[657px] h-[57px] gap-m pl-[36]   '>
                    <div className='w-[216px] h-[57px] gap-m flex justify-between items-center pr-[20px]'>
                        <div className='w-[115px] h-[48px] gap-xs'>
                            <div className='text-[12px] text-[#BBBBBB] '>ساخته شده در</div>
                            <div className='text-[12px]  '>{BuildDate}</div>
                        </div>
                        <div className='border-[1px] h-[48px] opacity-50 border-[#F4F4F4]'></div>
                        <div className='w-[53px] h-[48px] gap-xs '>
                            <div className=' text-[12px] text-[#BBBBBB] '>ددلاین</div>
                            <div className='text-[12px]  '>{Deadline}</div>
                        </div>
                    </div>
                    <hr className='border-hr-gray'/>
                </div>
                
                <Comment></Comment>
            </div>
        </div>
    </div>

    )
}


export default TaskInfo


