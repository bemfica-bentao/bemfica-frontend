import './LandingPage.scss';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <header className="LandingHeader">
                <Link className="LandingLogo" to="/home">
                    <i className="fa-solid fa-utensils" aria-hidden="true"></i>
                    <span>bemfica</span>
                </Link>

                <nav className="LandingNav" aria-label="Seções da página">
                    <a href="#problema">O problema</a>
                    <a href="#solucao">A solução</a>
                    <a href="#publico">Para quem</a>
                </nav>

                <div className="HeaderActions">
                    <Link className="HeaderLogin" to="/login">Entrar</Link>
                    <Link className="HeaderCta" to="/registro">Criar conta</Link>
                </div>
            </header>

            <main className="LandingMain">
                {/* ============ HERO ============ */}
                <section className="Hero">
                    <div className="HeroContent">
                        <p className="Eyebrow">Cardápio escolar digital e adaptado</p>
                        <h1 className="HeroTitle">
                            Seu cardápio <span className="Highlight">adaptado</span> para você<span className="Dot">.</span>
                        </h1>
                        <p className="HeroSubtitle">
                            Autonomia e segurança para alunos com alergias, com notificações personalizadas por
                            restrição alimentar.
                        </p>

                        <div className="HeroCtas">
                            <Link className="PrimaryBtn" to="/registro">
                                Criar conta <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </Link>
                            <Link className="SecondaryBtn" to="/login">Entrar</Link>
                        </div>

                        <ul className="HeroStats">
                            <li>
                                <strong>8%</strong>
                                <span>das crianças têm alguma alergia alimentar</span>
                            </li>
                            <li>
                                <strong>51%</strong>
                                <span>da população brasileira tem tendência à intolerância à lactose</span>
                            </li>
                        </ul>
                    </div>

                    <aside className="HeroPanel" aria-hidden="true">
                        <div className="Decorations">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                            <div className="circle circle-4"></div>
                            <div className="circle circle-5"></div>
                            <div className="circle circle-6"></div>
                        </div>

                        <div className="MenuCard">
                            <div className="MenuCardHeader">
                                <span>Cardápio de hoje</span>
                                <i className="fa-solid fa-utensils" aria-hidden="true"></i>
                            </div>
                            <ul className="MenuCardList">
                                <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Lanche</li>
                                <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Almoço</li>
                                <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Janta</li>
                            </ul>
                            <div className="MenuCardBadge">
                                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                                Adaptado para o seu perfil
                            </div>
                        </div>
                    </aside>
                </section>

                {/* ============ PROBLEMA ============ */}
                <section className="Section SectionProblem" id="problema">
                    <div className="SectionInner">
                        <header className="SectionHeader">
                            <p className="Eyebrow">O problema</p>
                            <h2 className="SectionTitle">O que o Bemfica resolve</h2>
                        </header>

                        <div className="ProblemGrid">
                            <article className="FeatureCard">
                                <i className="fa-solid fa-gears" aria-hidden="true"></i>
                                <h3>Processo 100% manual</h3>
                                <p>Cadastro e atualização de cardápios feitos à mão, com retrabalho.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-circle-question" aria-hidden="true"></i>
                                <h3>Alunos sem informação prévia</h3>
                                <p>O aluno não sabe o que tem no prato antes de chegar ao refeitório.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
                                <h3>Risco para alunos alérgicos</h3>
                                <p>Sem aviso prévio, o risco de exposição acidental vira rotina.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-utensils" aria-hidden="true"></i>
                                <h3>Sobrecarga no Refeitório</h3>
                                <p>Mais pressão para quem prepara e serve, e mais fila no horário.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ============ SOLUÇÃO ============ */}
                <section className="Section SectionSolution" id="solucao">
                    <div className="SectionInner">
                        <header className="SectionHeader">
                            <p className="Eyebrow">A solução</p>
                            <h2 className="SectionTitle">Cardápio escolar digital e adaptado</h2>
                        </header>

                        <div className="SolutionGrid">
                            <article className="FeatureCard">
                                <i className="fa-solid fa-mobile-screen" aria-hidden="true"></i>
                                <h3>App self-service para o aluno</h3>
                                <p>Cardápio digital e adaptado no navegador, web ou mobile.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-table-columns" aria-hidden="true"></i>
                                <h3>Painel simples para o refeitório</h3>
                                <p>Cadastro e atualização de cardápios sem retrabalho manual.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-bell" aria-hidden="true"></i>
                                <h3>Notificações push e e-mail automáticas</h3>
                                <p>Alertas personalizados por restrição alimentar.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-sliders" aria-hidden="true"></i>
                                <h3>Configurações de perfil alimentar</h3>
                                <p>Gestão de perfis de restrição alimentar com filtros.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ============ PÚBLICO-ALVO ============ */}
                <section className="Section SectionAudience" id="publico">
                    <div className="SectionInner">
                        <header className="SectionHeader">
                            <p className="Eyebrow">Para quem</p>
                            <h2 className="SectionTitle">Para quem é o Bemfica</h2>
                        </header>

                        <div className="AudienceGrid">
                            <article className="FeatureCard">
                                <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                                <h3>Alunos da instituição</h3>
                                <p>Informação prévia sobre o cardápio do dia.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-heart-pulse" aria-hidden="true"></i>
                                <h3>Alunos com restrições e alergias alimentares</h3>
                                <p>Autonomia e segurança para comer com tranquilidade.</p>
                            </article>
                            <article className="FeatureCard">
                                <i className="fa-solid fa-utensils" aria-hidden="true"></i>
                                <h3>Funcionários do Refeitório e da instituição</h3>
                                <p>Menos erros, retrabalho e sobrecarga no dia a dia.</p>
                            </article>
                            <article className="FeatureCard Future">
                                <span className="FutureTag">Em breve</span>
                                <i className="fa-solid fa-user-group" aria-hidden="true"></i>
                                <h3>Pais e responsáveis</h3>
                                <p>Ideia de implementação futura.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ============ CTA FINAL ============ */}
                <section className="SectionCta">
                    <div className="Decorations">
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-3"></div>
                        <div className="circle circle-4"></div>
                        <div className="circle circle-5"></div>
                        <div className="circle circle-6"></div>
                    </div>

                    <div className="CtaContent">
                        <p className="Eyebrow">Crie sua conta</p>
                        <h2 className="CtaTitle">
                            Autonomia e segurança para <span className="Highlight">alunos com alergias</span>.
                        </h2>
                        <p className="CtaSubtitle">
                            Encontre seu cardápio adaptado e comece a receber os avisos do seu perfil alimentar.
                        </p>
                        <div className="CtaButtons">
                            <Link className="PrimaryBtn" to="/registro">
                                Criar conta <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </Link>
                            <Link className="SecondaryBtn Dark" to="/login">Entrar</Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="LandingFooter">
                <span className="FooterBrand">bemfica</span>
                <span className="FooterTag">Cardápio escolar digital</span>
                <p className="FooterMeta">Projeto PWIII · Matheus Bufon &amp; Victor Dumer</p>
            </footer>
        </div>
    );
}
