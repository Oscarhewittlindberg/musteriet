import React from 'react'
import { Button, Divider, Grid, Segment, Image } from 'semantic-ui-react'
import apple from '../../apple-drawing-14.jpg'
import CalendarComponent from './Calendar'

const BokningDivider = () => (
  <Segment >
    <Grid  columns={2} relaxed='very' stackable>

      <Grid.Column padded={2}>
      <Button content='Boka' icon='signup' size='big' />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <CalendarComponent/>
      </Grid.Column>
    </Grid>

    <Divider vertical><Image alt="logo" src={apple} size='mini'/></Divider>
  </Segment>
)

export default BokningDivider