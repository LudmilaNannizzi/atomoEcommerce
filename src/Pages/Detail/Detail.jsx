import { useParams } from 'react-router-dom'

import useGet from '../../Hooks/useGet'

const Detail = () => {
  const { id } = useParams()
  const { data: product, isLoading } = useGet(`products/${id}`)
  console.log(product)

  if (isLoading) return <h2>Cargando</h2>
  return (
    <div>
      {product?.attributes.title}
      <img src={product?.attributes.image.data.attributes.url} />
    </div>
  )
}
export default Detail
