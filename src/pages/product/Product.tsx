import './product.scss'
import Single from '../../components/single/Single'
import { singleProduct } from '../../data'
const Product = () => {
  //Fetch data and send to sinple card component
  return (
    <div className='product'>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product