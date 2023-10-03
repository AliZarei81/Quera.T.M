import React, { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
import Button from "../../Button";
import CopyLinkButton from "../../CopyLinkButton";

interface IShareProjectProbs{
  privateLink:string
}
const ShareProject: React.FC<IShareProjectProbs> = ({privateLink}): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSend=()=>{
        
  }
  const child = () => {
    
    return (
      <div className="w-[430px] bg-[#F0F1F3] relative flex flex-col gap-m">
        <div className="w-full ">
          <Input
            type="email"
            value={email}
            placeholder="دعوت با ایمیل"
            onChange={handleEmailChange}
            className="w-full"
          />
          <Button
            type="submit"
            disabled={false}
            className="rounded-l-[8px] w-1/4 h-[40px] bg-brand-primary text-white text-[14px] absolute top-[0] left-[0px] px-[30px] "
            onClick={handleSend}
            title="ارسال"

          />
        </div>
        <div>
          <CopyLinkButton linkToCopy={privateLink}/>
        </div>
        <div>
          <p className="text-gray-primary">اشتراک گذاشته شده با</p>
          <div>
            
          </div>
          <div></div>
        </div>
      </div>
    );
  };
  return (
    <Modal
      hasPaginationBulet={false}
      hasFooter={false}
      modalClassname="w-[470px] rounded-[12px] gap-xl p-[20px] "
      modalTitle="به اشتراک گذاری پروژه"
      totalPages={1}
      currentPage={1}
      mBody={child()}
    />
  );
};
export default ShareProject;
