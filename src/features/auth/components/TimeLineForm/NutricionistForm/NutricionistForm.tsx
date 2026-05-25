
import Background from '@/assets/images/BackgroundOTP.png'
import './NutricionistForm.scss'


export default function NutricionistForm(){
    return(

    <div className="MainLayout">
            <div className="LeftContainer" style={{backgroundImage: `url(${Background})`}}>
                <div className="LeftTextContainer">
                    <div className='FirstTextContainer'>
                        <h1 className='FirstText'>
                            Quase<br/>
                            lá <span className="ColorPurple5">.</span>
                        </h1> 
                    </div>
                    <p className="SecondText ColorPurple5"> 
                        Seu cadastro está sendo processado.<br/>                 
                        Acompanhe o status ao lado.<br/>
                    </p>
                </div>
                                
            </div>

            <aside className="RightContainer">
                
                <h1 className='BemFicaTitle'>bemfica</h1>

            
                <div className="StepsContainer">
                    <div className="StepFirst" />
                    <div className="StepSecond" />
                    <div className="StepThird" />
                </div>

                <main className="MainContainer">
                    <div className='MainTitles'>
                        <div className='Icon'>
                            <i className="fa-solid fa-people-arrows"/>
                        </div>
                        <h2 className='MainText'>Em contato com <br/>a nutricionista... </h2>
                        <p className='SubText'>A nutricionista está <span className="ColorPurple1">avaliando seu perfil alimentar, aguarde.</span></p>
                    </div>
                    
                    <div className='TimeLineStepContainer'>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='enabled'>
                                <i className="fa-solid fa-check ColorCreme"/>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='enabled'>Pedido recebido !</h2>
                                <p className='SubText'>Sua solicitação chegou ao sistema</p>
                            </div>
                        </div>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='enabled' > 
                                <i className="fa-solid fa-check ColorCreme"/>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='enabled'>Verificando dados</h2>
                                <p className='SubText'>Sua solicitação está sendo verificada</p>
                            </div>
                        </div>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='focus'> 
                                <p>3</p>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='focus'>Contato com a nutricionista</h2>
                                <p className='SubText'>Sua solicitação está sendo etiquetada</p>
                            </div>
                        </div>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='disabled'> 
                                <p>4</p>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='disabled'>Acesso liberado</h2>
                                <p className='SubText' >Sua solicitação foi aprovada</p>
                            </div>
                        </div>
                        
                    </div>
                            
                </main>

            </aside>
        </div>
    )
}