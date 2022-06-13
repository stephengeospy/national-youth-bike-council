import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CTALink({ linkTo, children }) {
  return (
    <Link
      to={linkTo}
      className="focus:ring-offset-0.5 text-md ml-2 mt-2 inline-block max-w-fit transform rounded-full bg-skin-button-accent px-6 py-2 uppercase tracking-wide text-skin-muted drop-shadow-md transition hover:-translate-y-0.5 hover:bg-skin-button-accent-hover focus:outline-none focus:ring-1 focus:ring-white lg:mt-0 lg:ml-4"
    >
      {children}
    </Link>
  );
}

const propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

CTALink.displayName = "CTALink";
CTALink.propTypes = propTypes;

export default CTALink;
