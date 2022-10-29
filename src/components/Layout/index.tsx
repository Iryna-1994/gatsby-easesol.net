import React, { ReactNode, useEffect } from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import Footer from "../Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Helmet>
        <html lang="en-us" />
        <body className="overflow-hidden overflow-y-scroll antialiased text-primary-500 font-ReadexPro bg-primary-50 dark:bg-primary-800" />
      </Helmet>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
