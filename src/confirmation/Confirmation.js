import React from 'react';
import './Confirmation.css'
import {NavLink}from 'react-router-dom'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



class Confirmation extends React.Component { 

hour;
number;
name;
disabled=true;
    constructor() { 
        super();}


componentWillMount(){
    this.hour=this.props.match.params.hour;
    this.number=this.props.match.params.id;
    console.log(this.hour);
    console.log(this.number);
}


onInputChange=(e)=>{

    this.name=e.target.value;
    if (this.name==null||this.name==""){
        this.disabled=true;
        console.log(this.disabled)
    }
    else {
        this.disabled=false;
        console.log(this.disabled)
    }
    this.forceUpdate(); 
    
}

submit = () => {
    
    confirmAlert( {
      title: 'Potwierdzenie',
      message: "Kort "+this.number+" został zarezerwowany w godzinach: "+this.hour+":00-"+(this.hour*1+1)+":00.",
      buttons: [
        
      ]
    });
  };


onConfirm=(e)=>{
    
    if(!this.disabled){
    console.log(this.name);
    fetch('/api/reservations',{
        method:"POST",
        headers:{
            "CONTENT-TYPE":"application/json"
        },
        body:JSON.stringify({
            
                name:this.name,
                cort:"cort"+(this.number*1-1),
                hour:this.hour
        })
    })
    .then(response => response.json())
    .then((data) => {
    
        this.props.history.push("/");
        this.submit();
    });
    ToastsStore.info("Hey, you just clicked!")}
}


    render(){
       
        
        return(
            <div className="container">
            <div className="reserv">
            <h2 >Czy na pewno chcesz zarezerwować kort ?</h2>
            <div>
              <h3>Godzina: {this.hour}:00</h3>
              <h3>Numer kortu: {this.number} </h3>
              <h4 className="name">Podaj swoją nazwę:</h4>
            </div >
            <form>
              <div className="form-group">
                <input className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder=" Nazwa" onChange={this.onInputChange} />
  
              </div>
            </form>
            <NavLink to="/" className="myButton noBtn">Anuluj</NavLink>
            <a className="myButton confirmBtn" 
            onClick={this.onConfirm}>Zatwierdź</a>

          </div>
         
  
          </div>
 
        );
    }
}
 


export default Confirmation;
