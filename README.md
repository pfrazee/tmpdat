# tmpdat

Creates a temporary in-memory dat from any folder.

```
~/my-project$ tmpdat .
Here is your temporary dat:

  dat://cf87693ad9a47eb27d1146908f8e569a08fe127b8dfff9ee0cc0ee8e532d6398

It will be thrown away when you close the process.
Importing...
Listening!
```

Include the 'open' switch to have it automatically open in your browser when ready.

```
~/my-project$ tmpdat --open
```

Tmpdat is useful when you're working on a project and you want to preview it.
Tmpdat never writes to the `.dat` folder and it throws away the dat metadata when you close the process.

```
npm i -g tmpdat # install
```

Help:

```
Usage: tmpdat [<dir>] [options]

Shares the directory in a temporary in-memory dat.
No files are modified on the disk, making this safe to run on folders which already have .dat folders.

Options:
  --version -v   Get the current version
  --port         Port to use for connections (default port: 3282 or first available)
  --open         Open the new URL in your browser (eg https://beakerbrowser.com)
```