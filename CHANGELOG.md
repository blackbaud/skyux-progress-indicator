# 4.0.1 (2020-08-05)

- Fix the progress indicator compoennt to not error when the progress indicator and its external navigation buttons are hidden at the same time. [#40](https://github.com/blackbaud/skyux-progress-indicator/pull/46)

# 4.0.0 (2020-05-20)

### New features

- Updated the pipeline to transpile to the [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview). [#39](https://github.com/blackbaud/skyux-progress-indicator/pull/39)

### Breaking changes

- Dropped support for `rxjs@5`. Consumers can install `rxjs-compat@^6` to support older versions of `rxjs`. [#39](https://github.com/blackbaud/skyux-progress-indicator/pull/39)

# 4.0.0-rc.0 (2020-04-20)

### New features

- Updated the pipeline to transpile to the [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview). [#39](https://github.com/blackbaud/skyux-progress-indicator/pull/39)

### Breaking changes

- Dropped support for `rxjs@5`. Consumers can install `rxjs-compat@^6` to support older versions of `rxjs`. [#39](https://github.com/blackbaud/skyux-progress-indicator/pull/39)

# 3.3.0 (2020-03-30)

- Added support for asynchronous calls before step advancement occurs in the progress indicator component. [#36](https://github.com/blackbaud/skyux-progress-indicator/pull/36)

# 3.2.0 (2019-11-04)

- Added support for `@skyux-sdk/builder@3.11.0`. [#31](https://github.com/blackbaud/skyux-progress-indicator/pull/31)
- Fixed the spacing between buttons for the progress indicator component's horizontal mode. [#31](https://github.com/blackbaud/skyux-progress-indicator/pull/31)

# 3.1.1 (2019-09-11)

- Fixed the progress indicator component to properly handle dynamically created steps. [#26](https://github.com/blackbaud/skyux-progress-indicator/pull/26)

# 3.1.0 (2019-05-17)

- Updated the progress indicator message stream to accept `SkyProgressIndicatorMessage` types. [#19](https://github.com/blackbaud/skyux-progress-indicator/pull/19)
- Updated the progress indicator component. [#17](https://github.com/blackbaud/skyux-progress-indicator/pull/17)
  - Added a finish button.
  - Added the ability to go to a specific step.
  - Fixed the disabled state for buttons to no longer be required.
  - Fixed the component to properly reset the state of steps when navigating backward.

# 3.0.0 (2019-01-11)

- Major version release.

# 3.0.0-rc.1 (2018-12-11)

- Fixed the progress indicator component's `progressChanges` emitter to only fire after all Angular lifecycle hooks have completed. [#3](https://github.com/blackbaud/skyux-progress-indicator/pull/3)

# 3.0.0-rc.0 (2018-11-12)

- Initial release candidate.

# 3.0.0-alpha.0 (2018-11-07)

- Initial alpha release.
