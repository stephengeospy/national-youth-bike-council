import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The **NavItem** component renders each item in the Nav component.
 *
 * @version 1.0.0
 * @author [Stephen](https://github.com/stephengeospy)
 */

function NavItem({ linkTo, children }) {
  return (
    <Link
      to={linkTo}
      className="focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-lg tracking-wide hover:bg-skin-fill-base hover:text-skin-accent focus:bg-skin-fill-accent focus:text-skin-muted focus:outline-none lg:mt-0 lg:ml-4"
    >
      {children}
    </Link>
  );
}

const propTypes = {
  /**
   * Sets the url where the NavItem should point to when clicked
   */
  linkTo: PropTypes.string.isRequired,
  /**
   * Sets the content or text of the NavItem
   */
  children: PropTypes.any.isRequired,
};

NavItem.displayName = "NavItem";
NavItem.propTypes = propTypes;

export default NavItem;
