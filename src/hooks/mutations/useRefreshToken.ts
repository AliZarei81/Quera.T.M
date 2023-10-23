import { useMutation } from 'react-query';
import { Keys } from '../keys';
import { GetRefreshTokenRequest, GetRefreshTokenResponse, getRefreshToken } from '../../services/requests/get-refreshToken';



export const useRefreshToken = () => {
  return useMutation<GetRefreshTokenResponse, any, GetRefreshTokenRequest, any>(
    getRefreshToken,
    {
      mutationKey: Keys.Refresh
    }
  );
};
