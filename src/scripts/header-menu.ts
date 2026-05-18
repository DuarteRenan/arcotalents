/**
 * Menu toggle utility for Header component
 * Handles both desktop and mobile menu states
 */

export function handleMenuToggle(
  hamburgerBtn: HTMLButtonElement,
  mobileMenu: HTMLElement
): void {
  const isOpen = hamburgerBtn.classList.contains('open');

  if (isOpen) {
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('hidden', '');
    document.body.style.overflow = '';
  } else {
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
}
