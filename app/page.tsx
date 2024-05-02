import Link from "next/link";

export default function Home() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex flex-col">

      <img src="http://nyptech.vercel.app/favicon.ico"></img>
      <div className="text-2xl font-bold">
        File Upload Service
      </div>
      <Link href="/showcase" className="btn">Showcase</Link>
      <Link href="/NYP_SOLVE" className="btn">NYP Solve</Link>
      </div>
    </main>
  );
}
