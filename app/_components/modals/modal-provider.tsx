"use client";

import { useEffect, useState } from "react";

import { RenameModal } from "@/app/_components/modals/rename-modal";
import { CoverImageModal } from "./cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <RenameModal />
      <CoverImageModal />
    </>
  );
};