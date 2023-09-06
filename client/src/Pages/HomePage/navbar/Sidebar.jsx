import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Stack,
  Link,
  ThemeProvider,
  Button,
  Modal,
} from "@mui/material";
import mainTheme from "../../../assets/theme/mainTheme";
import MenuIcon from "@mui/icons-material/Menu";
import SignIn from "../../../assets/Popups/SignIn";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const [modalOpen, setModalOpen] =  useState(false)


  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <ThemeProvider theme={mainTheme}>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack direction="column" spacing={5} mt={6}>
          <Link href = "/" onClick={() => setOpen(false)}>Home</Link>
          <Link  onClick={() => setOpen(false)}>About</Link>
          <Link href="/trackapplication" onClick={() => setOpen(false)}>Track Application</Link>
          <Link onClick={() => setOpen(false)}>Important Documents</Link>
          <Link onClick={() => setOpen(false)}>Contact Us</Link>
          <Button onClick={handleModalOpen}>Login </Button>
        </Stack>
      </Drawer>

      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <SignIn />
      </Modal>
    </ThemeProvider>
  );
};

export default SideBar;
