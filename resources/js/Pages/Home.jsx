import { Link } from '@inertiajs/inertia-react';

export default function Home() {
  let hello = 'Hello';
  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Fixed Header</h1>
      <div className="h-10 w-full bg-slate-300 text-[25px]">{hello} Home Page</div>
      <Link href="/about" className="underline">
        About
      </Link>
    </div>
  );
}
