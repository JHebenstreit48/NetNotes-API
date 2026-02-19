import type { Subpage } from '@/types/navigation';

const EmailAndCommunication: Subpage = {
  name: 'Email & Communication',
  subpages: [
    {
      name: 'SMTP',
      path: '/tcpip-model/layers/application/basics/email-and-communication/smtp',
    },
    {
      name: 'IMAP',
      path: '/tcpip-model/layers/application/basics/email-and-communication/imap',
    },
  ],
};

export default EmailAndCommunication;