/**
 * Certifications config – single source of truth for the Certifications section.
 * - issuerUrl: link to issuer website (used by "Link to website" button).
 * - credentialUrl: Show credential / verify page (e.g. LinkedIn, Credly).
 * - certificatePdf: path or URL to PDF (e.g. /certificates/tech-nexus.pdf).
 * Preview certificate uses certificatePdf first, then credentialUrl.
 */

export const CERTIFICATIONS = Object.freeze([
  {
    id: 'adb-cybersecurity',
    issuer: 'Asian Development Bank (ADB)',
    title: 'Cybersecurity',
    issued: 'Dec 2025',
    expires: null,
    credentialId: '145749-176-472-9154',
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://elearning-adbi.org/certificate-verifier/?code=145749-176-472-9154',
  },
  {
    id: 'oracle-ai-foundations',
    issuer: 'Oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issued: 'Dec 2025',
    expires: 'Dec 2027',
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F82EBABBDFB37C7AB4CE28FB16B402AADF6FD605E5A09DB8E39DC5DD5501BABC',
  },
  {
    id: 'cisco-data-science',
    issuer: 'Cisco',
    title: 'Introduction to Data Science',
    issued: 'Nov 2025',
    expires: null,
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://www.credly.com/badges/4e4c7ec5-f482-489c-88f1-925294d5eb73/linked_in_profile',
  },
  {
    id: 'shell-science-tech',
    issuer: 'Pilipinas Shell Foundation, Inc.',
    title: 'Science and Technology Education Program',
    issued: 'Aug 2025',
    expires: null,
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://www.shell.com.ph',
  },
  {
    id: 'shell-milestone',
    issuer: 'Pilipinas Shell Foundation, Inc.',
    title: 'The Milestone Awardee',
    issued: 'Aug 2025',
    expires: null,
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://www.shell.com.ph',
  },
  {
    id: 'shell-lead',
    issuer: 'Pilipinas Shell Foundation, Inc.',
    title: 'Leadership Enhancement and Attitude Development (LEAD) Workshop',
    issued: 'Jun 2025',
    expires: null,
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://www.shell.com.ph',
  },
  {
    id: 'aws-cloud-architecting',
    issuer: 'Amazon Web Services (AWS)',
    title: 'AWS Academy Graduate - AWS Academy Cloud Architecting',
    issued: 'May 2025',
    expires: null,
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://www.credly.com/badges/9191b1f2-9adc-4632-82da-5118b8b03e47/linked_in_profile',
  },
  {
    id: 'aws-cloud-foundations',
    issuer: 'Amazon Web Services (AWS)',
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issued: 'Apr 2025',
    expires: null,
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    issuerUrl: 'https://www.credly.com/badges/537d722d-b935-4627-af8b-163b11f7ec1b/linked_in_profile',
  },
  {
    id: 'devcon-tech-nexus',
    issuer: 'DEVCON Philippines',
    title: 'Tech Nexus 2024: Empowering Campus Innovators',
    issued: 'Dec 2024',
    expires: null,
    credentialId: null,
    credentialUrl: null,
    certificatePdf: null,
    /** Image from src/assets (Devcon.jpg). Mapped in Certifications.jsx. */
    certificateImage: 'Devcon.jpg',
    issuerUrl: 'https://devcon.ph',
  },
]);

/**
 * Certificate of Competition – modal with images from src/assets.
 */
export const CERTIFICATE_OF_COMPETITION = Object.freeze({
  id: 'huawei-ict-2025',
  role: 'National Competition as COACH in TEAM NEXT CS',
  event: 'Huawei ICT Competition 2025–2026 Philippines',
  prize: 'Second Prize — Innovation Track',
  issued: 'December 5, 2025',
  /** Image keys mapped to assets in Certifications.jsx (Cert-Compe.jpg, Compe.jpg). */
  images: ['Cert-Compe.jpg', 'Compe.jpg'],
});
