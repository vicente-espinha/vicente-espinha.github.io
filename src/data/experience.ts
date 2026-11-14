export type Role = {
  title: string;
  period: string;
  summary: string;
};

export type Experience = {
  company: string;
  url?: string;
  location: string;
  period: string;
  roles: Role[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: 'Critical Manufacturing',
    url: 'https://www.criticalmanufacturing.com',
    location: 'Maia, Porto',
    period: '2020 — Now',
    roles: [
      {
        title: 'Senior Software Engineer · Data Platform',
        period: 'Jun 2025 — Now',
        summary:
          'Contributing to a CDC replication pipeline that streams SQL Server data through Kafka into ClickHouse for MES analytics. Improving replication reliability across MES upgrades, building ClickHouse infrastructure (replicated backups, local test environments) and writing the operational docs.',
      },
      {
        title: 'Senior Software Engineer · WorkflowSystem',
        period: 'Feb 2025 — Jun 2025',
        summary:
          'Development, production support and defect resolution for the Infineon WorkflowSystem ecosystem.',
      },
      {
        title: 'Software Engineer · WorkflowSystem',
        period: 'Jul 2022 — Feb 2025',
        summary:
          'Owned production support for industrial workflow software in semiconductor fabs, working with customer engineering teams to diagnose incidents. Delivered features, upgrades and modernization work such as moving EventFileLoader configuration off XML.',
      },
      {
        title: 'Junior Software Engineer · WorkflowSystem',
        period: 'Sep 2020 — Jul 2022',
        summary:
          'Developed, maintained and troubleshot workflow software for semiconductor manufacturing as part of the Infineon WFS team.',
      },
    ],
    tech: ['C#', '.NET', 'ClickHouse', 'SQL Server', 'Apache Kafka', 'CDC', 'Azure DevOps', 'CI/CD'],
  },
];

export const education = {
  school: 'Faculty of Engineering, University of Porto (FEUP)',
  url: 'https://sigarra.up.pt/feup/en/',
  degree: "Integrated Master's in Informatics and Computing Engineering",
  period: '2015 — 2020',
};
