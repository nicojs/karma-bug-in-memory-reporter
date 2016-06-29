Karma bug: calling events `OnBrowserComplete` after `onRunComplete` (wrong order).
===

Introduced in Karma 1.1.0, see [issue 2210](https://github.com/karma-runner/karma/issues/2210)

Consequences
===

The `text`, `text-summary` and `in-memory` code coverage reports of karma coverage won't work.

Reproduce the bug
===

```bash
npm install
karma start
# in a seperate command prompt
karma run
```

If you set `singleRun` to `true` in the karma.conf.js and the bug will not appear.