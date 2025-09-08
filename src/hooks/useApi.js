import { useEffect, useState } from "react";
import { getData } from "../services/api";

const useApi = (endpoint, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(endpoint, params);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint, params]);

  // ✅ Debug logging whenever data or error changes
  useEffect(() => {
    if (data) console.log("✅ API Response:", endpoint, data);
    if (error) console.error("❌ API Error:", endpoint, error);
  }, [data, error, endpoint]);

  return { data, loading, error };
};

export default useApi;
