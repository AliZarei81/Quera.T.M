import { FormEvent, ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IFormProps> = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full gap-[20px]"
    >
      {children}
    </form>
  );
};

export default Form;
