export default function() {
  this.get('/bands');
  this.get('/bands/:id');
  this.get('/bands/:id/songs', function(schema, request) {
    let id = request.params.id;
    return schema.songs.where({ bandId: id });
  });

  this.post('/bands');

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}