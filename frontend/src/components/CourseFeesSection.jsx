import React from "react";

export default function CourseFeesSection({ title, courses }) {
  return (
    <div className="bg-white p-4 rounded shadow space-y-3">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-xs text-gray-500">
        *Fees shown below are approximate per-year tuition ranges.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4">Course</th>
              <th className="text-left py-2 pr-4">Duration</th>
              <th className="text-left py-2">Fee Range (INR / year)</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.code} className="border-b last:border-0">
                <td className="py-2 pr-4">{c.name}</td>
                <td className="py-2 pr-4 text-gray-500">{c.duration}</td>
                <td className="py-2 font-medium">
                  {c.feeMin.toLocaleString()} – {c.feeMax.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
