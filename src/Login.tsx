import{VStack, Image, Text, Box,  Link} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logom from './assets/Logom.png'
import {Botao} from './componentes/Botao'
import {EntradaTexto} from './componentes/EntradaTexto'
import { Titulo } from './componentes/Titulo';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logom} alt='Logo Medical'/>

      <Titulo >
        Faça o Login em sua conta
      </Titulo>
     
      <Box>
        
      <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
        />
      </Box>
      
      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='https://unisantacruz.edu.br/' mt={2}>
      Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection='row' justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text color="blue.500">
            Faça seu cadastro
        </Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}

