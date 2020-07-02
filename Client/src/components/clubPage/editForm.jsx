import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import img from './assets/img/ins.jpg' 

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveChange = () => {
    //database
  }

  return (
    <div>
     
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" onSubmit={saveChange}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
        <div className="photo" backgroundImage={img}/> 
          <DialogContentText>
          Don't forget to always update your information for your followers ! 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Club Name"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Club Theme : what's your club about ? "
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Club Goals : what's your purpose through this club ? "
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Club Comunity : who's your target of your activities? "
            type="name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
