import Link from "next/link";
import Theme2 from "./theme2";

export default function LandingPage() {

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-8">
          <div className="text-center">
            <img
              src="https://nyptech.vercel.app/favicon.ico
              "
              width="200"
              height="200"
              alt="file drive logo"
              className="inline-block mb-8"
            />
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              NYPTECH <br>
              </br> collab and upload
            </h1>
            <p className="mt-6 text-lg leading-8">
              Make an account and start managing your collabs in less than a
              minute.
            </p>
            <div className="m-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard/files"
                className="btn btn-accent"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="btn btn-outline"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div>
              Made with convex and nextjs
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}