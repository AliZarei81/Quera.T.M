import { MouseEvent, ReactElement, ReactNode, cloneElement } from "react";
import { IconContext } from "react-icons";

interface IButtonProps {
    href?: string;
    className: string;
    onClick?(e: MouseEvent<HTMLAnchorElement>): void;
    title: string;
    icon?: ReactElement;
  }
  
  const Link: React.FC<IButtonProps> = ({
    href = "#",
    className,
    onClick,
    title,
    icon,
  }): JSX.Element => {
    return (
      <a
        href={href}
        className={`w-full flex items-center justify-center ${className}  `}
        onClick={onClick}
      >
        <IconContext.Provider value={{ size: "20px" }}>
          {icon && cloneElement(icon)}
        </IconContext.Provider>
        {title}
      </a>
    );
  };
  export default Link;
  