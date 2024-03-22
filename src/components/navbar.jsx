import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between  absolute w-full bg-white border-b-2 shadow-md ">
      <div className="container flex justify-between items-center ">
        <Link href={"/"}>
          <img src="Logo.svg" alt="" />
        </Link>

        <ul className="flex gap-6">
          <Link href={"/"}>Home</Link>

          <Link href={"/Students"}>Students</Link>

          <Link href={"/Books"}>Books</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
