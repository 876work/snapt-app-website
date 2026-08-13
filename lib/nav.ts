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
  const home = currentPath === '/' ? '' : '/';
  return [
    { href: `${home}#occasions`, label: 'Occasions' },
    { href: `${home}#how`, label: 'How it works' },
    { href: `${home}#creators`, label: 'For creators' },
    { href: '/explore', label: 'Explore the app', page: '/explore' },
  ];
}
