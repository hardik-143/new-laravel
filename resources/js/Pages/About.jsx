import { Link } from '@inertiajs/inertia-react'

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="font-nunito text-3xl font-bold">Fixed Header</h1>
        <div className="h-10 w-full bg-slate-300">About Page</div>
        <Link href="/" className="underline">
          Home
        </Link>
      </div>
    </>
  )
}
