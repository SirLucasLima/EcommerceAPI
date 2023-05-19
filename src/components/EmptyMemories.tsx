/* eslint-disable react/no-unescaped-entities */
export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        You haven't recorded any memories yet, start{' '}
        <a href="#" className="ubderline hover:text-gray-50">
          {' '}
          creating one now!
        </a>
      </p>
    </div>
  )
}
