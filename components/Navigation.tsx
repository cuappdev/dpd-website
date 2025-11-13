'use client'

import { useState } from 'react'

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="text-purple-primary text-2xl font-bold">D</div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-purple-primary transition">
            Schedule
          </a>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('course')}
              className="text-gray-700 hover:text-purple-primary transition flex items-center"
            >
              Course Information
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'course' && (
              <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Syllabus</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Policies</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('assignments')}
              className="text-gray-700 hover:text-purple-primary transition flex items-center"
            >
              Assignments
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'assignments' && (
              <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Assignment 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Assignment 2</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('resources')}
              className="text-gray-700 hover:text-purple-primary transition flex items-center"
            >
              Resources
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Lecture Notes</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Figma Files</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
        <div className="text-gray-600">January</div>
        <div className="text-xs text-gray-500">01-07 Jan</div>
      </div>
    </nav>
  )
}

