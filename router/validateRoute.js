const validateRoute = (route) => {
  const [id, method] = route
  if (route.constructor.name != 'Array')
    throw new Error('Any route for Spacehorn Router must be an Array[id, method, path(optional), controller(optional)]')
  if (!id)
    throw new Error('A route passed to Spacehorn Router cannot be empty')
  if (!method)
    throw new Error(`The route [${id}... passed to Spacehorn Router lacks of method`)
  return route
}

module.exports = validateRoute
