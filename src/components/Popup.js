import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography, Button,Paper } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';


export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    

    return (
        <Dialog open={openPopup}  maxWidth="md"  sx={{
            padding: '16px',
        
           backgroundColor:'#00000000',
           
        }}>
            <DialogTitle  sx={{
        backgroundColor:'#2A2F3B',
        paddingRight: '0px' ,borderRadius:'0px'}}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1,color:'#fff' }}>
                        {title}
                    </Typography>
                    <Button
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}} sx={{ width: '10px',
                            margin: '5px',borderRadius:'0px'}}>
                        <CloseIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers sx={{  backgroundColor:'#171E29',borderRadius:'0px'}}>
                {children}
            </DialogContent>
        </Dialog>
    )
}