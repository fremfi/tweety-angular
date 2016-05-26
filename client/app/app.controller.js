function AppController () {

    var root = this;
    root.colorSettings = 'deep-purple';

    root.$onInit = function () {
      var savedSettings = localStorage.getItem('twitter-feed-settings');
      if(savedSettings) {
        root.settings = Object.assign({}, JSON.parse(savedSettings));
      }
      else {
        root.settings = {
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
    };
}

export default AppController;
