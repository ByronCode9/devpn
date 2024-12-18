import Hero from "./Hero/Hero";
import CustomerAssurance from "./CustomerAssurance/CustomerAssurance";
import PrivacySolutions from "./PrivacySolutions/PrivacySolutions";
import GlobalServer from "./GlobalServer/GlobalServer";
import PrivacyGuard from "./PrivacyGuard/PrivacyGuard";
import FirstMover from "./FirstMover/FirstMover"
import NewTec from "./NewTec/NewTec";
import HybridPrivacy from "./HybridPrivacy/HybridPrivacy";
import InvestorAssurance from "../InvestorAssurance/InvestorAssurance";
import Investors from "./Investors/Investors";
import CompetitiveEdge from "./CompetitiveEdge/CompetitiveEdge";
import PrivacyMail from "./PrivacyMail/PrivacyMail";
import VPNRoadmap from "./VPNRoadmap/VPNRoadmap";

const Home = () => {
  return (
    <div className="container mx-auto px-8 py-10"> {/* Parent container */}      

      <Hero />

      {/* 2 */}
      <PrivacySolutions />

      {/* 3 */}
      <CustomerAssurance />

      {/* 4 */}
      <PrivacyGuard />
      
      {/* 5 */}
      <PrivacyMail />

      {/* 6 */}
      <FirstMover />
      
      {/* 7 */}
      <NewTec />

      {/* 8 */}
      {/* <PrivacyStorage /> */}

      {/* Component: VPNRoadmap */}
      <VPNRoadmap />

      {/* 10 */}
      <HybridPrivacy />
      
      {/* 11 */}
      <InvestorAssurance />

      {/* 12 */}
      <CompetitiveEdge />
      {/* <Investors /> */}

      {/* 13 */}
      {/* <CTA />
      <Connect /> */}
      {/* Component: GlobalServer */}
      {/* <GlobalServer /> */}
    </div>
  );
};

export default Home;
