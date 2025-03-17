// components/ui/modal.tsx
"use client";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "./drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./dialog";
import { useMediaQuery } from "@/lib/media-query";

export const ModalRoot = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <Dialog>{children}</Dialog>;
  } else {
    return <Drawer>{children}</Drawer>;
  }
};

export const ModalTrigger = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <DialogTrigger className="w-fit">{children}</DialogTrigger>;
  } else {
    return <DrawerTrigger className="w-fit">{children}</DrawerTrigger>;
  }
};

export const ModalContent = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <DialogContent className="text-left">{children}</DialogContent>;
  } else {
    return <DrawerContent>{children}</DrawerContent>;
  }
};

export const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <DialogHeader className="text-left">{children}</DialogHeader>;
  } else {
    return <DrawerHeader className="text-left">{children}</DrawerHeader>;
  }
};

export const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <DialogFooter className="text-left">{children}</DialogFooter>;
  } else {
    return <DrawerFooter>{children}</DrawerFooter>;
  }
};

export const ModalTitle = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <DialogTitle>{children}</DialogTitle>;
  } else {
    return <DrawerTitle>{children}</DrawerTitle>;
  }
};

export const ModalDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <DialogDescription>{children}</DialogDescription>;
  } else {
    return <DrawerDescription>{children}</DrawerDescription>;
  }
};

export const ModalClose = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <DialogClose className="text-right">{children}</DialogClose>;
  } else {
    return <DrawerClose className="pb-4">{children}</DrawerClose>;
  }
};
