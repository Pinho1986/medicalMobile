import{VStack, Text, ScrollView, Image, Box, Divider} from 'native-base'
import { Botao } from '../componentes/Botao'
import { Titulo } from '../componentes/Titulo'
import Logom from '../assets/Logom.png'
import { EntradaTexto } from '../componentes/EntradaTexto'

export default function Principal (navigation){
    return(
        <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
        <ScrollView>
           <Image source={Logom} alt='Logo Medical' />
           <Titulo color="blue.500">Seja Bem Vindo (a)</Titulo>
           
           <Box>
           <EntradaTexto  
            placeholder='Digite a especialidade'
         />
            <EntradaTexto
                placeholder="Insira sua senha"
            />

            <Botao onPress={() => navigation.navigate('Tabs')}>Buscar</Botao>

            <Titulo color="blue.500" >Depoimentos de Sucesso</Titulo>
             
             <Text mt={5}>
             Atendimento muito bom! Os médicos
             são muito bonitos. Os médicos são
             muito bonitos.
             </Text>
             <Titulo fontSize="lg" > Júlio, 40 anos, São Paulo/SP</Titulo>

             <Divider mt={5}/>
             
             <Text mt={5}>
             Atendimento muito bom! Os médicos
             são muito bonitos. Os médicos são
             muito bonitos.
             </Text>
             <Titulo fontSize="lg" > Júlio, 40 anos, São Paulo/SP</Titulo>

             <Divider mt={5}/>

             <Text mt={5}>
             Atendimento muito bom! Os médicos
             são muito bonitos. Os médicos são
             muito bonitos.
             </Text>
             <Titulo fontSize="lg" > Júlio, 40 anos, São Paulo/SP</Titulo>

             <Divider mt={5}/>

             <Text mt={5}>
             Atendimento muito bom! Os médicos
             são muito bonitos. Os médicos são
             muito bonitos.
             </Text>
             <Titulo fontSize="lg" > Júlio, 40 anos, São Paulo/SP</Titulo>

             <Divider mt={5}/>

             <Text mt={5}>
             Atendimento muito bom! Os médicos
             são muito bonitos. Os médicos são
             muito bonitos.
             </Text>
             <Titulo fontSize="lg" > Júlio, 40 anos, São Paulo/SP</Titulo>

             <Divider mt={5}/>

             <Text mt={5}>
             Atendimento muito bom! Os médicos
             são muito bonitos. Os médicos são
             muito bonitos.
             </Text>
             <Titulo fontSize="lg" > Júlio, 40 anos, São Paulo/SP</Titulo>

             <Divider mt={5}/>

             <Text mt={5}>
             Atendimento muito bom! Os médicos
             são muito bonitos. Os médicos são
             muito bonitos.
             </Text>
             <Titulo fontSize="lg" > Júlio, 40 anos, São Paulo/SP</Titulo>

             <Divider mt={5}/>

             





           </Box>


        </ScrollView>
        </VStack>



    )
}