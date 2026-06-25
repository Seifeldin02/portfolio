export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  credentialUrl: string;
  image: string;
  imageAlt: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    issuer: 'Amazon Web Services Training and Certification',
    description: 'Completed the AWS Academy Cloud Foundations course.',
    credentialUrl: 'https://www.credly.com/badges/3e6f5b97-37b8-4902-bc1f-e44be781f77e',
    image: '/certifications/aws-academy-cloud-foundations.png',
    imageAlt: 'AWS Academy Cloud Foundations trained badge',
    skills: ['AWS Architecture', 'AWS Cloud', 'AWS Core Services', 'AWS Pricing', 'AWS Support'],
  },
];
