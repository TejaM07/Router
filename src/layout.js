import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/product">product</Link>
          </li>
          <li>
            <link to="/role">Role</link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;