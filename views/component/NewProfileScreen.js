import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Button, TextInput, KeyboardAvoidingView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {css} from '../../assets/css/Css'

export default function NewProfileScreen(props) {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState("Empty");

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1 ) + '/' + tempDate.getFullYear();
        setText(fDate);
        setShow(false);
    }

    return(
        <KeyboardAvoidingView style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.login__msg}>Informações incorretas</Text>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.input_cadastro} placeholder="Nome"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Número" keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Cidade"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Bairro"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Rua"></TextInput>

                <Text>Contato de emergência 1:</Text>
                <TextInput style={css.input_cadastro} placeholder="Nome"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Número" keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Relação" ></TextInput>

                <Text>Contato de emergência 2:</Text>
                <TextInput style={css.input_cadastro} placeholder="Nome"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Número" keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Relação" ></TextInput>

                <TouchableOpacity style={css.login__button} onPress={() => setShow(true)}>
                    <Text style={css.login__buttonText}>Data de nascimento</Text>
                </TouchableOpacity>
                <Text>{text}</Text>
                <TextInput style={css.input_cadastro} placeholder="Peso" keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Peito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Ombro" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Cintura" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Quadril" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Peito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Braço direito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Braço esquerdo" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Coxa direito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Coxa esquerdo" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Panturrilha direita" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Panturrilha esquerda" maxLength={6} keyboardType="numeric"></TextInput>
                
                <TouchableOpacity style={css.login__button} >
                    <Text style={css.login__buttonText} >Cadastrar</Text>
                </TouchableOpacity>
            </View>


            {show && (
                <DateTimePicker
                    testId='dateTimePicker'
                    value={date}
                    display='default'
                    onChange={onChange}
                />
            )}
        </KeyboardAvoidingView>
        
    );

}
