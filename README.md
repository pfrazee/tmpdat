# tmpdat

Create a temporary in-memory dat.

```
Usage: tmpdat [<dir>] [options]

Shares the directory in a temporary in-memory dat.
No files are modified on the disk, making this safe to run on folders which already have .dat folders.

Options:
  --version -v   Get the current version
  --port         Port to use for connections (default port: 3282 or first available)
```

Installation:

```
npm i -g tmpdat
```

Quick-run using [npx](https://www.npmjs.com/package/npx):

```
npx tmpdat
```