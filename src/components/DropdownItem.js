import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DropdownItem({ linkTo, children }) {
  return (
    <Link
      className="focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm tracking-wide hover:bg-gray-200 hover:text-skin-accent focus:bg-gray-200 focus:text-skin-primary focus:outline-none lg:mt-0"
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
