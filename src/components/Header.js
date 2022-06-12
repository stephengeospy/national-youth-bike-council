import { React, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "./Logo";
import logoIcon from "../images/logoIcon.png";
import Dropdown from "./Dropdown";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-skin-fill-primary text-skin-muted">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex flex-row items-center justify-between p-4">
          <Logo linkTo="" logoSrc={logoIcon} logoAlt="logo for National Youth Bike Council with a big N with wheels" />
          <button className="focus:shadow-outline rounded-lg focus:outline-none md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-8 w-8">
              {!isMenuOpen && (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
              {isMenuOpen && (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <Nav isMenuOpen={isMenuOpen}>
          <Dropdown label="About us">
            <Dropdown.Item linkTo="#">How It Started</Dropdown.Item>
            <Dropdown.Item linkTo="#">Where are we?</Dropdown.Item>
            <Dropdown.Item linkTo="#">Why the Council?</Dropdown.Item>
            <Dropdown.Item linkTo="#">Council Members</Dropdown.Item>
            <Dropdown.Item linkTo="#">Advisors</Dropdown.Item>
            <Dropdown.Item linkTo="#">Board Members</Dropdown.Item>
            <Dropdown.Item linkTo="#">Partners & Sponsorships</Dropdown.Item>
          </Dropdown>
          <Nav.Item linkTo="#">Projects</Nav.Item>
          <Dropdown label="Council Press">
            <Dropdown.Item linkTo="#">Media Coverage</Dropdown.Item>
            <Dropdown.Item linkTo="#">Council Blogs</Dropdown.Item>
            <Dropdown.Item linkTo="#">Newsletter</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Resources">
            <Dropdown.Item linkTo="#">Resources & Safety</Dropdown.Item>
          </Dropdown>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
