import Link from 'next/link'
import { getTopicLabel, getTopicSlug } from '@/data/topicsData'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  const topicSlug = getTopicSlug(text)

  return (
    <Link
      href={`/tags/${topicSlug}`}
      className="hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:hover:border-primary-500/60 dark:hover:bg-primary-950/40 dark:hover:text-primary-300 mr-2 mb-2 inline-flex rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors dark:border-gray-700 dark:text-gray-300"
    >
      {getTopicLabel(text)}
    </Link>
  )
}

export default Tag
