import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import {  Link, NavLink } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => {
    return state.authSlice.status;
  });

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/create-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-200">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li
                  key={item.name}
                  className="flex justify-center items-center"
                >
                  <NavLink
                    to={item.slug}
                    className=" font-semibold text-lg px-6  hover:underline"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="flex justify-center items-center">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
