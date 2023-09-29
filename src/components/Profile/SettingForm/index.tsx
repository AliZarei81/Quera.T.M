import { useState, MouseEvent, ChangeEvent, FormEvent } from "react";
import Button from "../../Common/Button";
import Form from "../../Common/Form";
import Switch from "../../Common/Switch";
import ColorPiker from "../../Common/ColorPicker";
const SettingForm: React.FC = () => {
  const [hex, setHex] = useState("#208D8E");
  const [enabled, setEnabled] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("theme: ", hex);
    console.log("darkmode: ", enabled);
    // console.log("oldPassword: ", oldPassword);
    // console.log("newPassword: ", newPassword);
  };

  return (
    <div className="w-fit flex flex-col items-start justify-center gap-m mr-xl">
      <h3 className="text-body-xl font-black text-center">تنظیمات</h3>
      <Form onSubmit={handleSubmit}>
        <div className="flex flex-col  gap-xs">
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
            color={hex}
            onChange={(color) => {
              setHex(color.hex);
            }}
          />
          <Switch
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <Button
            type="submit"
            disabled={false}
            className="h-12 px-3 py-3 mt-l p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer justify-center"
            title="ثبت تغییرات"
          />
        </div>
      </Form>
    </div>
  );
};

export default SettingForm;
