import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}
