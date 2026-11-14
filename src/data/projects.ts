export type Project = {
  title: string;
  description: string;
  href: string;
  tech: string[];
};

// Draft descriptions. Edit these to say what you actually built or changed.
export const projects: Project[] = [
  {
    title: 'Grafana OData data source',
    description:
      'A Grafana data source plugin for querying and visualizing data from OData V4 services.',
    href: 'https://github.com/vicente-espinha/grafana-odata-datasource',
    tech: ['Grafana', 'TypeScript', 'Go', 'OData'],
  },
  {
    title: 'Distributed backup service',
    description:
      'Distributed Systems (SDIS) coursework at FEUP: peer-to-peer file backup with replication and recovery.',
    href: 'https://github.com/vicente-espinha/SDIS',
    tech: ['Java', 'Networking', 'Concurrency'],
  },
  {
    title: 'WebGL scenes',
    description:
      'Computer Graphics (CGRA) coursework at FEUP: interactive 3D scenes rendered with WebGL.',
    href: 'https://github.com/vicente-espinha/feup-cgra',
    tech: ['JavaScript', 'WebGL'],
  },
  {
    title: 'RetroJam 2018',
    description: 'A retro-style game built in a weekend for the RetroJam 2018 game jam.',
    href: 'https://github.com/vicente-espinha/RetroJam2018',
    tech: ['Lua', 'LÖVE'],
  },
];
