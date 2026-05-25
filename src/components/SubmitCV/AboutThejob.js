import React, { useState, useEffect } from "react";
import { timeAgo } from "@/utils/commonFunctions";

export default function AboutTheJob() {
  const [showDetails, setShowDetails] = useState(false);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedJob = localStorage.getItem("job");
      if (storedJob) {
        setJob(JSON.parse(storedJob));
      }
    } catch (err) {
      console.error("Invalid job data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  if (!job) return null;
  return (
    <section aria-label="Job details section ">
      <div className="bg-white !font-roboto">
        <div className="w-full  pt-16 px-4 md:px-14 lg:px-[100px]">
          <p className="text-[#0277BD] main-subheading font-roboto mb-4">
            You are applying for
          </p>

          <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E9EAEB] shadow-[0px_4px_8px_0px_#00000014]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row md:flex-row md:items-center justify-between gap-3">
                <h2 className="content-semibold text-[#333333]  capitalize flex items-center md:block">
                  {job.title}
                </h2>

                <div className="flex items-center  gap-3 ">
                  <div className="hidden md:flex items-center gap-1 whitespace-nowrap">
                    <img
                      src="/images/broserJobs/clockone.svg"
                      alt="icon-of-time"
                      className="md:h-6 md:w-6 h-3 w-3"
                    />
                    <span className="md:text-[14px]  text-black font-roboto">
                      {timeAgo(job.time)}
                    </span>
                  </div>

                  {!showDetails && (
                    <button
                      onClick={() => setShowDetails(true)}
                      aria-expanded={showDetails}
                      className="bg-[#039BE6]  text-white  rounded-lg Common_btn shadow-[0_4px_8px_#00000029] font-montserrat cursor-pointer"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
              <div className=" flex md:hidden items-center gap-1 whitespace-nowrap">
                <img
                  src="/images/broserJobs/clockone.svg"
                  alt="icon-of-time"
                  className="md:h-6 md:w-6 h-3 w-3"
                />
                <span className="md:text-[14px] text-[11px]  text-black font-roboto">
                  {timeAgo(job.time)}
                </span>
              </div>

              <div className="flex flex-wrap gap-3  md:gap-6 mt-2 small-text !font-roboto">
                <div className="flex items-center gap-1">
                  <img
                    src="/images/broserJobs/experienceIcon.svg"
                    alt="icon"
                    className="h-5 w-5"
                  />
                  <span>{job.experience}</span>
                </div>

                <div className="flex items-center gap-1">
                  <img
                    src="/images/broserJobs/locationIcon.svg"
                    alt="icon"
                    className="h-5 w-5"
                  />
                  <span>{job.location}</span>
                </div>

                {job.Building && (
                  <div className="flex items-center gap-1">
                    <img
                      src={job.Buildingimage}
                      alt="icon"
                      className="h-5 w-5"
                    />
                    <span>{job.Building}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4  flex flex-wrap gap-2 pb-6 content !font-roboto">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 pt-2 capitalize"
                >
                  <span>•</span>
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="w-full  pt-4 px-2 md:px-6 lg:px-25 ">
          <div className="bg-white border border-[#E9EAEB] rounded-xl  shadow-[0_4px_8px_#00000014] relative">
            <div className="m-2">
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 text-[#B3B3B3] md:p-6 hover:text-black cursor-pointer "
              >
                <img
                  src="/images/SubmitCv/cross.svg "
                  alt=" icon"
                  className="h-4 w-4 md:h-8 md:w-8"
                />
              </button>
            </div>
            <div className=" py-6 md:py-[52px] px-4 md:px-[30px] ">
              <div className=" md:mb-6">
                <h3 className="content-semibold leading-[100%] text-black mb-3 !font-montserrat ">
                  Overview
                </h3>
                {/* <p className=" small-text leading-[165%] text-black lg:ps-2 !font-inter">
                  {job.description}
                </p> */}
                <div
                  className="small-text leading-[165%] text-black lg:ps-2 !font-inter"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>
              <div className="mb-6">
                <h3 className=" content-semibold leading-[100%] text-black mb-3 !Sfont-montserrat">
                  Responsibilities
                </h3>

                <div className="space-y-3 lg:ps-2 !font-inter">
                  {job.responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <p className=" inline-block md:w-1.5 md:h-1.5 w-0.5 h-0.5 bg-black rounded-full mt-2 flex-shrink-0"></p>
                      <p className=" small-text text-black ">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 space-y-2 content  !font-montserrat">
                <p className=" small-text leading-[165%] text-black">
                  <span className="!font-semibold">Role :</span> {job.role}
                </p>

                <p className=" small-text leading-[165%] text-black">
                  <span className="!font-semibold">Industry :</span>{" "}
                  {job.industry}
                </p>

                <p className="small-text leading-[165%] text-black">
                  <span className="!font-semibold">Employement Type :</span>{" "}
                  {job.employmentType}
                </p>
              </div>

              <div>
                <h3 className=" content-semibold leading-[100%] text-black mb-3">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-3  lg:ps-2 lg:pb-10">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="  small-text !font-montserrat leading-[165%] text-black"
                    >
                      • {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
