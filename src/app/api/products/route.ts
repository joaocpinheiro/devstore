import data from './data.json'

export async function get() {
  return Response.json(data.products)
}
