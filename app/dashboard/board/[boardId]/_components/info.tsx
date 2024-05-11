"use client";

import Link from "next/link";
import { Menu, Pencil } from "lucide-react";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import { api } from "@/convex/_generated/api";
import { Actions } from "@/app/_components/actions";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/app/_components/modals/use-rename-modal"; 
import { useUser } from "@clerk/nextjs";

interface InfoProps {
  boardId: string;
};

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Info = ({
  boardId,
}: InfoProps) => {
  const { onOpen } = useRenameModal();
  const {user} = useUser();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <div data-tip="Go to boards" className="tooltip tooltip-bottom">
          <Link href={`/dashboard/board`} className="w-full">
             Boards
          </Link>
      </div>
      <div className="divider divider-horizontal"></div>      

      <div data-tip="Edit title" className="tooltip tooltip-bottom">
        <button
          className="btn btn-link"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </button>
      </div>
      <div className="divider divider-horizontal"></div>      
      <Actions
        id={data._id}
        title={data.title}
        side="bottom"
        sideOffset={10}
      >
          <div data-tip="Main menu" className="tooltip tooltip-bottom">
              <Menu />
          </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div 
      className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
    />
  );
};