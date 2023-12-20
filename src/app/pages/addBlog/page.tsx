import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import HomeSlider from "@/components/homeSlider/HomeSlider";

export default function AddBlog() {
  return (
    <main>
      <Navbar />
      <h1>This is add blog page</h1>
    </main>
  );
}
