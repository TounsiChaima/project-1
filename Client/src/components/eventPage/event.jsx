import React from 'react';
import CommentList from "./commentList";
import CommentForm from "./commentForm.jsx";
import PastEvents from './pastevents';
import EditForm from './editForm';
import img from '../../assets/ins.jpg' 
import Navbar from "../navbar";

export default class Event extends React.Component {
 
 state={
   comments:['hi']
 }


   addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {

  console.log(this.state.comments);

  return (
  
    
    <div className="App">
 
    <div className='row' style={{paddingTop:'7%'}}>
      <div className='col-md-6' backgroundImage >
    <img src={this.props.image} style={{minHeight:'50%', maxWidth:'80%'}}/>
  
      </div>
      <div className='col-md-6' style={{marginTop:'5%'}}>
        <h1>{this.props.title}</h1>
          <p>{this.props.dsc}</p>
      </div>
    </div>


      <div className='row' style={{marginTop:'5%'}} >
      <div className='col-2'></div>
      <div className="col-8  pt-3 border-right">
      <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
            <h6>FEEDBACK</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className='col-2'></div>
          </div>   

      <div className='row'>
      <div className='col-2'></div>
      <div className="col-8  pt-3 bg-white">
      <div class="fb-comments" data-href="http://localhost:3000/App.js" data-numposts="5" data-width="200px"></div>
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
          <div className='col-2'></div>
      </div>

</div>

    
  );
}

}
