import Toastr from 'toastr';
import defaultSettings from '../../common/defaultSettings';

function SettingsController($state) {

  var vm = this;
  vm.name = 'settings';
  vm.onSave = onSave;
  vm.onReset = onReset;

  function onReset() {
    vm.settings = defaultSettings;
  }

  function onSave() {
    localStorage.setItem('twitter-feed-settings', JSON.stringify(vm.settings));
    Toastr.info('Settings Saved!');
    $state.go('feed');
  };

}

export default SettingsController;
