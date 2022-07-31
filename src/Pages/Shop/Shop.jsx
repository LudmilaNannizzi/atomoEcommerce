import { ArrowBackIcon, ArrowForwardIcon, Search2Icon } from '@chakra-ui/icons'
import {
  SimpleGrid,
  Box,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  Button,
  Flex,
} from '@chakra-ui/react'

import ProductCard from '../../Components/ProductCard'
import useGetWithFilters from '../../Hooks/useGetWithFilters'

const Shop = () => {
  const {
    data: products,
    isLoading,
    setFilterTitle,
    filterTitle,
    setFilterCat,
    setFilterStock,
    setFilterLtePrice,
    setFilterGtePrice,
    prevPage,
    nextPage,
    disablePrevPage,
    disableNextPage,
  } = useGetWithFilters('product')
  const handlerChangeTitle = (e) => {
    setFilterTitle(e.target.value)
  }
  const handlerChangeCat = (e) => {
    setFilterCat(e.target.value)
    console.log(setFilterCat)
  }
  const handlerChangeStock = (e) => {
    setFilterStock(e.target.checked ? 1 : 0)
  }
  const handlerChangeGtePrice = (e) => {
    setFilterGtePrice(e.target.value)
  }
  const handlerChangeLtePrice = (e) => {
    setFilterLtePrice(e.target.value)
  }

  return (
    <>
      <Box w="100%" h="120px" p="30px" display="flex" alignItems="flex-end">
        <InputGroup size="md" w="500px" mr="10px" onChange={handlerChangeTitle}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input type="text" placeholder="Buscador" value={filterTitle} />
        </InputGroup>
        <Select
          placeholder="Categoría"
          w="300px"
          mr="10px"
          variant="outline"
          onChange={handlerChangeCat}
          bgColor="none"
          color="black"
        >
          <option value="espejos">Espejos</option>
          <option value="luces">Luces</option>
        </Select>
        <FormControl w="300px" display="flex" justifyContent="space-around">
          <Box w="130px">
            <FormLabel>Desde $</FormLabel>
            <NumberInput w="100px">
              <NumberInputField onChange={handlerChangeGtePrice} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w="130px">
            <FormLabel>Hasta $</FormLabel>
            <NumberInput w="100px">
              <NumberInputField onChange={handlerChangeLtePrice} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Unidades disponibles
          </FormLabel>
          <Switch
            id="email-alerts"
            onChange={handlerChangeStock}
            colorScheme="teal"
          />
        </FormControl>
      </Box>
      <Box w="100%" my="70px">
        {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
        {isLoading || (
          <SimpleGrid minChildWidth="250px" spacing="30px" mx="auto" w="70%">
            {products &&
              products.map((product) => {
                return <ProductCard info={product} key={product.id} />
              })}
          </SimpleGrid>
        )}
      </Box>
      <Flex justifyContent="center" m="50px">
        <Button
          onClick={prevPage}
          disabled={disablePrevPage}
          m="10px"
          variant="outline"
          _hover={{
            background: 'black',
            color: 'teal.500',
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          onClick={nextPage}
          disabled={disableNextPage}
          m="10px"
          variant="outline"
          _hover={{
            background: 'black',
            color: 'teal.500',
          }}
        >
          {' '}
          <ArrowForwardIcon />
        </Button>
      </Flex>
    </>
  )
}

export default Shop
