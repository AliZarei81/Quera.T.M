import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddWorkspaceMemberMutation } from "../../../hooks/mutations/add-workspace-member.mutation";
import { AppContext } from "../../../context/userStore/store";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Keys } from "../../../hooks/keys";

const WorkspaceAddMemeberPage = () => {
  const { workspaceid } = useParams();
  const { state } = useContext(AppContext);
  const addWorkspaceMemberMutation = useAddWorkspaceMemberMutation();
  const queryClient = useQueryClient();
  const workspaceidNumber = workspaceid ? Number(workspaceid) : 0;
  const navigate = useNavigate();
  useEffect(() => {
    const data = {
      workspaceid: workspaceidNumber,
      is_super_access: false,
      user: {
        email: state.user.email,
        first_name: state.user.first_name,
        last_name: state.user.last_name,
        phone_number: state.user.phone_number,
        thumbnail: state.user.thumbnail,
        username: state.user.username,
      },
    };
    addWorkspaceMemberMutation.mutate(data, {
      onSuccess() {
        toast.success("ورک اسپیس با موفقیت اضافه شد");
        queryClient.invalidateQueries({ queryKey: [Keys.GetWorkspace] });
      },
      onError() {
        toast.error("اضافه شدن ورک اسپیس با خطا مواجه شد");
      },
    });
    navigate("/workspace");
  }, []);
  return <></>;
};

export default WorkspaceAddMemeberPage;
