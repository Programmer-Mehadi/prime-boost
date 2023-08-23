import servicesOne from "../../../assets/images/services-1.png";
import servicesTwo from "../../../assets/images/services-2.png";

const OurServices = () => {
  return (
    <section className="bg-MidNight px-5 py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col  md:items-center">
        <p className="text-ReddishOrange font-Poppins text-[20px] font-[500] tracking-[4.2px]">
          Our Services
        </p>
        <h2 className="text-[30px] md:text-[48px] font-Poppins font-[600] leading-[140%] mt-3 text-white">
          Amazing Business Services
        </h2>
        {/* card list */}
        <div className="grid md:grid-cols-2 gap-16 mt-14 md:mt-24">
          {/* card one */}
          <div className="relative">
            <div className="">
              <img src={servicesOne} className="w-full" alt="" />
            </div>
            <div
              className="flex flex-col justify-end gap-4 h-full absolute top-0 px-9 pb-8"
              style={{
                background:
                  "linear-gradient(1deg, #FD5C30 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <h2 className="text-white font-Poppins text-xl md:text-[30px] font-[600]">
                Technical Analysis
              </h2>
              <p className="text-white font-Poppins text-base leading-[160%]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going
              </p>
            </div>
          </div>
          {/* card two */}
          <div className="relative">
            <div className="">
              <img src={servicesTwo} className="w-full" alt="" />
            </div>
            <div
              className="flex flex-col justify-end gap-4 h-full absolute top-0 px-9 pb-8"
              style={{
                background:
                  "linear-gradient(1deg, #FD5C30 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <h2 className="text-white font-Poppins text-xl md:text-[30px] font-[600]">
                Technical Analysis
              </h2>
              <p className="text-white font-Poppins text-base leading-[160%]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
