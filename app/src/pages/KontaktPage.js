import React from 'react'
import { Grid } from 'semantic-ui-react'
import ContactForm from '../components/kontakt/ContactForm'

const KontaktPage = () => {
  const [hej, d] = ""
  return ( 
  <Grid divided='vertically'>
  <Grid.Row columns={4}>
    <Grid.Column >
      Skriv ett meddelande
    </Grid.Column>
    <Grid.Column width={12}>
      Öppettider
    </Grid.Column>
  </Grid.Row>

  <Grid.Row>
  <Grid.Column width={4}>
      <ContactForm/>
    </Grid.Column>
    <Grid.Column width={12}>
      
    </Grid.Column>

    
  </Grid.Row>
</Grid> 
)
}

export default KontaktPage