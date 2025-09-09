import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { getData } from "../services/api";
import endpoints from "../services/endpoints";

const CompanyAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAnnouncements = async () => {
    try {
      const response = await getData(endpoints.announcements);
      console.log("announcements response", response);

      // ✅ Extract the array at response.data.data
      if (Array.isArray(response?.data?.data)) {
        setAnnouncements(response.data.data);
      } else {
        setAnnouncements([]);
      }
    } catch (error) {
      console.error("Error fetching announcements:", error);
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div className="p-6 bg-white shadow rounded-2xl min-h-[300px] flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl md:text-xl font-semibold flex items-center gap-2">
          📢 Company Announcements
        </h2>
        <p className="text-gray-500 text-md md:text-sm">
          Latest updates and news
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      ) : announcements.length === 0 ? (
        <div className="flex flex-1 justify-center items-center">
          <p className="text-center text-gray-500">
            📭 No announcements available
          </p>
        </div>
      ) : (
        <>
          {/* Announcements List */}
          <div className="space-y-4">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-gray-50 rounded-xl flex flex-col gap-3 hover:shadow transition"
              >
                {/* Image */}
                {/* {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                )} */}

                {/* Title */}
                <h3 className="font-semibold text-md md:text-lg text-gray-800">
                  {item.title}
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="text-gray-600 text-sm">{item.description}</p>
                )}

                {/* Dates */}
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> Updated:{" "}
                    {item.updatedAt
                      ? new Date(item.updatedAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏳ Expires:{" "}
                    {item.expirationDate
                      ? new Date(item.expirationDate).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 font-medium">
              View all announcements →
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyAnnouncements;
