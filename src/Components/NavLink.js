import React, { useCallback } from "react-router-dom";

function NavLink(props) {
  if (!props.route)
    return new Error("NavLink was created with undefined route");

  const updateOpen = useCallback(
    (event) => {
      setOpen(false);
    },
    [setOpen]
  );

  return (
    <Link
      to={props.routeLink}
      className={className}
      onClick={() => this.props.setOpen(false)}
    >
      {props.route}
    </Link>
  );
}

NavLink.defaultProps = {
  routeLink: "/",
  className: "nav-link",
};
export default NavLink;
