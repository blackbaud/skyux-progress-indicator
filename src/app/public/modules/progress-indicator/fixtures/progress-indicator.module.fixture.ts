import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  SkyProgressIndicatorForRootCompatModule
} from '../../shared/progress-indicator-for-root-compat.module';

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
    SkyProgressIndicatorForRootCompatModule,
    SkyProgressIndicatorModule
  ],
  exports: [
    SkyProgressIndicatorFixtureComponent,
    SkyProgressIndicatorProgressHandlerFixtureComponent
  ]
})
export class SkyProgressIndicatorFixtureModule { }
