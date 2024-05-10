import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import { Home } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 border-b py-4 bg-primary-content text-accent">
      <div className="items-center container mx-auto justify-between flex">
        <Link href="/" className="flex gap-2 items-center text-xl">
        <Home/>
        </Link>

        <div className="flex gap-2">
          <SignedIn>
            <div className="bg-accent rounded-sm">
            <OrganizationSwitcher/>
            </div>
          <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}