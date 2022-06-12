import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DropdownItem({ linkTo, children }) {
  return (
    <Link
      className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
      to={linkTo}
    >
      {children}
    </Link>
  );
}

DropdownItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default DropdownItem;
