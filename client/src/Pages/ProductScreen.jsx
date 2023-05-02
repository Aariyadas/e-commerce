import { Center, Wrap, WrapItem,Stack,Spinner, AlertIcon, AlertDescription,Alert ,AlertTitle} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
// import { products } from '../products'
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;
  console.log(productList);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrap spacing="50px" justify="center" minHeight="100vh">
      {loading ? (
        <Stack direction ='row'spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.75' emptyColor='gray.200' color='orange.500' size='2xl'/>

        </Stack>      
        ) : error ? (
        <Alert status='error'>
          <AlertIcon/>
          <AlertTitle>OOps!!!!!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center w="200px" h="500px">
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  );
};

export default ProductScreen;
