import './LoginForm.scss';

export default function LoginForm() {
    return (
        <div className="LoginPage">
            {/* Lado Esquerdo, Formulário */}
            <div className="LoginLeftContainer">
                <div className="Header">
                    <div className="Logo">
                        <span>Bemfica</span>
                    </div>
                    <button className="GoBackBtn">
                        <a href="/bemfica/home"><i className="fa-solid fa-arrow-left"></i></a>
                    </button>
                </div>

                <main className="LoginForm">
                    <div className="FormWrapper">
                        <h1>LOGIN</h1>
                        <h3>Acesse seu Perfil</h3>

                        <div className="InputGroup">
                            <fieldset>
                                <legend>Email</legend>
                                <div className="InputContent">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input type="email" placeholder="" />
                                </div>
                            </fieldset>
                        </div>

                        <div className="InputGroup">
                            <a href="/esqueceu" className="ForgotLink">Esqueceu sua senha?</a>
                            <fieldset>
                                <legend>Senha</legend>
                                <div className="InputContent">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="" />
                                    <i className="fa-regular fa-eye-slash clickable"></i>
                                </div>
                            </fieldset>
                        </div>

                        <button className="LogInBtn">Entrar</button>
                        <a href="/bemfica/registro" className="RegisterLink">Não tem uma conta? Registre-se</a>
                    </div>
                </main>
            </div>

            {/* Lado Direito, Banner */}
            <aside className="LoginRightContainer">

                <div className="Decorations">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-4"></div>
                    <div className="circle circle-5"></div>
                    <div className="circle circle-6"></div>
                </div>

                <div className="RightContent">
                    <h1>Acesse nossa <br /><span className="highlight">Plataforma</span><span className="dot">.</span></h1>
                    <p>Veja seu Cardápio adaptado como Aluno <br />ou acesse todos como Funcionário.</p>
                </div>
            </aside>
        </div>
    );
}