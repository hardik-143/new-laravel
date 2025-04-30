import { Link } from "@inertiajs/inertia-react";

export default function About() {
    return (
        <>
            <div className="p-10 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold  font-nunito">
                    Fixed Header
                </h1>
                <div className="h-10 w-full bg-slate-300">About Page</div>
                <Link href="/" className="underline">
                    Home
                </Link>
            </div>
        </>
    );
}
