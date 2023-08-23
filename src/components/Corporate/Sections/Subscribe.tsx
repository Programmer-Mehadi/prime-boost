const Subscribe = () => {
  return (
    <section>
      <div className="bg-[#F3F3F3] max-w-[1264px] mx-auto mb-14">
        <div className="max-w-[820px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-10 gap-x-[45px] py-20">
            <div>
              <h2 className="font-Poppins text-[28px] font-[600]">
                Subscribe to Our Newsletter For Weekly Article Update.
              </h2>
              <p className="text-sm mt-6">
                Passages of lorem ipsum available, but the majority have
                suffered alteration, by injected words.
              </p>
            </div>
            <div className="flex items-center lg:justify-end lg:border-l border-black  ">
              <button className="py-[14px] px-[29px] bg-ReddishOrange text-[22px] font-semibold text-center text-white hover:bg-ReddishOrange rounded-[5px] w-fit lg:ml-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
