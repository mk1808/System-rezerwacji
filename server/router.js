
module.exports = {
  initRoutes: (app) => {
    app.get('/api/hello', (req, res) => {
      res.json({ message: 'Hello from backend' });
    });

    reservations = [];
    
    app.get('/api/reservations', (req, res) => {
      res.json(reservations);
    });

    app.get('/api/reservations/cort', (req, res) => {
      corts = [0, 0, 0, 0, 0, 0];
      reservations.forEach(x => {
        corts[x.cort.split('t')[1] * 1 ]++;
      })
      res.json(corts);
    });

    app.get('/api/reservations/user', (req, res) => {
      users = [];
      reservations.forEach(x => {
        let pos=users.find(y=>x.name==y.name);
 
        if(pos!=undefined){
          pos.number++;
        }else {
          let user={name:x.name,number:1}
          users.push(user); }
      })

      res.json(users);
    });


    app.post('/api/reservations', (req, res) => {
      reservations.push(req.body)
      res.json(reservations);
    });
  }
};

