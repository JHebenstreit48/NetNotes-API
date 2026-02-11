import { Subpage } from "@/types/navigation";

import routeSwitch from "@/Navigation/Combined/Topics/routeAndSwitch";
import networkSecurity from "@/Navigation/Combined/Topics/networkSecurity";
import voip from "@/Navigation/Combined/Topics/voip";
import certifications from "@/Navigation/Combined/Topics/certifications";
import tools from "@/Navigation/Combined/Topics/tools";

const pages: Subpage[] = [
  routeSwitch,
  networkSecurity,
  voip,
  certifications,
  tools
];

export default pages;