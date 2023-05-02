import {Center,Wrap,WrapItem} from '@chakra-ui/react'
import { products } from '../products'
import ProductCard from '../components/ProductCard'




const ProductScreen = () => {
  return (
   <Wrap spacing='50px' justify='center' minHeight='100vh'>
   {products.map((product) =>(
    <WrapItem key={product._id}>
      <Center w='200px'h='500px'>
       <ProductCard product={product}/>
      </Center>
    </WrapItem>
   ))}
   </Wrap>
  )
}

export default ProductScreen