import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import Button from "../Button";
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
    <div className="flex items-center justify-between w-[400px] h-[26px]">
      <div className="flex justify-start gap-xs">
        <BiLink className="text-[20px]" />
        <p className="text-[14px]" >لینک خصوصی</p>
      </div>
      <div className="w-[74px] h-[26px]">
      <Button
        onClick={copyLinkToClipboard}
        disabled={false}
        title={isCopied ? "کپی شد!" : "کپی لینک"}
        className={`text-black ${
          isCopied ? " bg-brand-primary text-white" : "bg-white"
        } text-black rounded-[6px] text-[1px] p-2 w-[74px] h-[26px] flex justify-center `}
      />
      </div>
    </div>
  );
};

export default CopyLinkButton;
