import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';

import {
  SkyProgressIndicatorMessageType
} from '../types';

import {
  SkyProgressIndicatorComponent
} from '../progress-indicator.component';

@Component({
  selector: 'sky-progress-indicator-reset-button',
  templateUrl: './progress-indicator-reset-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyProgressIndicatorResetButtonComponent implements OnDestroy {

/**
 * Indicates whether to disable the reset button.
 * @default "false"
 */
  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
    this.changeDetector.markForCheck();
  }

  public get disabled(): boolean {
    return this._disabled || false;
  }

/**
 * Specifies the progress indicator component to associate with the reset button.
 * @required
 */
  @Input()
  public progressIndicator: SkyProgressIndicatorComponent;

/**
 * Fires when users select the reset button that marks all items as incomplete and sets the first progress item as the active item.
 */
  @Output()
  public resetClick = new EventEmitter<any>();

  private _disabled: boolean;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    console.warn(
      '[Deprecation warning] The `<sky-progress-indicator-reset-button>` component is ' +
      'deprecated. Please use the `<sky-progress-indicator-nav-button>` component instead, with ' +
      '`buttonType` set to "reset".'
    );
  }

  public ngOnDestroy(): void {
    this.resetClick.complete();
  }

  public onClick(): void {
    this.resetClick.emit();

    this.progressIndicator.sendMessage({
      type: SkyProgressIndicatorMessageType.Reset
    });
  }
}
