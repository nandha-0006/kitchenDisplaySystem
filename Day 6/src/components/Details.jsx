import React from 'react'
import {  
    Box,
    Button,
    Stack,
    TextField
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import {BiLogoGmail} from "react-icons/bi";
import { MdMessage } from 'react-icons/md';
import {FaTwitter, FaFacebook ,FaGoogle,FaLinkedinIn ,FaUserCircle,FaLock, FaMessage} from "react-icons/fa";

const Details = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            name: data.get('name'),
        });

    }


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Contact us for any Queries'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Have questions, feedback, or need assistance? We\'re here to help! \
                Our dedicated support team is just a click or call away. '
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />

            {/* <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}
            style={{width: "50%"}}
            >
                <TextField
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <textarea style={{width: "99%", borderRadius: "5px", marginTop: "3%"}}name="" id="" cols="30" rows="10" placeholder=''></textarea>
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize',
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#ffa500',
                    "&:hover": {
                        backgroundColor: '#7b7b7b',
                    }
                }}
                >
                    send
                </Button>
            </Box> */}
            <form action="#" className="contact-form" style={{width: "100%"}}>
            <h2 className="title"></h2>
            <div className="input-field">
              <i className="user"> <FaUserCircle/> </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"><BiLogoGmail/></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field-text-area">
              <i className="fas fa-message"><MdMessage /></i>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <a type="submit" href="/" value="Login" className="btnm">Send</a>
            
          </form>
        </Stack>
    )
}

export default Details;