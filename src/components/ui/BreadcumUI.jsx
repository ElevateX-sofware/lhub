import { Breadcrumb } from "antd";
import PropTypes from "prop-types";

function BreadcrumbUI({ style, items }) {
  return (
    <Breadcrumb style={style} items={items} />
  );
}

BreadcrumbUI.propTypes = {
  style: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.node,
    })
  ),
};


export default BreadcrumbUI;
