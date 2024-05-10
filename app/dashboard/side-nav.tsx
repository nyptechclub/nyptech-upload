"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, Home, Pencil, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-3 sm:flex-col">
      <Link href="/board">
        <Button
          variant="expandIcon"
          iconPlacement="left"
          Icon={Pencil}
          className={clsx("gap-3", {
            "text-blue-500": pathname.includes("/board"),
          })}
        > Board
        </Button>
      </Link>
      <Link href="/dashboard/files">
        <Button
          variant="expandIcon"
          iconPlacement="left"
          Icon={FileIcon}
          className={clsx("gap-3", {
            "text-blue-500": pathname.includes("/dashboard/files"),
          })}
        >
           Files
        </Button>
      </Link>

      <Link href="/dashboard/favorites">
        <Button
          variant="expandIcon"
          iconPlacement="left"
          Icon={StarIcon}
          className={clsx("gap-3", {
            "text-blue-500": pathname.includes("/dashboard/favorites"),
          })}
        > Liked
        </Button>
      </Link>

      <Link href="/dashboard/trash">
        <Button
                    variant="expandIcon"
                    iconPlacement="left"
                    Icon={TrashIcon}
          className={clsx("gap-3", {
            "text-blue-500": pathname.includes("/dashboard/trash"),
          })}
        >Trash
        </Button>
      </Link>
    </div>
  );
}