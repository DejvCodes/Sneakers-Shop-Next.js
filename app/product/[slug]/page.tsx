const ProductId = async ({params}: {params: {slug: string}}) => {
  const {slug} = await params;
  console.log('Product slug:', slug);

  return <div className='mt-20'>
    Produkt odkaz: {slug}
  </div>
}
export default ProductId