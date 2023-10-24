import { useState, FormEvent, useContext } from "react";
import Button from "../../Common/Button";
import Form from "../../Common/Form";
import Switch from "../../Common/Switch";
import ColorPiker from "../../Common/ColorPicker";
import { SettingContext } from "../../../context/settingStore/SettingStore";
const SettingForm: React.FC = () => {
  const { context, setContext } = useContext(SettingContext);

  return (
    <div className="flex w-1/3 p-m [background-color:#ffff]">
      <Form>
        <h3 className="text-body-xl font-black self-start">تنظیمات</h3>
        <div className="flex flex-col gap-xs">
          <p>انتخاب تم</p>
          <ColorPiker
            colors={[
              "#FA5252",
              "#E64980",
              "#BE4BDB",
              "#7950F2",
              "#4C6EF5",
              "#228BE6",
              "#15AABF",
              "#12B886",
              "#208D8E",
              "#40C057",
              "#82C91E",
              "#FAB005",
              "#FD7E14",
            ]}
            color={context?.theme}
            onChange={(color) => {
              const settings = {
                theme: color.hex,
                darkModeEnabled: context?.darkModeEnabled,
              };
              localStorage.setItem("settings", JSON.stringify(settings));
              setContext(settings);
            }}
          />
          <Switch
            checked={context?.darkModeEnabled!}
            onChange={(e) => {
              const settings = {
                darkModeEnabled: e.target.checked,
                theme: context?.theme,
              };
              localStorage.setItem("settings", JSON.stringify(settings));
              setContext(settings);
            }}
          />
          {/* <Button
            type="submit"
            disabled={false}
            className="w-full h-12 px-3 py-3 mt-l p-[10px] gap-8 text-lg font-bold  bg-brand-primary text-gray-secondary rounded cursor-pointer justify-center"
            title="ثبت تغییرات"
          /> */}
        </div>
      </Form>
    </div>
  );
};

export default SettingForm;
