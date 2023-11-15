import {VStack, Divider, ScrollView} from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'


export default function Consultas (){
    return(
     
    <ScrollView p="5">
        
        <Titulo color="blue.500" >Minhas Consultas</Titulo>
       
        <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb= {2}>
        Próximas consultas</Titulo>
        <CardConsulta
        nome='Dr. Claudemir Pinho'
        especialidade='Cardiologista'
        foto='http://github.com/Pinho1986.png'
        data='20/04/2023'
        foiAgendado
         />

        <CardConsulta
        nome='Dr. Baby Black'
        especialidade='Especialista em mudança de sexo'
        foto='http://github.com/BabyBlack98.png'
        data='20/04/2023'
        foiAtendido
         />

        <Divider mt={5}/>

        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb= {2}>
        Consultas Passadas</Titulo>
        <CardConsulta
        nome='Dr. Baby Black'
        especialidade='Especialista em mudança de sexo'
        foto='http://github.com/BabyBlack98.png'
        data='20/04/2023'
        foiAtendido
         />
        
        <Divider mt={5}/>
        
        <CardConsulta
        nome='Dr. Claudemir Pinho'
        especialidade='Cardiologista'
        foto='http://github.com/Pinho1986.png'
        data='20/04/2023'
        foiAtendido
        />
        
        <Divider mt={5}/>
        
        <CardConsulta
        nome='Dr. Baby Black'
        especialidade='Especialista em mudança de sexo'
        foto='http://github.com/BabyBlack98.png'
        data='20/04/2023'
        foiAtendido
        />
        
    </ScrollView>
    )
}