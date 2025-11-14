import React, { useState } from "react";

export default function LeadForm({ univId, source }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    courseInterested: "",
    intakeYear: "",
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const PIPEDREAM = import.meta.env.VITE_PIPEDREAM_ENDPOINT;
  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function validate() {
    if (!form.fullName.trim()) return "Enter full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter valid email";
    if (!/^[6-9]\d{9}$/.test(form.phone)) return "Enter valid 10-digit Indian mobile";
    if (!form.state.trim()) return "Enter state";
    if (!form.courseInterested.trim()) return "Enter course interested";
    if (!form.intakeYear.trim()) return "Enter intake year";
    if (!form.consent) return "Please provide consent";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg(null);
    const error = validate();
    if (error) {
      setMsg({ type: "error", text: error });
      return;
    }
    setLoading(true);

    const payload = {
      universityId: univId,
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      state: form.state,
      courseInterested: form.courseInterested,
      intakeYear: form.intakeYear,
      consent: form.consent,
      source: source || "unknown"
    };

    try {
      // 1) Send to Pipedream
      const res = await fetch(PIPEDREAM, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // 2) Optionally, send to local backend (for your own logging)
      try {
        await fetch(`${API_BASE}/api/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (e) {
        console.warn("Local lead logging failed:", e.message);
      }

      if (!res.ok) {
        setMsg({
          type: "error",
          text: `Pipedream responded with status ${res.status}`
        });
      } else {
        setMsg({ type: "success", text: "Lead submitted successfully!" });
        setForm({
          fullName: "",
          email: "",
          phone: "",
          state: "",
          courseInterested: "",
          intakeYear: "",
          consent: false
        });
      }
    } catch (err) {
      console.error(err);
      setMsg({
        type: "error",
        text: "Network error while submitting lead."
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm space-y-3">
      {msg && (
        <div
          className={`text-sm p-2 rounded ${
            msg.type === "error"
              ? "bg-red-50 text-red-700"
              : "bg-green-50 text-green-700"
          }`}
        >
          {msg.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          className="p-2 border rounded"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="tel"
          name="phone"
          placeholder="Phone (10-digit, India)"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="text"
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="text"
          name="courseInterested"
          placeholder="Course Interested"
          value={form.courseInterested}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="text"
          name="intakeYear"
          placeholder="Intake Year (e.g., 2026)"
          value={form.intakeYear}
          onChange={handleChange}
        />
      </div>

      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
        />
        <span>I consent to be contacted by the university.</span>
      </label>

      <button
        disabled={loading}
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
