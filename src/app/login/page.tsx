"use client"
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Card, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, TextField, Typography } from '@mui/material';
import styles from "./login.module.css"
import Image from 'next/image';
import userlogo from "../../Image/userlogo.png"
import reseticone from "../../Image/reseticone.png"
import Link from 'next/link';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const page =()=> {
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const [userid, setUserId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Submitted:', { username, showPassword });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleResetPass= (e:any) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('setrestPass:', { userid });
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
            {/* <TextField style={{width:"60%"}} id="outlined-basic" label="Password" variant="outlined" required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            
            /> */}
             <FormControl sx={{ m: 1, width: '60%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
            </Grid>
            { username ? (
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
            <TextField id="standard-basic" label="Please Enter User ID" variant="standard" 
              onChange={(e) => setUserId(e.target.value)}
            />
          
            </Grid>
               {submitted ?(
                <>
                <Grid item xs={12}>
                <TextField id="standard-basic" label="New Password" variant="standard" />
                </Grid>
                <Grid item xs={12}>
                <TextField id="standard-basic" label="Confirm New Password" variant="standard" />
                </Grid>
                <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">Continue</Button>
              </Grid>
              </>
               ):(
                <Grid item xs={12}>
                <Button   variant="contained" color="primary" onClick={handleResetPass}>Send Password</Button>
                </Grid>
               )}
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
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '4%'
};
