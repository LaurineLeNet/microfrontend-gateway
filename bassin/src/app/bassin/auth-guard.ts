import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Clerk dépose un cookie nommé "__session" quand on est connecté
  const aSonBracelet = document.cookie.includes('__session');

  if (aSonBracelet) {
    return true; // Accès autorisé
  } else {
    const currentUrl = window.location.href;
    const clerkSignInUrl = `https://charmed-tetra-60.clerk.accounts.dev/sign-in?redirect_url=${encodeURIComponent(currentUrl)}`;
    window.location.href = clerkSignInUrl;
    return false;
  }
};
