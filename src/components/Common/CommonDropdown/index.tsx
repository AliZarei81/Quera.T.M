import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import Input from '../Input';
import { BiSearch } from "react-icons/bi"

interface iDropDown{
    type: 'fullaccess' | 'is and is not' | 'search between filters' | 'select'
}

const CammonDropdown: React.FC<iDropDown> = ({type}) => {
    const [isOpen, setIsOpen] = useState(false);
    let defaultValue = ''

    switch (type) {
        case 'fullaccess':
            defaultValue = 'دسترسی کامل'
            break;
        case 'search between filters':
            defaultValue = 'تگ'
            break;
        case 'select':
            defaultValue = 'انتخاب کنید'
            break;
        case 'is and is not':
            defaultValue = 'است'
            break;

    }

    const [myString, setMyString] = useState(defaultValue)
    
    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
      };

    const handleItemClick = (inputString: string) => {
        setIsOpen(!isOpen)
        setMyString(inputString)
    }

    const onItemClick = (inputString: string) => {
        return () => handleItemClick(inputString)
      }
    
     
    return (
        <div className='w-[117px] h-[30px]'>
        {
        type === 'fullaccess' && 
        <div>
            <div onClick={handleDropdownClick} className='flex  w-[117px] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%]'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            {isOpen &&
            <div  className='flex-col bg-white space-y-s w-[220px]  rounded-[8px] p-[16px] '>
                <div onClick={onItemClick("دسترسی کامل")} className=''>
                    <div>دسترسی کامل</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه</div>
                </div>
                    
                <hr className='border-hr-gray' />

                <div onClick={onItemClick("دسترسی ویرایش")} className=''>
                    <div>دسترسی ویرایش</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.</div>
                </div>
                    
                <hr className='border-hr-gray' />

                <div onClick={onItemClick("دسترسی کامنت")} >
                    <div>دسترسی کامنت</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.</div>
                </div>
                    
                <hr className='border-hr-gray' />

                <div onClick={onItemClick("فقط دسترسی مشاهده")} >
                    <div>فقط دسترسی مشاهده</div>
                    <div className='text-[12px] text-right capitalize w-[100%] font-normal break-words	to-black'>توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.</div>
                </div>
            </div> 
            }
        </div>  

        ||

        type === 'search between filters' &&
        <div className='w-[182px] h-[30px]'>
            <div onClick={handleDropdownClick} className='flex  w-[182px] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%]'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            {
                isOpen &&
                <div className='flex-col w-[182px] bg-white rounded-[8px] space-y-s'>
                    <div className='w-[182px]  border-b-[0.5px] border-lightgray'>
                    <Input className='w-[182px] text-[12px] ' type='text' placeholder='جست و جو بین فیلترها' value='' icon={<BiSearch className='h-[20px] w-[20px]'></BiSearch>}></Input>
                    </div>
        
                    <div className='flex-col text-[12px] space-y-s'>
                        <div onClick={onItemClick("تاریخ")} className='cursor-pointer  pl-[8px] pr-[8px]'>تاریخ</div>
                        <div onClick={onItemClick("نگ")} className='cursor-pointer  pl-[8px] pr-[8px]'>تگ</div>
                        <div onClick={onItemClick("اعضا")} className='cursor-pointer  pl-[8px] pr-[8px]'>اعضا</div>
                        <div onClick={onItemClick("الویت")} className='cursor-pointer  pl-[8px] pr-[8px]'>الویت</div>
                    </div>
                </div>

            }
        </div>

        ||

        type === 'select' &&
        <div className='w-[146px] h-[30px]'>
            <div onClick={handleDropdownClick} className='flex  w-[100%] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%] text-gray-primary'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            {
                isOpen &&
                <div className='flex-col w-[100%] bg-white justify-center rounded-[8px]  font-iran-yekan text-[12px] space-y-s'>
                    <div className='h-[29px] border-b-[0.5px] border-lightgray '>
                    <Input className='w-[100%] h-[29px] text-[12px] border-b-[0.5px] border-lightgray' type='text' placeholder='جستوجو  ' value='' icon={<BiSearch className='h-[20px] w-[20px]'></BiSearch>}></Input>
                    </div>
        
                    <div className='flex-col text-[12px] space-y-s w-[100%] justify-center items-center'>
                        <div className='flex items-center w-[130px] h-[24px] pr-xs'><div onClick={onItemClick("درس")} className='cursor-pointer rounded-[14px] bg-blue-secondary pl-xs pr-[8px] w-[41px] h-[2spx] text-blue-primary'>درس</div></div>
                        <div className='flex items-center w-[130px] h-[24px] pr-xs'><div onClick={onItemClick("کار")} className='cursor-pointer  rounded-[14px] bg-violet-secondary pl-[8px] pr-[8px] w-[31px] h-[2spx] text-violet-primary'>کار</div></div>
                        <div className='flex items-center w-[130px] h-[24px] pr-xs'><div onClick={onItemClick("پروژه")} className='cursor-pointer  rounded-[14px] bg-cyan-secondary pl-[8px] pr-[8px] w-[41px] h-[2spx] text-cyan-primary'>پروژه</div></div>
                        
                    </div>
                </div>

            }
        </div>

        ||

        type === 'is and is not' &&
        <div className='w-[107px] h-[30px] '>
            <div onClick={handleDropdownClick} className='flex  w-[100%] h-[30px] border-[1px] border-gray-border justify-between rounded-[6px] pr-[8px] pl-[8px] pb-[4px] pt-[5px] items-center'>
                <div className='font-iran-yekan text-[12px] w-[100%]'>{myString}</div>
                <RiArrowDropDownLine className='w-[18px] h-[18px]'></RiArrowDropDownLine>
            </div>
            { isOpen &&
            <div className='flex-col w-[100%] justify-center bg-white rounded-[8px] pt-[8px] pr-[8px] pl-[8px]  font-iran-yekan text-[12px] space-y-s'>
                <div  onClick={onItemClick("است")} className='cursor-pointer'>است</div>
                <div  onClick={onItemClick("نیست")} className='cursor-pointer'>نیست</div>

            </div>
            
            }
        </div>
        }

        
        </div>
    )
}

export  default CammonDropdown