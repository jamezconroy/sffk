var express = require('express'),
  app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
//app.use(express.static(__dirname, '/'));

//enable cross-origin requests on all resources
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log('Setting CORS header');
  next();
});


app.get('/customers/:id', function (req, res) {
  var customerId = parseInt(req.params.id);
  var data = {};
  for (var i = 0, len = customers.length; i < len; i++) {
    if (customers[i].id === customerId) {
      data = customers[i];
      break;
    }
  }
  res.json(data);
});

app.get('/customers', function (req, res) {
  res.json(customers);
  //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function (req, res) {
  var orders = [];
  for (var i = 0, len = customers.length; i < len; i++) {
    if (customers[i].orders) {
      for (var j = 0, ordersLen = customers[i].orders.length; j < ordersLen; j++) {
        orders.push(customers[i].orders[j]);
      }
    }
  }
  res.json(orders);
});

app.delete('/customers/:id', function (req, res) {
  var customerId = parseInt(req.params.id);
  var data = {status: true};
  for (var i = 0, len = customers.length; i < len; i++) {
    if (customers[i].id === customerId) {
      customers.splice(i, 1);
      data = {status: true};
      break;
    }
  }
  res.json(data);
});

app.get('/projects', function (req, res) {
  res.json(projects);
  //res.json(500, { error: 'An error has occurred!' });
});

app.get('/consultant-timesheets', function (req, res) {
  res.json(consultantTimesheets);
  //res.json(500, { error: 'An error has occurred!' });
});

app.get('/client-timesheets', function (req, res) {
  res.json(clientTimesheets);
  //res.json(500, { error: 'An error has occurred!' });
});

app.get('/echosign-agreements', function (req, res) {
  res.json(echosignAgreements);
  //res.json(500, { error: 'An error has occurred!' });
});


//app.listen(9000);
app.listen(8081);

console.log('Express listening on port 8081');

var customers = [
  {
    id: 1,
    joined: '2000-12-02',
    name: 'John',
    city: 'Chandler',
    orderTotal: 9.9956,
    orders: [
      {
        id: 1,
        product: 'Shoes',
        total: 9.9956
      }
    ]
  },
  {
    id: 2,
    joined: '1965-01-25',
    name: 'Zed',
    city: 'Las Vegas',
    orderTotal: 19.99,
    orders: [
      {
        id: 2,
        product: 'Baseball',
        total: 9.995
      },
      {
        id: 3,
        product: 'Bat',
        total: 9.995
      }
    ]
  },
  {
    id: 3,
    joined: '1944-06-15',
    name: 'Tina',
    city: 'New York',
    orderTotal: 44.99,
    orders: [
      {
        id: 4,
        product: 'Headphones',
        total: 44.99
      }
    ]
  },
  {
    id: 4,
    joined: '1995-03-28',
    name: 'Dave',
    city: 'Seattle',
    orderTotal: 101.50,
    orders: [
      {
        id: 5,
        product: 'Kindle',
        total: 101.50
      }
    ]
  }
];

// All active projects with approval method of EchoSign
var projects = [
  {
    id: 1,
    name: 'The Small Project',
    owner: 'Phil Little',
    externalApprovers: ['John Smith']
  },
  {
    id: 2,
    name: 'The Big Project',
    owner: 'John Large',
    externalApprovers: ['Jack Frost']
  },
  {
    id: 3,
    name: 'Just Right Project',
    owner: 'Tracey Wright',
    externalApprovers: ['Charlotte Hamley']
  }
];

var consultantTimesheets = [
  {
    id: 1,
    consultant: 'James French',
    billableProject: {name: 'The Big Project'},
    externalApprovers: ['John Smith'],
    status: 'Approved'
  },
  {
    id: 2,
    consultant: 'George Murphy',
    billableProject: {name: 'Just Right Project'},
    externalApprovers: ['Charlotte Hamley'],
    status: 'Submitted'
  },
  {
    id: 3,
    consultant: 'Freya O\'Connell',
    billableProject: {name: 'The Little Project'},
    externalApprovers: ['Jack Frost', 'Charlotte Hamley'],
    status: 'Submitted'
  }
];

var clientTimesheets = [
  {
    id: 1,
    consultantTimesheet: {id: 1, name: 'TS1', period: {startDate: '2014-09-01', endDate: '2015-12-25'}, consultant: {name: 'James French'}},
    project: {name: 'The Big Project'},
    echosignAgreement: {id: 100, name: 'ES-AG1'},
    status: 'Pending Sign'
  },
  {
    id: 2,
    consultantTimesheet: {id: 1, name: 'TS1', period: {startDate: '2014-09-01', endDate: '2015-12-25'}, consultant: {name: 'Freya O\'Connell'}},
    project: {name: 'Just Right Project'},
    echosignAgreement: {id: 101, name: 'ES-AG2'},
    status: 'Signed'
  },
  {
    id: 3,
    consultantTimesheet: {id: 1, name: 'TS1', period: {startDate: '2014-09-01', endDate: '2015-12-25'}, consultant: {name: 'George Murphy'}},
    project: {name: 'The Little Project'},
    echosignAgreement: {id: 101, name: 'ES-AG2'},
    status: 'Rejected'
  }
];

var echosignAgreements = [
  {
    id: 101,
    period: {startDate: '2014-09-01', endDate: '2015-12-25'},
    project: {name: 'The Big Project'},
    consultant: {name: 'Freya O\'Connell'},
    signees: [{email: 'bigguy@main.com'},{email: 'honcho@main.com'}],
    status: 'Signed'
  },
  {
    id: 102,
    period: {startDate: '2014-09-01', endDate: '2015-12-25'},
    project: {name: 'The Big Project'},
    consultant: {name: 'Freya O\'Connell'},
    signees: [{email: 'bigguy@main.com'},{email: 'honcho@main.com'}],
    status: 'Unsigned'
  },
  {
    id: 103,
    period: {startDate: '2014-09-01', endDate: '2015-12-25'},
    project: {name: 'The Big Project'},
    consultant: {name: 'Freya O\'Connell'},
    signees: [{emailAddress: 'bigguy@main.com'},{emailAddress: 'honcho@main.com'}],
    status: 'Unsigned'
  }
];
