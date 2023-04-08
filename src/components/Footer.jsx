import React from "react";
import { SectionWrapper } from "../hoc";

function Link({ children, href, className }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${className} cursor-pointer text-secondary hover:underline`}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-black-100 p-10">
      <div className="flex justify-between items-center">
        <div>
          Bootstrapped and Deployed by <Link href="http://developeratul.com">Ratul</Link>
        </div>
        <div>
          Copyright &copy; <Link href="https://www.jsmastery.pro">JavascriptMastery</Link>
        </div>
      </div>
    </footer>
  );
}

export default SectionWrapper(Footer, "footer");
