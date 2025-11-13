'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'When is the add deadline for this course?',
    answer: 'October 16, 2024 at 11:59 PM',
  },
  {
    question: 'When is the drop deadline for this course?',
    answer: 'The drop deadline is typically mid-semester. Please check the course policies for exact dates.',
  },
  {
    question: 'When do critique groups start?',
    answer: 'Critique groups begin in the second week of the course.',
  },
  {
    question: 'What if I submitted the pre-test but didn\'t receive a PIN to add the course?',
    answer: 'Please contact the instructors via email or Slack if you haven\'t received your PIN within 48 hours of submitting the pre-test.',
  },
  {
    question: 'What if I have to miss a critique group? What is the late policy?',
    answer: 'If you need to miss a critique group, please notify your TA and instructor in advance. Late submissions may be accepted with prior approval.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-bold mb-8">FAQ</h2>
      <div className="space-y-4 max-w-3xl">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-purple-primary transition"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

