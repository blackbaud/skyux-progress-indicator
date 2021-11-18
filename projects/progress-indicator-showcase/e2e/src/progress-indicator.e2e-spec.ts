import { SkyHostBrowserBreakpoint } from '@skyux-sdk/e2e/host-browser/host-browser-breakpoint';

import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

import { by, element } from 'protractor';

describe('Progress indicator', () => {
  //#region helpers
  let browserSize: SkyHostBrowserBreakpoint;
  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  async function setBrowserSize(size: SkyHostBrowserBreakpoint): Promise<void> {
    browserSize = size;

    return SkyHostBrowser.setWindowBreakpoint(size);
  }

  function getScreenshotName(name: string): string {
    if (browserSize) {
      name += '-' + browserSize;
    }

    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  async function performClick(query: string): Promise<void> {
    const elem = element(by.css(query));
    await elem.click();
    return;
  }

  function runTests(): void {
    describe('Vertical display', () => {
      it('should match previous screenshot', async (done) => {
        await SkyHostBrowser.scrollTo(
          '#screenshot-progress-indicator-vertical'
        );
        await performClick(
          '#screenshot-progress-indicator-vertical-next-button'
        );
        await SkyHostBrowser.moveCursorOffScreen();
        expect(
          '#screenshot-progress-indicator-vertical'
        ).toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('progress-indicator-vertical'),
        });
      });
    });

    // Horizontal and Passive modes are only supported in default theme.
    if (currentTheme === 'default') {
      describe('Horizontal display', () => {
        it('should match previous screenshot', async (done) => {
          await SkyHostBrowser.scrollTo(
            '#screenshot-progress-indicator-horizontal'
          );
          await performClick(
            '#screenshot-progress-indicator-horizontal-next-button button'
          );
          await SkyHostBrowser.moveCursorOffScreen();
          expect(
            '#screenshot-progress-indicator-horizontal'
          ).toMatchBaselineScreenshot(done, {
            screenshotName: getScreenshotName('progress-indicator-horizontal'),
          });
        });

        it('should match disabled buttons previous screenshot', async (done) => {
          await SkyHostBrowser.scrollTo(
            '#screenshot-progress-indicator-horizontal'
          );
          await performClick(
            '#screenshot-progress-indicator-horizontal-next-button button'
          );
          await performClick(
            '#screenshot-progress-indicator-horizontal-disable-button'
          );
          await SkyHostBrowser.moveCursorOffScreen();
          expect(
            '#screenshot-progress-indicator-horizontal'
          ).toMatchBaselineScreenshot(done, {
            screenshotName: getScreenshotName(
              'progress-indicator-horizontal-disabled'
            ),
          });
        });
      });

      describe('Passive mode', () => {
        it('should match previous screenshot', async (done) => {
          await SkyHostBrowser.scrollTo(
            '#screenshot-progress-indicator-passive'
          );
          await SkyHostBrowser.moveCursorOffScreen();
          expect(
            '#screenshot-progress-indicator-passive'
          ).toMatchBaselineScreenshot(done, {
            screenshotName: getScreenshotName('progress-indicator-passive'),
          });
        });

        it('popver should match previous screenshot', async (done) => {
          await SkyHostBrowser.scrollTo(
            '#screenshot-progress-indicator-passive-popover'
          );
          await performClick(
            '#screenshot-progress-indicator-passive-popover-button'
          );
          await SkyHostBrowser.moveCursorOffScreen();
          expect('.sky-popover').toMatchBaselineScreenshot(done, {
            screenshotName: getScreenshotName(
              'progress-indicator-passive-popover'
            ),
          });
        });

        describe('Horizontal mode (modal)', () => {
          it('should match previous screenshot', async (done) => {
            await performClick('#screenshot-open-modal-button');
            await performClick('#screenshot-modal-next-button');
            expect('.sky-modal').toMatchBaselineScreenshot(done, {
              screenshotName: getScreenshotName('progress-indicator-modal'),
            });
          });
        });
      });
    }
  }
  //#endregion

  describe('(size: lg)', () => {
    beforeEach(async () => {
      currentTheme = undefined;
      currentThemeMode = undefined;
      await SkyHostBrowser.get('visual/progress-indicator');
      await setBrowserSize('lg');
    });

    runTests();

    describe('when modern theme', () => {
      beforeEach(async () => {
        await selectTheme('modern', 'light');
      });

      runTests();
    });

    describe('when modern theme in dark mode', () => {
      beforeEach(async () => {
        await selectTheme('modern', 'dark');
      });

      runTests();
    });
  });

  describe('(size: xs)', () => {
    beforeEach(async () => {
      currentTheme = undefined;
      currentThemeMode = undefined;
      await SkyHostBrowser.get('visual/progress-indicator');
      await setBrowserSize('xs');
    });

    runTests();

    describe('when modern theme', () => {
      beforeEach(async () => {
        await selectTheme('modern', 'light');
      });

      runTests();
    });

    describe('when modern theme in dark mode', () => {
      beforeEach(async () => {
        await selectTheme('modern', 'dark');
      });

      runTests();
    });
  });
});
