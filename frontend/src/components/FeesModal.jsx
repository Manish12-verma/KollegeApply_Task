import React, { useEffect, useState } from "react";
import feesData from "../data/feesData.json"; // adjust path if needed

export default function FeesModal({ univId, open, onClose }) {
  const [courses, setCourses] = useState([]);
  const [univName, setUnivName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    setLoading(true);

    // Simulate API/JSON fetch (here we use local JSON import)
    const timer = setTimeout(() => {
      const record = feesData.find((item) => item.univId === univId);

      if (record) {
        setUnivName(record.univName);
        setCourses(record.courses || []);
      } else {
        setUnivName("");
        setCourses([]);
      }

      setLoading(false);
    }, 300); // small delay to mimic API

    return () => clearTimeout(timer);
  }, [open, univId]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="font-semibold text-lg">
            Course-wise Fees {univName ? `– ${univName}` : ""}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-4 max-h-80 overflow-y-auto text-sm">
          {loading ? (
            <p className="text-gray-500">Loading fee details...</p>
          ) : courses.length === 0 ? (
            <p className="text-red-500">No fee data found for this university.</p>
          ) : (
            <div className="space-y-3">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="border rounded p-3 bg-gray-50 flex flex-col gap-1"
                >
                  <div className="font-semibold">{course.name}</div>
                  <div className="text-gray-600">
                    Duration: <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="text-gray-700">
                    Fee Range:{" "}
                    <span className="font-semibold">
                      ₹{course.feeMin.toLocaleString("en-IN")} – ₹
                      {course.feeMax.toLocaleString("en-IN")}{" "}
                    </span>
                    <span className="text-gray-500">({course.feeType})</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
