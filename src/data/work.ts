export type Work = {
  kicker: string;
  title: string;
  /** Part of the title set in italic serif. */
  titleAccent: string;
  summary: string;
  org: string;
  period: string;
  art: 'pipeline' | 'wafer' | 'chart';
  theme: 'green' | 'violet' | 'amber';
  href?: string;
  linkLabel?: string;
};

export const work: Work[] = [
  {
    kicker: 'What I build',
    title: 'Data that',
    titleAccent: 'never misses a beat',
    summary: 'CDC replication from SQL Server through Kafka into ClickHouse',
    org: 'Critical Manufacturing',
    period: '2025 – now',
    art: 'pipeline',
    theme: 'green',
  },
  {
    kicker: 'What I built',
    title: 'Workflows for',
    titleAccent: 'chip fabs',
    summary: 'Industrial workflow software in Infineon semiconductor plants',
    org: 'Infineon · via Critical Manufacturing',
    period: '2020 – 25',
    art: 'wafer',
    theme: 'violet',
  },
  {
    kicker: 'Open source',
    title: 'Grafana,',
    titleAccent: 'now speaking OData',
    summary: 'A data source plugin for OData V4 services',
    org: 'grafana-odata-datasource',
    period: '2026',
    art: 'chart',
    theme: 'amber',
    href: 'https://github.com/vicente-espinha/grafana-odata-datasource',
    linkLabel: 'Code',
  },
];
