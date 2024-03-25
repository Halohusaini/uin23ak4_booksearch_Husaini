import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link to="/">
          <h1 className="header">Bok Søk</h1>
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        <p>Halo CopyRights</p>
      </footer>
    </div>
  );
}
