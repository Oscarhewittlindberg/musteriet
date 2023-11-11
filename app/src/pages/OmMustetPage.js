import React from 'react'
import { Grid } from 'semantic-ui-react'
import MapComponent from '../components/om/Map'

const OmMustetPage   = () => {
  
  return ( 
  <Grid divided='vertically'>
  <Grid.Row >
    Lidingö Musteri
    <MapComponent/>

  </Grid.Row>
</Grid> 
)
}


export default OmMustetPage