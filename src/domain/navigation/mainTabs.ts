import { Subpage } from "@/types/navigation";

import routeSwitch from "@/navigation/Combined/Topics/networking";
import networkSecurity from "@/navigation/Combined/Topics/networkSecurity";
import voip from "@/navigation/Combined/Topics/voip";
import certifications from "@/navigation/Combined/Topics/certifications";
import tools from "@/navigation/Combined/Topics/tools";

const pages: Subpage[] = [
  routeSwitch,
  networkSecurity,
  voip,
  certifications,
  tools
];

export default pages;