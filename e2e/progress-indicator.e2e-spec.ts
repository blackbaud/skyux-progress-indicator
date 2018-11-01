import {
  element,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Progress indicator component (lg)', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/progress-indicator');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should show 1st step active and rest incomplete', (done) => {
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'progress-indicator-lg-1'
    });
  });

  it('should show 1st and 2nd steps complete and the 3rd as active', (done) => {
    element(by.id(`btn-progress`)).click();
    element(by.id(`btn-progress`)).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'progress-indicator-lg-2'
    });
  });

  it('should show 1st active, 2nd complete, and 3rd incomplete', (done) => {
    element(by.id(`btn-progress`)).click();
    element(by.id(`btn-progress`)).click();

    element(by.id(`btn-regress`)).click();
    element(by.id(`btn-regress`)).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'progress-indicator-lg-3'
    });
  });

  it('should match passive progress indicator screenshot', (done) => {
    element(by.id(`btn-passive`)).click();
    expect('.sky-popover-container').toMatchBaselineScreenshot(done, {
      screenshotName: 'progress-indicator-lg-passive'
    });
  });

  describe('wizard', () => {
    beforeEach(() => {
      element(by.id(`btn-wizard`)).click();
    });

    it('should show 1st step active and rest incomplete', (done) => {
      expect('.sky-modal').toMatchBaselineScreenshot(done, {
        screenshotName: 'progress-indicator-lg-wizard-1'
      });
    });

    it('should show 1st and 2nd steps complete and the 3rd as active', (done) => {
      element(by.id(`btn-wizard-next`)).click();
      element(by.id(`btn-wizard-next`)).click();
      expect('.sky-modal').toMatchBaselineScreenshot(done, {
        screenshotName: 'progress-indicator-lg-wizard-2'
      });
    });

    it('should show 1st active, 2nd complete, and 3rd incomplete', (done) => {
      element(by.id(`btn-wizard-next`)).click();
      element(by.id(`btn-wizard-next`)).click();

      element(by.id(`btn-wizard-previous`)).click();
      element(by.id(`btn-wizard-previous`)).click();
      expect('.sky-modal').toMatchBaselineScreenshot(done, {
        screenshotName: 'progress-indicator-lg-wizard-3'
      });
    });
  });
});

describe('Progress indicator component (xs)', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/progress-indicator');
    SkyHostBrowser.setWindowBreakpoint('xs');
  });

  it('should show 1st step active and rest incomplete', (done) => {
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'progress-indicator-xs-1'
    });
  });

  it('should show 1st step active and rest incomplete', (done) => {
    element(by.id(`btn-wizard`)).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'progress-indicator-xs-wizard-1'
    });
  });
});
