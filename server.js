var Hapi = require('hapi');

var server = new Hapi.Server(3000);

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.file('public/index.html');
  }
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
});

server.pack.register({
  plugin: require('good'),
  options: {
    reporters: [{
      reporter: require('good-console'),
      args: [{ log: '*', request: '*' }]
    }]
  }
}, function(err) {
  if (err) {
    throw err;
  }

  server.start(function() {
    server.log('info', 'Server running at:' + server.info.uri);
  });
});
