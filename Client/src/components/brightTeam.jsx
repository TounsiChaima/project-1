import React from "react";
import img from '../assets/team.png';
import ch1 from '../assets/chayma.png';
import ch2 from '../assets/chaima.png';
import yesmine from '../assets/yesmine.png';
import me from '../assets/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class BrightTeam extends React.Component{


render(){
    return(
        <div className='row'style={{ backgroundColor:'white'}} >
           
        <div className="parallax row" id='teamparallax' style={{backgroundImage:`url(${img})`,backgroundAttachment:'fixed',
         backgroundSize:'cover',textAlign:'center', maxHeight:'80vh', position:'relative'}}>
              
              <div  id='layer_team'  >
              
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase" style={{paddingTop:'5%'}}>Our Amazing Team</h2>
      <h5>Made at INSAT, with love by</h5>
    </div>
  </div>
  <div className="row">

  <div className="col-sm-3">
      <div className="team-member">
        <img className="rounded" style={{maxWidth:'100%'}} src={me} alt=""/>
        <h4>Arij Zouaoui</h4>
 
      </div>
    </div>

    <div className="col-sm-3">
      <div className="team-member">
        <img className="rounded" style={{maxWidth:'100%'}}  src={ch1} alt=""/>
        <h4>Chaima Araibi</h4>
        
      </div>
    </div>
    <div className="col-sm-3">
      <div className="team-member">
        <img  className="rounded" style={{maxWidth:'100%'}} src={ch2} alt=""/>
        <h4>Chaima Tounsi</h4>
        
      </div>
    </div>
    

    <div className="col-sm-3">
      <div className="team-member">
        <img className="rounded" style={{maxWidth:'100%'}} src={yesmine} alt=""/>
        <h4>Yesmine Kachouri</h4>
        
      </div>
    </div>

   
</div>


                </div>
        </div>
       
    )
}

}