import Link from "next/link";
export default function Common() {
  return (
    <section className="px-4 md:px-14 lg:px-[100px] pt-[70px] pb-6 md:pb-[30px] lg:pb-[60px] -mt-[10px] relative z-10">
      <div className="relative overflow-hidden bg-[var(--color-deep-blue)] text-white rounded-[2rem] flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-14 py-12 md:py-16 px-6 w-full">
        
        <img
          className="hidden lg:block absolute top-0 left-0"
          alt="top-right-arc"
          src="/images/homepage/rightFirst1.svg"
        />

        <img
          alt="top-right-arc"
          className="hidden lg:block absolute top-0 left-0"
          src="/images/homepage/rightfirst.svg"
        />

        <img
          alt="top-left-arc"
          className="hidden lg:block absolute top-0 right-0"
          src="/images/homepage/lefftsecond.svg"
        />

        <img
          alt="top-left-arc"
          className="hidden lg:block absolute top-0 right-0"
          src="/images/homepage/leftfirst.svg"
        />

        {/* Content */}
        <div className="text-center max-w-3xl">
          <h2 className="heading font-extrabold mb-3 leading-tight">
            Ready to take your next step?
          </h2>

          <p className="content sm:text-base md:text-lg opacity-90">
            Connect with highly skilled professionals or discover your next
            career opportunity
          </p>
        </div>

        {/* CTA Actions */}
        <nav
          aria-label="Career actions"
          className="flex sm:flex-row gap-5 md:gap-8 w-full justify-center items-center"
        >
          <Link
            href="/jobs/browse-jobs"
            className="w-full bg-[var(--color-primary-hover)] lg:bg-transparent sm:w-auto sm:min-w-[220px] lg:min-w-[250px] flex flex-col justify-center items-center rounded-2xl lg:border-2 lg:border-white py-3 md:py-8 gap-1 text-base md:text-lg lg:text-xl lg:hover:bg-[var(--color-primary-hover)] hover:border-transparent transition cursor-pointer"
          >
            <img
              src="/images/homepage/chair.svg"
              className="w-8 h-5 md:w-10 md:h-10"
              alt="View job opportunities"
            />

            <p className="md:content small-text">View Jobs</p>
          </Link>

          <Link
            href="/get-in-touch"
            className="w-full bg-[var(--color-primary-hover)] lg:bg-transparent sm:w-auto sm:min-w-[220px] lg:min-w-[250px] flex flex-col justify-center items-center rounded-2xl lg:border-2 lg:border-white py-3 md:py-8 gap-1 text-base md:text-lg lg:text-xl lg:hover:bg-[var(--color-primary-hover)] hover:border-transparent transition cursor-pointer"
          >
            <img
              src="/images/homepage/students.svg"
              className="w-8 h-5 md:w-10 md:h-10"
              alt="Hire skilled professionals"
            />

            <p className="md:content small-text">Hire Talent</p>
          </Link>
        </nav>

      </div>
    </section>
  );
}