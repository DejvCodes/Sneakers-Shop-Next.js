const ProductId = async ({params}: {params: {slug: string}}) => {
  const {slug} = params;

  return <div className='mt-20'>
    Produkt odkaz: {slug}
  </div>
}
export default ProductId