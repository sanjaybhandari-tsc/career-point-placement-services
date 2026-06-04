import React, { useState, useEffect, useRef } from "react";
import { timeAgo } from "@/utils/commonFunctions";

export default function Jobscart() {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showHeading, setShowHeading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animate, setAnimate] = useState(false);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const detailsRef = useRef(null);

  const jobsPerPage = 5;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobsData.length / jobsPerPage);

  const scrollToDetails = () => {
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    scrollToDetails();
  };

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));
  const handlePageClick = (page) => setCurrentPage(page);

  const getApplyUrl = (job) => 
    `https://collectivhire.com/jobs/detail?id=${btoa(String(job.id))}`;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://dev.collectivhire.com/api/ats/jobs/client/jobs?api_key=CPPSe0d9c8b7a6f5e4d3c2b1a9f8a7c6d4b322052026",
          { method: "GET", headers: { "Content-Type": "application/json" } },
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();

        const mapped = result.data.map((job) => ({
          id: job.job_id,
          title: job.job_title,
          experience:
            job.min_experience != null && job.max_experience != null
              ? `${job.min_experience}-${job.max_experience} yrs`
              : job.max_experience != null
                ? `Up to ${job.max_experience} yrs`
                : "Not specified",
          location:
            job.location?.length > 0
              ? job.location.join(", ")
              : "Not specified",
          time: job.published_at
            ? new Date(job.published_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : "Recently posted",
          //Displaying raw HTML via dangerouslySetInnerHTML
          description: job.job_description || "",
          qualificationCriteria: job.qualification_criteria || "",
          responsibilities: [],
          role: job.job_role || "Not specified",
          industry: job.business_vertical || "Not specified",
          employmentType: [job.job_type, job.job_mode]
            .filter(Boolean)
            .join(", "),
          skills: [...(job.primary_skills || []), ...(job.key_skills || [])],
          jobID: job.job_ID,
          openings: job.number_of_opening,
          education: job.education || "Not specified",
          salary:
            job.min_salary != null && job.max_salary != null
              ? `${job.salary_currency || ""} ${job.min_salary.toLocaleString()} – ${job.max_salary.toLocaleString()}${job.salary_frequency ? " / " + job.salary_frequency : ""}`.trim()
              : "Not disclosed",
          clientName: job.client_name,
        }));

        setJobsData(mapped);
        setSelectedJob(mapped[0] ?? null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(t);
  }, [selectedJob]);

  useEffect(() => {
    if (jobsData.length === 0) return;
    const firstOnPage = jobsData[(currentPage - 1) * jobsPerPage];
    if (firstOnPage) setSelectedJob(firstOnPage);
  }, [currentPage, jobsData]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        if (rect.top < triggerBottom) setShowHeading(true);
      }
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < triggerBottom) setShowContent(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Failed to load jobs: {error}</p>
      </div>
    );
  }

  if (!selectedJob) return null;

  return (
    <div className="px-4 pt-6 md:p-8 bg-white lg:px-25 min-h-screen">
      <div
        ref={headingRef}
        className={`p-4 sm:p-6 text-center transition-all duration-700 transform ${
          showHeading
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        }`}
      >
        <h2 className="heading-bold mb-5">
          Featured <span className="text-[#0277BD]">Jobs</span>
        </h2>
        <p className="text-black mt-2 content max-w-2xl lg:max-w-7xl mx-auto">
          Explore opportunities across different roles and industries, and find
          positions that align with your skills, interests, and career goals.
        </p>
      </div>
      <div
        ref={containerRef}
        className={`mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 transition-all duration-700 transform ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-full">
          <div className="space-y-4 sm:space-y-5">
            {currentJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => handleJobSelect(job)}
                className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition ${
                  selectedJob.id === job.id
                    ? "border-[#039BE6] border-2"
                    : "border-2 border-[#ECECEC] hover:shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <h3 className="content-semibold capitalize">{job.title}</h3>
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <img
                      src="/images/broserJobs/clockone.svg"
                      alt="icon"
                      className="h-3.5 w-3.5"
                    />
                    <span className="text-[10px] sm:text-[12px] font-roboto text-black">
                      {timeAgo(job.time)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4 small-text !font-roboto">
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/broserJobs/experienceIcon.svg"
                      alt="icon"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src="/images/broserJobs/locationIcon.svg"
                      alt="icon"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* <div className="mt-3 flex items-center gap-2">
                  {job.openings > 0 && (
                    <span className="text-[11px] bg-blue-50 text-[#039BE6] px-2 py-0.5 rounded-full font-medium">
                      {job.openings} opening{job.openings !== 1 ? "s" : ""}
                    </span>
                  )}
                  <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {job.employmentType}
                  </span>
                </div> */}

                <div className="mt-4 content">
                  {job.skills.slice(0, 4).map((s, i) => (
                    <span key={i} className="me-2">
                      <span className="me-1">•</span>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6">
            <button onClick={handlePrevPage} className="cursor-pointer">
              <img src="/images/broserJobs/Arrowleft.svg" alt="arrow" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full content-semibold cursor-pointer ${
                  currentPage === page
                    ? "bg-gray-200 font-semibold"
                    : "text-black"
                }`}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNextPage} className="cursor-pointer">
              <img src="/images/broserJobs/Arrowright.svg" alt="arrow" />
            </button>
          </div>
        </div>

        <div
          ref={detailsRef}
          key={selectedJob.id}
          className={`lg:col-span-2 border border-gray-200 rounded-xl w-full ${animate ? "animate-fadeIn" : "opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border border-[#ECECEC] rounded-t-xl p-4 sm:p-6">
            <div>
              <h3 className="subheading-bold capitalize">
                {selectedJob.title}
              </h3>
              <span className="text-xs text-gray-400 font-mono">
                {selectedJob.jobID}
              </span>
              <div className="flex flex-wrap gap-3 mt-2 content">
                <div className="flex items-center gap-1">
                  <img
                    src="/images/broserJobs/experienceIcon.svg"
                    alt="icon"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  />
                  <span>{selectedJob.experience}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/images/broserJobs/locationIcon.svg"
                    alt="icon"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/images/broserJobs/clockone.svg"
                    alt="icon"
                    className="h-3.5 w-3.5"
                  />
                  <span className="text-[10px] sm:text-[12px] font-roboto">
                    {timeAgo(selectedJob.time)}
                  </span>
                </div>
              </div>
            </div>
            <a
              href={getApplyUrl(selectedJob)}
              className="bg-[#039BE6] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-3 cursor-pointer font-montserrat"
            >
              Apply now
              <img
                src="/images/broserJobs/applyArrow.svg"
                alt="icon"
                className="w-[14px] h-[18px]"
              />
            </a>
          </div>
          <div className="flex flex-wrap gap-4 px-4 sm:px-6 pt-5 small-text text-gray-600 !font-montserrat">
            <p>
              <strong className="text-black">Salary:</strong>{" "}
              {selectedJob.salary}
            </p>
            <p>
              <strong className="text-black">Education:</strong>{" "}
              {selectedJob.education}
            </p>
            <p>
              <strong className="text-black">Openings:</strong>{" "}
              {selectedJob.openings}
            </p>
          </div>
          {selectedJob.description ? (
            <div className="px-4 sm:px-6 pt-6">
              <h4 className="content-semibold mb-2 !font-montserrat">
                Overview
              </h4>
              <div
                className="
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
                  [&_ol]:list-decimal [&_ol]:pl-6
                  [&_li]:my-1
                  [&_p]:my-1
                  [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-4
                  [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-3
                  [&_strong]:font-semibold
                  prose-sm !font-inter leading-[165%]"
                dangerouslySetInnerHTML={{ __html: selectedJob.description }}
              />
            </div>
          ) : (
            <div className="px-4 sm:px-6 pt-6">
              <h4 className="content-semibold mb-2 !font-montserrat">
                Overview
              </h4>
              <p className="text-gray-400 text-sm ps-2">
                No description available.
              </p>
            </div>
          )}
          {selectedJob.qualificationCriteria ? (
            <div className="px-4 sm:px-6 pt-6">
              <h4 className="content-semibold mb-2 !font-montserrat">
                Qualification Criteria
              </h4>
              <div
                className="
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
                  [&_ol]:list-decimal [&_ol]:pl-6
                  [&_li]:my-1
                  [&_p]:my-1
                  [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-4
                  [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-3
                  [&_strong]:font-semibold
                  prose-sm !font-inter leading-[165%]"
                dangerouslySetInnerHTML={{
                  __html: selectedJob.qualificationCriteria,
                }}
              />
            </div>
          ) : (
            <div className="px-4 sm:px-6 pt-6">
              <h4 className="content-semibold mb-2 !font-montserrat">
                Qualification Criteria
              </h4>
              <p className="text-gray-400 text-sm ps-2">
                No qualification criteria available.
              </p>
            </div>
          )}
          <div className="mt-6 px-4 sm:px-6 space-y-2 small-text !font-montserrat">
            <p>
              <strong className="!font-semibold">Role:</strong>{" "}
              {selectedJob.role}
            </p>
            <p>
              <strong className="!font-semibold">Industry:</strong>{" "}
              {selectedJob.industry}
            </p>
            <p>
              <strong className="!font-semibold">Employment Type:</strong>{" "}
              {selectedJob.employmentType}
            </p>
          </div>
          {selectedJob.skills.length > 0 && (
            <div className="mt-6 px-4 sm:px-6">
              <h4 className="content-semibold mb-2">Skills</h4>
              <div className="flex flex-wrap gap-3 small-text !font-montserrat ps-2 sm:ps-4">
                {selectedJob.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="p-4 sm:p-6">
            <a
              href={getApplyUrl(selectedJob)}
              className="w-full sm:w-auto bg-[#039BE6] text-white px-5.5 py-3 rounded-lg shadow flex items-center justify-center gap-4 content cursor-pointer"
            >
              Apply now
              <img
                src="/images/broserJobs/applyArrow.svg"
                alt="icon"
                className="w-[28px] h-[28px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
