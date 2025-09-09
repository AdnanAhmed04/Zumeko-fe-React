import { useEffect, useState, useRef } from "react";
import { getData } from "../services/api";

const useApi = (endpoint, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ freeze endpoint so it doesn’t cause loops
  const stableEndpoint = useRef(endpoint).current;

  // ✅ freeze params if it’s an object (avoid re-renders causing loops)
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

  // ✅ Debug logging only when data or error changes
  useEffect(() => {
    if (data) console.log("✅ API Response:", stableEndpoint, data);
    if (error) console.error("❌ API Error:", stableEndpoint, error);
  }, [data, error, stableEndpoint]);

  return { data, loading, error };
};

export default useApi;
