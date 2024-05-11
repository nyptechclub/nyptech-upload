"use client";
import React from "react";
import { LayoutDashboard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  UserButton,
  OrganizationSwitcher,
  useOrganization
} from "@clerk/nextjs";

import { useSearchParams } from "next/navigation";

export const Navbar = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  const openModal = () => {
    const dialogElement = document.getElementById('new_board') as HTMLDialogElement | null;
    if (dialogElement) {
        dialogElement.showModal();
    }
};

const closeModal = () => {
    const dialogElement = document.getElementById('new_board') as HTMLDialogElement | null;
    if (dialogElement) {
        dialogElement.close();
    }
};
  return (
    <div className="flex flex-col md:flex-row items-center gap-x-4 p-5">
      <Button
        variant={favorites ? "ghost" : "secondary"}
        asChild
        size="lg"
        className="font-normal justify-start px-2 w-full"
      >
        <Link href={`/dashboard/board`}>
          <LayoutDashboard className="h-4 w-4 mr-2" />
          Team boards
        </Link>
      </Button>
      <Button
        variant={favorites ? "secondary" : "ghost"}
        asChild
        size="lg"
        className="font-normal justify-start px-2 w-full"
      >
        <Link href={{
          pathname: `/dashboard/board/`,
          query: { favorites: true }
        }}>
          <Star className="h-4 w-4 mr-2" />
          Favorite boards
        </Link>
      </Button>
    </div>
  );
};