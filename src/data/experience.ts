export type ExperienceRow = {
  org: string;
  url?: string;
  role: string;
  period: string;
};

// Newest first. Shown as a list on the home page.
export const experience: ExperienceRow[] = [
  {
    org: 'Critical Manufacturing',
    url: 'https://www.criticalmanufacturing.com',
    role: 'Senior Software Engineer, Data Platform',
    period: '2025 – now',
  },
  {
    org: 'Critical Manufacturing',
    url: 'https://www.criticalmanufacturing.com',
    role: 'Junior → Senior Software Engineer, WorkflowSystem for Infineon',
    period: '2020 – 25',
  },
  {
    org: 'FEUP, University of Porto',
    url: 'https://sigarra.up.pt/feup/en/',
    role: "Integrated Master's, Informatics & Computing Engineering",
    period: '2015 – 20',
  },
];
