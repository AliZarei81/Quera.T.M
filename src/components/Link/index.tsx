import {  ReactElement, ReactNode, cloneElement } from "react";
import { IconContext } from "react-icons";

interface IButtonProps {
    href?: string;
    className: string;
    title: string;
    icon?: ReactElement;
  }
  
  const Link: React.FC<IButtonProps> = ({
    href,
    className,
    title,
    icon,
  }): JSX.Element => {
    return (
      <a
        href={href}
        className={`w-full flex items-center justify-center ${className}  `}
      >
        <IconContext.Provider value={{ size: "20px" }}>
          {icon && cloneElement(icon)}
        </IconContext.Provider>
        {title}
      </a>
    );
  };
  
  export default Link;
  