import { FormEvent, ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  encType?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IFormProps> = ({ encType, children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full h-full gap-m"
      encType={encType}
    >
      {children}
    </form>
  );
};

export default Form;
