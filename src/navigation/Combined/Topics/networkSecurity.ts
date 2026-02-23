import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/Individual/Topics/NetworkSecurity/Fundamentals'
import ACLs from '@/navigation/Individual/Topics/NetworkSecurity/ACLs';
import AccessControl from '@/navigation/Individual/Topics/NetworkSecurity/AccessControl';
import Firewalls from '@/navigation/Individual/Topics/NetworkSecurity/Firewalls';
import VPNAndTunneling from '@/navigation/Individual/Topics/NetworkSecurity/VPNAndTunneling';
import IDSIPS from '@/navigation/Individual/Topics/NetworkSecurity/IDSIPS';
import NetworkControls from '@/navigation/Individual/Topics/NetworkSecurity/NetworkControls';
import SegmentZeroTrust from '@/navigation/Individual/Topics/NetworkSecurity/SegmentZeroTrust';

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