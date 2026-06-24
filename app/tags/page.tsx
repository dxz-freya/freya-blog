import Link from '@/components/Link'
import { topicGroups } from '@/data/topicsData'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Topics',
  description: 'Browse posts by engineering area and project theme',
})

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const visibleGroups = topicGroups
    .map((group) => ({
      ...group,
      topics: group.topics.filter((topic) => tagCounts[topic.slug]),
    }))
    .filter((group) => group.topics.length > 0)

  return (
    <div className="space-y-10 divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-3 pt-6 pb-8 md:space-y-4">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Topics
        </h1>
        <p className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          Browse posts by engineering area and project theme.
        </p>
      </div>

      <div className="grid gap-8 pt-10 md:grid-cols-2">
        {visibleGroups.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">No topics found.</p>
        )}
        {visibleGroups.map((group) => (
          <section key={group.title} className="space-y-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {group.title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {group.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/tags/${topic.slug}`}
                  className="hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:hover:border-primary-500/60 dark:hover:bg-primary-950/40 dark:hover:text-primary-300 inline-flex items-center rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors dark:border-gray-700 dark:text-gray-300"
                  aria-label={`View posts about ${topic.label}`}
                >
                  <span>{topic.label}</span>
                  <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">
                    {`· ${tagCounts[topic.slug]}`}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
