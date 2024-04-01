import { Card, Image, Text, Group , Chip ,Button, Flex, Grid,Box, Center, CardSection } from '@mantine/core';
import {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function Product() {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProduct(result))
        .catch(error => console.error(error))
    },[])

    const addToCart = (product) => {
        dispatch(add(product))
    }


    const cards = product.map((product) => (

            <Grid.Col span={{  xs: 12, sm:6, md: 4, lg: 3 }} p={20} mt={80}>
                <Card shadow="md" padding="lg" radius="md" withBorder h={370} key={product.id} style={{display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
                    <Card.Section p='lg' >
                        <Center>
                            <Image
                            src={product.image}
                            style={{height:'130px' , width:'100px' , objectFit:'contain'}}
                            
                            alt="Norway"
                            />
                        </Center>
                    </Card.Section>

                    <Group justify="center" mt="md" mb="xs">
                        <Text fw={500}>{product.title}</Text>
                    </Group>

                    {/* <Text size="sm" c="dimmed">
                        {product.description}
                    </Text> */}

                    <CardSection bg='#CED4DA' p={12} withBorder>
                        <Flex justify='space-between' align='center'>
                            <Chip  radius="xl">
                                {product.price} $
                            </Chip>
                            <Button color="blue"   radius="md" onClick={() => addToCart(product)}>
                                Add To Cart
                            </Button>
                        </Flex>
                    </CardSection>
                    
                </Card>
            </Grid.Col>

    ))

  return (
    <>

        <Box p='3rem'>
            <Flex dir='column'>
                <Grid >
                    {cards}
                </Grid>
            </Flex>
        </Box>
    </>
  )
}

export default Product