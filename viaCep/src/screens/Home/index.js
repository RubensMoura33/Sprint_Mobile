//Import Styles
import { ContainerForm, ScrollForm, ViewUF } from "./style";

//Componente BoxInput
import { BoxInput } from "../../components/BoxInput";

//Hooks React
import { useState } from "react";

//Biblioteca Axios
import axios from "axios";

export function Home() {

    //hooks -- states
     const [endereco, setEndereco] = useState({})
     const [cep, setCep] = useState ('')
     const [estado, setEstado] = useState()

    //metodo que faz a chamada na api
    async function getCep() {
            try {
                //chamada da API viaCep
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(response.data)
            
            //chamada da Api IBGE para trazer o estado somente
            const estado = await axios.get (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)
            setEstado(estado.data.nome);
            } 
            catch (error) {
            }
    }

    function clearCep(){
        setEndereco({})
        setEstado()
    }
    return(

        //ScrollForm -- ScrollView
        //ContainerForm -- SafeAreaView
        //BoxInput -- View
            //Label
            //Input
            <ScrollForm>
                <ContainerForm>
                    <BoxInput 
                        textLabel="Informe o CEP"
                        placeholder="Cep..."
                        keyType="numeric"
                        maxLength={9}
                        editable={true}
                        fieldValue={cep}
                        onChangeText={c => setCep(c)}
                        onBlur={cep ? getCep : clearCep}                       
                        />

                    <BoxInput 
                        textLabel="Logradouro"
                        placeholder="Logradouro..."
                        fieldValue={endereco.logradouro}
                        />

                    <BoxInput 
                        textLabel="Bairro"
                        placeholder="Bairro..."
                        fieldValue={endereco.bairro}
                        />

                    <BoxInput 
                        textLabel="Cidade"
                        placeholder="Cidade..."
                        fieldValue={endereco.localidade}
                        />

                    <ViewUF>
                    <BoxInput 
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth= "70"
                        fieldValue={estado}
                        />
                    <BoxInput 
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth= "20"
                        fieldValue={endereco.uf}
                        />
                        </ViewUF>

                </ContainerForm>
            </ScrollForm>

    )
}