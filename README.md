# Login e Logout (Javscript)

Esse é um projeto desenvolvido para a CP3 da aula de FrontEnd da FIAP.
O projeto consiste em um código que faz validação(simbólica) de dados inseridos no formulario de acordo com o salvo no "banco de dados", faz a verificação e libera o acesso ao dashboard.

### Implementado: 
* SessionStorage
* Verificação de credencial (redirecionamento de URL)
* Teste de manipulação de info json.
--------------------------------------------------------


`A tela index realiza verificação de credenciais e bloqueia acesso ao dashboard pela url;
Faz verificação de crendencias de acordo com "regra de negócios",
neste caso email tem que obrigatóriamente ter o " @ " e a senha tem que ser maior ou igual a 8 caracteres.`

`Já na dashboard a verificação é para caso esteja com uma sessão ativa bloqueie a volta para o inndex(login) enquanto não realizar o logout.`








### Teste:

Para realizar o teste do projeto insira os dados no formulario:

* `Link: https://cloves-neto.github.io/login-logout-js/`
* `Email: teste@email.com`
* `Senha: teste123` 


### Stacks
[![Javascript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#) [![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#) [![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
---------------------------------------------------------
### Próximas Melhorias

O código pode verificar se os campos preenchidos tem os requisitos necessários, como uma verificação de contrução de email e estrutura de senha como: 

- email deve possuir: `'texto'` && `'@'` && `'provedor'`
- senha deve possuir: `+=8 char` && `+=1 symbol` && `+=1 number` && `+1 charUpperCase` 


-----------------------------------------------------------

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://devneto.com.br/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cloves-neto/)

