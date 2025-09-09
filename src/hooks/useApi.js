import { useEffect, useState, useRef } from "react";
import { getData } from "../services/api";

const useApi = (endpoint, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stableEndpoint = useRef(endpoint).current;

  const stableParams = useRef(params).current;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(stableEndpoint, stableParams);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [stableEndpoint, stableParams]);

  useEffect(() => {
    // if (data) console.log("✅ API Response:", stableEndpoint, data);
    if (error) console.error("❌ API Error:", stableEndpoint, error);
  }, [data, error, stableEndpoint]);

  return { data, loading, error };
};

export default useApi;
