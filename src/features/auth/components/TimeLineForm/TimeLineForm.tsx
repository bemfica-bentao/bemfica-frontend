
import Background from '@/assets/images/BackgroundOTP.png'
import './TimeLineForm.scss'


export default function TimeLineForm(){
    return(

    <div className="MainLayout">
            <div className="LeftContainer" style={{backgroundImage: `url(${Background})`}}>
                <div className="LeftTextContainer">
                    <div className='FirstTextContainer'>
                        <h1 className='FirstText'>
                            Quase <br/>
                            lá <span className="ColorPurple5">.</span>
                        </h1> 
                    </div>
                    <p className="SecondText ColorPurple5"> 
                        Seu cadastro está sendo processado.<br/>                 
                        Acompanhe o status ao lado.<br/>
                        identidade
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
                            <i className="fa-regular fa-envelope-open"/>
                        </div>
                        <h2 className='MainText'>Pedido recebido ! </h2>
                        <p className='SubText'>Recebemos sua solicitação. Nossa equipe irá avaliá-la em breve <span className="ColorPurple1">para o seu e-mail =]</span></p>
                    </div>
                    
                    <div className='TimeLineStepContainer'>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='enabled'> 
                                <p id='enabled'>1</p>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='enabled'>Pedido recebido !</h2>
                                <p className='SubText'>Sua solicitação chegou ao sistema</p>
                            </div>
                        </div>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='disabled'> 
                                <p>2</p>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='disabled'>Verificando dados</h2>
                                <p className='SubText'>Sua solicitação está sendo verificada</p>
                            </div>
                        </div>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='disabled'> 
                                <p>3</p>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='disabled'>Pedido recebido !</h2>
                                <p className='SubText'>Sua solicitação está sendo etiquetada</p>
                            </div>
                        </div>
                        <div className='TimeStepChildren'>
                            <div className='Icon' id='disabled'> 
                                <p>4</p>
                            </div>
                            <div className='TitlesStepContainer'>
                                <h2 className='TitleStep' id='disabled'>Pedido recebido !</h2>
                                <p className='SubText' >Sua solicitação foi aprovada</p>
                            </div>
                        </div>
                        
                    </div>
                            
                </main>

            </aside>
        </div>
    )
}