// frontend/src/pages/Landing2.jsx
import React, { useState } from "react";
import LeadForm from "../components/LeadForm.jsx";
import FeesModal from "../components/FeesModal.jsx";

export default function Landing2() {
  const [openFees, setOpenFees] = useState(false);
  const univId = "uni-2";

  return (
    <div className="space-y-6">
      {/* HERO SECTION */}
      <section className="rounded bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Crestview University</h1>
          <p className="mt-2">
            Private University — Business | Arts | Computer Applications
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {/* Button to open course-wise fee modal */}
            <button
              onClick={() => setOpenFees(true)}
              className="px-4 py-2 bg-white text-emerald-700 rounded"
            >
              Check Course-wise Fees
            </button>

            <a
              className="px-4 py-2 bg-white/20 border rounded"
              href="/brochure-uni2.pdf"
              download
            >
              Download Brochure
            </a>

            <a
              className="px-4 py-2 bg-white/20 border rounded"
              href="#apply"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {/* Overview */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Overview</h3>
            <p className="text-sm text-gray-600">
              Crestview University offers industry-focused programs in business,
              arts, and computer applications. The curriculum is designed in
              collaboration with industry experts, and students receive strong
              mentoring and placement guidance throughout their course.
            </p>
          </div>

          {/* Courses Offered */}
          <div className="bg-white p-4 rounded shadow space-y-2">
            <h3 className="font-semibold">Courses Offered</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>BBA (Bachelor of Business Administration)</li>
              <li>BCA (Bachelor of Computer Applications)</li>
              <li>M.Com (Master of Commerce)</li>
            </ul>
          </div>

          {/* Placements & Facilities */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Placements & Facilities</h3>
            <p className="text-sm text-gray-600">
              Recent recruiters include LMN Pvt Ltd, PQR Group, and Delta
              Solutions. Crestview University achieved a 72% placement rate in
              2024. Key facilities include hostels, a dedicated placement cell,
              modern computer labs, Wi-Fi enabled campus, and a student-friendly
              cafeteria.
            </p>
          </div>
        </div>

        {/* Lead / Apply Form */}
        <aside id="apply" className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Enquire / Apply</h3>
          <LeadForm univId={univId} source="LP-2" />
        </aside>
      </section>
      
      <FeesModal
        univId={univId}
        open={openFees}
        onClose={() => setOpenFees(false)}
      />
    </div>
  );
}
