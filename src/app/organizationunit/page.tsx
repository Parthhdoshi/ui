import React from 'react'
 import Dashboard from '../dashboard/page'
import { Grid } from '@mui/material'
// import styles from "../organization/organization.module.css"
import styles from "../organizationunit/organizationunit.module.css"
import OrganizationUnitTable from '../components/organizationunit/OrganizationUnitTable'


const page = () => {
  return (
    <div>
       <main className={styles.main}>
    <Dashboard/>
    <Grid container columnSpacing={2}  rowSpacing={2} sx={{ justifyContent: "space-evenly" }}>
    <OrganizationUnitTable/>
    </Grid>
    </main> 
    </div>
  )
}

export default page