import React from 'react'
import styles from "../organization/organization.module.css"
 import Dashboard from '../dashboard/page'
import { Grid } from '@mui/material'
import Organizationtable from '../components/organizationtable'
const page = () => {
  return (
    <main className={styles.main}>
    <Dashboard/>
    <Grid container columnSpacing={2}  rowSpacing={2} sx={{ justifyContent: "space-evenly" }}>
        <Organizationtable/>
        
    </Grid>
    </main>
  )
}

export default page