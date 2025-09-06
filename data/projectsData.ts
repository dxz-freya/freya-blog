interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Library Management System	',
    description: `A full-featured web-based library platform designed to manage books, authors, customers, and library branches. Developed during my Master’s program, it includes secure login, role-based access, and a clean admin interface to manage library operations.`,
    imgSrc: '/static/images/library.png',
    href: '/blog/library-management-system',
  },
  {
    title: 'Haunted House Game',
    description: `A 3D puzzle-adventure game built with Unity where players guide John Lemon through a haunted mansion filled with ghosts and traps.  The game emphasizes stealth and navigation, combining engaging level design with atmospheric visuals. Developed to showcase my skills in game design and 3D modeling, it offers an immersive experience with a unique toon-shaded aesthetic.`,
    imgSrc: '/static/images/game.png',
    href: '/blog/haunted-house-game',
  },
  {
    title: 'Toll Management System',
    description: `A highway toll management platform integrated with Beidou navigation technology to monitor and analyze toll transactions in real time. The system tracks vehicle movement and cross-validates toll records to identify potential discrepancies. It also provides both live dashboards and historical analysis for operational insight.`,
    imgSrc: '/static/images/MTC.png',
    href: '/blog/toll-management-system',
  },
  {
    title: 'Beidou High-Precision Monitoring System',
    description: `This system uses Beidou navigation technology to provide high-precision monitoring of vehicle operations on highways. It
tracks vehicle trajectories and displays them to users while offering real-time road condition information and warning features
to ensure road safety and smooth traffic flow.`,
    imgSrc: '/static/images/highprecision.png',
    href: '/blog/beidou-high-precision-monitoring-system',
  },
]

export default projectsData
