"use client";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import "../auth.css";
import { toast } from "react-toastify";
import logo from "@/assets/BLOG.png";
import { useState } from "react";
import Image from "next/image";


interface FormData {
  email: string;
  password: string;
}


export default function SignIn() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors: Record<string, string> = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then(async (response) => {
        if (response.ok) {
          toast(response.message, {
            type: "success",
            position: "top-right",
            autoClose: 2000,
          });
          checkLogin();
        } else {
          toast(response.message, {
            type: "error",
            position: "top-right",
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        toast(error.message, {
          type: "error",
          position: "top-right",
          autoClose: 2000,
        });
      });
  };

  const checkLogin = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin`, {
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
        console.log(response);

        if (response.ok) {
          // toast(response.message, {
          //     type: 'success',
          //     position: 'top-right',
          //     autoClose: 2000
          // })

          window.location.href = "/";
        } else {
          // toast(response.message, {
          //     type: 'error',
          //     position: 'top-right',
          //     autoClose: 2000
          // });
        }
      })
      .catch((error) => {
        console.log(error);
        // window.location.href = "/";
      });
  };

  return (
    <>
      <Navbar />
      <div className="authout">
        <div className="authin">
          <div className="left">
            <Image src={logo} alt="" className="img" />
          </div>
          <div className="right">
            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              onSubmit={handleSubmit}
            >
              <div className="forminput_cont">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="formerror">{errors.email}</span>
                )}
              </div>
              <div className="forminput_cont">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="formerror">{errors.password}</span>
                )}
              </div>

              <button type="submit" className="main_button">
                Login
              </button>

              <p className="authlink">
                Don&apos;t have an account?{" "}
                <Link href="/pages/auth/signup">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
