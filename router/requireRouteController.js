const path = require('path')

const requireRouteController = (pathParts) => {
  let routeController
  const ctrlrPath = path.join(...pathParts)
  try {
    routeController = require(ctrlrPath)
  } catch (err) {
    throw new Error(`Controller at ${ctrlrPath} can't be found, verify it is properly exported`)
  }
  return routeController
}

module.exports = requireRouteController
