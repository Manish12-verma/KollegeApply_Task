import React, { useEffect, useState } from "react";

export default function FeesModal({ univId, open, onClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

  useEffect(() => {
    if (!open) return;

    setLoading(true);
    setData(null);

    fetch(`${API_BASE}/api/fees/${univId}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.error("Error loading fees:", err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [open, univId, API_BASE]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 max-w-2xl w-full mx-4 bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Course-wise Fees</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {loading && <div>Loading fees...</div>}

        {!loading && data && data.courses && (
          <div className="space-y-3">
            <p className="text-xs text-gray-500">
              *Fee ranges are approximate per-year tuition.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Course</th>
                    <th className="py-2 text-left">Duration</th>
                    <th className="py-2 text-left">Fee Range (INR/year)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.courses.map((course) => (
                    <tr key={course.code} className="border-b last:border-0">
                      <td className="py-2 pr-3">{course.name}</td>
                      <td className="py-2 pr-3 text-gray-500">
                        {course.duration}
                      </td>
                      <td className="py-2 font-medium">
                        {course.fee.min.toLocaleString()} –{" "}
                        {course.fee.max.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!loading && !data && (
          <div className="text-sm text-red-600">
            Unable to load fee details. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
}
