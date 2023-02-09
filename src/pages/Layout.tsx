import React from "react";
import Sidebar from "./Sidebar"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import CommodityTable from "./CommodityTable"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col w=80

// const Item = styled(Paper)(({ theme }) => ({
//    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const [openDesc, setOpenDesc] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDescClickOpen = () => {
    setOpenDesc(true);
  };

  const handleDescClose = () => {
    setOpenDesc(false);
  };
  return (
    // <div className="h-screen flex flex-row justify-start">
    <div 
    style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"start",
        height:"100vh"
    }}
    >
      <Sidebar/>
      {/* <div className=" flex-1 p-4  border border-dashed"> */}
      <div
      style={{
        width:"90em"
      }}
      >
     <div>
      <Stack direction="row" spacing={2}>
     <div>
      <Button 
      variant="outlined" 
      onClick={handleClickOpen}
      >
        + Code
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Commodity Code</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Code"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
      </div>
      <Button 
      variant="outlined"
      onClick={handleDescClickOpen}
       >
        + Description
      </Button>
      <Dialog open={openDesc} onClose={handleDescClose}>
        <DialogTitle>Description</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDescClose}>Cancel</Button>
          <Button onClick={handleDescClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </Stack>
    </div>
   <br></br>
    <CommodityTable/>
    <br></br>
    <CommodityTable/>
  
   
      </div>
    </div>
  );
};

export default Layout;