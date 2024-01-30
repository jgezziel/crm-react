import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", text: "Clients" },
    { to: "/clients/new", text: "New Client" },
  ];

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-3/12 2xl:w-2/12 bg-purple-800 px-5 py-5 md:py-10">
        <h2 className="text-3xl font-bold text-white text-center">
          CRM - Clients
        </h2>
        <nav className="mt-10">
          {navLinks.map(({ to, text }, ind) => {
            return (
              <Link
                className={`${location.pathname === to && "underline text-purple-100"} text-xl block my-2 text-white hover:text-purple-100 transition-all`}
                to={to} key={ind}>
                {text}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="md:w-9/12 2xl:w-10/12 md:h-screen overflow-scroll p-5 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
