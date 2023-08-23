import personOne from "../../../assets/images/team-person-1.png";
import personTwo from "../../../assets/images/team-person-2.png";
import personThree from "../../../assets/images/team-person-3.png";

const OurTeam = () => {
  return (
    <section className="bg-white px-5 mt-16 pb-16">
      <div className="max-w-[1600px] mx-auto flex flex-col  md:items-center">
        <p className="text-ReddishOrange font-Poppins text-[20px] font-[500] tracking-[4.2px] ">
          Meet Our Team
        </p>
        <h2 className="text-[28px] md:text-[38px] font-Poppins font-[600] leading-[140%] mt-3 text-MidNight">
          Experience Team Members
        </h2>
        {/* card list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-16 mt-14 md:mt-24">
          {/* card one */}
          <div className="relative">
            <div className="">
              <img src={personOne} className="w-full" alt="" />
            </div>
            <div className="flex flex-col justify-end gap-2  px-7 pb-8">
              <h2 className="text-MidNight font-Poppins text-xl md:text-[30px] lg:text-[20px] font-[600] mt-6">
                Robert C. Simmons
              </h2>
              <p className="text-[#676972] font-Poppins text-base leading-[160%]">
                Business Consultant
              </p>
            </div>
          </div>
          {/* card two */}
          <div className="relative">
            <div className="">
              <img src={personTwo} className="w-full" alt="" />
            </div>
            <div className="flex flex-col justify-end gap-2  px-7 pb-8">
              <h2 className="text-MidNight font-Poppins text-xl md:text-[30px] lg:text-[20px] font-[600] mt-6">
                Christopher L. Wagner
              </h2>
              <p className="text-[#676972] font-Poppins text-base leading-[160%]">
                Senior Manager
              </p>
            </div>
          </div>
          {/* card three */}
          <div className="relative">
            <div className="">
              <img src={personThree} className="w-full" alt="" />
            </div>
            <div className="flex flex-col justify-end gap-2  px-7 pb-8">
              <h2 className="text-MidNight font-Poppins text-xl md:text-[30px] lg:text-[20px] font-[600] mt-6">
                Lawrence C. Dickerson
              </h2>
              <p className="text-[#676972] font-Poppins text-base leading-[160%]">
                Financial Consultant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
