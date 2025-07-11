import { allAlgorithms } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'

export default function ProblemPage({ params }) {
  const { category, id } = params
  // 假设你的 mdx 文件名或 frontmatter 里有 id 字段
  const post = allAlgorithms.find(
    (p) =>
      p.tags?.includes(category) &&
      (p.id?.toString() === id || p._raw.flattenedPath.endsWith(`/${category}/${id}`))
  )

  if (!post) return notFound()

  return (
    <div className="prose mx-auto">
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      {/* 你可以用 MDX 渲染正文内容 */}
      {/* 例如：<MDXLayoutRenderer code={post.body.code} /> */}
    </div>
  )
}
