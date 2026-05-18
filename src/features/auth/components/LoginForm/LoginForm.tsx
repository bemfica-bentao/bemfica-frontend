import './LoginForm.scss'

export default function LoginForm() {

    return (
        <div className="LoginPage">
            <nav>
                <div>
                    <button className="GoBackBtn">
                        <a href="MainScreen"><i className="fa-solid fa-arrow-left"></i></a>
                    </button><br></br>;
                </div>
            </nav>

            <main className="LoginForm">
                <div>
                    <h3>Login</h3>
                    <h2>Acesse seu Perfil</h2>
                    <br></br>
                    <fieldset>
                        <legend>Email</legend>
                        <input type="email" placeholder="" />
                    </fieldset>
                    {/* <i class="fa-solid fa-envelope"></i> */}
                    <br></br>
                    <h5>Esqueceu sua senha?</h5>
                    <fieldset>
                        <legend>Senha</legend>
                        <input type="password" placeholder="" />
                    </fieldset>
                    {/* <i class="fa-solid fa-lock"></i> */}
                    {/* <i class="fa-solid fa-eye-slash"></i> */}
                    {/* <i class="fa-solid fa-eye"></i> */}
                    <br></br>
                    <button className="LogInBtn">Entrar</button>
                    <h5>Não tem uma conta? Registre-se</h5>
                </div>
            </main>

            <aside>
                <div>
                    <h4>Acesse nossa Plataforma.</h4>
                    <br></br>
                    <h2>Veja seu Cardápio adaptado</h2>
                </div>
            </aside>
        </div>
    )
}