App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Person.find();
  }
});

App.IndexController = Ember.ArrayController.extend({
  save: function() {
    var newPerson = App.Person.create({name: this.get('newName')});
    newPerson.save();
  }
});

App.Person = Ember.Model.extend({
  name: Ember.attr()
});

App.Person.adapter = Ember.RESTAdapter.create();
App.Person.url = "api/people";
App.Person.collectionKey = "people";