import Toastr from 'toastr';

function SettingsController($state) {

  var vm = this;
  vm.name = 'settings';
  vm.onSave = onSave;

  function onSave() {
    localStorage.setItem('twitter-feed-settings', JSON.stringify(vm.settings));
    Toastr.info('Settings Saved!');
    $state.go('feed');
  };

}

export default SettingsController;
