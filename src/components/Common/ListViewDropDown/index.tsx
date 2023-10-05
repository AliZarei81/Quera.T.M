import React, { useState } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io';

interface iListViewDropDown {
    title: string;
    color: string;
    tasks?: iTask[]; 

}

interface iTask{
    title: string;
    members?: string;
    deadline: string;
    description?: string;
    priority: boolean;
}

const items: string[] = [
    "اعضا",
    "ددلاین",
    "الویت",
    "توضیحات"
    
]

const taskslist: iTask[] = [
{   title: "این یک تیتر برای تسک است",
    deadline: "6 آبان",
    priority: false,
}
,
{   title: "این یک تیتر برای تسک است",
    deadline: "6 آبان",
    priority: false,
}
]

const ListViewDropDown: React.FC<iListViewDropDown> = (
   {title,
    color
   }
) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
      };

    return (
    <div className='flex-col font-iran-yekan w-[1011px]'>
        <div className='flex w-[100%] h-[36px] justify-between items-center'>
            <div onClick={handleDropdownClick} className='flex items-center gap-[5px]'>
                <IoIosArrowDropdown className='w-[20px] h-[20px]'> </IoIosArrowDropdown>
                    <div className={`${color} text-white w-[100%] h-[100%] pl-[6px] pr-[6px] pt-[4px] pb-[4px] rounded-[4px] justify-start items-start gap-[10px] inline-flex`}>
                    <div>{title}</div>
                </div>
            </div>
            <div className='w-[473px] h-[100%] inline-flex justify-between items-center gap-[70px] '>
                {
                    items.map((item,index) => (
                        <div className='w-[70px] h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] text-right text-[16px] font-normal capitalize'>
                            {item}
                        </div>   
                    ))
                }
                     
            </div>

            </div>

        { isOpen &&
            taskslist.map((task,index) => (
                <div key={index} className='w-[986px] h-[51px] flex items-center  justify-between text-[12px] mr-[25px] rounded-[4px] '>
                    <div className='flex items-center text-right font-normal gap-[7px]'>
                        <div className={`${color} w-s h-s rounded-[3px]`}></div>
                        <div>{task.title}</div>
                    </div>

                    <div className='w-[473px] h-[100%] inline-flex justify-between items-center gap-[70px] text-right font-normal capitalize '>
                        <div className='w-[70px] h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] '>{task.members}</div>
                        <div className='w-[70px]  h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] '>{task.deadline}</div>
                        <div className='w-[70px]  h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] '>{task.description}</div>
                        <div className='w-[70px]  h-[28px] pl-[10px] pr-[10px] justify-center items-center flex gap-[10px] '>{task.priority.toString()}
                        
                    </div>
                </div>
    </div>
        ))
        
        }

        
    </div>
    
    
    
    )
}


export default ListViewDropDown
