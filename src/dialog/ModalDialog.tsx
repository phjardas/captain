import { Dialog, DialogTitle, type DialogProps } from "@mui/material";
import { useCallback, type PropsWithChildren, type ReactNode } from "react";

export type Props = PropsWithChildren<
  { title: ReactNode; onClose(): any } & Omit<
    DialogProps,
    "onClose" | "maxWidth" | "fullWidth" | "title"
  >
>;

export function ModalDialog({
  title,
  children,
  onClose,
  scroll = "paper",
  ...props
}: Props) {
  const handleClose = useCallback(
    (_: unknown, reason: "backdropClick" | "escapeKeyDown") => {
      // ignore click-away events
      if (reason === "backdropClick") return;
      onClose();
    },
    [onClose]
  );

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      scroll={scroll}
      onClose={handleClose}
      {...props}
    >
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}
