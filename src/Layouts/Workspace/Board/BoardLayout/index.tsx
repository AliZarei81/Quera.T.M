import { Outlet, useParams } from "react-router-dom";
import Navbar from "../../../../components/Workspace/Board/Navbar";
import { useGetProject } from "../../../../hooks/queries/get-project.query";
const BoardLayout = () => {
  const { workspaceid, projectid } = useParams();
  const workspaceidNumber = workspaceid ? Number(workspaceid) : 0;
  const projectidNumber = projectid ? Number(projectid) : 0;
  const { data: project } = useGetProject(workspaceidNumber, projectidNumber);
  return (
    <div className="flex w-full">
      <div className="flex flex-grow flex-col mx-xl gap-m">
        <Navbar
          heading={project?.name!}
          workspaceid={workspaceidNumber}
          projectid={projectidNumber}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default BoardLayout;
