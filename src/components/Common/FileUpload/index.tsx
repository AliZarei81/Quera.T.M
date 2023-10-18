import React, { useState } from "react";
import { TiAttachment } from "react-icons/ti";
import Button from "../Button";
interface IFileUpload {
  label: string;
  filetypes: string;
}

const FileUpload: React.FC<IFileUpload> = ({ label,filetypes }): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = React.createRef<HTMLInputElement>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleCustomButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="mt-[16px] flex justify-start items-center gap-s ">
      <label className="block text-gray-600 font-semibold mb-2">{label}</label>
      <input
        type="file"
        accept={filetypes}
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        className="p-[8px] bg-white text-brand-primary gap-[4px] cursor-pointer border rounded-[4px] text-[16px] border-brand-primary flex text-center"
        onClick={handleCustomButtonClick}
        title={selectedFile
          ? `Selected File: ${selectedFile.name}`
          : "آپلود فایل"}
          icon={<TiAttachment className="text-[24px]"/>}
      />
        
        
      
    </div>
  );
};

export default FileUpload;
