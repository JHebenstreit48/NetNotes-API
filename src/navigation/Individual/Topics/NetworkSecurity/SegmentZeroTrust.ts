import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/SegmentZeroTrust/Advanced';

const SegmentZeroTrust: Subpage = {
  name: 'Segment Zero Trust',
  subpages: [
    Basics,
    Advanced
  ],
};

export default SegmentZeroTrust;