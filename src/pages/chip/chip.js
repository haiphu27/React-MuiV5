import React, {useState} from 'react';

import {Chip} from "@mui/material";
import './chip.css'

const Chip1 = () => {
    const [languages,setLanguage]=useState([
        {id:1,label: 'English'},
        {id:2,label: 'Spanish'},
        {id:3,label: 'French'},
        {id:4,label: 'German'},
        {id:5,label: 'Italian'}
    ])

    const handleDelete=(languageDelete)=>{
        setLanguage(languages.filter(language=>language.id!==languageDelete.id))
    }

    return (
        <div>
            <h1>Learn Chip</h1>
            <div className={'chip-container'}>
                {languages.map((language)=>(
                    <Chip
                       key={language.id}
                       label={language.label}
                       onDelete={()=>handleDelete(language)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chip1;