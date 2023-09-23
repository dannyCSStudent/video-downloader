import React from 'react'
import { Navbar, Footer } from '@/components';

const layout = ({ children }) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default layout