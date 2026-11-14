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
  company: 'Critical Manufacturing',
  location: 'Porto, Portugal',
  description:
    'Vicente Espinha is a Senior Software Engineer at Critical Manufacturing, building .NET and data platform software for Manufacturing Execution Systems.',

  // Home page headline. The second part is set in the accent italic serif.
  headline: {
    lead: 'Not about being the hero.',
    accent: 'About the team never needing one.',
  },
  intro:
    "Software engineer in Porto. For six years at Critical Manufacturing I've worked in teams building factory software, from industrial workflows in semiconductor fabs to a real-time data platform, and made sure it keeps running on the good days and the hard ones.",

  // Home page teaser for the About page.
  teaser:
    'Six years building software for factories, a soft spot for reliable systems, and a passport that gets plenty of use.',

  // About page. Each string is one paragraph; simple inline HTML is allowed.
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
    senior engineer while building and supporting industrial workflow software that runs in semiconductor fabs.
    A lot of that was hands-on troubleshooting with customer engineers, which taught me to care about what
    happens after the code ships.`,

    `Away from the keyboard, I love to travel and discover new places. At home I'm usually watching
    football (or pretty much any other sport), catching up on a movie or series, or listening to music.`,
  ],

  interests: [
    { emoji: '✈️', label: 'Travel' },
    { emoji: '⚽', label: 'Football & sports' },
    { emoji: '🎬', label: 'Movies & series' },
    { emoji: '🎧', label: 'Music' },
  ] satisfies Interest[],

  skills: ['C#', '.NET', 'SQL Server', 'ClickHouse', 'Apache Kafka', 'CDC', 'Azure DevOps', 'CI/CD'],

  socials: [
    { label: 'GitHub', href: 'https://github.com/vicente-espinha', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vicenteespinha/', icon: 'linkedin' },
  ] satisfies Social[],
};

// Flip to true once the first post is ready.
export const BLOG_ENABLED = false;
