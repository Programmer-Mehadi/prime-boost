import image1 from "../../../assets/images/person-1.png";
import image2 from "../../../assets/images/image-1.png";

const CorporateAbout = () => {
  return (
    <section className="bg-white px-5 pb-10">
      <div className="max-w-[1200px] mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="grid md:grid-cols-2 gap-10">
            <img src={image1} className="w-full" alt="" />
            <div className="flex items-end">
              <img src={image2} className="pt-14 w-full"  alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-ReddishOrange font-Poppins text-[20px] font-[500] tracking-[4.2px]">
              About
            </p>
            <h2 className="text-[37px] md:text-[48px] font-Poppins font-[600] leading-[140%] mt-3">
              Influencer Marketing for Your Business
            </h2>
            <p className="text-BattleShip font-Poppins text-base my-6">
              With over 25 years of experience, we have crafted thousands of
              Strategic discovery process that enables us to peel back the
              Layers which enable us to understand, connect, represent and
              Dominate your market.
            </p>
            <button className="py-[14px] px-[17px] bg-ReddishOrange text-[16px] font-semibold text-center text-white hover:bg-ReddishOrange rounded-[5px] w-fit">
              Phone Number: +002698 22 33
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateAbout;
