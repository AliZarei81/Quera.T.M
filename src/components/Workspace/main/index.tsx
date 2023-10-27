import { useGetWorkspaces } from "../../../hooks/queries/get-workspaces.query";
import WorkspaceList from "../WorkspaceList";

const Main: React.FC = () => {
  const { data: workspaces } = useGetWorkspaces();

  return (
    <div className="h-screen w-auto my-xl mr-xl">
      <div className="h-screen flex flex-col justify-stretch gap-m scroll-auto">
        {workspaces?.map((workspace) => (
          <WorkspaceList
            key={workspace.id}
            id={workspace.id}
            name={workspace.name}
            color={workspace.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
