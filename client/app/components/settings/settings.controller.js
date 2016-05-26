import Toastr from 'toastr';

function SettingsController() {

  var vm = this;
  vm.name = 'settings';
  vm.onSave = onSave;
  vm.onNumColumnChange = onNumColumnChange;
  //default if landing straight to /settings with no previous saved settings
  //overwritten if saved settings are available.
  //TODO: put settings in a config file
  vm.settings = {};

//TODO: Refactor
  function onNumColumnChange() {
    if (vm.settings.numberOfColumns === 2) {
      vm.settings.columnThreeName = null;
      vm.settings.columnThreeTweetCount = null;
      return true;
    }
    if (vm.settings.numberOfColumns === 1) {
      vm.settings.columnTwoName = null;
      vm.settings.columnTwoTweetCount = null;
      vm.settings.columnThreeName = null;
      vm.settings.columnThreeTweetCount = null;
      return true;
    }
  }

  function onSave() {
    localStorage.setItem('twitter-feed-settings', JSON.stringify(vm.settings));
    Toastr.info('Settings Saved!');
    //TODO: Go to Feed Page so that changes can take effect
  };

  vm.$onInit = function () {
    var savedSettings = localStorage.getItem('twitter-feed-settings');
    if(savedSettings) {
      vm.settings = Object.assign({}, JSON.parse(savedSettings));
    }
    else {
      vm.settings = {
        numberOfColumns: '3',
        columnOneName: 'AppDirect',
        columnTwoName: 'laughingsquid',
        columnThreeName: 'techcrunch',
        columnOneTweetCount: 30,
        columnTwoTweetCount: 30,
        columnThreeTweetCount: 30,
        startDate: null,
        endDate: null
      };
    }
  };
}

export default SettingsController;
