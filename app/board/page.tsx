"use client";

import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { Navbar } from "./_components/navbar";
import { useRenameModal } from "../_components/modals/use-rename-modal";
import { Button } from "@/components/ui/button";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const DashboardPage = ({
  searchParams,
}: DashboardPageProps) => {
  const { organization } = useOrganization();

  return ( 
    <div className="flex-1 h-[calc(100%-80px)] p-6">
        <Navbar/>
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList
          orgId={organization.id}
          query={searchParams}
        />
      )}
      <Button onClick={() => useRenameModal.getState().onOpen("123", "Sample Title")}>Open Modal</Button>

    </div>
   );
};
 
export default DashboardPage;