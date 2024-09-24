import GetPivien from "./GetPivien/GetPivien";
import AvailableServers from "./CTA/CTA";
import MyVPN from "./MyVPN/MyVPN";
import InternetSecurity from "./InternetSecurity/InternetSecurity";
import DecentralisedVPN from "./DecentralisedVPN/DecentralisedVPN";
import VPNRoadmap from "./VPNRoadmap/VPNRoadmap";
import TotalSupply from "./Investors/Investors";
import GlobalServer from "./GlobalServer/GlobalServer";
import Connect from "./Connect/Connect";
import PrivacyGuard from "./PrivacyGuard/PrivacyGuard";
import FirstMover from "./FirstMover/FirstMover"
import HybridVpn from "./HybridVPN/HybridVpn";
import PrivacyStorage from "./PrivacyStorage/PrivacyStorage"
import OneHome from "./OneHome/OneHome";
import OneTravel from "../OneTravel/OneTravel";
import Investors from "./Investors/Investors";
import CTA from "./CTA/CTA";
import CompetitiveEdge from "./CompetitiveEdge/CompetitiveEdge";

const Home = () => {
  return (
    <div className="container mx-auto px-8 mt-8 overflow-hidden"> {/* Parent container */}      
      {/* HERO */}
      <GetPivien />

      {/* 2 */}
      <DecentralisedVPN />

      {/* 3 */}
      <MyVPN />

      {/* 4 */}
      <InternetSecurity />
      
      {/* 5 */}
      <PrivacyGuard />

      {/* 6 */}
      <FirstMover />
      
      {/* 7 */}
      <HybridVpn />

      {/* 8 */}
      {/* <PrivacyStorage /> */}

      {/* Component: VPNRoadmap */}
      {/* <VPNRoadmap /> */}

      {/* 10 */}
      <OneHome />
      
      {/* 11 */}
      <OneTravel />

      {/* 12 */}
      <CompetitiveEdge />
      <Investors />

      {/* 13 */}
      {/* <CTA />
      <Connect /> */}
      {/* Component: GlobalServer */}
      <GlobalServer />
    </div>
  );
};

export default Home;
