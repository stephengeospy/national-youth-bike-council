import PropTypes from "prop-types";
import NavItem from "./NavItem";

/**
 * The **Nav** component renders the Navigation Bar in the Header.
 *
 * @version 1.0.0
 * @author [Stephen](https://github.com/stephengeospy)
 */

function Nav({ isMenuOpen, children }) {
  return <nav className={`${isMenuOpen ? `flex` : `hidden`} flex-grow flex-col pb-4 lg:flex lg:flex-row lg:justify-end lg:pb-0`}>{children}</nav>;
}

const propTypes = {
  /**
   * Tells if the Nav menu is open or closed
   */
  isMenuOpen: PropTypes.bool.isRequired,
  /**
   * Sets the content of the Nav
   */
  children: PropTypes.any.isRequired,
};

Nav.displayName = "Nav";
Nav.propTypes = propTypes;

export default Object.assign(Nav, {
  Item: NavItem,
});
