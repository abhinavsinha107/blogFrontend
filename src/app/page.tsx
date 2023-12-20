"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import HomeSlider from '@/components/homeSlider/HomeSlider'
import CategoriesSlider from '@/components/categories/CategoriesSlider'
import BlogsSlider from '@/components/blogCards/BlogsSlider'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSlider />
      <CategoriesSlider />
      <BlogsSlider />
      <h1>--- Footer ---</h1>
    </main>
  )
}
