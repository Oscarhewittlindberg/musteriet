import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css'
import { Button, Form, Dropdown, Input, Confirm, Message, Dimmer, Loader} from 'semantic-ui-react';
//import EnvVariables from '../../EnvVariables';

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    //const {apiUrl,header} = EnvVariables()

    const payload = {
        "name": name,
        "email": email,
        "message": message,
        "phone_number": phoneNumber
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        if (email === "" || message === "" || phoneNumber === "") {
          alert("Please fill out all fields");
        } else {
            try {
              await axios.post(`/api/dataproducts/update/new`,{payload}, {
                  params: {},
              }

              );
              setIsLoading(false)
              setIsSuccess(true);

            } catch (error) {
              console.error(error);
            }
          }
        };

  return (
        <Form size='mini' success={isSuccess}>
          <Form.Field>
              <Input 
                placeholder='Name'
                onChange={(e) => setName(e.target.value)} 
            />
          </Form.Field>
          <Form.Field>
              <Input 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Field>
          <Form.Field>
              <Input 
                placeholder='Namn'
                onChange={(e) => setPhoneNumber(e.target.value)} 
            />
          </Form.Field>
          <Form.TextArea
            placeholder='Meddelande'
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
            />
            <Button 
                content= 'Skicka'
                type="submit"
                color='black' 
                onClick={() => setConfirmOpen(true)}
                fluid
                size='tiny'
            />
        <Confirm
            open={confirmOpen}
            content='Are you sure you want to send this message?'
            onCancel={() => setConfirmOpen(false)}
            onConfirm={handleSubmit}
        />
        <Message
            success
            content='Your data product has been created'
        />
        {isLoading && <Dimmer active inverted>
            <Loader inverted content='Creating Data Product, this may take a few minutes'/>
        </Dimmer>
        }
      </Form>
    );
}

export default ContactForm;
