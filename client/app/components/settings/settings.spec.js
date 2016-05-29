import SettingsModule from './settings'
import SettingsController from './settings.controller';
import SettingsComponent from './settings.component';
import SettingsTemplate from './settings.html';

describe('Settings', () => {
  let $rootScope, $state, makeController;

  beforeEach(window.module(SettingsModule.name));
  beforeEach(inject((_$rootScope_, _$state_) => {
    $state = _$state_;
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SettingsController($state);
    };
  }));

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller.name).toBeTruthy();
    });

    it('should reset settings to default settings', () => {
      let controller = makeController();
      let expectedDefaultSettings = {
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
      controller.onReset();
      expect(controller.settings).toEqual(expectedDefaultSettings);
    });

    it('should save new settings on localStorage', () => {
      let controller = makeController();
      spyOn(localStorage, 'setItem');
      spyOn($state, 'go');
      controller.settings = {
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
      controller.onSave();
      expect(localStorage.setItem).toHaveBeenCalledWith('twitter-feed-settings', JSON.stringify(controller.settings));
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SettingsComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(SettingsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeTruthy();
      });

  });
});
