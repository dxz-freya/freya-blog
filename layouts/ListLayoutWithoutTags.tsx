'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Algorithm } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import { allAlgorithms } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components' // 如果你用的是 pliny/next-mdx-remote

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Algorithm>[]
  title: string
  initialDisplayPosts?: CoreContent<Algorithm>[]
  pagination?: PaginationProps
}

const navItems = [
  {
    name: 'Two Pointer',
    href: '/algorithms/two-pointers',
    description: '',
    problems: [
      { id: '15', title: '3Sums', href: '/algorithms/two-pointers/15' },
      // ...更多题目
    ],
  },
  {
    name: 'Sliding Window',
    href: '/algorithms/sliding-window',
    description: '',
    problems: [
      { id: '438', title: 'Find All Anagrams in a String', href: '/algorithms/sliding-window/438' },
    ],
  },
  {
    name: 'String',
    href: '/algorithms/string',
    description: '',
    problems: [
      { id: '560', title: 'Subarray Sum Equals K', href: '/algorithms/string/560' },
      { id: '239', title: 'Sliding Window Maximum', href: '/algorithms/string/239' },
    ],
  },
  {
    name: 'Array',
    href: '/algorithms/array',
    description: '',
    problems: [
      { id: '53', title: 'Maximum Subarray', href: '/algorithms/array/53' },
      { id: '56', title: 'Merge Intervals', href: '/algorithms/array/56' },
      { id: '189', title: 'Rotate Array', href: '/algorithms/array/189' },
      { id: '238', title: 'Product of Array Except Self', href: '/algorithms/array/238' },
      { id: '41', title: 'First Missing Positive', href: '/algorithms/array/41' },
    ],
  },
]

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithoutTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedProblem, setSelectedProblem] = useState<Algorithm | null>(null)

  return (
    <>
      <div>
        <div className="pt-6 pb-6">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          {/* 左侧导航栏 */}
          <aside className="hidden w-64 max-w-[280px] min-w-[200px] border-r border-gray-200 p-4 sm:block dark:border-gray-700">
            <nav>
              <ul>
                {navItems.map((cat, idx) => (
                  <li key={cat.name} className="mb-4">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center border-none bg-transparent p-0 font-bold"
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    >
                      {cat.name}
                      <span className="ml-2">{openIndex === idx ? '▼' : '▶'}</span>
                    </button>
                    {openIndex === idx && (
                      <div className="mt-2 ml-2">
                        {cat.description && (
                          <div className="mb-2 text-blue-400">{cat.description}</div>
                        )}
                        <ul>
                          {cat.problems.map((p) => (
                            <li key={p.id}>
                              <button
                                type="button"
                                className="block border-none bg-transparent py-1 text-left hover:text-blue-500"
                                onClick={() => {
                                  const fullProblem = allAlgorithms.find(
                                    (alg) => alg.id?.toString() === p.id.toString()
                                  )
                                  setSelectedProblem(fullProblem ?? null)
                                }}
                              >
                                {p.id}.{p.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          {/* 右侧内容 */}
          <div className="flex-1">
            {selectedProblem ? (
              <div>
                <h2 className="text-2xl font-bold">{selectedProblem.title}</h2>
                <p className="text-gray-500">{selectedProblem.summary}</p>
                {/* 渲染正文 */}
                <MDXLayoutRenderer code={selectedProblem.body.code} />
              </div>
            ) : (
              <div>请选择左侧的题目</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
