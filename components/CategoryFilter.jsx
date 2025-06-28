'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const categories = ['electronics', 'clothing', 'home']

const CategoryFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [price, setPrice] = useState(searchParams.get('price') || '1000')

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams.toString())

    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }

    router.push(`/?${params.toString()}`)
  }

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice)
    const params = new URLSearchParams(searchParams.toString())
    params.set('price', newPrice)
    router.push(`/?${params.toString()}`)
  }

  const selectedCategory = searchParams.get('category') || ''

  return (
    <div className="space-y-6 p-4">
      <div>
        <h2 className="font-semibold mb-2">Category</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ''}
              onChange={() => handleCategoryChange('')}
              className="form-radio text-blue-600 w-4 h-4"
            />
            <span>All</span>
          </label>

          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="form-radio text-blue-600 w-4 h-4"
              />
              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Price Range (Up to ₹{price})</h2>
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={price}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default CategoryFilter
