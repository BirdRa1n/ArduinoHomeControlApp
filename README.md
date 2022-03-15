
# ArduinoHomeControlApp

O App é difercionado a controle residêncial com Arduino via comunicação WEB
[ArduinoHomeControl](https://github.com/birdra1n/ArduinoHomeControl/)

## Autores

- [@BirdRa1n](https://www.github.com/birdra1n)


## Deploy

Para fazer o deploy desse projeto rode

```bash
  yarn install
```
```bash
  yarn start
```


## Screenshots
### Login
![Login](https://thumbs2.imgbox.com/db/4f/aw4JCbGI_t.jpg)
### Criando conta
![Login](https://thumbs2.imgbox.com/e7/b4/Tawc2o1O_t.jpg)
### Painel
![Painel](https://thumbs2.imgbox.com/56/df/d8aoJlYu_t.jpg)
### Gerenciamento de conta
![Painel](https://thumbs2.imgbox.com/0c/62/SAZvmg0G_t.jpg)


# ArduinoHomeControl

O App é difercionado a controle residêncial com Arduino via comunicação WEB
[ArduinoHomeControl](https://github.com/birdra1n/ArduinoHomeControl/)

## Autores

- [@BirdRa1n](https://www.github.com/birdra1n)


## Deploy

Para fazer o deploy desse projeto rode

```bash
  yarn install
```
```bash
  yarn start
```


## Documentação da API
[ArduinoHomeControlAPI](https://apiarduinowebcontrol.herokuapp.com/)


#### Sempre inicia-se com o Parâmetro req 

```http
  ?req=newuser
```

#### Criar um novo usuário

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `newuser` |  |  |
| `username` | `string` | Usuário |
| `name` | `string` | Nome de usuário |
| `email` | `string` | E-mail do usuário |
| `password` | `string` | Senha do usuário |

#### Retorno

```http
{
    "warning": "Account created"
}
```

#### Logar na sua conta

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `login` |  |  |
| `username` | `string` | Usuário |
| `password` | `string` | Senha do usuário |

#### Retorno

```http
{
    "token": "b7749c6ccd6cc6b5b6e9de90e4d9687234104791187a35f115cbecff44c3d9ae",
    "loginState": "Login done"
}
```



)


## Documentação da API
### Em desenvolvimento
[ArduinoHomeControlAPI](https://apiarduinowebcontrol.herokuapp.com/)


#### Sempre inicia-se com o Parâmetro req 

```http
  ?req=newuser
```

#### Criar um novo usuário

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `newuser` |  |  |
| `username` | `string` | Usuário |
| `name` | `string` | Nome de usuário |
| `email` | `string` | E-mail do usuário |
| `password` | `string` | Senha do usuário |

#### Retorno

```http
{
    "warning": "Account created"
}
```

#### Logar na sua conta

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `login` |  |  |
| `username` | `string` | Usuário |
| `password` | `string` | Senha do usuário |

#### Retorno

```http
{
    "token": "b7749c6ccd6cc6b5b6e9de90e4d9687234104791187a35f115cbecff44c3d9ae",
    "loginState": "Login done"
}
```



