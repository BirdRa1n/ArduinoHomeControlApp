import React from "react";
import { useEffect, useState } from "react"
import { NativeBaseProvider, Collapse, IconButton, CloseIcon, Alert, Stack, WarningOutlineIcon, Image, Modal, Actionsheet, Spinner, useClipboard, Box, Text, Badge, Divider, Heading, VStack, Switch, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable, View, Container, ZStack, ScrollView, Toast } from "native-base";
import { TouchableOpacity, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
export default function Acct({ navigation }) {
    const [data, setData] = React.useState(null);

    const [token, setToken] = React.useState("");
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('data_user')
            if (value !== null) {
                setData(value)
            }
        } catch (e) {
        }
    }
    getData()
    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                setToken(value)
            }
        } catch (e) {
        }
    }
    getToken()



    if (data != null) {
        var dd = JSON.parse(data)





        function BoxForm() {
            const [username, setUsername] = React.useState("");
            const [password, setPassword] = React.useState("");
            const [statusLogin, setstatusLogin] = React.useState("");

            return (
                <Box alignItems="center" w={'xs'} bg={'light.50'} borderRadius={5} shadow={5}>
                    <Box w="90%" maxWidth="300px">


                        <FormControl marginTop={5} >
                            <Stack mx="1" >
                                <FormControl.Label >Nome </FormControl.Label>
                                <Input borderBottomColor={'light.200'} variant="underlined" type="user" placeholder=""
                                    onChangeText={(value) => setUsername(value)} defaultValue={dd.name}
                                ></Input>
                                <FormControl.HelperText>

                                </FormControl.HelperText>
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Usuário não existe
                                </FormControl.ErrorMessage>
                            </Stack>
                        </FormControl>
                        <FormControl marginTop={5} >
                            <Stack mx="1" >
                                <FormControl.Label >Usuário </FormControl.Label>
                                <Input borderBottomColor={'light.200'} variant="underlined" type="user" placeholder=""
                                    onChangeText={(value) => setUsername(value)} defaultValue={dd.username}
                                ></Input>
                                <FormControl.HelperText>

                                </FormControl.HelperText>
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Usuário não existe
                                </FormControl.ErrorMessage>
                            </Stack>
                        </FormControl>
                        <FormControl marginTop={5} >
                            <Stack mx="1" >
                                <FormControl.Label >E-mail </FormControl.Label>
                                <Input borderBottomColor={'light.200'} variant="underlined" type="user" placeholder=""
                                    onChangeText={(value) => setUsername(value)} defaultValue={dd.email}
                                ></Input>
                                <FormControl.HelperText>

                                </FormControl.HelperText>
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Usuário não existe
                                </FormControl.ErrorMessage>
                            </Stack>
                        </FormControl>
                        <FormControl marginBottom={5} >
                            <Stack mx="1" >
                                <FormControl.Label >Senha</FormControl.Label>
                                <Input borderBottomColor={'light.200'} type="password" variant="underlined" placeholder="*******"
                                    onChangeText={setPassword} />

                                <FormControl.HelperText>

                                </FormControl.HelperText>
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Senha incorreta
                                </FormControl.ErrorMessage>
                            </Stack>
                        </FormControl>

                        <Box alignItems="center" marginBottom={5}>
                            <Button bg={'indigo.900'} w={'50%'} variant={"solid"} colorScheme={'indigo'} borderRadius={20} onPress={() => alert('Essa função não está disponível na versão pública')}>
                                <Text color={'light.50'}>Alterar dados</Text>
                            </Button>
                        </Box>

                    </Box>
                </Box>
            );
        }

        function BoxDATA() {
            const [copyText, setCopyText] = React.useState("");
            const { value, onCopy } = useClipboard();


            function NewToken() {
                axios.get('https://apiarduinowebcontrol.herokuapp.com/', {
                    params: {
                        req: 'Update_DataUser',
                        token: token,
                        command: 'NewToken',
                    }
                })
                    .then(function (response) {
                        var token = response.data.NewToken;
                        var gg = AsyncStorage.setItem('token', token);
                        console.log(response.data);
                        getToken()
                        alert("Novo token foi gerado!\nVerifique sua caixa de e-mail")
                    })

            }

            function NewArduinoID() {
                axios.get('https://apiarduinowebcontrol.herokuapp.com/', {
                    params: {
                        req: 'Update_DataUser',
                        token: token,
                        command: 'NewArduinoID',
                    }
                })
                    .then(function (response) {
                        alert("Novo ArduinoID foi gerado!\n"+response.data.NewArduinoID)
                        navigation.navigate('DashBorard')
                    })

            }
            return (
                <Box maxW={'100%'} h={100} bg="light.50" borderRadius={5} >
                    <VStack left={1.5} space={1}>
                        <Heading >{dd.name}</Heading>
                        <Heading fontSize={15} color={'violet.600'}>Arduino ID: {dd.arduinoid}</Heading>

                        <HStack space={1}>
                            <Button onPress={()=> NewArduinoID()} bg={'indigo.800'} variant={"solid"} colorScheme={'indigo'}>Alterar ArduinoID</Button>
                            <Button onPress={() => NewToken()} bg={'indigo.800'} variant={"solid"} colorScheme={'indigo'}>Alterar Token</Button>
                        </HStack>
                    </VStack>

                </Box>
            )
        }







        return (
            <NativeBaseProvider>
                                    <View h={'100%'} _dark={{ bg: "blueGray.900" }} _light={{ bg: "violet.900" }} px={4} flex={1}>

                <Center marginTop={10} _web={{marginTop: 51, top: -50}}>
                    <VStack space={5}>
                        <BoxDATA></BoxDATA>
                        <BoxForm></BoxForm>
                    </VStack>
                </Center>
                </View>

            </NativeBaseProvider>
        )
    } else {
        return (
            <NativeBaseProvider>
            </NativeBaseProvider>
        )
    }

}

