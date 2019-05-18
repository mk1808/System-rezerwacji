/*class Reservation{
  constructor(){
    this.cort;
    this.hour;
    this.name;
  }
}
*/
module.exports = {
  initRoutes: (app) => {
    app.get('/api/hello', (req, res) => {
      res.json({ message: 'Hello from backend' });
    });

reservations=[];

    app.get('/api/reservations', (req, res) => {
      res.json( reservations );
    });

    app.post('/api/reservations', (req, res) => {
     reservations.push(req.body)
     res.json( reservations );
    });
  }
};

