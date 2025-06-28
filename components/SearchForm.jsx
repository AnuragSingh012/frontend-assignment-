'use client'
import React from 'react'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchForm = ({ searchText, setSearchText }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())

    if (searchText.trim()) {
      params.set('q', searchText)
    } else {
      params.delete('q')
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for products.."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit"><Search /></button>
    </form>
  )
}

export default SearchForm
