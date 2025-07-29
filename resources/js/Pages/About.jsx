import { Link } from '@inertiajs/inertia-react'
import Layout from '../components/Layout/Layout'

export default function About() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center p-10">
          
          <div className="h-10 w-full bg-slate-300 text-[25px]"> Home Page</div>
          <Link href="/" className="underline">
            Home
          </Link>
        </div>
      </Layout>
    </>
  )
}
