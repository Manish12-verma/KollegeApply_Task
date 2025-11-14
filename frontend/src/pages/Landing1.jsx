// frontend/src/pages/Landing1.jsx
import React, { useState } from "react";
import LeadForm from "../components/LeadForm.jsx";
import FeesModal from "../components/FeesModal.jsx";

export default function Landing1() {
  const [openFees, setOpenFees] = useState(false);
  const univId = "uni-1"; // make sure your fees JSON/API has data for uni-1

  return (
    <div className="space-y-6">
      {/* HERO SECTION */}
      <section className="rounded bg-gradient-to-r from-rose-600 to-orange-600 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">
            Greenwood College of Business & Technology
          </h1>
          <p className="mt-2">
            NAAC Accredited College — Management | Computer Science | Media Studies
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {/* Button to open course-wise fee modal */}
            <button
              onClick={() => setOpenFees(true)}
              className="px-4 py-2 bg-white text-rose-700 rounded"
            >
              Check Course-wise Fees
            </button>

            <a
              className="px-4 py-2 bg-white/20 border rounded"
              href="/brochure-uni1.pdf"
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
              Greenwood College of Business & Technology (GCBT) is known for its
              application-driven curriculum and strong industry linkage. Each
              program is designed with inputs from corporate partners and alumni,
              ensuring that students gain skills that are directly relevant to
              current job roles. Regular workshops, guest lectures, and live
              projects help students build a strong portfolio before graduation.
            </p>
          </div>

          {/* Courses Offered */}
          <div className="bg-white p-4 rounded shadow space-y-2">
            <h3 className="font-semibold">Courses Offered</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>
                BBA (Bachelor of Business Administration – HR & Marketing)
              </li>
              <li>
                B.Sc (Information Technology & Data Science)
              </li>
              <li>
                BA (Media & Communication Studies)
              </li>
            </ul>
          </div>

          {/* Placements & Facilities */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Placements & Facilities</h3>
            <p className="text-sm text-gray-600">
              Top recruiters include Horizon Infotech, SilverLeaf Media, UrbanEdge
              Consulting, and SkyPeak Solutions. In 2024, GCBT reported an 80%+
              placement rate across management and technology programs, with
              students placed as business analysts, junior data scientists, digital
              marketers, and media executives. The campus offers air-conditioned
              classrooms, a central library with digital resources, dedicated
              computer labs, a media studio, Wi-Fi enabled campus, and on-campus
              hostels with separate facilities for boys and girls.
            </p>
          </div>
        </div>

        {/* Lead / Apply Form */}
        <aside id="apply" className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Enquire / Apply</h3>
          <LeadForm univId={univId} source="LP-1" />
        </aside>
      </section>

      {/* MODAL FOR COURSE-WISE FEES */}
      <FeesModal
        univId={univId}
        open={openFees}
        onClose={() => setOpenFees(false)}
      />
    </div>
  );
}
