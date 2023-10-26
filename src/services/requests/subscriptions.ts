import apiClients from "../api-clients";

export interface SubscriptionsRequest {
  email: string;
  url: string;
}

export interface SubscriptionsResponse {
  detail: string;
}

export const subscriptions = (data: SubscriptionsRequest): Promise<SubscriptionsResponse> =>
  apiClients.post("/workspaces/subscriptions/", data, {
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.data);

