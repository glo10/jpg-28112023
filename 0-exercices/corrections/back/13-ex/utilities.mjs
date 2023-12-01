/**
 * Transform JSON to Array
 * @param {string} data format JSON
 * @returns array
 */
export function jsonToArray (data) {
  const entity = []
  for (const v in data) {
    entity.push(data[v])
  }
  return entity
}
