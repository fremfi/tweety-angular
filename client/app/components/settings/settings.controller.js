import Toastr from 'toastr';

function SettingsController($state) {

  const vm = this;
  vm.name = 'settings';
  vm.onSave = onSave;
  vm.onReset = onReset;

  function onReset() {
    vm.settings = {
      numberOfColumns: '3',
      columnOneName: 'AppDirect',
      columnTwoName: 'laughingsquid',
      columnThreeName: 'techcrunch',
      columnOneTweetCount: 30,
      columnTwoTweetCount: 30,
      columnThreeTweetCount: 30,
      startDate: null,
      endDate: null,
      themeColor: 'light-blue'
    };
  }

  function onSave() {
    localStorage.setItem('twitter-feed-settings', JSON.stringify(vm.settings));
    Toastr.success('Settings Saved!');
    $state.go('feed');
  };

}

export default SettingsController;
