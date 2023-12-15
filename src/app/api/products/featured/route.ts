import data from '../data.json'

export async function get() {
  const featuredProducts = data.products.filter((product) => product.featured)
  console.log(featuredProducts)
  return Response.json(featuredProducts)
}
