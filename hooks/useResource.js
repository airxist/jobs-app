import { useEffect, useState } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

export const useResource = (endpoint, query, key) => {
  // console.log(RAPID_API_KEY)
  const [resource, setResource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchResource = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.request(options);
      setResource(data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResource();
  }, []);

  const refetchResource = () => {
    setIsLoading(true);
    fetchResource();
  };

  return {
    resource,
    isLoading,
    error,
    refetchResource,
  };
};

/**
 * {
      query: "Node.js developer in New-York, USA",
      page: "1",
      num_pages: "1",
      date_posted: "all",
    },
 */
