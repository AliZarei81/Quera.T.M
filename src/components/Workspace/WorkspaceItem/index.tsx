import { useNavigate } from "react-router-dom";
import Button from "../../Common/Button";

interface IWorkspaceItemProps {
  to: string;
  name: string;
  workspaceColor: string;
}

const WorkspaceItem: React.FC<IWorkspaceItemProps> = ({
  to,
  name,
  workspaceColor,
}): React.JSX.Element => {
  const naviagate = useNavigate();
  return (
    <Button
      title={name}
      className={`w-[200px] justify-center text-body-m font-extrabold shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.20)] text-white rounded-2xl`}
      bgColor={workspaceColor}
      onClick={() => naviagate(to)}
    />
  );
};

export default WorkspaceItem;
