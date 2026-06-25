export interface Certification {
  id: string;
  type: 'certification' | 'education';
  title: string;
  issuer: string;
  description: string;
  credentialUrl: string;
  actionLabel: string;
  image?: string;
  imageAlt?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-foundations',
    type: 'certification',
    title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    issuer: 'Amazon Web Services Training and Certification',
    description: 'Completed the AWS Academy Cloud Foundations course.',
    credentialUrl: 'https://www.credly.com/badges/3e6f5b97-37b8-4902-bc1f-e44be781f77e',
    actionLabel: 'Verify on Credly',
    image: '/certifications/aws-academy-cloud-foundations.png',
    imageAlt: 'AWS Academy Cloud Foundations trained badge',
    skills: ['AWS Architecture', 'AWS Cloud', 'AWS Core Services', 'AWS Pricing', 'AWS Support'],
  },
];

export const educationCredentials: Certification[] = [
  {
    id: 'utm-bachelor-degree',
    type: 'education',
    title: 'Bachelor of Computer Science (Software Engineering) with Honours',
    issuer: 'Universiti Teknologi Malaysia',
    description: 'Degree verification is available through the UTM e-certificate QR page.',
    credentialUrl: 'https://bsea.utm.my/verQr?bsea=3957028063244',
    actionLabel: 'Verify with UTM',
    skills: ['Computer Science', 'Software Engineering', 'Academic credential'],
  },
];

export const credentials: Certification[] = [...certifications, ...educationCredentials];
