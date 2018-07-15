#!/usr/bin/env node

const subcommand = require('subcommand')
const debug = require('debug')('tmpdat')
const pkg = require('./package.json')
const Dat = require('dat-node')
const fs = require('fs')
const path = require('path')
const openurl = require('openurl')

process.title = 'tmpdat'

var config = {
  defaults: [
    { name: 'port', help: 'port to use for connections (default port: 3282 or first available)' }
  ],
  root: {
    options: [
      {
        name: 'version',
        boolean: true,
        default: false,
        abbr: 'v'
      },
      {
        name: 'open',
        boolean: true,
        default: false
      }
    ],
    command: main
  },
  usage: {
    command: usage,
    option: {
      name: 'help',
      abbr: 'h'
    }
  }
}

if (debug.enabled) {
  debug('tmpdat', pkg.version)
  debug('node', process.version)
}

subcommand(config)(process.argv.slice(2))

function main (opts) {
  if (opts.version) {
    console.error(pkg.version)
    process.exit(1)
  }

  var dir = path.resolve(opts._[0] || '.')
  if (!fs.statSync(dir).isDirectory()) {
    console.error(dir, 'is a file and tmpdat can only sync folders.')
    usage(opts)
    process.exit(1)
  }

  Dat(dir, {temp: true}, function (err, dat) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    const url = `dat://${dat.key.toString('hex')}`
    console.log(`Here is your temporary dat:

  ${url}

It will be thrown away when you close the process.
Importing...`)

    dat.joinNetwork({port: opts.port}, function (err) {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log('Listening!')

      if (opts.open) {
        console.log('Opening in your browser')
        openurl.open(url)
      }
    })

    dat.importFiles(dir, {
      ignoreHidden: false,
      useDatIgnore: true,
      watch: true
    })
  })
}

function usage (opts, help, usage) {
  if (opts.version) {
    console.error(pkg.version)
    process.exit(1)
  }
  var msg = `
Usage: tmpdat [<dir>] [options]
v${pkg.version}

Shares the directory in a temporary in-memory dat.
No files are modified on the disk, making this safe to run on folders which already have .dat folders.

Options:
  --version -v   Get the current version
  --port         Port to use for connections (default port: 3282 or first available)
  --open         Open the new URL in your browser (eg https://beakerbrowser.com)

  `
  console.error(msg)
  if (usage) {
    console.error('General Options:')
    console.error(usage)
  }
  process.exit(1)
}
