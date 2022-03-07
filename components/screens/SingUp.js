import { NativeBaseProvider, Collapse, IconButton, CloseIcon, Alert, Stack, WarningOutlineIcon, Image, Modal, Actionsheet, Spinner, useClipboard, Box, Text, Badge, Divider, Heading, VStack, Switch, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable, View, Container, ZStack, ScrollView, Toast } from "native-base";
import React from "react";
import axios from 'axios';
import arduino from '../img/arduino.png';
import { useState } from 'react';


export default function SingUp({ navigation }) {
    const [show, setShow] = React.useState(false);


    function BoxForm() {
        const [username, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [password_confirm, setPassword_confirm] = React.useState("");
        const [email, setEmail] = React.useState("");
        const [name, setName] = React.useState("");
        const [message, setMessage] = React.useState("");
        const [dangerform, setdangerform] = React.useState(false);
        const [dangerformUser, setdangerformUser] = React.useState(false);
        const [statusLogin, setstatusLogin] = React.useState("");

        const [show, setShow] = React.useState(false);


        function Create() {
            if (password != password_confirm) {
                setMessage('senhas não conferem');
                setdangerform(true)
            } else {
                setdangerform(false)
                axios.get('https://apiarduinowebcontrol.herokuapp.com/', {
                    params: {
                        req: 'newuser',
                        username: username,
                        password: password,
                        name: name,
                        email: email
                    }
                })
                    .then(function (response) {
                        // manipula o sucesso da requisição
                        console.log(response.data);
                        setstatusLogin(response.data)
                    })
                if (statusLogin.warning_error == "User already exists") {
                    setdangerformUser(true);
                } else {
                    setdangerformUser(false);
                    setShow(!show)
                    setTimeout(
                        function () {
                            navigation.navigate('Login')
                        }
                            .bind(this),
                        2000
                    );
                }
            }
        }
        console.log(statusLogin)
        var passwordError = dangerform;



        return (
            <Box alignItems="center" w={'xs'} bg={'light.50'} borderRadius={10} shadow={5}>
                <Box w="90%" alignItems="center">
                    <Collapse isOpen={show}>
                        <Alert w="100%" colorScheme="violet" status="success">
                            <VStack space={2} flexShrink={1} w="100%">
                                <VStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                                    <VStack space={1} flexShrink={1} alignItems="center">

                                        <Heading top={0} fontSize={20}>
                                            Bem vindo! sua conta foi criada com sucesso 🥳
                                        </Heading>


                                    </VStack>
                                </VStack>
                            </VStack>
                        </Alert>
                    </Collapse>

                </Box>
                <Box w="90%" maxWidth="300px">
                    <Center>
                        <Heading top={1} fontSize={22}>Cadastre-se</Heading>
                    </Center>

                    <FormControl marginTop={5} >
                        <Stack mx="4" >
                            <FormControl.Label >Nome </FormControl.Label>
                            <Input defaultValue={name} borderBottomColor={'light.200'} variant="underlined" type="user" placeholder=""
                                onChangeText={(value) => setName(value)}
                            ></Input>
                            <FormControl.HelperText>

                            </FormControl.HelperText>

                        </Stack>
                    </FormControl>

                    <FormControl marginTop={5} isInvalid={dangerformUser}>
                        <Stack mx="4" >
                            <FormControl.Label >Usuário </FormControl.Label>
                            <Input defaultValue={username} borderBottomColor={'light.200'} variant="underlined" type="user" placeholder=""
                                onChangeText={(value) => setUsername(value)}
                            ></Input>
                            <FormControl.HelperText>

                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Usuário já existe
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>

                    <FormControl marginTop={5} >
                        <Stack mx="4" >
                            <FormControl.Label >E-mail </FormControl.Label>
                            <Input defaultValue={email} borderBottomColor={'light.200'} variant="underlined" type="e-mail" placeholder=""
                                onChangeText={(value) => setEmail(value)}
                            ></Input>
                            <FormControl.HelperText>

                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Usuário não existe
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>

                    <FormControl marginBottom={5} isInvalid={passwordError}>
                        <Stack mx="4" >
                            <FormControl.Label >Senha</FormControl.Label>
                            <Input borderBottomColor={'light.200'} type="password" variant="underlined" placeholder="*******"
                                onChangeText={setPassword} />

                            <FormControl.HelperText>

                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Senhas não conferem
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>

                    <FormControl marginBottom={5} >
                        <Stack mx="4" >
                            <FormControl.Label >Confirmar senha</FormControl.Label>
                            <Input defaultValue={password_confirm} borderBottomColor={'light.200'} type="password" variant="underlined" placeholder="*******"
                                onChangeText={setPassword_confirm} />

                            <FormControl.HelperText>

                            </FormControl.HelperText>

                        </Stack>
                    </FormControl>

                    <Box alignItems="center" marginBottom={5}>
                        <Button bg={'indigo.800'} w={'50%'} variant={"solid"} colorScheme={'indigo'} borderRadius={20} onPress={() => Create()}>
                            <Text color={'light.50'}>Criar</Text>
                        </Button>
                    </Box>

                </Box>





            </Box>);
    }




    return (
        <NativeBaseProvider>

            <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "violet.900" }} px={4} flex={1}>

                <BoxForm></BoxForm>
            </Center>
        </NativeBaseProvider>
    );
}