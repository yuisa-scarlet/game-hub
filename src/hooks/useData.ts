import { useEffect, useState } from "react";
import axios from "@/services/axios";
import { AxiosRequestConfig, CanceledError } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    axios
      .get<Response<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;
