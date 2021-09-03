import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SkyDocsToolsModule } from '@skyux/docs-tools';
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
    VisualComponent
  ],
  imports: [
    NoopAnimationsModule,
    RouterModule,
    SkyDocsToolsModule,
    SkyModalModule,
    SkyPopoverModule,
    SkyProgressIndicatorModule
  ]
})
export class VisualModule { }
