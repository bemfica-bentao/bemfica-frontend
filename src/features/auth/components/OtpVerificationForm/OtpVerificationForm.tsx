import Background from '@/assets/images/BackgroundOTP.png'
import Star from '@/assets/images/Star.png'
import LineStar from '@/assets/images/LineStar.png'
import './OtpVerificationForm.scss'

export default function OtpVerificationForm (){
    return(
        <div className="MainLayout">
            <div className="LeftContainer" style={{backgroundImage: `url(${Background})`}}>
                <div className="LeftTextContainer">
                    <div>
                        <h1 className='FirstText'>
                            Verifique <br/>
                            seu <span className="ColorPurple1">e-mai</span> <br/>
                            agora<span className="ColorPurple5">.</span>
                        </h1>
                    </div>
                    <p className="SecondText ColorPurple5"> 
                        Enviamos um código de 6<br/>
                        dígitos para confirmar sua<br/>
                        identidade
                    </p>
                </div>

                <img src={LineStar} alt="Linha com estrelas" className='LineStar' />

                <div className='LineContainer'>
                    <div className='Line' />
                    <img src={Star} alt="Estrela" className='Star' />
                </div>
                
            </div>

            <div className="RightContainer">
                
                <h1 className='BemFicaTitle'>bemfica</h1>

                {/* Da para compon+entizar isso aqui */}
                <div className="StepsContainer">
                    <div className="StepFirst" />
                    <div className="StepSecond" />
                    <div className="StepThird" />
                </div>
                <main className="MainContainer">
                    <h2 className='MainText'>Código de verificação </h2>
                    <p className='SubText'>Digite o código enviado <span className="ColorPurple1">para o seu e-mail =]</span></p>
                        
                    {/* Da para componentizar isso aqui */}
                    <div className="EmailContainer">
                        <p>icon</p>
                        <p>jo****@etec.sp.gov.br</p>
                    </div>

                    <form className="FormContainer">
                        <div className="OtpFormInput">
                            <input type="text" className="OtpInput" required/>
                            <input type="text" className="OtpInput" required/>
                            <input type="text" className="OtpInput" required/>
                            <input type="text" className="OtpInput" required/>
                            <input type="text" className="OtpInput" required/>
                        </div>

                        <div className='InfoContainer'>
                            <p>icone</p>
                            <p className='TextAdvice'>Apenas números. Cole o código diretamente</p>
                        </div>
                        
                        <button type="submit" className='SubmitButton'> Verificar código => </button>

                        <button type="button"> reenviar código</button>
                    </form>

                </main>

            </div>
        </div>
    )
}