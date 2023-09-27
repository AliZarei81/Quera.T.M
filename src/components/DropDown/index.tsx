import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import Input from '../Input';
import Button from '../Button';


interface ISidebarDropdown{
  className:string;
  hasSearchBar: boolean;
  SearchBarClassName?: string;

}

interface INormalDropdown{
  className:string;
  hasSearchBar: boolean;
  SearchBarClassName?: string;
  placeholder?: string;
}

interface IDropdownProps{
  type: ISidebarDropdown | INormalDropdown
}

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-[274px]'>
      <div onClick={handleDropdownClick} className='w-[274px] h-[25px]  rounded-[4px] flex justify-between ltr'>
       <div className='font-iran-yekan text-[16px] block'>ورک‌اسپیس‌ها</div>
       <RiArrowDropDownLine className='w-[24px] h-[24px]'/>
       </div>
        {isOpen && 
        <div className=' flex flex-col gap-[13px]'>

            <div className=''>
            <Input
            icon={<BiSearch></BiSearch>}
            type='text'
            value=''
            placeholder='جستجو کنید'
            className='bg-gray-input w-[100%] h-[24px] border-none '
            />
            </div>
            <div>
            <Button
              type='button' 
              disabled={false}
              className=' h-[32px] p-[10px] border bg-gray-button font-iran-yekan text-[12px] gap-[4px] rounded-[6px] '
              title='ساختن اسپیس جدید'
              icon={<FiPlusSquare/>}/>
            </div>
        </div>

        }
      
    </div>
  );
};

export default Dropdown;