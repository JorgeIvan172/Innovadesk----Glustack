// ProductComponent.tsx
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity} from 'react-native';
import {
  Box,
  VStack,
  Heading,
  Input,
  InputField,
  Button,
  ButtonText,
  Image,
  Center,
  Text, FavouriteIcon, CloseCircleIcon,
} from '@gluestack-ui/themed';

import { Icon } from '@gluestack-ui/themed/build/components/Badge/styled-components';
import { useCart } from '../Context/CartContext';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    img: string
    // Otros detalles del producto...
  };
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { id, name, price, img } = product;
  const navigation = useNavigation();
  const {addToCart} = useCart();
  const [isFavourite, setIsFavourite] = useState(false);


  const handleAddToCart = () => {
    addToCart(product);
  };

  const OneProduct = () => {
    navigation.navigate('OneProduct', { product });
  };
  
  return (
    <>
    <VStack>
    <TouchableOpacity onPress={OneProduct}>
    <Box backgroundColor={'#B35340'} key={id} padding={'$3'} margin={'$2'} borderWidth={'$2'} borderColor='#ccc' borderRadius={10} >
      
      <View  style={{ flexDirection: 'row' }}>
      <Image
      width={100}
      height={100}
      resizeMode= 'stretch'
      borderRadius={5}
        source={{ uri: img }}
      />
      
      <View style={{ marginLeft: 10 }}>
      <Text size="xl" color='black' fontWeight='bold'>{name}</Text>
      <Text size="md" color='black' fontWeight='bold'>${price}</Text>

      <Box flex={1} flexDirection={'row'}>

      <Button marginTop={'$1'} size='sm' backgroundColor={'#233342'} width={'$32'} onPress={handleAddToCart}>
      <ButtonText>Add to Car +</ButtonText>
      </Button>

      <Button marginTop={'$1'} marginLeft={'$2'} size='sm' backgroundColor={'#4B2B31'} width={'$10'} onPress={() => setIsFavourite(!isFavourite)}>
      <ButtonText>
      {isFavourite ? (
      <Icon as={FavouriteIcon} m="$11" w="$4" h="$4" color='red' />
    ) : (
      <Icon as={FavouriteIcon} m="$11" w="$4" h="$4" color='black' />
    )}
      </ButtonText>
      </Button>
      </Box>

      </View>
      </View>

      {/* Otros detalles del producto... */}
    </Box>
    </TouchableOpacity>
    </VStack>
    </>
  );
};



export default ProductComponent;
