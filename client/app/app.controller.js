import defaultSettings from './common/defaultSettings';

function AppController () {

    var root = this;
    root.colorSettings = 'deep-purple';

    root.$onInit = function () {
      var savedSettings = localStorage.getItem('twitter-feed-settings');
      if(savedSettings) {
        root.settings = Object.assign({}, JSON.parse(savedSettings));
      }
      else {
        root.settings = defaultSettings;
      }
    };
}

export default AppController;
