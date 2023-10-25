import React, { useState } from "react";
import { ReactElement } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { LuPlusSquare } from "react-icons/lu";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import WorkSpaceColumnMore from "../WorkSpaceColumnMore";
import ProjectColumnMore from "../ProjectColumnMore";
import { useQuery } from "react-query";
import { Keys } from "../../../hooks/keys";
import { GetWorkspaceResponse } from "../../../services/requests/get-workspaces";
import DropDownList from "../DropDownList";
import CreateNewWorkspace from "../../Common/Modal/CreateNewWorkspace";

interface Iitems {
  color: string;
  title: string;
  icon?: ReactElement;
  projects?: string[];
}

const Dropdown: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [createWorkspaceModalIsOpen, setCreateWorkspaceModalIsOpen] =
    useState(false);
  const { data: workspaces } = useQuery<GetWorkspaceResponse[]>({
    queryKey: [Keys.GetWorkspaces],
  });

  return (
    <>
      <div className="pl-m pr-l">
        <Button
          title="ورک‌اسپیس‌ها"
          className="text-[16px] w-[274px] h-[25px] rounded-[4px] flex justify-between"
          icon={<RiArrowDropDownLine className="w-[24px] h-[24px] " />}
          direction="ltr"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="flex flex-col gap-[16px] mt-[16px]">
            <Input
              icon={<BiSearch></BiSearch>}
              type="text"
              value={search}
              placeholder="جستجو کنید"
              className="bg-gray-input w-[100%] h-[24px] rounded-4[px]"
              onChange={(e) => setSearch(e.target.value)}
            />

            <Button
              type="button"
              disabled={false}
              className="justify-center h-[40px] p-[10px] bg-gray-button text-body-[12px] gap-[4px] rounded-[6px] "
              title="ساختن ورک اسپیس جدید"
              icon={<LuPlusSquare size={25} />}
              onClick={() => setCreateWorkspaceModalIsOpen(true)}
            />

            {isOpen &&
              workspaces?.map((workspace) => (
                <div className="flex flex-col">
                  <DropDownList
                    key={workspace.id}
                    id={workspace.id}
                    name={workspace.name}
                    color={workspace.color}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
      <CreateNewWorkspace
        isVisible={createWorkspaceModalIsOpen}
        onClose={() => setCreateWorkspaceModalIsOpen(false)}
        userName=""
        userColor=""
        hasProfilePic={false}
      />
    </>
  );
};

export default Dropdown;
