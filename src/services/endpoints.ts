import { getWorkspace } from "./requests/get-workspace";
export enum EndPoints {
  Register = "/accounts/",
  Login = "/accounts/login/",
  GetWorkspaces = "/workspaces/",
  PostWorkspaces = "/workspaces/",
  PatchWorkspaces = "/workspaces/",
  GetMembers = "/members/",
}
