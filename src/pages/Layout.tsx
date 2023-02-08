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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar/>
      <div className=" flex-1 p-4  border border-dashed">
     <div>
      <Stack direction="row" spacing={2}>
     <div>
      <Button 
      variant="outlined" 
      onClick={handleOpen}
      >
        + Code
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </div>
      <Button variant="outlined" >
        + Description
      </Button>
    </Stack>
    </div>
   <br></br>
    <CommodityTable/>
  
   
      </div>
    </div>
  );
};

export default Layout;