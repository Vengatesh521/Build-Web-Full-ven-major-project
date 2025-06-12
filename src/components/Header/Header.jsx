import React, { act } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: true,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: true,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: true,
    },
  ];

  return (
    <header className="py-3 shadow  text-white">
      <nav className="flex">
        <div className="mr-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="flex ml-auto">
          {navItems.map((item) => (
            <li key={item.slug}>
              <button
                onClick={() => navigate(item.slug)}
                className="inline-block px-6 py-2 hover:bg-blue-100"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
