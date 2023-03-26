import { Box, Container, Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import '../App.css'


export default function Footer()  {
  return (
    <Box
      sx={{
        display: 'flex',
        height: "auto",
        bottom: '20px',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
      component='div'
      className="footBox"
    >
      <Container maxWidth="xs" >
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box display='flex' alignItems='center' flexDirection='row'>
              <img className="foot" width='80px' alt="" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Coat_of_Arms_of_Travnik.png" />
              <Divider flexItem orientation="vertical" sx={{ml: '32px', mr: '17px'}} />
              <Typography fontSize='16px' fontWeight={600} ml={1} color="black" variant="h6">
                Općina Travnik, 2035  
              </Typography> 
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
