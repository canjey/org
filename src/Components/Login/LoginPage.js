import * as React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


async function loginUser(credentials) {

    return fetch('http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/login', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)

    })
        .then(data => data.json()
        )
    // .then(data => {
    //   if (data.status === 404)
    //   {
    //     console.log('Invalid Credentials')
    //   }
    // })


}


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const errors = {
        credentials: 'Invalid Credentials'
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            email,
            password
        });
        console.log(response);
        if ('access_token' in response.data) {
            window.localStorage.setItem("token", response.data.access_token);
            console.log(response.success);
            console.log(response.data.access_token);
            window.location.href = ("/organizations");
        } else {
            console.log(response)
            window.location.href = ("/login");

        }
    }
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = ("/login");

    }

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{padding: '10%'}}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h1">Welcome To Organization Planner</Typography>
                            <Typography variant="h4" sx={{mt: '30px'}}>Please Enter Your Details</Typography>

                            <Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    type="text"
                                    name="email"
                                    label="Email Address"
                                    fullWidth
                                    sx={{mt: '5%'}}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Typography>
                            <Typography>
                                <TextField
                                    required
                                    type="password"
                                    name="password"
                                    id="outlined-required"
                                    label="Password"
                                    fullWidth
                                    sx={{mt: '5%'}}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Typography>
                            <Typography variant="h5" sx={{float: 'right', mt: '1%', color: 'gray'}}>
                                Forgot Password?
                            </Typography>
                            <Typography>
                                <Button type="submit" size={"medium"} variant={"outlined"} fullWidth
                                        sx={{backgroundColor: '#EDEFEF', mt: '3%', color: 'black',}}>
                                    LOGIN
                                </Button>
                            </Typography>
                            <Typography variant="h6" sx={{color: 'gray', mt: '1%'}}>Do not have an account? Sign
                                up</Typography>
                        </form>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{backgroundColor: '#EDEFEF', height: '100vh'}}>
                        <img src='org.svg' alt="org storyset"
                             style={{width: '50%', marginLeft: '25%', marginTop: '10%'}}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
