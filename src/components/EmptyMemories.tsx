import Link from 'next/link'

/* eslint-disable react/no-unescaped-entities */
export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        You haven't recorded any memories yet, start{' '}
        <Link href="/memories/new" className="ubderline hover:text-gray-50">
          {' '}
          creating one now!
        </Link>
      </p>
    </div>
  )
}
