import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAlgorithms } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithoutTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default function AlgorithmsPage() {
  // 你可以筛选算法相关的文章，也可以直接用全部
  const posts = allCoreContent(sortPosts(allAlgorithms)) // 或自定义你的算法文章数组
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Algorithms"
    />
  )
}
