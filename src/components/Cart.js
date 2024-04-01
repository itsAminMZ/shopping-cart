import { Card, Image, Text, Group , Chip ,Button, Flex, Grid,Box, Center, CardSection } from '@mantine/core';
import {  useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

function Cart() {
  const product = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }

  const cards = product.map((product) => (

    <Grid.Col span={{  xs: 12, sm:6, md: 4, lg: 3 }} p={20} mt={80} style={{minWidth:'340px'}}>
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
                    <Button color="#F03E3E"   radius="md" onClick={()=>removeFromCart(product.id)}>
                        Remove Item
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

export default Cart