import servicesOne from "../../../assets/images/project-1.png";
import servicesTwo from "../../../assets/images/project-2.png";
import servicesThree from "../../../assets/images/project-3.png";
import servicesFour from "../../../assets/images/project-4.png";

const ProjectAndCase = () => {
  return (
    <section className="bg-white px-5 mt-16 pb-16">
      <div className="max-w-[1600px] mx-auto flex flex-col  md:items-center">
        <p className="text-ReddishOrange font-Poppins text-[20px] font-[500] tracking-[4.2px]">
          Latest Project & Case
        </p>
        <h2 className="text-[28px] md:text-[38px] font-Poppins font-[600] leading-[140%] mt-3 text-MidNight">
          Let’s Looks Our Global Projects
        </h2>
        {/* card list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-14 md:mt-24">
          {/* card one */}
          <div className="relative">
            <div className="">
              <img src={servicesOne} className="w-full" alt="" />
            </div>
            <div
              className="flex flex-col justify-end gap-4 h-full absolute top-0 px-7 pb-8"
              style={{
                background:
                  "linear-gradient(1deg, #FD5C30 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <h2 className="text-white font-Poppins text-xl md:text-[30px] lg:text-[25px] font-[600]">
                Technical Analysis
              </h2>
              <p className="text-white font-Poppins text-base leading-[160%]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
            </div>
          </div>
          {/* card two */}
          <div className="relative">
            <div className="">
              <img src={servicesTwo} className="w-full" alt="" />
            </div>
            <div
              className="flex flex-col justify-end gap-4 h-full absolute top-0 px-7 pb-8"
              style={{
                background:
                  "linear-gradient(1deg, #FD5C30 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <h2 className="text-white font-Poppins text-xl md:text-[30px] lg:text-[25px] font-[600]">
                Technical Analysis
              </h2>
              <p className="text-white font-Poppins text-base leading-[160%]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
            </div>
          </div>
          {/* card three */}
          <div className="relative">
            <div className="">
              <img src={servicesThree} className="w-full" alt="" />
            </div>
            <div
              className="flex flex-col justify-end gap-4 h-full absolute top-0 px-7 pb-8"
              style={{
                background:
                  "linear-gradient(1deg, #FD5C30 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <h2 className="text-white font-Poppins text-xl md:text-[30px] lg:text-[25px] font-[600]">
                Technical Analysis
              </h2>
              <p className="text-white font-Poppins text-base leading-[160%]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
            </div>
          </div>
          {/* card four */}
          <div className="relative">
            <div className="">
              <img src={servicesFour} className="w-full" alt="" />
            </div>
            <div
              className="flex flex-col justify-end gap-4 h-full absolute top-0 px-7 pb-8"
              style={{
                background:
                  "linear-gradient(1deg, #FD5C30 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            >
              <h2 className="text-white font-Poppins text-xl md:text-[30px] lg:text-[25px] font-[600]">
                Technical Analysis
              </h2>
              <p className="text-white font-Poppins text-base leading-[160%]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAndCase;
