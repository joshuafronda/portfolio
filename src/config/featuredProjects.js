/**
 * Featured projects config – single source of truth for Hero "Featured Projects".
 * Each project has a stable id, links (live + optional github), and display metadata.
 */

export const FEATURED_PROJECTS = Object.freeze([
  {
    id: 'easytizen',
    name: 'EASYtizen: An Integrated Web and Mobile Application for Document Requests and Data Analytics',
    description: 'Experience the future of barangay management with our innovative digital platform.',
    technologies: [''],
    links: {
      live: 'https://fir-config-6ca5c.web.app/developer',
    },
  },
  {
    id: 'muni-manage',
    name: 'Muni-Manage',
    description: 'Municipal management and developer dashboard for local government operations.',
    technologies: [''],
    links: {
      live: 'https://muni-manage.vercel.app/',
    },
  },
  {
    id: 'careconnect',
    name: 'CareConnect + Pay',
    description: 'Healthcare and payments platform with developer-focused tools.',
    technologies: [''],
    links: {
      live: 'https://careconnect-iota.vercel.app/#/dev',
    },
  },
  {
    id: 'sentinel-flow',
    name: 'Sentinel Flow',
    description: 'Observability and workflow platform with developer dashboard.',
    technologies: [''],
    links: {
      live: 'https://sentinel-flow.vercel.app/',
    },
  },
]);
