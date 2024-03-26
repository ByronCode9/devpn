import GetPivien from "./GetPivien/GetPivien";
import spinAbstract from "../../../src/assets/OBJECTS.svg";
import AvailableServers from "./AvailableServers/AvailableServers";
import MyVPN from "./MyVPN/MyVPN";
import InternetSecurity from "./InternetSecurity/InternetSecurity";
import DecentralisedVPN from "./DecentralisedVPN/DecentralisedVPN";
import VPNRoadmap from "./VPNRoadmap/VPNRoadmap";
import TotalSupply from "./TotalSupply/TotalSupply";
import GlobalServer from "./GlobalServer/GlobalServer";
import Connect from "./Connect/Connect";

const Home = () => {
  return (
    <div className="container mx-auto px-8 mt-16 overflow-hidden"> {/* Parent container */}      
      {/* Component: GetPivien */}
      <GetPivien />

      {/* Component: AvailableServers */}
      <AvailableServers />

      {/* Component: MyVPN */}
      <MyVPN />
      
      {/* Component: InternetSecurity */}
      <InternetSecurity />
      <Connect />
      {/* Component: DecentralisedVPN */}
      <DecentralisedVPN />



      {/* Component: VPNRoadmap */}
      <VPNRoadmap />

      {/* Component: TotalSupply */}
      <TotalSupply />

      {/* Component: GlobalServer */}
      <GlobalServer />
    </div>
  );
};

export default Home;
