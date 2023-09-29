import Circle from "@uiw/react-color-circle";
import { HsvaColor, ColorResult } from '@uiw/color-convert';

interface IColorProps {
  title?: string;
  colors?: Array<string>;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}

const ColorPiker: React.FC<IColorProps> = ({
  title,
  colors,
  color,
  onChange,
}): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <Circle colors={colors} color={color} onChange={onChange} />;
    </div>
  );
};

export default ColorPiker;
