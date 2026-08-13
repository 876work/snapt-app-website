/**
 * `/` currently serves the coming-soon holding page, so the full marketing
 * homepage lives at HOME_PATH. Every in-site link to it goes through this
 * constant — change it in one place to move the site back to the root.
 */
export const HOME_PATH = '/home';

/**
 * The header nav, shared by every page so no destination ever disappears from
 * the menu. The page you are on is marked with an underline instead.
 *
 * Section links are same-page anchors on the homepage and cross-page links
 * everywhere else, hence the prefix.
 */

export interface NavLink {
  href: string;
  label: string;
  /** Route this link represents, for the active-page underline. */
  page?: string;
}

export function navLinks(currentPath: string): NavLink[] {
  const home = currentPath === HOME_PATH ? '' : HOME_PATH;
  return [
    { href: `${home}#occasions`, label: 'Occasions' },
    { href: `${home}#how`, label: 'How it works' },
    { href: `${home}#creators`, label: 'For creators' },
    { href: '/explore', label: 'Explore the app', page: '/explore' },
  ];
}
