import{VStack, Text, ScrollView, Avatar, Divider} from 'native-base'
import { Titulo } from '../componentes/Titulo'



export default function Perfil (){
return(
    <ScrollView flex={1}>
        <VStack flex={1} alignItems="center" p={5}>
           <Titulo color="blue.500">Meu Perfil</Titulo> 

           <Avatar size="xl" source={{ uri: "http://github.com/fabiana2611.png"}}  mt={5} />
           <Titulo color="blue.500">Informações Pessoais</Titulo>
           <Titulo fontSize="lg" mb={1} >Fabiana Cunha</Titulo>
           <Text>12/12/1990</Text>
           <Text>Curitiba</Text>

           <Divider mt={5}/>

           <Titulo color="blue.500" mb={1}>Histórico Médico</Titulo>
           <Text>Bronquite</Text>
           <Text>Sinusite</Text>



        </VStack>
    </ScrollView>
)
}