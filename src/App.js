import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Institution from './components/Institution';
import UnifatecieCourses from './components/UnifatecieCourses'; // Adicione esta linha
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <Header />
      <nav>
        <a href="#anhanguera">Anhanguera</a>
        <a href="#unopar">Unopar</a>
        <a href="#pitagoras">Pitágoras</a>
        <a href="#estacio">Estácio</a>
        <a href="#unifatecie">Unifatecie</a>
        <a href="#uninta">Uninta</a>
        <a href="#pucrs">PUC-RS</a>
        <a href="#uninter">Uninter</a>
        <a href="#descomplica">Faculdade Descomplica</a>
        <a href="#pravaler">Pravaler</a>
        <a href="#cruzeirodosul">Cruzeiro do Sul</a>
      </nav>
      <main>
        <h2>{message}</h2>
        <Institution id="anhanguera" name="Anhanguera" color="#ff9900" link="https://web.consultoriaeducacao.app.br/candidate/64fb33ac8b22950008df84d6?type=UNDERGRADUATE&brand=ANHANGUERA&subBrand=ANHANGUERA" description="Cursos da Anhanguera" />
        <Institution id="unopar" name="Unopar" color="#ff0000" link="https://web.consultoriaeducacao.app.br/candidate/64fb33ac8b22950008df84d6?type=UNDERGRADUATE&brand=UNOPAR&subBrand=ANHANGUERA" description="Cursos da Unopar" />
        <Institution id="pitagoras" name="Pitágoras" color="#0066cc" link="https://web.consultoriaeducacao.app.br/candidate/64fb33ac8b22950008df84d6?type=UNDERGRADUATE&brand=PITAGORAS&subBrand=ANHANGUERA" description="Cursos do Pitágoras" />
        <Institution id="estacio" name="Estácio" color="#007bff" link="https://estacio.br/inscricao/formulario?cod_agente=14369444&u=287985&end=1" description="Cursos da Estácio" />
        <Institution id="unifatecie" name="Unifatecie" color="#00cc66" link="https://wa.me/message/CXS35PL6ULSUE1" description="Entre em contato pelo WhatsApp para mais informações" />
        <UnifatecieCourses />
        <Institution id="uninta" name="Uninta" color="#cc33ff" link="https://uninta.online/digital?codae=KSD584#inscreva-se" description="Cursos da Uninta" />
        <Institution id="pucrs" name="PUC-RS" color="#336699" link="https://wa.me/message/CXS35PL6ULSUE1" description="Entre em contato pelo WhatsApp para mais informações" />
        <Institution id="uninter" name="Uninter" color="#ff6600" link="https://www.uninter.com/parceiro/?hash=70DgPqJpvjeEXJznyJXfu44e744BN1zP8mPzGdskfAPVRcmlcDn8YsxcfRbl17W0EpcUpmrhwFI" description="Cursos da Uninter" />
        <Institution id="descomplica" name="Faculdade Descomplica" color="#ffcc00" link="https://wa.me/message/CXS35PL6ULSUE1" description="Entre em contato pelo WhatsApp para mais informações" />
        <Institution id="pravaler" name="Pravaler" color="#003366" link="https://afiliado.saberemrede.net/checkout-pravaler/313855?sponsor=332420&e=1" description="Simulação de financiamento do Pravaler" />
        <Institution id="cruzeirodosul" name="Cruzeiro do Sul (Online)" color="#0066cc" link="https://wa.me/message/CXS35PL6ULSUE1" description="Entre em contato pelo WhatsApp para mais informações" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
