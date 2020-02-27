import {
  NgModule
} from '@angular/core';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyPopoverModule
} from '@skyux/popovers';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyProgressIndicatorModule
} from './public';

import {
  ProgressIndicatorWizardDemoComponent
} from './visual/progress-indicator/progress-indicator-horizontal-visual.component';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyDocsToolsModule,
    SkyModalModule,
    SkyPopoverModule,
    SkyProgressIndicatorModule
  ],
  entryComponents: [
    ProgressIndicatorWizardDemoComponent
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-progress-indicator',
        packageName: '@skyux/progress-indicator'
      }
    }
  ]
})
export class AppExtrasModule { }
