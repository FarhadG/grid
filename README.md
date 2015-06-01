Grid
====

A lean, customizable and semantic CSS grid builder using Stylus.

## Installation

You can simply fork or clone (download); then follow the given commands.

```
  $ git clone https://github.com/FarhadG/grid.git
  $ npm install
  $ npm run start
```

## Usage

Once you've installed all of the dependencies, run `npm run start`, which provides you with live reloading and compiling of the assets from the `src` directory to `dist`. If you prefer just the build, you can run `npm run build`.

You can configure the builder by editing `config.styl` inside the `src` directory.

You can configure the following options:
- Number of columns
- Fixed container width
- Fluid container width
- Column gutters (margins)
- The number of breakpoints (media queries), followed by naming them and setting their points.

```javascript
/**
 * Grid configuration
 */
$col-count = 12
$max-wrapper-width = 1200px
$fluid-wrapper-width = 100%
$col-gutters = 10px

/**
 * Break point names and values
 */
$break-point-names =    'xs'    'sm'    'md'    'lg'    'xl'
$break-point-values =   0       768     992     1200    1400
```
