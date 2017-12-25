const validateRoute = require('./validateRoute')
const requireRouteController = require('./requireRouteController')

const basicMethods = ['get', 'post']
const modifierMethods = ['patch', 'put', 'delete']

const buildRoute = (controllersPath, route) => {
  const sourceRoutes = []
  const [id, method, path, controller] = validateRoute(route)
  const sourcePath = path ? path : `/${id}`.toLowerCase()

  if (method === 'BASIC') {
    basicMethods.forEach(mthd => {
      sourceRoutes.push({
        path: sourcePath,
        method,
        exec: requireRouteController([controllersPath, id, mthd]),
      })
    })
    modifierMethods.forEach(mthd => {
      sourceRoutes.push({
        path: `${sourcePath}/:id`,
        method,
        exec: requireRouteController([controllersPath, id, mthd]),
      })
    })
  } else {
    const cntrlPath = controller ? [controllersPath, controller] : [controllersPath, id, method.toLowerCase()]
    sourceRoutes.push({
      path: sourcePath,
      method,
      exec: requireRouteController(cntrlPath),
    })
  }

  return sourceRoutes
}

module.exports = buildRoute
