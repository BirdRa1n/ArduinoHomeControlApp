import * as React from 'react';
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Code,
    Box,
    FormControl,
    Input,
    Stack,
    WarningOutlineIcon,
    ZStack,
    Image,
    Button,
    Container,
    useToast
} from "native-base";
import axios from 'axios';
import arduino from '../img/arduino.png';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native";


export default function Login({ navigation }) {
    const toast = useToast();
    const [data, setData] = useState('');

    const BoxForm = () => {
        const [username, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [statusLogin, setstatusLogin] = React.useState("");

        const [token, setToken] = React.useState("");
        var userError = ''
        var pwsError = ''

        

        function Login() {
            axios.get('https://apiarduinowebcontrol.herokuapp.com/', {
                params: {
                    req: 'login',
                    username: username,
                    password: password
                }
            })
                .then(function (response) {
                    // manipula o sucesso da requisição
                    console.log(response.data);
                    setstatusLogin(response.data)
                })
        }




        if (statusLogin.warning_error == "User does not exist") {
            var userError = true;
        } else {
            var userError = false;
        }
        if (statusLogin.warning_error == "Incorrect password") {
            var pwsError = true;
        } else {
            var pwsError = false;
        }
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('token')

                if (value !== null) {
                    setToken(value)

                }
            } catch (e) {
            }
        }
        getData()


        if (statusLogin.loginState == "Login done") {
            var gettoken = statusLogin.token;
            var gg = AsyncStorage.setItem('token', gettoken)
            var lgg = AsyncStorage.setItem('LoginSave', 'DashBorard')
            navigation.navigate('DashBorard')



        }







        return <Box alignItems="center" w={'xs'} bg={'light.50'} borderRadius={10} shadow={5}>
            <Box w="90%" maxWidth="300px">
                <Center>
                    <Image source={arduino} alt="Inicial Logo" size="200" />
                    <Heading top={1} fontSize={22}>ArduinoHomeControl</Heading>

                </Center>

                <FormControl marginTop={5} isInvalid={userError}>
                    <Stack mx="4" >
                        <FormControl.Label >Usuário </FormControl.Label>
                        <Input borderBottomColor={'light.200'} variant="underlined" type="user" placeholder=""
                            onChangeText={(value) => setUsername(value)}
                        ></Input>
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Usuário não existe
                        </FormControl.ErrorMessage>
                    </Stack>
                </FormControl>
                <FormControl marginBottom={5} isInvalid={pwsError}>
                    <Stack mx="4" >
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
                    <Button bg={'indigo.800'} w={'50%'} variant={"solid"} colorScheme={'indigo'} borderRadius={20} onPress={() => Login()}>
                        <Text color={'light.50'}>Entrar</Text>
                    </Button>
                </Box>

            </Box>
        </Box>;

    };
    return (
        <NativeBaseProvider>
            <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "violet.900" }} px={4} flex={1}>
                <BoxForm></BoxForm>
                <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
                    <Heading top={4} _web={{ marginTop: 4 }} size={'xs'} color={'#f5f3ff'}>Não possui conta? <Heading color={'white'} size={'xs'}>Clique aqui</Heading></Heading>
                </TouchableOpacity>
            </Center>
        </NativeBaseProvider>
    );

}