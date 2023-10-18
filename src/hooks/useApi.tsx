import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

export const useApi = <T,>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await apiClients(url, options);
      setData(response.data);
    } catch (error: any) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};
