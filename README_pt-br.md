<span>For README in English <a href="./README.md" target="blank__">click here</a>.</span>

<h2>Preview 🔎</h2>
<img src="./assets/loginPage.png" alt="Página de login" />

<br/>

<h1>Sobre 📘</h1>
<p>Kenziehub é uma simulação de "rede social" para desenvolvedores onde o usuário pode criar uma conta, logar, ter acesso a dashboard e adicionar suas tecnologias favoritas de acordo com seu nível de experiência. Originalmente feita com React/JS e refatorada para React/TS, kenziehub é uma aplicação Front-end CRUD (Create, Read, Update, Delete) que utiliza o endpoint (<a href="https://kenziehub.herokuapp.com/" target="black__">https://kenziehub.herokuapp.com/</a>) para consumir e enviar dados.</p>

<br/>

<h2>Estruturação de Projeto e Tecnologias 👩🏻‍💻📂</h2>
<p>Neste projeto foram utilizados conceitos de <strong>Consumo de Api</strong>, <strong>React Hooks</strong>, <strong>React Context</strong>, <strong>SPA</strong>, <strong>CRUD</strong>, <strong>React Lazy</strong>, <strong>React Suspense, Fallback</strong>, <strong>Renderização Condicional</strong>.</p>
<img src="./assets/structure.png" alt="Estrutura de pastas" />

<br/><br/>

<h3>Tecnologias / Bibliotecas</h3>
<ul>
    <li>Axios</li>
    <li>Bootstrap (Button & Modal)</li>
    <li>React Context</li>
    <li>React Hook Form</li>
    <li>React Loader Spinner</li>
    <li>React Router Dom</li>
    <li>React Toastify</li>
    <li>React-ts</li>
    <li>Styled-Components</li>
    <li>TypeScript</li>
    <li>yup</li>
</ul>

<br/>

<h2>Como Funciona 🔨</h2>

<br/>

<h3>Registro</h3>
<table>
    <tbody>
        <tr>
            <td style="text-align: center;" width="50%"><img src="./assets/registerPage.png" alt="Página de registro"/></td>
            <td width="50%"><p>Na página de registro temos um formulário básico para capturar as informações do usuário. Todos os campos devem ser preenchicos.</p></td>
        </tr>
    </tbody>
</table>

<br/>

<h4>Erros ❌</h3>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <img src="./assets/registerErrors.png" alt="Imagem de erros no formulário"/>
            </td>
            <td width="50%">
            <img src="./assets/fieldErrorTooltip.png" alt="Imagem de erro de validação no campo de email"/>
                <p>Quando os dados enviados tiverem algum erro de validação, será mostrada uma tooltip que ao passar o mouse em cima, mostrará o que não satisfez as condições do campo.</p>
            </td>
        </tr>
    </tbody>
</table>

<br/>

<h4>Sucesso! ✅</h3>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <p>Caso todos os dados sejam validados com sucesso, uma notificação na parte superiora da página irá mostrar o status da requisição e você será redirecionado em alguns segundos para a página de <strong>login</strong>.</p>
            </td>
            <td width="50%">
                <img src="./assets/registerSucess.png" alt="Imagem de login bem sucedido"/>
            </td>
        </tr>
    </tbody>
</table>

<hr/>

<br/><br/>

<h3>Login</h3>

<br/>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <img src="./assets/loginForm.png" alt="Formulário da página de login"/>
            </td>
            <td width="50%">
                <p>Para entrar na sua conta basta digitar o email e a senha de sua conta nos respectivos campos.</p>
            </td>
        </tr>
    </tbody>
</table>

<h4>Erros ❌</h4>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <p>Semelhante a página de registo, a validação de dados é feita na página de login, porém, os erros são mostrados na parte superior da página. Aqui estão os possíveis erros:</p>
            </td>
            <td width="50%">
                <img src="./assets/loginErrors.png" alt="Imagem notificando erros de campos não enviados"/>
                <img src="./assets/loginErrors2.png" alt="Imagem notificando erro de informações"/>
            </td>
        </tr>
    </tbody>
</table>

<h4>Sucesso! ✅</h4>

<p>Se os dados enviados combinarem com as informações do banco de dados, você será redirecionado para a <strong>Dashboard</strong>! <br/><br/> <strong>Nota:</strong> A aplicação conta com a funcionalidade de <strong>Auto-login</strong>. Clique em <strong>"sair"</strong> na Dashboard para remover esta funcionalidade na próxima vez que entrar na aplicação.</p>

<hr/>

<br/><br/>

<h3>Dashboard</h3>

<br/>

<img src="./assets/dashboard.png" alt="Dashboard"/>

<br/>

<p>Na Dashboard você encontra algumas informações como seu nome e suas tecnologias favoritas. Se não houver tecnologias adicionadas você pode clicar no botão de adicionar tecnologia para popular seu perfil.</p>

<br/>

<h4>Adicionando Tecnologias</h4>

<br/>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <img src="./assets/addTechButton.png" alt="Botão de adicionar tecnologia"/>
            </td>
            <td width="50%">
                <img src="./assets/addTechForm.png" alt="Formulário de adicionar tecnologia"/>
            </td>
        </tr>
    </tbody>
</table>

<p>Ao clicar no botão, um formulário irá abrir no centro da tela. Basta inserir o nome da tecnologia, seu nível de experiência e clicar em <strong>Cadastrar Tecnologia.</strong></p>

<br/>

<h4>Erros ❌</h4>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <p>Caso algo dê errado, uma notificação irá aparecer na parte superior da tela.</p>
            </td>
            <td width="50%">
                <img src="./assets/addTechError.png" alt="Imagem notificando erro."/>
            </td>
        </tr>
    </tbody>
</table>

<br/>

<h4>Sucesso! ✅</h4>

<br/>

<img src="./assets/dashboardTechs.png" alt="Tecnologia adicionada."/>

<br/>

<p>Se tudo der certo, a tecnologia adicionada irá aparecer no centro da tela!</p>

<br/>

<h4>Excluindo Tecnologias</h4>

<br/>

<p>Num cenário em que você tenha adicionado uma tecnologia errada ou que não utiliza mais e queira excluir do seu perfil, existe a opção de excluir apertando no botão da lixeira da respectiva tecnologia.</p>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <img src="./assets/manyTechs.png" alt="Lista de tecnologias"/>
            </td>
            <td width="50%">
                <img src="./assets/excludeTech.png" alt="Tecnologia python com uma seta apontando para a imagem de lixeira"/>
            </td>
        </tr>
    </tbody>
</table>

<br/>

<h4>Erros ❌</h4>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <p>Caso algo dê errado, semelhantemente as outras funcionalidades, uma notificação irá aparecer na parte superior da tela.</p>
            </td>
            <td width="50%">
                <img src="./assets/removeTechError.png" alt="Imagem notificando erro de exclusão da tecnologia"/>
            </td>
        </tr>
    </tbody>
</table>

<br/>

<h4>Sucesso! ✅</h4>

<table>
    <tbody>
        <tr>
            <td width="50%">
                <img src="./assets/techRemoved.png" alt="Imagem notificando erro de exclusão da tecnologia"/>
            </td>
            <td width="50%">
                <p>Se tudo der certo, você não verá mais a tecnologia em seu Dashboard!</p>
            </td>
        </tr>
    </tbody>
</table>

<h2><strong>Link do Projeto:</strong> <a href="https://kenziehub-typescript-rho.vercel.app/" target="blank_">Kenziehub</a></h2>
