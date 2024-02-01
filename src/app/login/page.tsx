"use client"
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Card, Container, Grid, Modal, TextField, Typography } from '@mui/material';
import styles from "./login.module.css"
import Image from 'next/image';
import userlogo from "../../Image/userlogo.png"
import reseticone from "../../Image/reseticone.png"
import Link from 'next/link';

const page =()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Submitted:', { username, password });
  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   
    <main className={styles.main}>
    <div className={`${styles.container} ${styles.mainLoginPage}`}>
      <div className={styles.card}>
        <div style={{textAlign:'center'}}>
        <Image src={userlogo} alt="User Logo" width={100} height={100} />
        <h2 style={{textAlign:"center",paddingBottom:"20px"}}>Login</h2>
        </div>
 
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} style={{textAlign:"center"}} >
            <Grid item xs={12}>
            <TextField style={{width:"60%"}} id="outlined-basic" label="User Name" variant="outlined" required
             value={username}
             onChange={(e) => setUsername(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField style={{width:"60%"}} id="outlined-basic" label="Password" variant="outlined" required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            
            />
            </Grid>
            {password && username ? (
              <Grid item xs={12}>
                <Link href="/dashboard">
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
              </Grid>
            ) : (
              <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
              </Grid>
            )}
           
            </Grid>
        </form>
        <Grid item xs={12} style={{textAlign:"center"}}>
           <Button type="submit" onClick={handleOpen} variant="text" color="primary">Reset password</Button>
           </Grid>
           <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{textAlign:'center'}}>
        <Image src={reseticone} alt="User Logo" width={100} height={100} />
        <h2>Reset password</h2>
        </div>
        <form >
            <Grid container spacing={2} style={{textAlign:"center"}} >
           
            <Grid item xs={12}>
            <TextField id="standard-basic" label="New Password" variant="standard" />
            </Grid>
            <Grid item xs={12}>
            <TextField id="standard-basic" label="Confirm New Password" variant="standard" />
            </Grid>
            <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
          
           Continue
            </Button>
          </Grid>
            </Grid>
        </form>
          <Grid>

          </Grid>
        </Box>
      </Modal>
    </div>
      </div>
    </div>
  </main>
  );
};

export default page;
const style = {
  position: 'absolute' as 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '4%'
};
