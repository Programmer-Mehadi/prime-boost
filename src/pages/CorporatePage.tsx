import CorporateNavbar from "../components/Corporate/Navbar/CorporateNavbar";
import CorporateBanner from "../components/Corporate/Sections/CorporateBanner";
import CareFeatures from "../components/Corporate/Sections/CareFeatures";
import CorporateAbout from "../components/Corporate/Sections/CorporateAbout";
import OurServices from "../components/Corporate/Sections/OurServices";
import ProjectAndCase from "../components/Corporate/Sections/ProjectAndCase";
import GetFreeConsultations from "../components/Corporate/Sections/GetFreeConsultations";
import OurTeam from "../components/Corporate/Sections/OurTeam";
import Subscribe from "../components/Corporate/Sections/Subscribe";
import CorporateFooter from "../components/Corporate/Footer/CorporateFooter";
import WhoWeAre from "../components/Corporate/Sections/WhoWeAre";

const CorporatePage = () => {
  return (
    <section>
      {/* navbar  */}
      <CorporateNavbar />
      {/* banner */}
      <CorporateBanner />
      {/* care features */}
      <CareFeatures />
      {/* About */}
      <CorporateAbout />
      {/* our services */}
      <OurServices />
      {/* WhoWeAre */}
      <WhoWeAre />
      {/* project and case */}
      <ProjectAndCase />
      {/* get free consultations */}
      <GetFreeConsultations />
      {/* our team */}
      <OurTeam />
      {/* subscribe */}
      <Subscribe />
      {/* footer */}
      <CorporateFooter />
    </section>
  );
};

export default CorporatePage;
