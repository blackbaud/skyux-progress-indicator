import {
  SkyProgressIndicatorActionClickProgressHandler
} from './progress-indicator-action-click-progress-handler';

/**
 * The arguments passed to the `actionClick` event handler.
 */
export interface SkyProgressIndicatorActionClickArgs {

  /**
   * The progress handler.
   */
  progressHandler: SkyProgressIndicatorActionClickProgressHandler;

  /**
   * The mouse event of the action click.
   */
  event: MouseEvent;

}
