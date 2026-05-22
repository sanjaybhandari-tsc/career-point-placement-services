export default function ExecutiveBanner() {
  return (
    <section className="pb-7 md:pb-10 lg:pb-[60px] relative flex justify-center items-center bg-gradient-to-b from-[#0277BD] to-[#0E6497] py-22 rounded-b-2xl overflow-hidden">
      <img
        className="absolute lg:top-0 lg:left-0 md:top-0 md:left-0 -top-10 -left-5"
        src="/images/permanentHiring/permanentTop1.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="absolute lg:top-0 lg:left-0 md:top-0 md:left-0 -top-10 -left-5"
        src="/images/permanentHiring/permanentTop2.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0 -top-10 -right-5"
        src="/images/permanentHiring/permanentTop3.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0 -top-10 -right-5"
        src="/images/permanentHiring/permanentTop4.svg"
        alt=""
        aria-hidden="true"
      />
      <h1 className="banner-heading font-montserrat text-white">
        Executive Search
      </h1>
    </section>
  );
}


