const buildRoute = require('./buildRoute')

const router = function SpacehornRouter(params) {
  const routesLib = []
  const { routes, controllersPath } = params

  if (!routes || routes.constructor.name != 'Array')
    throw new Error(`Spacehorn Router requires the raw routes in array format`)

  routes.forEach(route => {
    routesLib.push(...buildRoute(controllersPath, route))
  })

  return routesLib
}

module.exports = router
