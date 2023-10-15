import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
// import Button from "../Button";
interface ICopyLinkButtonProbs {
  linkToCopy: string;
  
}
const CopyLinkButton: React.FC<ICopyLinkButtonProbs> = ({
  linkToCopy,
}): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the "copied" state after 2 seconds
    });
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex justify-start gap-xs w-[120px]">
        <BiLink className="text-[20px]" />
        <p className="text-[14px] " >لینک خصوصی</p>
      </div>
      <button onClick={copyLinkToClipboard} className={` border border-[#E9EBF0]  ${
          isCopied ? "bg-cyan-primary text-white" : "bg-white"
        } text-black rounded-[6px] text-[12px] p-2 w-[91px] h-[28px] flex justify-center items-center `}
      >{isCopied ? "کپی شد!" : "کپی لینک"}</button>
      {/* <Button
        onClick={copyLinkToClipboard}
        disabled={false}
        title={isCopied ? "کپی شد!" : "کپی لینک"}
        className={`w-[91px] ${
          isCopied ? "bg-cyan-primary text-white" : "bg-white"
        } text-black rounded-[6px] text-[12px] p-2  h-[28px] flex justify-center items-center `}
      /> */}
    </div>
  );
};

export default CopyLinkButton;
