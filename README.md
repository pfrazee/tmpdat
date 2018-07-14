# tmpdat

Creates a temporary in-memory dat.

Tmpdat is useful when you're working on a project and you want to preview it in [Beaker](https://beakerbrowser.com).
You can create the tmpdat with no concern you'll publish to your project's public dat.
Tmpdat never writes to the `.dat` folder and it throws away the dat when you close the process.

```
npm i -g tmpdat # install
```

Usage:

```
$ cd ~/my-project
$ tmpdat .

dat://74a3fec7ad8191be4660169456a5e2dc6823f5f192f35d34f24ba36079927901
Listening
```

Help:

```
Usage: tmpdat [<dir>] [options]

Shares the directory in a temporary in-memory dat.
No files are modified on the disk, making this safe to run on folders which already have .dat folders.

Options:
  --version -v   Get the current version
  --port         Port to use for connections (default port: 3282 or first available)
```