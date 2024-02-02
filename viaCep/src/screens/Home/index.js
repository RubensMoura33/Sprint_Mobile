//Import Styles
import { ContainerForm, ScrollForm, ViewUF } from "./style";

//Componente BoxInput
import { BoxInput } from "../../components/BoxInput";

//Hooks React
import { useEffect, useState } from "react";

//Biblioteca Axios
import axios from "axios";

export function Home() {

    //hooks -- states
     const [endereco, setEndereco] = useState({})
     const [cep, setCep] = useState ('')

    //hooks -- effect
        //useEffect chamando o metodo getCep()
    useEffect(() => {
        if(cep) {
        getCep()
    }
    else 
    {
        clearCep()
    }
    },[cep])

    //metodo que faz a chamada na api
    async function getCep() {
            try {
                //chamada da API
                const promise = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                 setEndereco(promise.data)
            } 
            catch (error) {
            }
    }

    function clearCep(){
        setEndereco({})
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
                        fieldValue={endereco.uf}
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