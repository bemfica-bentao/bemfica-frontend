import './RegisterForm.scss';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    return (
        <div className="RegisterPage">
            {/* Lado Esquerdo, Formulário */}
            <div className="RegisterLeftContainer">
                <div className="Header">
                    <div className="Logo">
                        <span>Bemfica</span>
                    </div>
                    <button className="GoBackBtn">
                        <Link to="/login"><i className="fa-solid fa-arrow-left"></i></Link>
                    </button>
                </div>

                <main className="RegisterForm">
                    <form className="FormWrapper">
                        <h1>REGISTRO</h1>
                        <h3>Encontre seu Cardápio</h3>

                        <div className="InputGroup">
                            <fieldset>
                                <legend>Nome Completo</legend>
                                <div className="InputContent">
                                    <i className="fa-regular fa-user"></i>
                                    <input type="user" placeholder="" required/>
                                </div>
                            </fieldset>
                        </div>

                        <div className="InputGroup">
                            <fieldset>
                                <legend>Email</legend>
                                <div className="InputContent">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input type="email" placeholder="" required/>
                                </div>
                            </fieldset>
                        </div>

                        <div className="InputGroup">
                            <fieldset>
                                <legend>Senha</legend>
                                <div className="InputContent">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="" required/>
                                    <i className="fa-regular fa-eye-slash clickable"></i>
                                </div>
                            </fieldset>
                        </div>

                        {/* <div className="Divisor">
                            <hr className="LineDivisor"/>
                            <span className="DivisorText">Período</span>
                            <hr className="LineDivisor"/>
                        </div> */}

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            margin: "16px 0"
                        }}>
                            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }} />
                            <span style={{ color: "#666", fontSize: 14 }}>Período</span>
                            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }} />
                        </div>

                        <div className="InputGroupPeriod">
                            <div className="InputContent">
                                <label>
                                    <input type="radio" name="period" required>
                                    </input>
                                    Manhã
                                </label>

                                <label>
                                    <input type="radio" name="period" required>
                                    </input>
                                    Tarde
                                </label>

                                <label>
                                    <input type="radio" name="period" required>
                                    </input>
                                    Noite
                                </label>
                            </div>
                        </div>

                        {/* <div className="Divisor">
                            <hr className="LineDivisor"/>
                            <span className="DivisorText">Arquivo</span>
                            <hr className="LineDivisor"/>
                        </div> */}

                            <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            margin: "16px 0"
                        }}>
                            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }} />
                            <span style={{ color: "#666", fontSize: 14 }}>Arquivo</span>
                            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }} />
                        </div>

                        <br />

                        <div className="InputGroupFile">
                            <div className="InputContent">
                                {/* <label htmlFor="archive" className="btnUpload">
                                    <i className="fa-solid fa-file-arrow-up"></i>
                                </label> */}
                                    
                                <input type="file" id="archive" required>
                                </input>
                            </div>
                        </div>
                        

                        {/* <i class="fa-solid fa-file-arrow-up"></i> */}

                        <button className="SubmitInBtn" type="submit"><Link to="/status" className="RegisterSubmit"> Enviar Registro <i className="fa-solid fa-arrow-right"></i></Link></button>
                    </form>
                </main>
            </div>

            {/* Lado Direito, Banner */}
            <aside className="RegisterRightContainer">

                <div className="Decorations">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-4"></div>
                    <div className="circle circle-5"></div>
                    <div className="circle circle-6"></div>
                </div>

                <div className="RightContent">
                    <h1>Nos <span className="highlight">Informe</span> aqui<span className="dot">.</span></h1>
                    <p>O Registro será enviado à Secretaria <br />para ser analisado.</p>
                </div>
            </aside>
        </div>
    );
}
