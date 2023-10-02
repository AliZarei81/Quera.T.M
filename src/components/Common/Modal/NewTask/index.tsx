import { ChangeEvent, useState } from "react";
import Flag from "../../Flag";
import Input from "../../Input";
import { MdClose } from "react-icons/md";
import Button from "../../Button";
interface INewTaskProbs {
  date: string;
  handleCLick:()=>void
}
const NewTask: React.FC<INewTaskProbs> = ({ date , handleCLick}): JSX.Element => {
  const [taskName, setTaskName] = useState<string>("");
  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };
  return (
    <div className="w-[463px] h-[157px] rounded-[8px] p-[20px] border border-[#208D8E] flex flex-col  gap-l">
      <div>
        <Input
          className="w-full h-[35px] font-medium text-[20px ]"
          type="text"
          value={taskName}
          placeholder="نام تسک را وارد کنید"
          onChange={handleTaskNameChange}
          icon={<MdClose className="fill-[#C8C8C8] w-[24px] h-[24px]" />}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[100px] flex items-center">
          <div className="w-[50px] flex items-center p-[6px]">
            <Flag />
          </div>
          <div className="text-brand-primary text-[20px] font-medium">{date}</div>
        </div>
        <div>
          <Button
            disabled={false}
            title="ساختن تسک"
            className=" w-[125px] h-[32px] bg-brand-primary text-white text-[12px] flex justify-center rounded-[4px] "
            onClick={handleCLick}
          />
        </div>
      </div>
    </div>
  );
};
export default NewTask;
