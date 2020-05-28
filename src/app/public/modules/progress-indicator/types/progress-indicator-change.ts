import {
  SkyProgressIndicatorItemStatus
} from './progress-indicator-item-status';

export interface SkyProgressIndicatorChange {

  /**
   * Indicates which progress indicator item is currently active.
   */
  activeIndex?: number;

  /**
   * Indicates if the progress indicator is complete.
   */
  isComplete?: boolean;

  /**
   * Array containing the status for each progress indicator item.
   */
  itemStatuses?: SkyProgressIndicatorItemStatus[];
}
