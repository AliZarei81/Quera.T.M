import { getMembers } from "./../services/requests/get-members";
import { PatchWorkspaces } from "./../services/requests/patch-workspaces";
import { PostWorkspaces } from "./../services/requests/post-workspaces";
export enum Keys {
  Register = "register",
  Login = "login",
  GetWorkspaces = "getWorkspaces",
  GetWorkspace = "getWorkspace",
  PostWorkspaces = "postworkspaces",
  PatchWorkspaces = "patchworkspaces",
  GetMembers = "getmembers",
}
