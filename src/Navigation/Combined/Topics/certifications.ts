import type { Subpage } from '@/types/navigation';

import Cisco from '@/Navigation/Individual/Topics/Certifications/Cisco';
// ------------------------- CompTIA Start -------------------------
import NetworkPlus from '@/Navigation/Individual/Granularized/Certifications/CompTIA/NetworkPlus';
import SecurityPlus from '@/Navigation/Individual/Granularized/Certifications/CompTIA/SecurityPlus';
// ------------------------- CompTIA End ---------------------------

// ------------------------- DevOps Start -------------------------
import AzureDevOps from '@/Navigation/Individual/Granularized/Certifications/DevOps/Azure';
import Docker from '@/Navigation/Individual/Granularized/Certifications/DevOps/Docker';
import Jenkins from '@/Navigation/Individual/Granularized/Certifications/DevOps/Jenkins';
import Kubernetes from '@/Navigation/Individual/Granularized/Certifications/DevOps/Kubernetes';
import Terraform from '@/Navigation/Individual/Granularized/Certifications/DevOps/Terraform';
// ------------------------- DevOps End ---------------------------

const certifications: Subpage = {
    name: 'Certifications',
    subpages: [
        Cisco,
        {
            name: 'CompTIA',
            subpages: [
                NetworkPlus,
                SecurityPlus
            ]
        },
        {
            name: 'DevOps',
            subpages: [
                AzureDevOps,
                Terraform,
                Docker,
                Kubernetes,
                Jenkins
            ]
        },
    ]
};

export default certifications;