import corporateBannerImage from "../../../assets/images/corporate-banner-img.png";
const CorporateBanner = () => {
  return (
    <section className="bg-MidNight px-5">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 pt-24 lg:pt-10 gap-10">
        <div className="flex flex-col justify-center items-center lg:items-start gap-4 py-10">
          <h2 className="text-white text-[35px] xl:text-[58px] font-bold font-Poppins text-center lg:text-left">
            Our <span className="text-ReddishOrange">consultation</span> is
            always in sync with your strategy
          </h2>
          <p className="text-base font-Inter text-AquaHaze leading-[160%] opacity-75 text-center lg:text-left">
            Scelerisque dignissim in leo at magna donec mi metus ipsum luctus
            nam elit sociis luctus et aliquam libero.
          </p>
          <button className="py-[14px] px-[17px] bg-ReddishOrange font-Lato text-[20px] font-semibold text-center text-white hover:bg-ReddishOrange rounded-[5px] w-fit">
            Our Services
          </button>
        </div>
        <div className="flex items-end justify-center">
          {/* img */}
          <img src={corporateBannerImage} className="w-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CorporateBanner;
