import { Close as CloseIcon } from "@mui/icons-material";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  type DialogProps,
  type SlideProps,
} from "@mui/material";
import { type PropsWithChildren, type ReactNode } from "react";

export type Props = PropsWithChildren<
  {
    title: ReactNode;
    onClose(): void;
  } & Omit<
    DialogProps,
    "onClose" | "fullScreen" | "TransitionComponent" | "title"
  >
>;

function SlideUp(props: Omit<SlideProps, "direction">) {
  return <Slide direction="up" {...props} />;
}

export function FullScreenDialog({
  children,
  title,
  scroll = "paper",
  ...props
}: Props) {
  return (
    <Dialog
      {...props}
      scroll={scroll}
      fullScreen={true}
      TransitionComponent={SlideUp}
    >
      <AppBar
        position="static"
        color="secondary"
        sx={{ bgcolor: "secondary.main" }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={props.onClose} size="large">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
}
