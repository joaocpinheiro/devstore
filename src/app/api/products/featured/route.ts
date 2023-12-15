import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products.filter((product) => product.featured)
  console.log(featuredProducts)
  return Response.json(featuredProducts)
}
