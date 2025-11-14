// frontend/src/pages/Landing2.jsx
import React, { useState } from "react";
import LeadForm from "../components/LeadForm.jsx";
import FeesModal from "../components/FeesModal.jsx";

export default function Landing2() {
  const [openFees, setOpenFees] = useState(false);
  const univId = "uni-2"; // must match feesData.json

  return (
    <div className="space-y-6">
      {/* HERO SECTION */}
      <section className="rounded bg-gradient-to-r from-indigo-600 to-sky-700 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">
            Northbridge Institute of Management & Technology
          </h1>
          <p className="mt-2">
            Private Institute — Management | Computer Science | Data Analytics
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {/* Button to open course-wise fee modal */}
            <button
              onClick={() => setOpenFees(true)}
              className="px-4 py-2 bg-white text-indigo-700 rounded"
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
              Northbridge Institute of Management & Technology (NIMT) focuses on
              future-ready programs in management and technology. The curriculum
              blends classroom learning with live projects, case studies, and
              industry-led workshops. Students receive 1:1 mentoring, soft-skills
              training, and structured placement support throughout the program.
            </p>
          </div>

          {/* Courses Offered */}
          <div className="bg-white p-4 rounded shadow space-y-2">
            <h3 className="font-semibold">Courses Offered</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>
                BBA (Bachelor of Business Administration – Marketing & Finance)
              </li>
              <li>B.Sc (Computer Science & Programming)</li>
              <li>PGDM (Post Graduate Diploma in Management – Business Analytics)</li>
            </ul>
          </div>

          {/* Placements & Facilities */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Placements & Facilities</h3>
            <p className="text-sm text-gray-600">
              Key recruiters include AlphaTech Solutions, FinEdge Analytics, NovaSoft,
              and BrightWave Consulting. NIMT recorded an 85% placement rate in 2024,
              with roles in business analysis, software development, and management
              trainee profiles. The campus offers separate hostels, a Central Library,
              fully equipped computer labs, Wi-Fi enabled campus, innovation & startup
              cell, and a modern cafeteria.
            </p>
          </div>
        </div>

        {/* Lead / Apply Form */}
        <aside id="apply" className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Enquire / Apply</h3>
          <LeadForm univId={univId} source="LP-2" />
        </aside>
      </section>

      {/* MODAL */}
      <FeesModal
        univId={univId}
        open={openFees}
        onClose={() => setOpenFees(false)}
      />
    </div>
  );
}
