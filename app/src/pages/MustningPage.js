import React from 'react'
import { Grid, Placeholder } from 'semantic-ui-react'
import BokningDivider from '../components/mustning/BokningDivider'

const MustningPage = () => {
  return ( 
  <Grid divided='vertically' relaxed='very'>
    <Grid.Row centered>
      Nyheter
      <Placeholder>
        <Placeholder.Line length='full' />
        <Placeholder.Line length='very long' />
        <Placeholder.Line length='long' />
        <Placeholder.Line length='medium' />
        <Placeholder.Line length='short' />
        <Placeholder.Line length='very short' />
      </Placeholder>
      
    </Grid.Row>

  <Grid.Row columns={20}>
    <Grid.Column>

    </Grid.Column>

  </Grid.Row>
</Grid> 
)
}

export default MustningPage