import { slug } from 'github-slugger'

export interface Topic {
  label: string
  slug: string
}

export interface TopicGroup {
  title: string
  description: string
  topics: Topic[]
}

export const topicGroups: TopicGroup[] = [
  {
    title: 'Core Work',
    description: 'The main themes across my enterprise and real-time systems work.',
    topics: [
      { label: 'Security Automation', slug: 'security-automation' },
      { label: 'Workflow Traceability', slug: 'workflow-traceability' },
      { label: 'Real-Time Systems', slug: 'real-time-systems' },
      { label: 'Data Visualization', slug: 'data-visualization' },
      { label: 'Full Stack', slug: 'full-stack' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Frameworks and frontend engineering areas used in selected projects.',
    topics: [
      { label: 'React', slug: 'react' },
      { label: 'TypeScript', slug: 'typescript' },
      { label: 'Vue', slug: 'vue' },
    ],
  },
  {
    title: 'Backend & Data',
    description: 'Backend, database, and data-flow topics from full-stack work.',
    topics: [
      { label: 'C#', slug: 'csharp' },
      { label: '.NET', slug: 'dotnet' },
      { label: 'SQL Server', slug: 'sql-server' },
      { label: 'Database Design', slug: 'database-design' },
      { label: 'WebSocket', slug: 'websocket' },
    ],
  },
  {
    title: 'Creative & Interactive',
    description: 'Interactive, mapping, and game-related project themes.',
    topics: [
      { label: 'Map Visualization', slug: 'map-visualization' },
      { label: 'Unity', slug: 'unity' },
      { label: 'Game Development', slug: 'game-development' },
      { label: '3D', slug: '3d' },
    ],
  },
]

export const topics = topicGroups.flatMap((group) => group.topics)

export const topicBySlug = topics.reduce<Record<string, Topic>>((acc, topic) => {
  acc[topic.slug] = topic
  return acc
}, {})

export function getTopicSlug(value: string) {
  return topicBySlug[value] ? value : slug(value)
}

export function getTopicLabel(value: string) {
  const topicSlug = getTopicSlug(value)
  return topicBySlug[topicSlug]?.label ?? formatFallbackTopic(value)
}

function formatFallbackTopic(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
