
import React from 'react';
import '../App.css'
import './Reservation.css'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import {NavLink}from 'react-router-dom'
class Reservation extends React.Component {

  today = new Date();
  hours = [];
  begin = 6;
  reservations=[];
  index=0;
  tableRes = [];
  componentDidMount() {
    fetch('/api/reservations')
      .then(response => response.json())
      .then((data) => {
        this.reservations = data;
       this.reservations.map(x=>{
        
          this.tableRes[x.hour-this.begin][(x.cort.split('t')[1]*1)]="zajęte"
          
        })
          this.forceUpdate();
        
      });
  }
componentWillMount() {
  
     
  }
  constructor() {
    super();

    var months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
      "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]

    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth()); 
    var yyyy = this.today.getFullYear();

    this.today = dd + ' ' + months[mm] + ' ' + yyyy;
  

    for (let i = 0; i < 16; i++) {
      this.hours.push(i); 

    }
  

    this.tableRes=[];
    for (let i = 6; i < 22; i++) {
      let forHour = [];
      for (let j = 0; j < 6; j++) {
        forHour.push(null);
      }
      this.tableRes.push(forHour);
    }
  }

checkReservation=(status,hour,id)=>{if(status!=null) return (status)
else return  (<NavLink to={"/confirm/"+(hour+6)+"/"+(id+1)} className="myButton">Zarezerwuj</NavLink>)}

renderRow=(x)=>{
 

  return this.tableRes[x].map((y, index) => {
    return (<td >{this.checkReservation(y, x,index )}</td>)
  })
}

  render() {
    return (

      <div className="container">
        <h2>Rezerwacje kortów tenisowych - {this.today} </h2>
          <div className="wholeTable">

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Godzina</th>
              <th scope="col">Kort 1</th>
              <th scope="col">Kort 2</th>
              <th scope="col">Kort 3</th>
              <th scope="col">Kort 4</th>
              <th scope="col">Kort 5</th>
              <th scope="col">Kort 6
      </th>
            </tr >
          </thead>
          <tbody className="rowClass">
            {this.hours.map((hour) => {
              return (
                <tr key={hour}>
                  <th scope="row">{this.begin + hour}:00 - {this.begin + hour + 1}:00 </th>
                  {this.renderRow(hour)}
                  
                </tr>)
            })}

          </tbody>
        </table>
        </div>
      </div>


    );
  }
}



export default Reservation;
