import { Link } from "react-router-dom";
import logoIcon from "../images/logoIcon.png";
import Logo from "./Logo";
import MailTo from "./MailTo";

import mailIcon from "../images/icon-mail.png";
import discordIcon from "../images/icon-discord.svg";
import instagramIcon from "../images/icon-instagram.svg";
import twitterIcon from "../images/icon-twitter.svg";
import facebookIcon from "../images/icon-facebook.svg";
import youtubeIcon from "../images/icon-youtube.svg";

function Footer() {
  return (
    <footer className="w-full bg-skin-fill-primary text-sm text-skin-muted lg:text-base">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-x-48 gap-y-4 px-8 py-6 md:flex-row md:justify-between lg:px-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center md:items-start">
            <Logo linkTo="" logoSrc={logoIcon} logoAlt="logo for National Youth Bike Council with a big N with wheels" />
            <h3 className="flex pl-4 font-semibold uppercase hover:text-skin-accent">National Youth Bike Council</h3>
          </div>
          <div className="flex flex-col gap-2 pl-0 sm:pl-16 lg:pl-20">
            <p className="">Email us at:</p>
            <MailTo subject="NYBC Inquiry" email="info@nybcouncil.com" body="Am interested in NYBC">
              <div className="flex flex-row items-center">
                <img src={mailIcon} alt="Logo for link to Mail" className="w-6 hover:text-skin-accent" />
                info@nybcouncil.com
                {/* <p className="pl-1 hover:text-skin-accent">info@nybcouncil.com</p> */}
              </div>
            </MailTo>
            <p className="">reach out for inquiries!</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 sm:my-auto sm:flex-grow sm:flex-row sm:gap-x-4">
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center font-semibold uppercase md:flex-row">Support 1</h3>
            <Link to="#" className="hover:text-skin-accent">
              Newsletter
            </Link>
            <Link to="#" className="hover:text-skin-accent">
              Donate
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center font-semibold uppercase md:flex-row">Support 2</h3>
            <Link to="#" className="hover:text-skin-accent">
              Newsletter
            </Link>
            <Link to="#" className="hover:text-skin-accent">
              Donate
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center font-semibold uppercase sm:flex-row">Social</h3>
            <div className="flex flex-row items-center">
              <img src={discordIcon} alt="Logo with link to Discord" className="w-6"></img>
              <Link to="#" className="px-1 hover:text-skin-accent">
                Discord
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <img src={instagramIcon} alt="Logo with link to Instagram" className="w-6"></img>
              <Link to="#" className="px-1 hover:text-skin-accent">
                Instagram
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <img src={twitterIcon} alt="Logo with link to Twitter" className="w-6"></img>
              <Link to="#" className="px-1 hover:text-skin-accent">
                Twitter
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <img src={facebookIcon} alt="Logo with link to Facebook" className="w-6"></img>
              <Link to="#" className="px-1 hover:text-skin-accent">
                Facebook
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <img src={youtubeIcon} alt="Logo with link to Youtube" className="w-6"></img>
              <Link to="#" className="px-1 hover:text-skin-accent">
                Youtube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
