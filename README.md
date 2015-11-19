# raycast-2d-tilemap

> Test a ray for intersections against a 2D tile map.


## Background

This module is built atop the excellent
[fast-voxel-raycast](https://www.npmjs.com/package/fast-voxel-raycast) by Andy
Hall, which in turn is a fork of Mikola Lysenko's wonderful
[voxel-raycast](https://github.com/mikolalysenko/voxel-raycast).

Both are 3D voxel modules -- this module just wraps Andy's work to provide a
clean 2D interface.


## Installation

```sh
npm install raycast-2d-tilemap
```


## Example

```js
var raycast = require('raycast-2d-tilemap')

var tilemap = [
    [ 0, 0, 0, 1 ],
    [ 1, 0, 0, 1 ],
    [ 1, 0, 0, 1 ],
    [ 1, 1, 1, 1 ]
]

function getTileAt(x, y) {
  return tilemap[y][x]
}

var rayStart = [1, 0]
var rayDir = [0, 1]
var maxDistance = 100

var hitPos = new Array(2)
var hitNormal = new Array(2)

var tile = raycast(getTileAt, rayStart, rayDir, maxDistance, hitPos, hitNormal)

console.log(hitPos)
console.log(hitNormal)
```

outputs

```
[ 1, 3 ]
[ 0, -1 ]
```


## Usage

```js
var raycast = require('raycast-2d-tilemap')
```

### var tile = raycast(getTileAt, rayStart, rayDir, maxDistance, hitPos, hitNormal)

* `getTileAt` - a `function(x, y)` that returns a truthy value for whether a
  tile should block the ray's path
* `rayStart` - origin of the ray (vec2)
* `rayDirection` - direction of the ray (vec2)
* `maxDistance` - how far to check the ray before giving up
* `hitPosition` - result vec2 array; populated with the point of impact
* `hitNormal` - result vec2 array; populated with a normal vector pointing away
  from the tile that was struck 

**Returns:**  whatever value was returned by the `getTileAt` function for the
struck tile, or `0` if no tile was struck.
