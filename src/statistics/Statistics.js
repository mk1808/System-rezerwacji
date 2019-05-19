import React from 'react';
import { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './Statistics.css'



class Statistics extends React.Component {
    reservations = [];
    tableRes = [];
    begin = 6;
    all = 16 * 6;
    taken = 0;
    corts = [];
    users = [];
    data = [];
    Udata=[];

    componentDidMount() {
        fetch('/api/reservations')
            .then(response => response.json())
            .then((data) => {
                this.reservations = data;
                this.reservations.map(x => {
                    console.log(x.cort.split('t'));
                    this.tableRes[x.hour - this.begin][(x.cort.split('t')[1] * 1)] = "zajęte"
                    console.log(this.tableRes);
                })
                this.forceUpdate();
                this.taken = Math.round((this.reservations.length / this.all) * 100);
            });
        fetch('/api/reservations/cort')
            .then(response => response.json())
            .then((data) => {
                this.corts = data;
                this.forceUpdate();
            })
        fetch('/api/reservations/user')
            .then(response => response.json())
            .then((data) => {
                this.users = data.sort((a, b) => b.number - a.number);

                this.users.forEach(el=>{
                    let user={name:el.name,Zajęte:el.number};
                    this.Udata.push({name:el.name,Zajęte:el.number});
                })
                console.log(this.Udata)
                this.forceUpdate();
            })


    }

    constructor() {
        super();

        this.tableRes = [];
        for (let i = 6; i < 22; i++) {
            let forHour = [];
            for (let j = 0; j < 6; j++) {
                forHour.push(null);
            }
            this.tableRes.push(forHour);
        }
    }

    render() {
        
        const data = [
            {
                name: 'Kort 1', Zajętość: this.corts[0]*1
            },
            {
                name: 'Kort 2', Zajętość: this.corts[1]
            }, 
            {
                name: 'Kort 3', Zajętość: this.corts[2]
            }, 
            {
                name: 'Kort 4', Zajętość: this.corts[3]
            }, 
            {
                name: 'Kort 5', Zajętość: this.corts[4]
            }, 
            {
                name: 'Kort 6', Zajętość: this.corts[5]
            },
        ];

        let data2=[];
        
        this.Udata.map(x=>data2.push(x))
        return (
            <div className="container container2">
                <div className="cortsStat"> 
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Numer</th>
                            <th scope="col">Zajętość</th>
                        </tr>
                    </thead>
                    <tbody className="rowClass">
                        <tr>
                            <th>Razem</th>
                            <td>{this.taken}%</td>
                        </tr>
                        {this.corts.map((cort, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">Kort {index + 1} </th>
                                    <td>{Math.round((cort / 16) * 100)}%</td>

                                </tr>)
                        })}

                    </tbody>
                </table>
                <BarChart className="chart" 
                    width={700}
                    height={300} 
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 'auto']}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Zajętość" fill="#8884d8" />
                    />
      </BarChart>
      </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Osoba</th>
                            <th scope="col">Zajętość</th>
                        </tr>
                    </thead>
                    <tbody className="rowClass">
                        {this.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{user.name} </th>
                                    <td>{user.number}</td>

                                </tr>)
                        })}

                    </tbody>
                </table>

               



      <BarChart className="chart" 
                    width={700}
                    height={300}
                    data={data2}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 'auto']}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Zajęte" fill="#8884d8" />
                    />
      </BarChart>
            </div>
        );
    }
}



export default Statistics;
