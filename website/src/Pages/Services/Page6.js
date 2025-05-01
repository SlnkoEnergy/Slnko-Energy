import { Box, Grid } from '@mui/material'
import React from 'react'
import img1 from "../../assets/Service_2.png"
const Page6 = () => {
  return <>
  <Grid
  display={'flex'}
  justifyContent={'center'}
  alignItems={'center'}
  >

    <Box
    component={'img'}
    src={img1}
    alt='services'
    width={'1200px'}
    height={'800px'}
    >

    </Box>
  </Grid>
  </>
}

export default Page6