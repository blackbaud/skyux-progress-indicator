import {
  SkyProgressIndicatorActionClickProgressHandler
} from './progress-indicator-action-click-progress-handler';

export interface SkyProgressIndicatorActionClickArgs {

  /**
   * The progress handler object that allows consumers to trigger step advancement manually.
   */
  progressHandler: SkyProgressIndicatorActionClickProgressHandler;

  /**
   * The mouse event from the user click.
   */
  event: MouseEvent;

}
