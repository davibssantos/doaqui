import React, { useEffect } from 'react';
import {useLayoutEffect, useRef} from 'react';
import './App.css'; // Importe o seu CSS aqui
import Button from './components/Button';
import SectionTag from './components/SectionTag';
import FaqItem from './components/FaqItem';
import PlanCard from './components/PlanCard';
import StepCard from './components/StepCard';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';



function App() {

  const el = useRef();
  const tl = useRef();
  const mm = gsap.matchMedia();

  useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  // 📱 MOBILE
  mm.add("(max-width: 768px)", () => {});

  // 💻 DESKTOP
  mm.add("(min-width: 769px)", () => {
    gsap.to(".mao-esquerda", {
      left: 0,
      bottom: -300,
      opacity: 1,
      scrollTrigger: {
        trigger: ".linha-como-funciona-2",
        start: "top 200px",
        end: "bottom 400px",
        scrub: true
      }
    });
  });

  return () => {
    mm.revert();
  };
}, []);

  useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  // 📱 MOBILE
  mm.add("(max-width: 768px)", () => {});

  // 💻 DESKTOP
  mm.add("(min-width: 769px)", () => {
    gsap.to(".mao-direita", {
      right: 0,
      bottom: -190,
      opacity: 1,
      scrollTrigger: {
        trigger: ".linha-como-funciona-2",
        start: "top 200px",
        end: "bottom 400px",
        scrub: true
      }
    });
  });

  return () => {
    mm.revert(); // 🔥 limpa animações e ScrollTriggers
  };
}, []);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:".card-diferenciais",
          scrub: true,
          start: "top 900",
          end: "bottom 980"
        }
      })
      .fromTo("#diferencial-1", {
        opacity:0,
        y: 160,

      }, {
        opacity:1,
        y:0
      })
      .fromTo("#diferencial-2", {
        opacity:0,
        y: 160,

      }, {
        opacity:1,
        y:0
      })
      .fromTo("#diferencial-3", {
        opacity:0,
        y: 160,

      }, {
        opacity:1,
        y:0
      })
    }, el)
     return () => {
      gsap.killTweensOf(".card-diferenciais")
    }
  }, [])

  // Função para lidar com o Scroll Suave (Substituindo o jQuery)
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    
    if (target) {
      // Fecha o menu mobile se estiver aberto (desmarca o checkbox)
      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle) menuToggle.checked = false;

      const headerOffset = 120; // Altura do seu header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="App">
      <div id="home">
        
        {/* --- HEADER --- */}
        <div id="section-header">
          <div id="container-header">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, 'hero')}
            >
              <img src="/assets/logoDoAqui.svg" alt="Logo" className="logo-header" />
            </a>
            
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              <span className="navicon"></span>
            </label>

            <nav id="menu">
              <ul>
                <li><a href="#oquee" onClick={(e) => handleSmoothScroll(e, 'oquee')}>O que é</a></li>
                <li><a href="#comofunciona" onClick={(e) => handleSmoothScroll(e, 'comofunciona')}>Como funciona</a></li>
                <li><a href="#planos" onClick={(e) => handleSmoothScroll(e, 'planos')}>Planos</a></li>
                <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>Dúvidas</a></li>
                <li><a href="#section-footer" onClick={(e) => handleSmoothScroll(e, 'section-footer')}>Fale Conosco</a></li>
              </ul>
            </nav>
            
            <div className="area-bts-menu">
              <div className="area-button">
                <Button>Cadastrar condomínio</Button>
              </div>
              <a href="#" className="color-white semibold padding-left-20">Entrar</a>
            </div>
          </div>
        </div>
        {/* --- FIM HEADER --- */}

        {/* --- HERO --- */}
        <section className="hero" id="hero">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/assets/video-hero-banner.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div id="container-hero-column1">
              <h1 className="titulo-header">Dê nova vida aos objetos que você não usa mais: </h1>
              <p className="subtitulo-header">Venda para os seus vizinhos ou doe<br />para os funcionários do condomínio.<br />Com discrição e segurança.</p>
              <div className="area-button-1">
                <Button variant="white">Cadastrar condomínio</Button>
              </div>
            </div>
            <div id="container-hero-column2">
              <img src="/assets/Image-hero-banner.jpg" alt="Hero Banner" />
            </div>
            <img src="/assets/setas-brancas.svg" alt="" className="setas-hero objeto-parallax" />
          </div>
        </section>
        {/* --- FIM HERO --- */}

        {/* --- O QUE É --- */}
        <section className="oquee" id="oquee">
          <div id="container-oquee">
            <img src="/assets/woman.png" alt="" className="woman objeto-zoom" />
            <img src="/assets/fundo-woman.jpg" alt="" />

            <div id="content-oquee">
              <div className="container-tag">
                <SectionTag text="O que é" color="bg-yellow" />
              </div>
              <h1 className="title">O que é o DOAqui?</h1>
              <h2 className="subtitle">É uma plataforma exclusiva do condomínio para<br /> doar e vender objetos que você não usa mais.</h2>
              <p className="text">Você tira foto, cadastra o objeto e o app avisa as pessoas cadastradas do condomínio.</p>
              <p className="textCTA">Toda as transações acontecem de forma segura<br /> dentro do condomínio.</p>
              <div className="area-button">
                <Button>Cadastrar condomínio</Button>
              </div>
            </div>
            <img src="/assets/setas-pretas.svg" alt="" className="setas-oquee seta" />
          </div>
        </section>
        {/* --- FIM O QUE É --- */}

        {/* --- COMO FUNCIONA --- */}
        <section className="como-funciona" id="comofunciona">
          <div id="container-como-funciona">
            <div className="container-tag">
              <SectionTag text="Simples. Rápido. Seguro." color="bg-white" />
            </div>
            <h1 className="title">Como funciona</h1>
            
            <div id="linha-como-funciona">
              <StepCard 
                imageNum="1" 
                text={<>O morador <br />fotografa o objeto<br /> → a IA ajuda na<br /> descrição.</>} 
              />
              <StepCard 
                imageNum="2" 
                text={<>Ele escolhe:<br />doar ou vender.</>} 
              />
              <StepCard 
                imageNum="3" 
                text={<>O anúncio aparece<br /> apenas para os<br /> usuários do mesmo<br /> condomínio.</>} 
              />
            </div>

            <div id="linha-como-funciona" class="linha-como-funciona-2">
              <StepCard 
                imageNum="4" 
                text={<>Os interessados<br /> clicam em<br /> “Tenho interesse”.</>} 
              />
              <StepCard 
                imageNum="5" 
                text={<>Morador e interessado<br /> negociam via chat<br /> interno.</>} 
              />
              <StepCard 
                imageNum="6" 
                text={<>Se for uma venda, <br />o pagamento acontece<br /> dentro do App e a<br /> entrega no <br />condomínio.</>} 
              />
            </div>

            <img src="/assets/maos-celular.png" alt="" className="maos-como-funciona objeto-zoom" />
            <img src="/assets/mao-esquerda.png" alt="" className="mao-esquerda" />
            <img src="/assets/mao-direita.png" alt="" className="mao-direita" />

            <img src="/assets/setas-brancas.svg" alt="" className="setas-como-funciona-1 objeto-parallax-full" />
            <img src="/assets/setas-brancas.svg" alt="" className="setas-como-funciona-2 seta" />
            <img src="/assets/maos-trocando.png" alt="" className="trocando-como-funciona objeto-zoom" />
          </div>
        </section>
        {/* --- FIM COMO FUNCIONA --- */}

        {/* --- DIFERENCIAIS --- */}
        <section className="diferenciais" id="diferenciais">
          <div id="container-diferenciais">
            <div className="container-tag" >
              <SectionTag text="Diferenciais" color="bg-yellow" />
            </div>
            <div className="content-diferenciais" >
              <h1 className="margin-top-24">Por que usar o DOAqui?</h1>
              <p className="margin-top-24 margin-bottom-60">Muito mais do que doar e vender, é sobre valorizar pessoas e criar comunidade.<br /> Reduza o desperdício e dê vida nova aos objetos em bom estado.</p>
            </div>

            <div id="linha-diferenciais" ref={el}> 
              <div className="card-diferenciais" id='diferencial-1'>
                <img src="/assets/thumb-comunidade-segura.jpg" alt="" />
                <h1 className="margin-top-60">Comunidade Segura</h1>
                <p className="margin-top-24">Exclusivo para os moradores<br /> de condomínios anunciarem<br /> (doar ou vender) os objetos usados<br /> que querem se desfazer</p>
              </div>
              <div className="card-diferenciais" id='diferencial-2'> 
                <img src="/assets/thumb-condominios.jpg" alt="" />
                <h1 className="margin-top-60">Condomínios</h1>
                <p className="margin-top-24"><b className="semibold">Redução de Descarte Irregular:</b><br />menos objetos deixados em áreas<br /> comuns ou nas caçambas.</p>
                <p className="margin-top-24"><b className="semibold">Valorização do condomínio:</b><br /> iniciativa ESG interna, gerando<br /> percepção de cuidado e eficiência.</p>
              </div>
              <div className="card-diferenciais" id='diferencial-3'>
                <img src="/assets/thumb-impacto-social.jpg" alt="" />
                <h1 className="margin-top-60">Impacto Social</h1>
                <p className="margin-top-24">Valorize funcionários e promova<br /> dignidade dentro do seu<br /> condomínio</p>
              </div>
            </div>
            <img src="/assets/setas-turquesa.svg" alt="" className="setas-diferenciais-1 seta" />
            <img src="/assets/setas-pretas.svg" alt="" className="setas-diferenciais-2 objeto-parallax" />
          </div>
        </section>
        {/* --- FIM DIFERENCIAIS --- */}

        {/* --- PLANOS --- */}
        <section className="planos" id="planos">
          <div id="container-planos">
            <div className="container-tag">
              <SectionTag text="Planos" color="bg-yellow" />
            </div>
            <div className="content-planos">
              <h1 className="margin-top-24">Conheça nossos planos</h1>
              <h2 className="margin-top-8">O DOAqui funciona com um modelo simples e sustentável</h2>
              <p className="margin-top-24">O condomínio paga um valor mensal fixo<br />de acordo com a quantidade de unidades/apartamentos.<br /><br />Os moradores pagam 10% sobre o valor de cada produto vendido<br />(Objetos doados são gratuitos).</p>
            </div>

            <div id="linha-planos">
              <PlanCard price="R$99" description="Até 50<br>unidades / aptos" bgColor="bg-white" />
              <PlanCard price="R$149" description="De 51 a 150<br>unidades / aptos" bgColor="bg-cinza" />
              <PlanCard price="R$199" description="De 151 a 250<br>unidades / aptos" bgColor="bg-yellow" />
              <PlanCard price="R$249" description="De 251 a 350<br>unidades / aptos" bgColor="bg-azul-turquesa" />
              <PlanCard price="R$299" description="Acima de 350<br>unidades / aptos" bgColor="bg-azul-dark" textColor="color-white" />
            </div>

            <div className="area-button">
              <Button>Cadastrar condomínio</Button>
            </div>
            <img src="/assets/setas-pretas.svg" alt="" className="setas-planos-1 seta" />
          </div>
        </section>
        {/* --- FIM PLANOS --- */}

        {/* --- DEPOIMENTOS --- */}
        <section className="depoimentos" id="depoimentos">
          <div id="container-depoimentos">
            <div className="container-tag">
              <SectionTag text="Depoimentos" color="bg-yellow" />
            </div>
            <div className="content-depoimentos">
              <h2 className="margin-top-24">Já doei, já vendi e já comprei. Adorei a plataforma!</h2>
              <p className="margin-top-24">Julia Figueira</p>
            </div>
          </div>
        </section>
        {/* --- FIM DEPOIMENTOS --- */}

        {/* --- FAQ --- */}
        <section className="faq" id="faq">
          <div id="container-faq">
            <div className="container-tag">
              <SectionTag text="Perguntas Frequentes" color="bg-yellow" />
            </div>
            <div className="content-faq">
              <h1 className="margin-top-24">Tire suas dúvidas antes de doar,<br />comprar ou vender</h1>
              <h2 className="margin-top-8">Porque o bem que você faz, volta pra você, mais próximo do que imagina.</h2>
            </div>

            <div id="linha-faq">
              <FaqItem 
                question="1. Qual problema o DOAqui se propõe a resolver?" 
                answer="O DOAqui nasceu para solucionar a dificuldade que moradores de condomínios enfrentam para se desfazer de objetos usados, mas ainda em bom estado. Frequentemente, esses itens acabam ocupando espaço nas unidades ou são descartados de forma inadequada, mesmo tendo valor e utilidade para outras pessoas." 
              />
              <FaqItem 
                question="2. Por que é tão complicado para os moradores se livrarem desses itens atualmente?" 
                answer="As opções existentes costumam ser ineficientes ou arriscadas:
• Dar: É difícil encontrar pessoas conhecidas que queiram o objeto no momento certo, e muitas vezes pode gerar constrangimento.
• Vender: Anunciar em grupos de WhatsApp ou redes sociais pode expor o morador a pessoas mal-intencionadas ou estranhos, além de ser trabalhoso.
• Descartar: Significa inutilizar algo que ainda tem valor, contribuindo para o lixo e o desperdício.
Todas essas alternativas exigem que a transação ocorra nas redondezas para facilitar a retirada do objeto." 
              />
              <FaqItem 
                question="3. O que é exatamente o DOAqui?" 
                answer="O DOAqui é uma plataforma de software exclusiva e segura, desenvolvida para que moradores de condomínios possam anunciar (doar ou vender) os objetos usados dos quais desejam se desfazer. Ele funciona como uma comunidade fechada, onde apenas pessoas autorizadas podem participar." 
              />
              <FaqItem 
                question="4. Quem pode participar e utilizar o DOAqui?" 
                answer="A comunidade do DOAqui é restrita e segura. Podem participar:
• Moradores do condomínio.
• Funcionários do condomínio: como porteiros, faxineiros, vigias e zeladores.
• Funcionários dos moradores: como diaristas e mensalistas.
Essa restrição garante um ambiente de confiança e segurança para as transações." 
              />
              <FaqItem 
                question="5. Preciso baixar um aplicativo para usar o DOAqui?" 
                answer="Não! Uma das grandes vantagens do DOAqui é que não é necessário baixar nenhum aplicativo. Todos os avisos de novos anúncios são enviados via links pelo WhatsApp, e as transações são realizadas diretamente pelo site (web APP). Isso facilita o acesso de todos, eliminando barreiras tecnológicas." 
              />
              <FaqItem 
                question="6. Como funciona o processo para anunciar um item no DOAqui?" 
                answer="É muito simples e direto:
1. Foto do Objeto: O morador tira uma foto do item que deseja anunciar. A plataforma conta com inteligência artificial para auxiliar na descrição do objeto.
2. Definição: Escolhe se quer vender (com preço) ou doar (sem preço).
3. Publicação: Publica o anúncio no DOAqui.
4. Notificação: Os participantes da comunidade recebem um link do novo anúncio via WhatsApp.
5. Interesse: O interessado acessa o link e clica em 'Tenho interesse'.
6. Negociação: O anunciante e o interessado combinam os detalhes pelo chat do DOAqui (entrega para doação, ou pagamento e entrega para venda).
7. Conclusão: O anunciante muda o status do anúncio para 'vendido' ou 'doado'." 
              />
              <FaqItem 
                question="7. Quais são os principais benefícios para os moradores que utilizam o DOAqui?" 
                answer="Moradores desfrutam de diversas vantagens:
• Desapego Rápido e Sem Complicação: Publicam itens e decidem se doam para a equipe do prédio ou vendem para vizinhos.
• Conveniência e Segurança: Tudo acontece dentro do condomínio, eliminando a necessidade de receber estranhos em casa.
• Economia e Oportunidade: Transformam itens parados em ajuda ao próximo (doação) ou ganham dinheiro com vendas.
• Impacto Positivo: Dão um destino útil a itens em bom estado, ajudando pessoas próximas e contribuindo para a redução do lixo.
• Retenção de Funcionários: A valorização da equipe do prédio contribui para a retenção de bons profissionais." 
              />
              <FaqItem 
                question="8. Como o DOAqui beneficia a equipe de funcionários do condomínio?" 
                answer="A equipe do prédio também é muito beneficiada:
• Prioridade nas Doações: Têm acesso antecipado a itens em bom estado que podem melhorar seu dia a dia.
• Relação Comunitária Mais Forte: Possibilidade de receber doações de objetos úteis.
• Renda Extra: Opção de poder vender objetos doados pelos moradores.
• Valorização Humana: Sentem-se mais considerados e têm melhoria na qualidade de moradia ou vida." 
              />
              <FaqItem 
                question="9. Que vantagens o síndico ou os responsáveis pela administração do condomínio obtêm?" 
                answer="Para a gestão do condomínio, o DOAqui oferece:
• Redução de Descarte Irregular: Menos objetos abandonados em áreas comuns ou caçambas, melhorando a organização.
• Organização e Rastreabilidade: Um histórico claro de publicações, retiradas e vendas internas, proporcionando previsibilidade e controle.
• Menos Conflitos: Regras claras (como prioridade de doação e janela de reserva) diminuem ruídos e desentendimentos em grupos de WhatsApp.
• Valorização do Condomínio: A iniciativa é vista como ESG (Environmental, Social, and Governance) interna, gerando uma percepção de cuidado e eficiência.
• Retenção de Funcionários: A valorização das pessoas que trabalham no condomínio contribui para a retenção e atração de novos funcionários." 
              />
              <FaqItem 
                question="10. Como o DOAqui contribui para a comunidade do condomínio e o meio ambiente?" 
                answer="O DOAqui promove um impacto positivo em diversas frentes:
Para a Comunidade do Condomínio:
• Economia Circular Local: Itens circulam entre pessoas do mesmo prédio, fomentando a reutilização.
• Menos Volume de Lixo e Caçamba: Alivia a logística e os custos de coleta de resíduos.
• Cultura de Colaboração: Incentiva a ajuda mútua e reduz o desperdício, fortalecendo os laços comunitários.
Para o Meio Ambiente:
• Reuso em vez de Descarte: Prolonga a vida útil dos objetos, diminuindo a demanda por novos produtos.
• Menos Transporte Externo: Transações internas cortam as emissões de carbono relacionadas ao deslocamento para doações/vendas fora do condomínio.
• Redução de Resíduos Sólidos: Contribui diretamente para a sustentabilidade e a preservação ambiental." 
              />
            </div>
            <img src="/assets/setas-turquesa.svg" alt="" className="setas-faq-1 seta2" />
          </div>
        </section>
        {/* --- FIM FAQ --- */}

        {/* --- FOOTER --- */}
        <section id="section-footer">
          <div id="container-footer">
            <div id="footer-row-1">
              <img src="/assets/logoDoAqui-vertical.svg" alt="" />
              <form action="">
                <div className="form-row">
                  <div className="form-group-1">
                    <label htmlFor="nome">Seu nome</label>
                    <input type="text" id="nome" placeholder="Nome" />
                  </div>
                  <div className="form-group-2">
                    <label htmlFor="email">Seu e-mail</label>
                    <input type="email" id="email" placeholder="nome@email.com" />
                  </div>
                  <div className="area-button">
                    <button className="btn-arrow-icon">
                      <img src="/assets/arrow-right.svg" alt="" />
                      <div className="final-button-icon"><img src="/assets/button-image.svg" alt="" /></div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div id="footer-row-2">
              <h1>Entre em contato </h1>
              <p className="margin-top-16">Av Pereira Barreto, 1479 - Cjs. 1807, Centro, <br />São Bernardo do Campo - SP 09751-000 - Helbor Trilogy <br />contato@doaqui.com.br - (11) 91339-9550</p>
              <div className="footer-icons margin-top-32 margin-bottom-32">
                <a href="https://www.instagram.com/doa.aqui" target='_blank'><img src="/assets/icon-instagram.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/doaqui/" target='_blank'><img src="/assets/icon-linkedin.svg" alt=""  /></a>
                <a href="https://www.facebook.com/profile.php?id=61583096560793" target='_blank'><img src="/assets/icon-facebook.svg" alt="" /></a>
              </div>
            </div>
            <div id="footer-row-3">
              <p>© 2026 DOAqui  •  Todos os direitos reservados.</p>
              <div id="buttons-footer">
                <a href="#"><button>Política de Privacidade</button></a>
                <a href="#"><button>Termos de Uso</button></a>
              </div>
            </div>
          </div>
        </section>
        {/* --- FIM FOOTER --- */}

      </div>
    </div>
  );
}

export default App;