import React, { useState, useRef, useEffect } from "react";
import ReactSelect from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "../../styles/seeJobs/Seejobs.module.css";

// Constants
const COUNTRIES = [
  { label: "India", value: "IN" },
  { label: "United States", value: "US" },
  { label: "United Kingdom", value: "GB" },
  { label: "Canada", value: "CA" },
  { label: "Australia", value: "AU" },
  { label: "Germany", value: "DE" },
  { label: "France", value: "FR" },
  { label: "Singapore", value: "SG" },
  { label: "UAE", value: "AE" },
];
const CURRENCIES = [
  { label: "INR (₹)", value: "INR" },
  { label: "USD ($)", value: "USD" },
  { label: "GBP (£)", value: "GBP" },
  { label: "EUR (€)", value: "EUR" },
  { label: "AUD (A$)", value: "AUD" },
];
const SALARY_PERIODS = [
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];
const GENDERS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
  { label: "Prefer not to say", value: "prefer_not" },
];
const SCORE_UNITS = [
  { label: "Percentage (%)", value: "Percentage" },
  { label: "CGPA", value: "CGPA" },
];
const COURSE_TYPES = [
  { label: "Full Time", value: "fulltime" },
  { label: "Part Time", value: "parttime" },
  { label: "Distance Learning", value: "distance" },
];

const emptyEducation = () => ({
  degree: "",
  specialization: "",
  college: "",
  university: "",
  courseType: "",
  startDate: "",
  endDate: "",
  score_unit: "",
  percentage: "",
  cgpa: "",
  country: "",
  state: "",
  city: "",
  regNumber: "",
});
const emptyExperience = () => ({
  jobTitle: "",
  companyName: "",
  businessDomain: "",
  location: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
  startDate: "",
  endDate: "",
  isCurrent: false,
  reasonForLeaving: "",
});

const inputCls = (error) =>
  `small-text w-full h-12 border rounded-lg px-3 outline-none focus:outline-none transition-colors bg-white ${
    error
      ? "border-2 border-red-500"
      : "border border-[#E9EAEB] focus:border-[#039BE6]"
  }`;
const selectCls = (error) =>
  `small-text w-full h-12 border rounded-lg px-3 outline-none focus:outline-none transition-colors bg-white cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23039BE6' d='M6 8L1 3h10z'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_12px_center] pr-8 ${
    error
      ? "border-2 border-red-500"
      : "border border-[#E9EAEB] focus:border-[#039BE6]"
  }`;

const labelCls =
  "content leading-tight tracking-normal text-[#1F2D3D] mb-1 block";

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-red-500 text-sm mt-[2px]">{message}</p>;
}

function Input({ label, required, error, onClearError, ...props }) {
  return (
    <div className="flex flex-col gap-[2px]">
      {label && (
        <label className={labelCls}>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <input className={inputCls(error)} onFocus={onClearError} {...props} />
      <FieldError message={error} />
    </div>
  );
}

function Select({
  label,
  required,
  error,
  options,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-[2px]">
      {label && (
        <label className={labelCls}>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <ReactSelect
        options={options}
        placeholder={placeholder}
        classNamePrefix="react-select"
        value={options.find((o) => o.value === value) || null}
        onChange={(selected) => onChange(selected ? selected.value : "")}
        className={`small-text ${error ? "react-select-error" : ""}`}
        menuPortalTarget={typeof window !== "undefined" ? document.body : null}
        menuPosition="fixed"
        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: "48px",
            borderRadius: "8px",
            borderColor: error
              ? "#ef4444"
              : state.isFocused
                ? "#039BE6"
                : "#E9EAEB",
            borderWidth: error ? "2px" : "1px",
            boxShadow: "none",
            backgroundColor: "white",
            "&:hover": { borderColor: "#039BE6" },
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
              ? "#039BE6"
              : state.isFocused
                ? "#e6f6fd"
                : "white",
            color: state.isSelected ? "white" : "#1F2D3D",
            fontSize: "14px",
          }),
        }}
      />
      <FieldError message={error} />
    </div>
  );
}

function Textarea({ label, required, error, ...props }) {
  return (
    <div className="flex flex-col gap-[2px]">
      {label && (
        <label className={labelCls}>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <textarea
        rows={3}
        className={`small-text w-full border rounded-lg px-3 py-2 outline-none focus:outline-none transition-colors bg-white resize-y ${
          error
            ? "border-2 border-red-500"
            : "border border-[#E9EAEB] focus:border-[#039BE6]"
        }`}
        {...props}
      />
      <FieldError message={error} />
    </div>
  );
}

function TagsInput({
  label,
  required,
  error,
  value = [],
  onChange,
  placeholder,
}) {
  const [inputVal, setInputVal] = useState("");
  const addTag = (raw) => {
    const tag = raw.trim();
    if (tag && !value.includes(tag)) onChange([...value, tag]);
    setInputVal("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputVal);
    } else if (e.key === "Backspace" && !inputVal && value.length) {
      onChange(value.slice(0, -1));
    }
  };
  return (
    <div className="flex flex-col gap-[2px]">
      {label && (
        <label className={labelCls}>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div
        className={`flex flex-wrap gap-1.5 min-h-[48px] border rounded-lg px-3 py-2 bg-white items-center transition-colors ${
          error ? "border-2 border-red-500" : "border border-[#E9EAEB]"
        }`}
      >
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 bg-[#e6f6fd] text-[#039BE6] rounded px-2 py-0.5 text-xs font-semibold font-montserrat"
          >
            {tag}
            <button
              type="button"
              className="bg-transparent border-0 cursor-pointer text-[#039BE6] p-0 text-sm leading-none"
              onClick={() => onChange(value.filter((t) => t !== tag))}
            >
              ×
            </button>
          </span>
        ))}
        <input
          className="border-0 outline-none text-sm flex-1 min-w-[100px] bg-transparent text-gray-900 small-text"
          value={inputVal}
          placeholder={value.length ? "" : placeholder}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => inputVal && addTag(inputVal)}
        />
      </div>
      <p className="text-xs text-[#039BE6] mt-[2px]">
        Press Enter or comma to add multiple values
      </p>
      <FieldError message={error} />
    </div>
  );
}

function FileUpload({ value, onChange, error }) {
  const inputRef = useRef();
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      alert("Only PDF or Word files are allowed.");
      return;
    }
    onChange(file);
  };

  return (
    <div className="flex flex-col gap-[2px]">
      <label className={labelCls}>
        Resume / CV<span className="text-red-500"> *</span>
      </label>

      {/* mirrors old component's dashed upload zone */}
      <div
        className={`w-full md:h-[200px] h-[120px] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
          error ? "border-red-500 bg-red-50" : "border-[#039BE6] bg-[#fafbff]"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const f = e.dataTransfer.files?.[0];
          if (f) onChange(f);
        }}
      >
        {/* upload icon placeholder — swap with your SVG */}
        {/* <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f6fd] text-[#039BE6] text-xl font-bold mb-1">
          ↑
        </div> */}
        <img
          src="/images/SubmitCv/uplodIcon.svg"
          alt="uplodeimage"
          className="h-5 w-5 md:w-auto md:h-auto"
        />
        <p className="content cursor-pointer">Upload Resume</p>
        {/* <p className="content cursor-pointer text-[#039BE6] font-semibold mt-1 mb-0">
          Click to upload or drag & drop
        </p>
        <p className="small-text text-gray-500 mt-0.5">
          PDF or Word (.pdf, .doc, .docx) — max 5 MB
        </p> */}
        {value && (
          <p className="text-green-600 text-sm mt-1">Uploaded: {value.name}</p>
        )}
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {/* {value && (
        <div className="flex items-center gap-2 mt-2 px-3 py-1.5 bg-white border border-[#E9EAEB] rounded-lg text-[13px] ">
          <span>📄</span>
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap small-text">
            {value.name}
          </span>
          <button
            type="button"
            className="bg-transparent border-0 cursor-pointer text-lg text-gray-400 leading-none"
            onClick={() => {
              onChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
          >
            ×
          </button>
        </div>
      )} */}
      <FieldError message={error} />
    </div>
  );
}

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-xl mb-5 overflow-hidden shadow-[0px_2px_8px_0px_#0000000a]">
      <button
        type="button"
        className="w-full flex justify-between items-center px-5 py-4 bg-transparent border-0 cursor-pointer text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="subheading-bold text-[#1F2D3D]">{title}</span>
        <span
          className="text-[#039BE6] text-lg transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>
      {/* thin blue accent line under header when open */}
      {open && <div className="h-[2px] bg-[#039BE6] mx-5" />}
      {open && <div className="p-5">{children}</div>}
    </div>
  );
}

// Validation
function validateForm(data) {
  const errs = {};
  if (!data.first_name?.trim()) errs.first_name = "First name is required";
  if (!data.last_name?.trim()) errs.last_name = "Last name is required";
  if (!data.email?.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = "Enter a valid email address";
  if (!data.phone?.trim()) errs.phone = "Phone number is required";
  else if (data.phone.replace(/\D/g, "").length < 10)
    errs.phone = "Phone number must be at least 10 digits";
  if (!data.resume) errs.resume = "Please upload your resume";

  const eduErrors = data.education.map((edu) => {
    const e = {};
    if (!edu.degree?.trim()) e.degree = "Degree is required";
    if (!edu.college?.trim()) e.college = "College is required";
    if (!edu.startDate) e.startDate = "Start date is required";
    if (!edu.score_unit) e.score_unit = "Select score type";
    if (edu.score_unit === "Percentage" && !edu.percentage?.trim())
      e.percentage = "Percentage is required";
    if (edu.score_unit === "CGPA" && !edu.cgpa?.trim())
      e.cgpa = "CGPA is required";
    return e;
  });
  if (eduErrors.some((e) => Object.keys(e).length)) errs.education = eduErrors;

  const expErrors = data.experience.map((exp) => {
    const e = {};
    if (!exp.jobTitle?.trim()) e.jobTitle = "Job title is required";
    if (!exp.companyName?.trim()) e.companyName = "Company name is required";
    if (!exp.startDate) e.startDate = "Start date is required";
    return e;
  });
  if (expErrors.some((e) => Object.keys(e).length)) errs.experience = expErrors;

  return errs;
}

export default function SubmitCV() {
  const jobDetails = {
    title: "Senior Software Engineer",
    company: "Acme Corp",
    location: ["Bangalore", "Mumbai"],
    job_role: "Senior Software Engineer",
  };

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
    nationality: "",
    current_organisation: "",
    current_designation: "",
    work_experience: "",
    notice_period: "",
    position_applied_for: jobDetails.job_role || "",
    location_preferred:
      jobDetails.location?.length === 1 ? jobDetails.location[0] : "",
    primary_skills: [],
    key_skills: [],
    resume: null,
    education: [emptyEducation()],
    experience: [emptyExperience()],
    currency: "",
    current_salary: "",
    frequency: "",
    fixed_salary: "",
    variable_salary: "",
    current_bonus: "",
    expected_currency: "",
    expected_amount: "",
    expected_bonus: "",
  });

  const [errors, setErrors] = useState({});
  const clearEduError = (i, field) =>
    setErrors((prev) => {
      const education = [...(prev.education || [])];
      education[i] = { ...education[i], [field]: "" };
      return { ...prev, education };
    });

  const clearExpError = (i, field) =>
    setErrors((prev) => {
      const experience = [...(prev.experience || [])];
      experience[i] = { ...experience[i], [field]: "" };
      return { ...prev, experience };
    });
  const [submitted, setSubmitted] = useState(false);

  const set = (field, value) =>
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      sessionStorage.setItem(
        "submitCV",
        JSON.stringify({ ...updated, resume: null }),
      );
      return updated;
    });

  const setEdu = (index, field, value) =>
    setFormData((prev) => {
      const education = [...prev.education];
      education[index] = { ...education[index], [field]: value };
      return { ...prev, education };
    });
  const setExp = (index, field, value) =>
    setFormData((prev) => {
      const experience = [...prev.experience];
      experience[index] = { ...experience[index], [field]: value };
      return { ...prev, experience };
    });
  const addEducation = () =>
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, emptyEducation()],
    }));
  const removeEducation = (i) =>
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, idx) => idx !== i),
    }));
  const addExperience = () =>
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, emptyExperience()],
    }));
  const removeExperience = (i) =>
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, idx) => idx !== i),
    }));

  const eduErr = (i, field) => errors.education?.[i]?.[field];
  const expErr = (i, field) => errors.experience?.[i]?.[field];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(formData);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document
        .querySelector("[data-error]")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(true);
    sessionStorage.removeItem("submitCV");
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("submitCV");
    if (saved) {
      const parsed = JSON.parse(saved);
      setFormData((prev) => ({ ...prev, ...parsed, resume: null }));
    }
  }, []);

  // ── Success screen ──
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] font-montserrat">
        <div className="bg-white border border-[#E9EAEB] rounded-2xl px-10 py-12 text-center  shadow-[0px_4px_20px_0px_#00000012]">
          <div className="w-14 h-14 rounded-full bg-[#e6f6fd] text-[#039BE6] text-2xl font-bold flex items-center justify-center mx-auto">
            ✓
          </div>
          <h2 className="subheading-bold mt-4 mb-2 text-[#1F2D3D]">
            Application Submitted!
          </h2>
          <p className="content text-gray-500">
            Thank you for applying.
          </p>
          <button
            className="mt-6 md:w-[200px] w-full h-12 bg-[#039BE6] text-white rounded-lg small-text text-center shadow-[0px_4px_8px_0px_#00000029] cursor-pointer border-0"
            onClick={() => setSubmitted(false)}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  // ── Add-entry button shared style ──
  const addBtnCls =
    "inline-flex items-center gap-1.5 mt-2 px-4 py-2 bg-[#e6f6fd] text-[#039BE6] border border-dashed border-[#039BE6] rounded-lg small-text font-semibold cursor-pointer";

  // ── Sub-section heading (salary) ──
  const sectionHeadingCls =
    "subheading-bold text-[#039BE6] mt-0 mb-4 pb-2 border-b border-[#E9EAEB]";

  return (
    <section className="min-h-screen bg-[#f8fafc] font-montserrat">
      <div className=" mx-auto px-4 md:px-14 lg:px-[100px] py-6.5 md:py-10 lg:py-15 pb-16">
        <form onSubmit={handleSubmit} noValidate className="space-y-0">
          {/* ── Personal Details ── */}
          <Accordion title="Personal Details" defaultOpen>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
              <Input
                label="First Name"
                required
                placeholder="John"
                value={formData.first_name}
                onChange={(e) => set("first_name", e.target.value)}
                error={errors.first_name}
                data-error={errors.first_name || undefined}
                onClearError={() =>
                  setErrors((prev) => ({ ...prev, first_name: "" }))
                }
              />
              <Input
                label="Middle Name"
                placeholder="(optional)"
                value={formData.middle_name}
                onChange={(e) => set("middle_name", e.target.value)}
              />
              <Input
                label="Last Name"
                required
                placeholder="Doe"
                value={formData.last_name}
                onChange={(e) => set("last_name", e.target.value)}
                error={errors.last_name}
                onClearError={() =>
                  setErrors((prev) => ({ ...prev, last_name: "" }))
                }
              />
              <Input
                label="Email Address"
                required
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => set("email", e.target.value)}
                error={errors.email}
                onClearError={() =>
                  setErrors((prev) => ({ ...prev, email: "" }))
                }
              />
              {/* <Input
                label="Phone Number"
                required
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  set("phone", e.target.value.replace(/\D/g, ""))
                }
                error={errors.phone}
              /> */}
              <div className="flex flex-col gap-[2px]">
                <label className={labelCls}>
                  Phone Number<span className="text-red-500"> *</span>
                </label>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(val) => set("phone", val)}
                  className={styles.contactfield}
                  containerClass="w-full !rounded-lg"
                  inputClass={`!w-full !h-12 !pl-14 small-text ${
                    errors.phone
                      ? "!border-2 !border-red-500"
                      : "!border !border-[#E9EAEB]"
                  }`}
                  buttonClass="!border !border-[#E9EAEB] !bg-transparent"
                />
                <FieldError message={errors.phone} />
              </div>
              <Select
                label="Gender"
                placeholder="Select gender"
                options={GENDERS}
                value={formData.gender}
                onChange={(val) => set("gender", val)}
              />
              {console.log(formData.gender)}
              <Input
                label="Position Applied For"
                placeholder="e.g. Senior Developer"
                value={formData.position_applied_for}
                onChange={(e) => set("position_applied_for", e.target.value)}
                onFocus={() =>
                  setErrors((prev) => ({
                    ...prev,
                    fieldName: "position_applied_for",
                  }))
                }
              />
              {jobDetails.location?.length === 1 ? (
                <Input
                  label="Location Preferred"
                  value={jobDetails.location[0]}
                  disabled
                />
              ) : jobDetails.location?.length > 1 ? (
                <Select
                  label="Location Preferred"
                  placeholder="Select location"
                  options={jobDetails.location.map((l) => ({
                    label: l,
                    value: l,
                  }))}
                  value={formData.location_preferred}
                  onChange={(val) => set("location_preferred", val)}
                />
              ) : (
                <Input
                  label="Location Preferred"
                  placeholder="e.g. Bangalore"
                  value={formData.location_preferred}
                  onChange={(e) => set("location_preferred", e.target.value)}
                />
              )}
              <Select
                label="Country"
                placeholder="Select country"
                options={COUNTRIES}
                value={formData.country}
                onChange={(val) => set("country", val)}
              />
              <Input
                label="State / Province"
                placeholder="Enter state"
                value={formData.state}
                onChange={(e) => set("state", e.target.value)}
              />
              <Input
                label="City"
                placeholder="Enter city"
                value={formData.city}
                onChange={(e) => set("city", e.target.value)}
              />
              <Input
                label="Zip / Postal Code"
                placeholder="Enter zip code"
                value={formData.zip_code}
                onChange={(e) => set("zip_code", e.target.value)}
              />
              <Input
                label="Nationality"
                placeholder="e.g. Indian"
                value={formData.nationality}
                onChange={(e) => set("nationality", e.target.value)}
              />
              <Input
                label="Current Organization"
                placeholder="Company you work at"
                value={formData.current_organisation}
                onChange={(e) => set("current_organisation", e.target.value)}
              />
              <Input
                label="Current Designation"
                placeholder="Your current role"
                value={formData.current_designation}
                onChange={(e) => set("current_designation", e.target.value)}
              />
              <Input
                label="Work Experience (years)"
                type="number"
                min={0}
                placeholder="e.g. 5"
                value={formData.work_experience}
                onChange={(e) => set("work_experience", e.target.value)}
              />
              <Input
                label="Notice Period (days)"
                type="number"
                min={0}
                placeholder="e.g. 30"
                value={formData.notice_period}
                onChange={(e) => set("notice_period", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4">
              <TagsInput
                label="Primary Skills"
                placeholder="React, Node.js, …"
                value={formData.primary_skills}
                onChange={(v) => set("primary_skills", v)}
              />
              <TagsInput
                label="Key Skills"
                placeholder="Leadership, Agile, …"
                value={formData.key_skills}
                onChange={(v) => set("key_skills", v)}
              />
            </div>
          </Accordion>

          {/* ── Education Details ── */}
          <Accordion title="Education Details">
            {formData.education.map((edu, i) => (
              <div
                key={i}
                className="border border-[#E9EAEB] rounded-xl mb-4 overflow-hidden"
              >
                <div className="flex justify-between items-center px-4 py-3 bg-[#f8fafc] border-b border-[#E9EAEB]">
                  <span className="small-text font-semibold text-[#039BE6] uppercase tracking-wider">
                    Education {i + 1}
                  </span>
                  {formData.education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEducation(i)}
                      className="bg-transparent border border-red-300 text-red-500 rounded-lg px-3 py-1 small-text cursor-pointer font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 p-4">
                  <Input
                    label="Degree"
                    required
                    placeholder="e.g. B.Tech"
                    value={edu.degree}
                    onChange={(e) => setEdu(i, "degree", e.target.value)}
                    error={eduErr(i, "degree")}
                    onClearError={() => clearEduError(i, "degree")}
                  />
                  <Input
                    label="Specialization"
                    placeholder="e.g. Computer Science"
                    value={edu.specialization}
                    onChange={(e) =>
                      setEdu(i, "specialization", e.target.value)
                    }
                  />
                  <Select
                    label="Course Type"
                    placeholder="Select type"
                    options={COURSE_TYPES}
                    value={edu.courseType}
                    onChange={(val) => setEdu(i, "courseType", val)}
                  />
                  <Input
                    label="College / Institute"
                    required
                    placeholder="e.g. IIT Delhi"
                    value={edu.college}
                    onChange={(e) => setEdu(i, "college", e.target.value)}
                    error={eduErr(i, "college")}
                    onClearError={() => clearEduError(i, "college")}
                  />
                  <Input
                    label="University"
                    placeholder="e.g. Delhi University"
                    value={edu.university}
                    onChange={(e) => setEdu(i, "university", e.target.value)}
                  />
                  <Input
                    label="Registration Number"
                    placeholder="(optional)"
                    value={edu.regNumber}
                    onChange={(e) => setEdu(i, "regNumber", e.target.value)}
                  />
                  <Input
                    label="Start Date"
                    required
                    type="date"
                    value={edu.startDate}
                    onChange={(e) => setEdu(i, "startDate", e.target.value)}
                    error={eduErr(i, "startDate")}
                  />
                  <Input
                    label="End Date"
                    type="date"
                    value={edu.endDate}
                    onChange={(e) => setEdu(i, "endDate", e.target.value)}
                  />
                  <Select
                    label="Score Type"
                    required
                    placeholder="Select score type"
                    options={SCORE_UNITS}
                    value={edu.score_unit}
                    onChange={(val) => setEdu(i, "score_unit", val)}
                    error={eduErr(i, "score_unit")}
                  />
                  {edu.score_unit === "Percentage" && (
                    <Input
                      label="Percentage (%)"
                      required
                      type="number"
                      min={0}
                      max={100}
                      placeholder="e.g. 82"
                      value={edu.percentage}
                      onChange={(e) => setEdu(i, "percentage", e.target.value)}
                      error={eduErr(i, "percentage")}
                    />
                  )}
                  {edu.score_unit === "CGPA" && (
                    <Input
                      label="CGPA"
                      required
                      type="number"
                      step="0.01"
                      min={0}
                      max={10}
                      placeholder="e.g. 8.5"
                      value={edu.cgpa}
                      onChange={(e) => setEdu(i, "cgpa", e.target.value)}
                      error={eduErr(i, "cgpa")}
                    />
                  )}
                  <Select
                    label="Country"
                    placeholder="Select country"
                    options={COUNTRIES}
                    value={edu.country}
                    onChange={(val) => setEdu(i, "country", val)}
                  />
                  <Input
                    label="State"
                    placeholder="Enter state"
                    value={edu.state}
                    onChange={(e) => setEdu(i, "state", e.target.value)}
                  />
                  <Input
                    label="City"
                    placeholder="Enter city"
                    value={edu.city}
                    onChange={(e) => setEdu(i, "city", e.target.value)}
                  />
                </div>
              </div>
            ))}
            <button type="button" onClick={addEducation} className={addBtnCls}>
              + Add Education
            </button>
          </Accordion>

          {/* ── Experience Details ── */}
          <Accordion title="Experience Details">
            {formData.experience.map((exp, i) => (
              <div
                key={i}
                className="border border-[#E9EAEB] rounded-xl mb-4 overflow-hidden"
              >
                <div className="flex justify-between items-center px-4 py-3 bg-[#f8fafc] border-b border-[#E9EAEB]">
                  <span className="small-text font-semibold text-[#039BE6] uppercase tracking-wider">
                    Experience {i + 1}
                  </span>
                  {formData.experience.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeExperience(i)}
                      className="bg-transparent border border-red-300 text-red-500 rounded-lg px-3 py-1 small-text cursor-pointer font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 p-4">
                  <Input
                    label="Job Title"
                    required
                    placeholder="e.g. Software Engineer"
                    value={exp.jobTitle}
                    onChange={(e) => setExp(i, "jobTitle", e.target.value)}
                    error={expErr(i, "jobTitle")}
                    onClearError={() => clearExpError(i, "jobTitle")}
                  />
                  <Input
                    label="Company Name"
                    required
                    placeholder="e.g. Infosys"
                    value={exp.companyName}
                    onChange={(e) => setExp(i, "companyName", e.target.value)}
                    error={expErr(i, "companyName")}
                    onClearError={() => clearExpError(i, "companyName")}
                  />
                  <Input
                    label="Business Domain"
                    placeholder="e.g. FinTech"
                    value={exp.businessDomain}
                    onChange={(e) =>
                      setExp(i, "businessDomain", e.target.value)
                    }
                  />
                  <Input
                    label="Location"
                    placeholder="e.g. Bangalore, India"
                    value={exp.location}
                    onChange={(e) => setExp(i, "location", e.target.value)}
                  />
                  <Select
                    label="Country"
                    placeholder="Select country"
                    options={COUNTRIES}
                    value={exp.country}
                    onChange={(val) => setExp(i, "country", val)}
                  />
                  <Input
                    label="State"
                    placeholder="Enter state"
                    value={exp.state}
                    onChange={(e) => setExp(i, "state", e.target.value)}
                  />
                  <Input
                    label="City"
                    placeholder="Enter city"
                    value={exp.city}
                    onChange={(e) => setExp(i, "city", e.target.value)}
                  />
                  <Input
                    label="Zip Code"
                    placeholder="Enter zip code"
                    value={exp.zipCode}
                    onChange={(e) => setExp(i, "zipCode", e.target.value)}
                  />
                  <Input
                    label="Start Date"
                    required
                    type="date"
                    value={exp.startDate}
                    onChange={(e) => setExp(i, "startDate", e.target.value)}
                    error={expErr(i, "startDate")}
                    onClearError={() => clearExpError(i, "startDate")}
                  />
                  <Input
                    label="End Date"
                    type="date"
                    value={exp.endDate}
                    disabled={exp.isCurrent}
                    onChange={(e) => setExp(i, "endDate", e.target.value)}
                  />
                  <div className="flex items-center gap-2 pt-6">
                    <input
                      type="checkbox"
                      id={`isCurrent-${i}`}
                      checked={exp.isCurrent}
                      onChange={(e) => {
                        setExp(i, "isCurrent", e.target.checked);
                        if (e.target.checked) setExp(i, "endDate", "");
                      }}
                      className="w-4 h-4 cursor-pointer accent-[#039BE6]"
                    />
                    <label
                      htmlFor={`isCurrent-${i}`}
                      className="content cursor-pointer"
                    >
                      Currently working here
                    </label>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <Textarea
                    label="Reason for Leaving"
                    placeholder="Brief reason for leaving (optional)"
                    value={exp.reasonForLeaving}
                    onChange={(e) =>
                      setExp(i, "reasonForLeaving", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <button type="button" onClick={addExperience} className={addBtnCls}>
              + Add Experience
            </button>
          </Accordion>

          {/* ── Salary Details ── */}
          <Accordion title="Salary Details">
            <div className="mb-6">
              <h4 className={sectionHeadingCls}>Current Salary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <Select
                  label="Currency"
                  placeholder="Select currency"
                  options={CURRENCIES}
                  value={formData.currency}
                  onChange={(val) => set("currency", val)}
                />
                <Input
                  label="Amount"
                  type="number"
                  min={0}
                  placeholder="e.g. 1200000"
                  value={formData.current_salary}
                  onChange={(e) => set("current_salary", e.target.value)}
                />
                <Select
                  label="Salary Period"
                  placeholder="Select period"
                  options={SALARY_PERIODS}
                  value={formData.frequency}
                  onChange={(val) => set("frequency", val)}
                />
                <Input
                  label="Fixed Salary"
                  type="number"
                  min={0}
                  placeholder="Fixed component"
                  value={formData.fixed_salary}
                  onChange={(e) => set("fixed_salary", e.target.value)}
                />
                <Input
                  label="Variable Salary"
                  type="number"
                  min={0}
                  placeholder="Variable component"
                  value={formData.variable_salary}
                  onChange={(e) => set("variable_salary", e.target.value)}
                />
                <Input
                  label="Bonus"
                  type="number"
                  min={0}
                  placeholder="Annual bonus"
                  value={formData.current_bonus}
                  onChange={(e) => set("current_bonus", e.target.value)}
                />
              </div>
            </div>
            <div>
              <h4 className={sectionHeadingCls}>Expected Salary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <Select
                  label="Currency"
                  placeholder="Select currency"
                  options={CURRENCIES}
                  value={formData.expected_currency}
                  onChange={(val) => set("expected_currency", val)}
                />
                <Input
                  label="Expected Amount"
                  type="number"
                  min={0}
                  placeholder="e.g. 1500000"
                  value={formData.expected_amount}
                  onChange={(e) => set("expected_amount", e.target.value)}
                />
                <Input
                  label="Expected Bonus"
                  type="number"
                  min={0}
                  placeholder="Expected bonus"
                  value={formData.expected_bonus}
                  onChange={(e) => set("expected_bonus", e.target.value)}
                />
              </div>
            </div>
          </Accordion>

          {/* ── Resume Upload ── */}
          <div className="mb-5">
            <FileUpload
              value={formData.resume}
              onChange={(f) => set("resume", f)}
              error={errors.resume}
            />
          </div>

          {/* ── Submit ── */}
          <div className="flex justify-center items-center gap-4 mt-6 flex-wrap">
            {Object.keys(errors).length > 0 && (
              <p className="small-text text-red-500">
                Please fix the errors before submitting.
              </p>
            )}
            <button
              type="submit"
              className="md:w-[200px] w-[140px] h-12 bg-[#039BE6] text-white rounded-lg small-text text-center shadow-[0px_4px_8px_0px_#00000029] cursor-pointer border-0 font-semibold"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
