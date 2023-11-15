import{VStack, Box, ScrollView, Image} from 'native-base'
import { Botao } from '../componentes/Botao'
import { Titulo } from '../componentes/Titulo'
import Logom from '../assets/Logom.png'
import { CardConsulta } from '../componentes/CardConsulta'
import { EntradaTexto } from '../componentes/EntradaTexto'



export default function Explorar (){
return(
    <ScrollView flex={1} bgColor={"white"}>
        <VStack flex={1} alignItems="center" justifyContent="flex-start" p={5}>
        <Image source={Logom} alt='Logo Medical' />   
        <Titulo>Explorar</Titulo>
        <Box w="100%" borderBottomRadius="lg" p={3} mt={5}  borderBottomLeftRadius="md">
            <EntradaTexto placeholder='Digite sua especialidade'
            />
            <EntradaTexto placeholder='Digite sua Localização'
            />
            <Botao mt={3} mb={3}>
                Buscar
            </Botao>
        </Box>
        <Titulo color="blue.500" alignSelf="center">
            Resultado da Busca
        </Titulo>
        {[1,2,3].map((_, index) =>(
            <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
                <CardConsulta 
                especialidade="Cardiologia"
                foto ='http://github.com/Pinho1986.png'
                nome='Dr. Pinho'
                />
            </VStack>

        ))}
        </VStack>
    </ScrollView>
)
}

