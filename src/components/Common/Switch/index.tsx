import { PiSunDim, PiMoon } from "react-icons/pi";
interface ISwitchProps {
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Switch: React.FC<ISwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="cursor-pointer">
      <input type="checkbox" className="hidden" onChange={onChange} />
      <div className="h-xl w-1/6 flex justify-start items-center rounded-md bg-gray-secondary">
        <div
          className={`h-l w-xl flex justify-center items-center shadow-sm rounded-md transition-all duration:300 ${
            checked
              ? "ml-xs bg-black text-white -translate-x-full"
              : "mr-xs bg-white text-black"
          }`}
        >
          {checked ? <PiMoon size={25} /> : <PiSunDim size={25} />}
        </div>
      </div>
    </label>
  );
};

export default Switch;
