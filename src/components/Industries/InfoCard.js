export default function InfoCard({ icon, title, description }) {
  return (
    <div
      className=" h-full relative
          bg-white/65
          rounded-2xl
          overflow-hidden
          p-6
          text-center
          border-t-8 border-[#AED3E9]
          min-h-[200px]
          sm:min-h-[250px]
          transition-all
          duration-300
          ease-out
          shadow-[0px_4px_16px_0px_#00000014,_inset_0px_2px_24px_0px_#039BE614]
          lg:shadow-[0px_4px_16px_0px_#00000014]
          hover:shadow-[0px_8px_16px_0px_#00000025,_inset_0px_2px_16px_0px_#039BE625]
          lg:hover:shadow-[0px_8px_16px_0px_#00000025]"
    >
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div className="flex justify-center mb-4">
            <div
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white ring-2 ring-white shadow-[0px_4px_8px_4px_rgba(3,155,230,0.2)]"
              style={{
                background: "linear-gradient(135deg, #039BE6, #0277BD)",
              }}
            >
              {icon}
            </div>
          </div>
        </div>
        <h3 className="card-heading text-center">{title}</h3>
        <p className="card-content text-center mt-2">{description}</p>
      </div>
    </div>
  );
}
