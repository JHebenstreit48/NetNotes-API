import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Topics/NetworkSecurity/Fundamentals'
import ACLs from '@/Navigation/Individual/Topics/NetworkSecurity/ACLs';
import AccessControl from '@/Navigation/Individual/Topics/NetworkSecurity/AccessControl';
import Firewalls from '@/Navigation/Individual/Topics/NetworkSecurity/Firewalls';
import VPNAndTunneling from '@/Navigation/Individual/Topics/NetworkSecurity/VPNAndTunneling';
import IDSIPS from '@/Navigation/Individual/Topics/NetworkSecurity/IDSIPS';
import NetworkControls from '@/Navigation/Individual/Topics/NetworkSecurity/NetworkControls';
import SegmentZeroTrust from '@/Navigation/Individual/Topics/NetworkSecurity/SegmentZeroTrust';

const networkSecurity: Subpage = {
  name: 'Network Security',
  subpages: [
    Fundamentals,
    ACLs,
    AccessControl,
    Firewalls,
    VPNAndTunneling,
    IDSIPS,
    NetworkControls,
    SegmentZeroTrust,
  ],
};

export default networkSecurity;