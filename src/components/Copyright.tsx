import Link from 'next/link'

export function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Made with 💜 at NLW of{' '}
      <Link
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
        href="https://rocketseat.com.br"
      >
        Rocketseat
      </Link>
    </div>
  )
}
