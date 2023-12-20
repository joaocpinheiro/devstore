import data from '../data.json'
import { z } from 'zod'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)
  console.log(Response.json(product))

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }
  return Response.json(product)
}
