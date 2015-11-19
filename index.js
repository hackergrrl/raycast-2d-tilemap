var raycast = require('fast-voxel-raycast')

// TODO(sww): is this safe?
var rayStart3d = new Array(3)
var rayDir3d = new Array(3)
var hitPos3d = new Array(3)
var hitNormal3d = new Array(3)

module.exports =
    function (getTileAt, rayStart, rayDir, maxDistance, hitPos, hitNormal) {

  rayStart3d[0] = rayStart[0]
  rayStart3d[1] = rayStart[1]
  rayStart3d[2] = 0

  rayDir3d[0] = rayDir[0]
  rayDir3d[1] = rayDir[1]
  rayDir3d[2] = 0

  var ret = raycast(getTileAt, rayStart3d, rayDir3d, maxDistance, hitPos3d,
      hitNormal3d)

  if (hitPos) {
    hitPos[0] = hitPos3d[0]
    hitPos[1] = hitPos3d[1]
  }

  if (hitNormal) {
    hitNormal[0] = hitNormal3d[0]
    hitNormal[1] = hitNormal3d[1]
  }

  return ret
}
