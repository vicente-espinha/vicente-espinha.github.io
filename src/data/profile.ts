export type Social = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin';
};

export type Interest = {
  emoji: string;
  label: string;
};

export const profile = {
  name: 'Vicente Espinha',
  title: 'Senior Software Engineer',
  tagline: 'I build reliable data pipelines for manufacturing.',
  location: 'Matosinhos, Porto, Portugal',
  description:
    'Vicente Espinha is a Senior Software Engineer at Critical Manufacturing, building .NET and data platform software for Manufacturing Execution Systems.',

  // Each string is one paragraph. Simple inline HTML is allowed (links, <strong>).
  about: [
    `I'm a software engineer based in Porto. For the past six years I've been at
    <a href="https://www.criticalmanufacturing.com" target="_blank" rel="noreferrer">Critical Manufacturing</a>,
    building .NET and data platform software around its Manufacturing Execution System (MES),
    which manufacturers in many industries rely on.`,

    `Today I'm on the <strong>Data Platform</strong> team. I work on a Change Data Capture pipeline
    that streams data from SQL Server through Apache Kafka into ClickHouse, powering analytics for MES customers.
    I care most about reliability: keeping replication healthy across upgrades, building ClickHouse
    infrastructure such as replicated backups and local test environments, and writing down how it all runs.`,

    `Before that I spent almost five years on the WorkflowSystem team for Infineon, going from junior to
    senior engineer while building and supporting industrial workflow software that runs in semiconductor fabs.`,

    `Away from the keyboard, I'm usually watching football (or pretty much any other sport),
    catching up on a movie or series, or listening to music.`,
  ],

  interests: [
    { emoji: '⚽', label: 'Football & sports' },
    { emoji: '🎬', label: 'Movies & series' },
    { emoji: '🎧', label: 'Music' },
  ] satisfies Interest[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/vicente-espinha', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vicenteespinha/', icon: 'linkedin' },
  ] satisfies Social[],
};

// Flip to true once the first post is ready.
export const BLOG_ENABLED = false;
