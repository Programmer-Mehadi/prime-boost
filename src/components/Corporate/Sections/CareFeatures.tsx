
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos, faUikit } from "@fortawesome/free-brands-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
const CareFeatures = () => {
  return (
    <section className="bg-white px-5 py-28">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-ReddishOrange font-Poppins text-[20px] font-[500] text-center tracking-[4.2px]">
          CARE FEATURES
        </p>
        <h2 className="text-MidNight font-Poppins text-[27px] md:text-[38px] font-semibold text-center mt-4">
          Awesome Service With Our Tools
        </h2>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* card 1 */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="w-[60px] h-[60px]"
              icon={faAppStoreIos}
            />
            <h2 className="mt-9 text-MidNight text-[28px] font-[500] font-Poppins">
              App Development
            </h2>
            <p className="text-center max-w-[293px] mx-auto text-MountainMist text-lg font-Poppins mt-3">
              Helping families live intelligently means we’re always working to
              bring our customers.
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="w-[60px] h-[60px]"
              icon={faCloudArrowUp}
            />
            <h2 className="mt-9 text-MidNight text-[28px] font-[500] font-Poppins">
              Cloud Storage
            </h2>
            <p className="text-center max-w-[293px] mx-auto text-MountainMist text-lg font-Poppins mt-3">
              Helping families live intelligently means we’re always working to
              bring our customers.
            </p>
          </div>
          {/* card 3 */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className="w-[60px] h-[60px]" icon={faUikit} />
            <h2 className="mt-9 text-MidNight text-[28px] font-[500] font-Poppins">
              UX Planning
            </h2>
            <p className="text-center max-w-[293px] mx-auto text-MountainMist text-lg font-Poppins mt-3">
              Helping families live intelligently means we’re always working to
              bring our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareFeatures;
