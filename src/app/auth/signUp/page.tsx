"use client";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import "../auth.css";

export default function SignUp() {
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
                <label>Name</label>
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div className="forminput_cont">
                <label>Email</label>
                <input type="text" placeholder="Enter your Email" />
              </div>
              <div className="forminput_cont">
                <label>Password</label>
                <input type="password" placeholder="Enter your Password" />
              </div>
              <div className="forminput_cont">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your Password" />
              </div>
              <button type="submit" className="main_button">
                Register
              </button>
              <p className="authlink">
                Already have an account? <Link href="/auth/signIn">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
