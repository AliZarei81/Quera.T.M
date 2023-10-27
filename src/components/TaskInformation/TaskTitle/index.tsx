import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";

const TaskTitle: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-[24px]">
      <div className="flex justify-start w-[617px] text-[24px]">
        <div>عنوان تسک</div>
      </div>
      <div className="w-[617px] h-[116px] rounded-[12px] border-[1px] border-gray-border text-[16px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد،{" "}
      </div>
      <div className="flex pt-[20px] items-center text-[#208D8E] justify-start w-[617px]">
        <AiOutlinePlusSquare></AiOutlinePlusSquare>
        <div className="text-[12px]">اضافه کردن پیوست</div>
      </div>
    </div>
  );
};

export default TaskTitle;
