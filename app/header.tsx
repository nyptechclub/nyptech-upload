"use client"
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
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  // Check if the path contains a dynamic id parameter (e.g., any string after the last slash)
  const pathSegments = pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];
  const isDynamicPath = lastSegment && lastSegment.length > 0 && !lastSegment.includes('[') && !lastSegment.includes(']');

  // Conditionally render the Header component
  if (isDynamicPath) {
    return null;
  }

  return (
    <div className="relative z-10 border-b py-4 bg-primary-content text-accent">
      <div className="items-center container mx-auto justify-between flex">
        <Link href="/" className="flex gap-2 items-center text-xl">
          <Home />
        </Link>

        <div className="flex gap-2">
          <SignedIn>
            <div className="bg-accent rounded-sm">
              <OrganizationSwitcher />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button className="btn">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
