import { IContextAction, IUserState } from '../types/context.type';
import { UserActionTypes } from './user.actiontype';

export const UserReducer = (
  state: IUserState,
  action: IContextAction<UserActionTypes, Partial<IUserState>>
): IUserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGGED_IN:
      return {
        access: action?.payload?.access || '',
        email: action?.payload?.email || '',
        first_name: action?.payload?.first_name || '',
        last_name: action?.payload?.last_name || '',
        refresh: action?.payload?.refresh || '',
        thumbnail: action?.payload?.thumbnail || '',
        user_id: action?.payload?.user_id || 0,
        username: action?.payload?.username || '',
        phone_number: action?.payload?.phone_number || ''
      };
    case UserActionTypes.USER_LOGGED_OUT:
      return {
        access: '',
        email: '',
        first_name: '',
        last_name: '',
        refresh: '',
        thumbnail: '',
        user_id: 0,
        username: '',
        phone_number: ''
      };
    case UserActionTypes.USER_UPDATE:
      return {
        access: state.access,
        email: action?.payload?.email || '',
        first_name: action?.payload?.first_name || '',
        last_name: action?.payload?.last_name || '',
        refresh: state.refresh,
        thumbnail: action?.payload?.thumbnail || '',
        user_id: action?.payload?.user_id || 0,
        username: action?.payload?.username || '',
        phone_number: action?.payload?.phone_number || ''
      };
    default:
      return state;
  }
};
