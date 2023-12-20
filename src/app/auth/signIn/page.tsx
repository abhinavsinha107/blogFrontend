"use client";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import "../auth.css";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="authout">
        <div className="authin">
          <div className="left"></div>
          <div className="right">
            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="forminput_cont">
                <label>Email</label>
                <input type="text" placeholder="Enter your Email" />
              </div>
              <div className="forminput_cont">
                <label>Password</label>
                <input type="text" placeholder="Enter your Password" />
              </div>
              <button type="submit" className="main_button">
                Login
              </button>
              <p className="authlink">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signUp">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
