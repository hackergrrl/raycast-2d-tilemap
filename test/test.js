var test = require('tape')
var raycast = require('../index')

test('simple', function(t) {
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

  t.equal(hitPos[0], 1)
  t.equal(hitPos[1], 3)

  t.equal(hitNormal[0], 0)
  t.equal(hitNormal[1], -1)

  t.end()
})
