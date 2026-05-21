"use client";
import ChevronDown from "./ChevronDown";
import Link from "next/link";

export default function NavActions({
  mobile = false,
  openAction,
  setOpenAction,
  closeMenu,
}) {
  const isOpen = openAction === "jobs";
  if (mobile) {
    return (
      <div className="flex flex-col w-full border-t border-gray-200 pt-3 relative z-0">
        <div
          className="flex items-center justify-between w-full py-3 px-2 cursor-pointer text-blue-600"
          onClick={() => {
            console.log("openAction:", openAction, "isOpen:", isOpen);
            setOpenAction(isOpen ? null : "jobs");
          }}
        >
          {/* <span className="content cursor-pointer">See Jobs</span> */}
          <span className="nav-item cursor-pointer pointer-events-none">See Jobs</span>
          {/* <ChevronDown className={isOpen ? "rotate-180" : ""} /> */}
          <ChevronDown className={`pointer-events-none ${isOpen ? "rotate-180" : ""}`} />
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 border-l-4 border-[var(--color-primary)] ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* <div className="pl-4 flex flex-col gap-2"> */}
          {/* <div className="content pl-4 flex flex-col gap-2"> */}
          <div className="nav-item pl-4 flex flex-col gap-4">
            <Link href="/jobs/browse-jobs" onClick={closeMenu}>
              Browse Jobs
            </Link>
            <Link href="/jobs/submit-your-cv" onClick={closeMenu}>
              Submit your CV
            </Link>
          </div>
        </div>

     
        <Link
          href="/get-in-touch"
          onClick={closeMenu}
          className="nav-items mt-1 Common_btn w-fit bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md cursor-pointer"
          // className="mt-4 px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md cursor-pointer"
        >
          Get in touch
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5 relative">
      <div className="relative flex items-center">
        <div
          // className="content flex items-center gap-1 cursor-pointer font-medium text-[var(--color-primary)]"
          className="nav-item flex items-center gap-1 cursor-pointer font-medium text-[var(--color-primary)]"
          // className="flex items-center gap-1 cursor-pointer font-medium text-sm text-[var(--color-primary)]"
          onClick={(e) => {
            e.stopPropagation();

            if (isOpen) {
              setOpenAction(null);
            } else {
              setOpenAction("jobs");
            }
          }}
        >
          See Jobs
          <span
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown />
          </span>
        </div>

        {isOpen && (
          <div
            className="absolute left-0 top-full mt-2 z-50 w-48 bg-white shadow-lg rounded-md overflow-hidden border-l-4 border-l-[var(--color-primary)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/jobs/browse-jobs"
              onClick={closeMenu}
              className="nav-item block px-4 py-2 sm:py-2.5 md:py-3 hover:bg-gray-100 hover:text-[var(--color-primary)]"
              // className="block px-4 py-2 content hover:bg-gray-100 hover:text-[var(--color-primary)]"
              // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)]"
            >
              Browse Jobs
            </Link>

            <Link
              href="/jobs/submit-your-cv"
              onClick={closeMenu}
              className="nav-item block px-4 py-2 nav-item hover:bg-gray-100 hover:text-[var(--color-primary)]"
              // className="block px-4 py-2 content hover:bg-gray-100 hover:text-[var(--color-primary)]"
              // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)]"
            >
              Submit your CV
            </Link>
          </div>
        )}
      </div>

      <Link
        href="/get-in-touch"
        onClick={closeMenu}
        className="Common_btn bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md whitespace-nowrap cursor-pointer"
        // className="px-4 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md whitespace-nowrap cursor-pointer"
      >
        Get in touch
      </Link>
    </div>
  );
}
