import consultations from "../../../assets/images/consultations.png";

const GetFreeConsultations = () => {
  return (
    <section className="py-16">
      <div className=" mx-auto relative min-h-[250px] md:h-auto">
        <img
          src={consultations}
          className="min-h-[250px] w-full object-cover"
          alt=""
        />
        <div className="h-full w-full absolute top-0 bg-[#031933B2]">
          <div className="grid md:grid-cols-[2fr,1fr] lg:grid-cols-[1fr,350px] max-w-[1200px] mx-auto h-full md:gap-8 px-5 ">
            <h2 className=" max-w-[70%] md:max-w-full self-end md:self-center text-white font-Poppins text-xl md:text-2xl lg:text-[34px] xl:text-[42px] md:leading-[150%] font-[700]">
              Get Free Consultations! We’re Ready to Work Together
            </h2>
            <button className="py-[14px] px-[17px] bg-ReddishOrange text-[14px] font-semibold text-center text-white hover:bg-ReddishOrange rounded-[5px] w-fit h-fit self-center md:ml-auto">
              Get Free Consultations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetFreeConsultations;
