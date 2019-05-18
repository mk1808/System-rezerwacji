
import React from 'react';
import '../App.css'
import './Reservation.css'
import {ToastsContainer, ToastsStore} from 'react-toasts';

class Reservation extends React.Component {

today= new Date();
hours=[];
begin=6;
reservations;
tableRes;
componentDidMount() {
    fetch('/api/reservations')
    .then(response => response.json())
    .then((data) => {
        this.reservations=data;
        console.log(this.reservations[1].name);
    });


}

constructor() {
    super();
    
    var months=["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
     "lipca", "sierpnia", "września", "października", "listopada","grudnia"]

var dd = String(this.today.getDate()).padStart(2, '0');
var mm = String(this.today.getMonth()); //January is 0!
var yyyy = this.today.getFullYear();

this.today = dd + ' ' + months[mm]+ ' ' + yyyy;
console.log(this.today);

for (let i=0;i<17;i++){
    this.hours.push(this.begin+i);
  //  this.hours.push(this.begin+i+1);
}
console.log(this.hours);

}

  
    render(){
        return(
            
<div className="container"> 
<h2>Rezerwacje kortów tenisowych - {this.today} </h2> 


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
    {this.hours.map(hour=>{return(
    <tr key={hour}>
      <th scope="row">{hour}:00 - {hour+1}:00 </th>   
      <td>zajęty</td>
      <td>Otto</td>
      <td>
<a href="#" className="myButton">Zarezerwuj</a>

</td>
      <td>awe</td>
      <td>qws</td>
      <td>ssdf</td>
    </tr>)
    })}
    
     </tbody>
</table> 

<div className="reserv">
<h2 >Czy na pewno chcesz zarezerwować kort ?</h2> 
<div>
<h3>Godzina:</h3>
<h3>Numer:</h3>
<h4 className="name">Podaj swoją nazwę:</h4>
</div >
<form>
  <div className="form-group">
    <input  class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder=" Nazwa"/>
    
  </div>
  </form>
  <a href="#" className="myButton noBtn">Anuluj</a>
  <a href="#" className="myButton confirmBtn">Zatwierdź</a>
  
</div>

<button onClick={() => ToastsStore.info("Hey, you just clicked!")}>Click me</button>
        <ToastsContainer store={ToastsStore}  lightBackground/>
      
</div>


        );
    }
}



export default Reservation;
