import React from 'react';

export default function Header() {
  return (
    <nav
      data-test="weather-app-navbar"
      className="weather-app-navbar navbar navbar-expand-lg"
    >
      <span className="navbar-brand" data-test="navbar-brand">
        Weather APP
      </span>
    </nav>
  );
}
