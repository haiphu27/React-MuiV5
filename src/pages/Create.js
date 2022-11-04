import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Send} from "@mui/icons-material";

const Create = () => {
    const [name,setName] = useState('')
    const [detail,setDetail] = useState('')
    const [errorName,setErrorName] = useState(false)
    const [errorDetail,setErrorDetail] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name ){
            setErrorName(true)
        } if(!detail ){
            setErrorDetail(true)
        }


    }

    return (
        <div>
            <Link to={'/'}>
                <h4>go back home </h4>
            </Link>
            <h1>Create new user</h1>
            <form noValidate autoComplete={'off'} onSubmit={handleSubmit}>
                <Box pb={2}>
                    <TextField
                        label='Name'
                        variant='standard'
                        fullWidth
                        required
                        onChange={(e)=>setName(e.target.value)}
                        error={errorName}
                    />

                    <TextField
                        label='Details'
                        variant='standard'
                        fullWidth
                        pt={2}
                        multiline
                        rows={5}
                        required
                        onChange={(e)=>setDetail(e.target.value)}
                        error={errorDetail}
                    />
                    <RadioGroup row defaultValue='Female'>
                        <FormControlLabel control={<Radio/>} label={'Male'} value='Male'/>
                        <FormControlLabel control={<Radio/>} label={'Female'} value='Female'/>
                        <FormControlLabel control={<Radio/>} label={'Other'} value='Other'/>
                    </RadioGroup>

                </Box>

                <Button variant='contained' type='submit' startIcon={<Send/>}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Create;
