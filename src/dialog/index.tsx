import { useMediaQuery, useTheme, type DialogProps } from "@mui/material";
import { type PropsWithChildren, type ReactNode } from "react";
import { FullScreenDialog } from "./FullScreenDialog.js";
import { ModalDialog } from "./ModalDialog.js";

export type Props = PropsWithChildren<
  {
    title: ReactNode;
    onClose(): any;
  } & Omit<DialogProps, "onClose" | "title">
>;

export default function Dialog(props: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const DialogType = fullScreen ? FullScreenDialog : ModalDialog;

  return <DialogType {...props} />;
}
