function FeedController () {

    var vm = this;
    vm.name = 'feed';
    vm.settings = {};
    vm.gridClasses = {};

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
        localStorage.setItem('twitter-feed-settings', JSON.stringify(vm.settings));
      }
    };
}

export default FeedController;
