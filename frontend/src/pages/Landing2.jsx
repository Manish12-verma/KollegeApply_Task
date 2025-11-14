import React, { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeesModal from "../components/FeesModal";
import CourseFeesSection from "../components/CourseFeesSection";

export default function Landing2() {
  const [openFees, setOpenFees] = useState(false);
  const univId = "uni-2";

  const dummyCourseFees = [
    {
      code: "BBA",
      name: "BBA",
      duration: "3 years",
      feeMin: 60000,
      feeMax: 120000
    },
    {
      code: "BCA",
      name: "BCA",
      duration: "3 years",
      feeMin: 50000,
      feeMax: 100000
    },
    {
      code: "MCOM",
      name: "M.Com",
      duration: "2 years",
      feeMin: 40000,
      feeMax: 90000
    }
  ];

  return (
    <div className="space-y-6">
      <section className="rounded bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Crestview University</h1>
          <p className="mt-2">
            Private University — Business | Arts | Computer Science
          </p>
          <div className="mt-4 space-x-3 flex flex-wrap gap-2">
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

      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {/* Overview */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Overview</h3>
            <p className="text-sm text-gray-600">
              Crestview focuses on industry-ready education with strong placement support...
            </p>
          </div>

          {/* Courses */}
          <div className="bg-white p-4 rounded shadow space-y-2">
            <h3 className="font-semibold">Courses Offered</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>BBA</li>
              <li>BCA</li>
              <li>M.Com</li>
            </ul>
          </div>

          

          {/* Placements */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Placements & Facilities</h3>
            <p className="text-sm text-gray-600">
              Companies: LMN, PQR. Placement rate: 72% (2024). Training cell,
              modern campus.
            </p>
          </div>
        </div>

        <aside id="apply" className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Enquire / Apply</h3>
          <LeadForm univId={univId} onSuccess={() => {}} />
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
