import React from 'react';

export function handleLogin(
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
) {
  event.preventDefault();
  alert('You are about to Log in!');
}

export function handleLogout(
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
) {
  event.preventDefault();
  alert('You are about to Log out!');
}
