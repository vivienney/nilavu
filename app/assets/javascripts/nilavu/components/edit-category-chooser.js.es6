import { on, observes } from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  classNameBindings: ['isActive:active'],
  launchableName: function() {
    alert("ln =" + self.get("name"));
    return self.get("name");
  },

  showLaunchableImage: function() {
      return this.get('launchableName') + ".png"
  },

  isActive: function() {
    const launchable = this.get('launchable') || "";
    return launchable.trim().length > 0;
  }.property("launchable"),

  @observes('value')
  valueChanged() {
    this.set('selectedLaunchable',this.get('value'))
  }

});