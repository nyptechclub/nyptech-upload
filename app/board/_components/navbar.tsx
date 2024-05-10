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

import { InviteButton } from "./invite-button";
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
      <div className="block flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              }
            }
          }}
        />
      </div>
      <Button
        variant={favorites ? "ghost" : "secondary"}
        asChild
        size="lg"
        className="font-normal justify-start px-2 w-full"
      >
        <Link href={`/board/`}>
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
          pathname: `/board/`,
          query: { favorites: true }
        }}>
          <Star className="h-4 w-4 mr-2" />
          Favorite boards
        </Link>
      </Button>
      {organization && (
        <InviteButton />
      )}
    </div>
  );
};