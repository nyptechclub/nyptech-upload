"use client";

import dynamic from "next/dynamic";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  // Dynamically import the Editor, disabling SSR
  const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content,
    }).catch((error) => console.error("Failed to update document", error));
  };

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <Skeleton className="h-14 w-[50%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} editable />
      </div>
    </div>
  );
};

export default DocumentIdPage;
