import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';

import { SkyModalModule } from '@skyux/modals';
import { SkyPopoverModule } from '@skyux/popovers';

import { SkyProgressIndicatorModule } from 'projects/progress-indicator/src/public-api';

import { ProgressIndicatorVisualComponent } from './progress-indicator/progress-indicator-visual.component';
import { ProgressIndicatorWizardVisualComponent } from './progress-indicator/progress-indicator-horizontal-visual.component';

import { VisualComponent } from './visual.component';

@NgModule({
  declarations: [
    ProgressIndicatorVisualComponent,
    ProgressIndicatorWizardVisualComponent,
    VisualComponent,
  ],
  imports: [
    NoopAnimationsModule,
    RouterModule,
    SkyE2eThemeSelectorModule,
    SkyModalModule,
    SkyPopoverModule,
    SkyProgressIndicatorModule,
  ],
})
export class VisualModule {}
