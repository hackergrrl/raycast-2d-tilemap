# raycast-2d-tilemap

> Test a ray for intersections against a 2D tile map.


# Example

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
