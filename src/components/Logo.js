import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * The **Logo** component renders the logo of the website.
 *
 * @version 1.0.0
 * @author [Stephen](https://github.com/stephengeospy)
 */

function Logo({ linkTo, logoSrc, logoAlt }) {
  return (
    <Link to={linkTo} className="rounded-full border-transparent ring-orange-500 focus:border-transparent focus:ring-2">
      <img src={logoSrc} alt={logoAlt} className="w-16" />
    </Link>
  );
}

Logo.propTypes = {
  linkTo: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
};

export default Logo;
