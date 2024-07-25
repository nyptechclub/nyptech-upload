import Link from "next/link";
import Theme2 from "./theme2";

export default function LandingPage() {

  return (
    <section className="flex items-center justify-center hero">
      <div className="flex bg-base-200 rounded-xl p-5 items-center justify-center text-base-content flex-col hero-content gap-3 m-5">
        <img src="https://nyptech-learn.vercel.app/favicon.ico"/>
        <div className="text-2xl font-bold">NYPTECH-UPLOAD
        </div>
        <div className="text-xl">Faster Iteration, More Innovation
        </div>
        <div className="m-5">Make an account and start managing your collabs in less than a
      minute.Made with convex and nextjs
    </div>
    <Link
      href="/dashboard/files"
      className="btn btn-accent"
    >
      Get started
    </Link>
    </div>
    </section>
)



}