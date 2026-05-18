
import Background from '@/assets/images/BackgroundOTP.png'
import Star from '@/assets/images/Star.png'
import LineStar from '@/assets/images/LineStar.png'
import './OtpVerificationForm.scss'
import { useOtpInput } from '@/hooks/useOtpInput'

export default function OtpVerificationForm (){
    const { setRef, handleChange, handleKeyDown, handlePaste } = useOtpInput();

    return(
        <div className="MainLayout">
            <div className="LeftContainer" style={{backgroundImage: `url(${Background})`}}>
                <div className="LeftTextContainer">
                    <div className='FirstTextContainer'>
                        <h1 className='FirstText'>
                            Verifique <br/>
                            seu <span className="ColorPurple1">e-mai</span> <br/>
                            agora<span className="ColorPurple5">.</span>
                        </h1>
                        <div className='LineContainer'>
                            <div className='Line' />
                            <img src={Star} alt="Estrela" className='Star' />
                        </div>
                    </div>
                    <p className="SecondText ColorPurple5"> 
                        Enviamos um código de 6<br/>
                        dígitos para confirmar sua<br/>
                        identidade
                    </p>
                </div>

                <img src={LineStar} alt="Linha com estrelas" className='LineStar' />

                
                
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
                    <div className='MainTitles'>
                        <h2 className='MainText'>Código de verificação </h2>
                        <p className='SubText'>Digite o código enviado <span className="ColorPurple1">para o seu e-mail =]</span></p>
                    </div>
                    

                            
                        {/* Da para componentizar isso aqui */}
                        <div className="EmailContainer">
                            <i className="fa-regular fa-envelope"></i>
                            <p>jo***@etec.sp.gov.br</p>
                        </div>
                    

                    <form className="FormContainer" action='/verify'>
                        <div className="OtpFormInput">
                             {Array.from({ length: 6 }, (_, index) => (
                            <input
                            key={index}
                            type="text"
                            inputMode="numeric"
                            className="OtpInput"
                            maxLength={1}
                            ref={element => setRef(element, index)}
                            onChange={event => handleChange(event, index)}
                            onKeyDown={event => handleKeyDown(event, index)}
                            onPaste={handlePaste}
                            required
                            />
                        ))}
                        </div>

                        <div className='InfoContainer'>
                            <i className="fa-solid fa-circle-info"></i>
                            <p className='TextAdvice'>Apenas números. Cole o código diretamente</p>
                        </div>
                        <div className='ButtonsContainer'>

                        <button type="submit" className='SubmitButton'> Verificar código </button>

                        <button type="button" className='ResendButton'> <span className='ResendTitle'> reenviar código </span> </button>
                        </div>
                    </form>

                </main>

            </div>
        </div>
    )
}