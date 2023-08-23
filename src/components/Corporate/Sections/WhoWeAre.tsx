import whoWeAre from "../../../assets/images/who-we-are.png";
import whoWeAreTwo from "../../../assets/images/who-we-are-2.png";

const WhoWeAre = () => {
  return (
    <section className="bg-white px-5">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 py-24">
        {/* left */}
        <div className="relative">
          <img src={whoWeAre} className="w-[80%] h-auto" alt="" />
          <img src={whoWeAreTwo} className="absolute right-0 bottom-0" alt="" />
        </div>
        {/* right */}
        <div className="flex flex-col justify-end">
          <p className="text-ReddishOrange font-Poppins text-[20px] font-[500] tracking-[4.2px]">
            Who We Are
          </p>
          <h2 className="text-[37px] md:text-[48px] font-Poppins font-[600] leading-[140%] mt-3">
            Have A Project In Mind? Let’s Get To Work.
          </h2>
          <p className="text-BattleShip font-Poppins text-base my-6">
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium totam rem apereaque abillo inventore veritatis
            quasi architecto beatae
          </p>
          <p className="text-BattleShip font-Poppins text-base my-2">
            1. Business Planning, Strategy
          </p>
          <p className="text-BattleShip font-Poppins text-base my-2">
            2. Financial Projections And Analysis
          </p>
          <p className="text-BattleShip font-Poppins text-base my-2">
            3.International Business Opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
