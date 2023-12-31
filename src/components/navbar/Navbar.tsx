"use client"
import Link from "next/link";
import {BiPlus, BiSolidUserCircle, BiSearchAlt} from "react-icons/bi";
import logo from "@/assets/logo.png";
import Image from "next/image";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [auth, setauth] = useState<Boolean>(false);

  const handleLogout = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        // console.log(response);
        if (response.ok) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("refreshToken");
          router.push("/pages/auth/signIn");
        }
      })
      .catch((error) => {
        console.log(error);
        router.push("/pages/auth/signIn");
      });
  };

  const checkLogin = async () => {
    let authToken = localStorage.getItem("authToken");
    let refreshToken = localStorage.getItem("refreshToken");
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin?authToken=${authToken}&refreshToken=${refreshToken}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.ok) {
          setauth(true);
        } else {
          setauth(false);
        }
      })
      .catch((err) => {
        toast(err.message, {
          type: "error",
          position: "top-right",
          autoClose: 2000,
        });
      });
  };


  useEffect(() => {
    checkLogin(); // Call the checkLogin function on route change
  }, []);

  // const handlelogout = async () => {
  //   await deleteCookie("authToken");
  //   await deleteCookie("refreshToken");
  //   window.location.href = "/pages/auth/signIn";
  // };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/pages/profile" className="link">
          <BiSolidUserCircle className="icon" />
        </Link>
        <Link href="/pages/addBlog">
          <BiPlus className="icon" />
        </Link>
        <Link href="/pages/search">
          <BiSearchAlt className="icon" />
        </Link>
      </div>
      <div className="navbar-middle">
        <Link href="/">
          <Image className="logo" src={logo} alt="Picture of the company" />
        </Link>
      </div>
      {auth ? (
        <div className="navbar-right">
          <Link href="/">Home</Link>
          <Link href="/pages/about">About</Link>
          <Link href="/pages/contact">Contact</Link>

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="navbar-right">
          <Link href="/pages/auth/signIn">
            <button>Login</button>
          </Link>
          <Link href="/pages/auth/signUp">
            <button>Signup</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar