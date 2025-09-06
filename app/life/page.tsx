import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Life' })

export default function Page() {
  return (
    <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
      <h1>Life Notes: Keep Moving, Keep Loving</h1>

      <p>
        In life, I’m naturally an optimist, always full of curiosity and enthusiasm for the world.
        Whether in the mountains, on the court, or during my travels, you’ll find me cheerful and
        smiling.
      </p>

      {/* Hiking */}
      <div className="flex flex-row gap-4">
        <Image
          src="/static/images/hiking1.jpeg"
          alt="Hiking in Vancouver"
          width={544}
          height={306}
          className="aspect-[2/3] w-1/2 flex-1 rounded-lg object-cover"
        />
        <Image
          src="/static/images/hiking2.jpeg"
          alt="Hiking trail"
          width={544}
          height={306}
          className="aspect-[2/3] w-1/2 flex-1 rounded-lg object-cover"
        />
      </div>
      <p>
        I love exploring nature on foot, often spending weekends hiking the beautiful trails around
        Vancouver. The views at the summit always make every drop of sweat worthwhile.
      </p>

      {/* Badminton */}
      <div className="columns-1 gap-4">
        <Image
          src="/static/images/badminton.jpg"
          alt="Playing badminton"
          width={544}
          height={306}
          className="aspect-[3/2] w-full rounded-lg object-cover"
        />
      </div>
      <p>
        The badminton court is my weekly source of happiness. With every swing and sprint, I release
        stress and embrace the pure joy brought by endorphins.
      </p>

      {/* Photography */}
      <p>
        My camera is like a second pair of eyes, capturing memorable moments throughout my journeys.
      </p>

      {/* Computer Repair */}
      <div className="flex flex-row gap-4">
        <Image
          src="/static/images/repairing-computer.jpeg"
          alt="Repairing computer"
          width={544}
          height={306}
          className="aspect-[2/3] w-1/2 flex-1 rounded-lg object-cover"
        />
        <Image
          src="/static/images/repairing-computer2.jpeg"
          alt="Teaching kids programming"
          width={544}
          height={306}
          className="aspect-[2/3] w-1/2 flex-1 rounded-lg object-cover"
        />
      </div>
      <p>
        From time to time, I also take part-time work—fixing computers at school or teaching kids
        how to code. The sense of accomplishment from sharing knowledge is as fulfilling as solving
        technical challenges.
      </p>

      {/* Speaking & Teaching */}
      <div className="flex flex-row gap-4">
        <Image
          src="/static/images/teaching.jpg"
          alt="Teaching session"
          width={544}
          height={306}
          className="aspect-[3/2] w-1/2 flex-1 rounded-lg object-cover"
        />
        <Image
          src="/static/images/speaking.jpg"
          alt="Speaking at event"
          width={544}
          height={306}
          className="aspect-[3/2] w-1/2 flex-1 rounded-lg object-cover"
        />
      </div>
      <p>
        To me, life is just like programming: stay passionate, stay curious, and stay optimistic—and
        you’ll write the most beautiful code.
      </p>
    </div>
  )
}
