import React from "react";
import Button from "../../Common/Button";
import { Link } from "react-router-dom";

interface IHeaderProps {
  text: string;
  title: string;
  to: string;
}

const Header: React.FC<IHeaderProps> = ({
  text,
  title,
  to,
}): React.JSX.Element => {
  return (
    <header>
      <nav className="w-full flex justify-between">
        <h1 className="text-body-xl font-bold bg-gradient-to-r from-[#118c80] to-[#4ab7d8]  bg-clip-text [-webkit-text-fill-color:transparent]">
          کوئرا تسک منیجر
        </h1>
        <div className="flex justify-between gap-s">
          <p className="text-body-s self-center">{text}</p>
          <Link to={to}>
            <Button
              title={title}
              disabled={false}
              className=" bg-brand-primary cursor-pointer rounded-md text-gray-secondary justify-center px-s py-xs"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
