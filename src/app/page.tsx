"use client"
import Navbar from '@/components/navbar/Navbar'
import HomeSlider from '@/components/homeSlider/HomeSlider'
import CategoriesSlider from '@/components/categories/CategoriesSlider'
import BlogsSlider from '@/components/blogCards/BlogsSlider'
import Footer from '@/components/footer/Footer'
import { useEffect } from 'react'

export default function Home() {

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
         } else {
           window.location.href = "/pages/auth/signin";
         }
       })
       .catch((error) => {
         window.location.href = "/";
       });
   };

   useEffect(() => {
     checkLogin();
   }, []);

  return (
    <main>
      <Navbar />
      <HomeSlider />
      <CategoriesSlider />
      <BlogsSlider />
      <Footer />
    </main>
  )
}
