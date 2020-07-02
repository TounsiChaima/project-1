import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import img from '../../assets/ins.jpg' 

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div style={{backgroundColor:'white'}}>
      <div className='row' style={{paddingTop:'7%'}}>
      <div className='col-md-6' backgroundImage >
    <img src={img} style={{minHeight:'50%', maxWidth:'80%'}}/>
  
      </div>
      <div className='col-md-6' style={{marginTop:'5%'}}>
        <h1>AERODAY</h1>
<p>C'est l'unique journée nationale consacrée entièrement à l'Aéronautique en Tunisie, elle est fondée en 2012 par le club Aerobotix INSAT en collaboration avec l'association des techniques de robotique (ATR). Cette journée est basée sur plusieurs axes et sur des différents challenges et elle opte pour la vulgarisation du domaine aéronautique chez le grand public ainsi que sur la découverte de nouveaux potentiels dont disposent les jeunes.

L'Aeroday revient cette année dans sa 9ème édition sous le thème " Les Olympiades Aéronautique ", inspiré des Jeux Olympiques TOKYO 2020. Un show aérien, des conférences, des expositions et des ateliers pour les enfants… Tout ça aura lieu le 12 Avril à l'INSAT. Donc gardez la date car nous voulons vivement vous voir parmi nous. </p>
      </div>
    </div>
    <div >
    
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
    </div>
    </React.Fragment>
  );
}
