import React, { Children } from "react";
import NewprojectBtn from '../../NewprojectBtn'
interface IWorkspaceLayoutProps {
  children: React.ReactNode;
}
const WorkspaceLayout: React.FC<IWorkspaceLayoutProps> = ({ children }) => {
  return (
    <div className='w-[1100px] h-screen '>
      <div className='w-[1360px] h-[768px] top-[64px] left-[-292px] gap-l'>
        <div className='w-auto h-[200px] gap-[32px]  pr-[32px] pl-[187px]'>
            <h1 className='w-auto h-[32px] font-iran-yekan text-heading-s leading-8 self-start text-gray-darker'>{children}</h1>
            <NewprojectBtn/>
        </div>
        <div className='w-[1036px] border-[0.5px] border-gray-secondary rotate-[-0] '></div>
        <div className='w-auto h-[200px] gap-l pt pr-[32px] pl-[187px]'>
        <h1 className='w-auto h-[32px] font-iran-yekan text-heading-s leading-8 self-start text-gray-darker'>{children}</h1>
            <NewprojectBtn/>
        </div>
        <div className='w-[1036px] border-[0.5px] border-gray-secondary rotate-[-0] '></div>
        <div className='w-auto h-[200px] gap-l  pr-[32px] pl-[187px]'>
        <h1 className='w-auto h-[32px] font-iran-yekan text-heading-s leading-8 self-start text-gray-darker'>{children}</h1>
            <NewprojectBtn/>
        </div>
        <div className='w-[1036px] border-[0.5px] border-gray-secondary rotate-[-0] '></div>
        <div className='w-auto h-[200px] gap-l pr-[32px] pl-[187px]'>
        <h1 className='w-auto h-[32px] font-iran-yekan text-heading-s leading-8 self-start text-gray-darker'>{children}</h1>
            <NewprojectBtn/>
        </div>
      </div>

    </div>
  )
}

export default WorkspaceLayout