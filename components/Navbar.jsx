'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import SearchForm from './SearchForm'

const Navbar = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <header className="sticky top-0 w-full bg-blue-500 z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <p className="text-xl font-bold text-white">Logo</p>
        </Link>

        {/* Desktop Only */}
        <div className="flex items-center justify-center gap-2">
          <div className='hidden md:flex gap-4 items-center'>
            <SearchForm searchText={searchText} setSearchText={setSearchText} />
          </div>

          <div className="flex gap-2 items-center justify-center px-6 py-2 bg-blue-950 text-white rounded-lg">
            <ShoppingCart />
            <p>Cart</p>
          </div>
        </div>
      </nav>

      {/* Mobile Only Search Bar */}
      <div className="flex md:hidden px-6 pb-4">
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </div>
    </header>
  )
}

export default Navbar
