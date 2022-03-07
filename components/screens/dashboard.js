import React from "react";
import { useEffect, useState } from "react"
import { NativeBaseProvider, Modal, Actionsheet, Spinner, useClipboard, Box, Text, Badge, Divider, Heading, VStack, Switch, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable, View, Container, ZStack, ScrollView, Toast } from "native-base";
import { TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { Ionicons, AntDesign, FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function DashBorard({ navigation }) {
  const [copyText, setCopyText] = React.useState("");
  const { value, onCopy } = useClipboard();
  const [token, setToken] = React.useState("");
  const [data, setData] = React.useState("");
  

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

  function GetDataAccont() {
    axios.get('https://apiarduinowebcontrol.herokuapp.com/', {
      params: {
        req: 'painel',
        token: token,
        filter: 'all'
      }
    })
      .then(function (response) {
        console.log(response.data);
        setData(response.data)
        setCopyText(response.data.arduinoid)
      })
  }
  function Exit() {
    var gg = AsyncStorage.setItem('token', '')
    var lgg = AsyncStorage.setItem('LoginSave', 'Login')
    setTimeout(
      function () {
        navigation.navigate('Login')
      }
        .bind(this),
      2000
    );
  }

  const Head = () => {
    return <Box>
      <Box left={3} top={5}>

        <HStack justifyContent="space-between" w={'90%'}>
          <Heading fontSize={30}>Olá, {data.name}</Heading>
          <Center>
            <Ionicons name="exit-outline" size={30} color="black" onPress={() => Exit()} />
          </Center>
        </HStack>

        <TouchableOpacity onPress={() => onCopy(copyText)}>
          <HStack space={1}>
            <Heading fontSize={15} color={'violet.600'}>Arduino ID: {data.arduinoid}</Heading>
          </HStack>
        </TouchableOpacity>

      </Box>
    </Box>;
  };
  const OptionsBody = () => {
    const [showModal, setShowModal] = useState(false);
    const [Switch_1, setSwitch_1] = useState();
    const [Switch_2, setSwitch_2] = useState();
    const [Switch_3, setSwitch_3] = useState();
    const [Switch_4, setSwitch_4] = React.useState();
    const [Switch_5, setSwitch_5] = React.useState();
    const [Switch_6, setSwitch_6] = React.useState();
    const [Switch_7, setSwitch_7] = React.useState();
    const [Switch_8, setSwitch_8] = React.useState();
    const [Switch_9, setSwitch_9] = React.useState();
    const [Switch_10, setSwitch_10] = React.useState();
    const [Switch_11, setSwitch_11] = React.useState();
    const [Switch_12, setSwitch_12] = React.useState();
    const [Switch_13, setSwitch_13] = React.useState();
    const [Switch_14, setSwitch_14] = React.useState();
    const [Switch_15, setSwitch_15] = React.useState();
    const [data_lights, setdata_lights] = useState();
  
    if (Switch_1 == true) {
      var light_opt1 = "1"
    } else {
      var light_opt1 = "0"
    }
    if (Switch_2 == true) {
      var light_opt2 = "1"
    } else {
      var light_opt2 = "0"
    }
    if (Switch_3 == true) {
      var light_opt3 = "1"
    } else {
      var light_opt3 = "0"
    }
    if (Switch_4 == true) {
      var light_opt4 = "1"
    } else {
      var light_opt4 = "0"
    }
    if (Switch_5 == true) {
      var light_opt5 = "1"
    } else {
      var light_opt5 = "0"
    }
  
    if (Switch_6 == true) {
      var light_opt6 = "1"
    } else {
      var light_opt6 = "0"
    }
    if (Switch_7 == true) {
      var light_opt7 = "1"
    } else {
      var light_opt7 = "0"
    }
    if (Switch_8 == true) {
      var light_opt8 = "1"
    } else {
      var light_opt8 = "0"
    }
    if (Switch_9 == true) {
      var light_opt9 = "1"
    } else {
      var light_opt9 = "0"
    }
    if (Switch_10 == true) {
      var light_opt10 = "1"
    } else {
      var light_opt10 = "0"
    }
    if (Switch_11 == true) {
      var light_opt11 = "1"
    } else {
      var light_opt11 = "0"
    }
    if (Switch_12 == true) {
      var light_opt12 = "1"
    } else {
      var light_opt12 = "0"
    }
    if (Switch_13 == true) {
      var light_opt13 = "1"
    } else {
      var light_opt13 = "0"
    }
    if (Switch_14 == true) {
      var light_opt14 = "1"
    } else {
      var light_opt14 = "0"
    }
    if (Switch_15 == true) {
      var light_opt15 = "1"
    } else {
      var light_opt15 = "0"
    }
  
    function SetandGetDataLights() {
      axios.get('https://apiarduinowebcontrol.herokuapp.com/', {
        params: {
          req: 'arduino',
          arduinoid: data.arduinoid,
          setLights: 'yes',
          getLights: 'yes',
          light_1: light_opt1,
          light_2: light_opt2,
          light_3: light_opt3,
          light_4: light_opt4,
          light_5: light_opt5,
          light_6: light_opt6,
          light_7: light_opt7,
          light_8: light_opt8,
          light_9: light_opt9,
          light_10: light_opt10,
          light_11: light_opt11,
          light_12: light_opt12,
          light_13: light_opt13,
          light_14: light_opt14,
          light_15: light_opt15,
        }
      })
        .then(function (response) {
          setdata_lights(JSON.stringify(response.data))
        })
    }
    SetandGetDataLights()   
    return <Box bg={'violet.800'} w={'100%'} h={'81%'} borderTopRadius={45} shadow={5}>
      <Center>
        <ScrollView borderRadius={10} horizontal={true} w={'80%'} h={81} top={3} showsHorizontalScrollIndicator={false}>
          <HStack space={4}>
            <Box w={100} h={'100%'} bg={'light.100'} borderRadius={10} shadow={5}>
              <Center top={4}>
                <Heading fontSize={30}>0</Heading>
                <Heading fontSize={10}>Luzes ligadas</Heading>
              </Center>
            </Box>
            <Box w={100} h={'100%'} bg={'light.100'} borderRadius={10} shadow={5}>
              <Center top={4}>
                <AntDesign name="user" size={35} color="black" />
                <Heading fontSize={10}>Conta</Heading>
              </Center>
            </Box>
            <Box w={100} h={'100%'} bg={'light.100'} borderRadius={10} shadow={5}>
              <Center top={4}>
                <AntDesign name="github" size={35} color="black" />
                <Heading fontSize={10}>Docs GitHub</Heading>
              </Center>
            </Box>
            <Box w={100} h={'100%'} bg={'light.100'} borderRadius={10} shadow={5}>
              <Center top={4}>
                <AntDesign name="setting" size={35} color="black" />
                <Heading fontSize={10}>Configurações</Heading>
              </Center>
            </Box>
          </HStack>
        </ScrollView>

      </Center>

      <Box bg={'violet.700'} w={'100%'} h={'80%'} top={'5%'} borderTopRadius={45} shadow={5} >
        <Center top={50}>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="300px">

              <Modal.Body>
                <Center>
                  <HStack space={9}>

                    <VStack space={2}>
                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_1(!Switch_1)}
                          isChecked={Switch_1} />
                        <Heading fontSize={10}>Luz 1</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_2(!Switch_2)}
                          isChecked={Switch_2} />
                        <Heading fontSize={10}>Luz 2</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_3(!Switch_3)}
                          isChecked={Switch_3} />
                        <Heading fontSize={10}>Luz 3</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_4(!Switch_4)}
                          isChecked={Switch_4} />
                        <Heading fontSize={10}>Luz 4</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_5(!Switch_5)}
                          isChecked={Switch_5} />
                        <Heading fontSize={10}>Luz 5</Heading>
                      </Center>

                    </VStack>

                    <VStack space={2}>
                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_6(!Switch_6)}
                          isChecked={Switch_6} />
                        <Heading fontSize={10}>Luz 6</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_7(!Switch_7)}
                          isChecked={Switch_7} />
                        <Heading fontSize={10}>Luz 7</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_8(!Switch_8)}
                          isChecked={Switch_8} />
                        <Heading fontSize={10}>Luz 8</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_9(!Switch_9)}
                          isChecked={Switch_9} />
                        <Heading fontSize={10}>Luz 9</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_10(!Switch_10)}
                          isChecked={Switch_10} />
                        <Heading fontSize={10}>Luz 10</Heading>
                      </Center>

                    </VStack>

                    <VStack space={2}>
                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_11(!Switch_11)}
                          isChecked={Switch_11} />
                        <Heading fontSize={10}>Luz 11</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_12(!Switch_12)}
                          isChecked={Switch_12} />
                        <Heading fontSize={10}>Luz 12</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_13(!Switch_13)}
                          isChecked={Switch_13} />
                        <Heading fontSize={10}>Luz 13</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_14(!Switch_14)}
                          isChecked={Switch_14} />
                        <Heading fontSize={10}>Luz 14</Heading>
                      </Center>

                      <Center>
                        <Switch size="md"
                          colorScheme="violet"
                          onChange={() => setSwitch_15(!Switch_15)}
                          isChecked={Switch_15} />
                        <Heading fontSize={10}>Luz 15</Heading>
                      </Center>
                    </VStack>
                  </HStack>
                </Center>
              </Modal.Body>
            </Modal.Content>
          </Modal>


          <HStack space={9} _web={{ w: '60%', alignContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => setShowModal(true)} colorScheme={'warning'} shadow={1} bg={'warning.500'} w={'40%'} h={120} borderRadius={10} >
              <Center>
                <Entypo name="light-bulb" size={54} color="#f5f5f4" />
                <Heading fontSize={20} color={'#f5f5f4'}>Luzes</Heading>
                <Badge bg={'#FF0000'} borderRadius={10} _text={{ fontSize: 8, color: 'white' }}>Em desenvolvimento</Badge>
              </Center>
            </Button>

            <Button shadow={1} colorScheme={'lightBlue'} bg={'lightBlue.500'} w={'40%'} h={120} borderRadius={10}>
              <Center>
                <FontAwesome name="thermometer-4" size={54} color="#f5f5f4" />
                <Heading fontSize={20} color={'#f5f5f4'}>AC</Heading>
              </Center>
              <Badge bg={'#FF0000'} borderRadius={10} _text={{ fontSize: 8, color: 'white' }}>Em desenvolvimento</Badge>
            </Button>

          </HStack>

          <Button shadow={1} colorScheme={'indigo'} bg={'indigo.500'} w={'90%'} h={120} top={5} borderRadius={10}>
            <Center >
              <FontAwesome5 name="faucet" size={54} color="#f5f5f4" />
              <Heading fontSize={20} color={'#f5f5f4'}>Jardim</Heading>
              <Badge bg={'#FF0000'} borderRadius={10} _text={{ fontSize: 8, color: 'white' }}>Em desenvolvimento</Badge>
            </Center>
          </Button>

        </Center>

      </Box>

      <Box alignItems="center" bottom={3}>
        <HStack>
          <Link href="https://github.com/birdra1n" isExternal>
            <Heading color={'white'} fontSize={15}>Developed by BirdRa1n 👨🏻‍💻</Heading>
          </Link>
        </HStack>
      </Box>

    </Box>;
    
  };

  if (data.warning == "valid token") {
    return (
      <NativeBaseProvider>
        <Center w={'100%'} h={'100%'} safeAreaBottom>

          <Box safeAreaTop w={'100%'} h={'100%'} maxW={580} justifyContent="space-between">
            <Head></Head>
            <OptionsBody></OptionsBody>
          </Box>
        </Center>

      </NativeBaseProvider>
    )
  }

  else {
    GetDataAccont()
    return (
      <NativeBaseProvider>
        <Center bg={'#581c87'} w={'100%'} h={'100%'} safeAreaBottom>
          <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" color={'white'} />
            <Heading color="white" fontSize="md">
              Carregando
            </Heading>
          </HStack>
        </Center>
      </NativeBaseProvider>
    )
  }
}