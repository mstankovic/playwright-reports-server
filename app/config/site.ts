interface NavItem {
  label: string;
  href: string;
}
interface SiteConfig {
  name: string;
  description: string;
  navItems: NavItem[];
  navMenuItems: NavItem[];
  links: {
    github: string;
    discord: string;
    telegram: string;
    sponsor?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Playwright Reports Server',
  description: 'A server for Playwright Reports',
  navItems: [],
  navMenuItems: [],
  links: {
    github: 'https://github.com/CyborgTests/playwright-reports-server',
    telegram: 'https://t.me/js_for_testing/',
    discord: 'https://discord.gg/nuacYsb2yN',
    sponsor: '', //'https://patreon.com/SOMELINKHERE',
  },
};
