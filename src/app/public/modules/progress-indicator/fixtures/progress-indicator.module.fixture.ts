import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  SkyPageModule
} from '@skyux/layout';

import {
  SkyProgressIndicatorModule
} from '../progress-indicator.module';

import {
  SkyProgressIndicatorProgressHandlerFixtureComponent
} from './progress-indicator-progress-handler.component.fixture';

import {
  SkyProgressIndicatorFixtureComponent
} from './progress-indicator.component.fixture';

@NgModule({
  declarations: [
    SkyProgressIndicatorFixtureComponent,
    SkyProgressIndicatorProgressHandlerFixtureComponent
  ],
  imports: [
    CommonModule,
    SkyPageModule,
    SkyProgressIndicatorModule
  ],
  exports: [
    SkyProgressIndicatorFixtureComponent,
    SkyProgressIndicatorProgressHandlerFixtureComponent
  ]
})
export class SkyProgressIndicatorFixtureModule { }
