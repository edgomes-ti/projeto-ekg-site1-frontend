import React, { useState } from 'react';

// Dados dos cursos divididos por grupos
const courses = {
  grupoBase: [
    {
      name: 'Agente Comunitário',
      modalidade: 'Tecnólogo',
      duracao: 2,
      mensalidades: 24,
      adesao: 'R$ 130,00',
      valorMensal: 'R$ 64,13',
      aulaPratica: 'NÃO',
      estagio: 'SIM',
      tcc: 'NÃO',
      reajuste: false
    },
    // Adicione os outros cursos do Grupo Base
  ],
  grupoI: [
    {
      name: 'Artes',
      modalidade: 'Licenciatura',
      duracao: 3.5,
      mensalidades: 48,
      adesao: 'R$ 135,22',
      valorMensal: 'R$ 85,22',
      aulaPratica: 'NÃO',
      estagio: 'SIM',
      tcc: 'SIM',
      reajuste: false
    },
    // Adicione os outros cursos do Grupo I
  ],
  grupoII: [
    {
      name: 'Administração',
      modalidade: 'Bacharelado',
      duracao: 3,
      mensalidades: 48,
      adesao: 'R$ 144,05',
      valorMensal: 'R$ 94,05',
      aulaPratica: 'NÃO',
      estagio: 'NÃO',
      tcc: 'NÃO',
      reajuste: true
    },
    // Adicione os outros cursos do Grupo II
  ],
  grupoIII: [
    {
      name: 'Estética e Cosmética',
      modalidade: 'Tecnólogo',
      duracao: 2,
      mensalidades: 30,
      adesao: 'R$ 192,22',
      valorMensal: 'R$ 142,22',
      aulaPratica: 'NÃO',
      estagio: 'SIM',
      tcc: 'NÃO',
      reajuste: true
    },
    // Adicione os outros cursos do Grupo III
  ],
  grupoIV: [
    {
      name: 'Arquitetura e Urbanismo',
      modalidade: 'Bacharelado',
      duracao: 4,
      mensalidades: 60,
      adesao: 'R$ 227,72',
      valorMensal: 'R$ 227,72',
      aulaPratica: 'NÃO',
      estagio: 'SIM',
      tcc: 'SIM',
      reajuste: true
    },
    // Adicione os outros cursos do Grupo IV
  ],
  grupoV: [
    {
      name: 'Biomedicina',
      modalidade: 'Bacharelado',
      duracao: 3.5,
      mensalidades: 48,
      adesao: 'R$ 244,82',
      valorMensal: 'R$ 244,82',
      aulaPratica: 'SIM',
      estagio: 'SIM',
      tcc: 'SIM',
      reajuste: true
    },
    // Adicione os outros cursos do Grupo V
  ],
};

// Função para calcular preços ajustados com reajuste anual de 10%
const calculateAdjustedPrice = (initialPrice, years, rate) => {
  let prices = [];
  for (let i = 0; i < years; i++) {
    initialPrice = initialPrice * (1 + rate);
    prices.push(initialPrice.toFixed(2));
  }
  return prices;
};

const UnifatecieCourses = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Função para enviar mensagem pelo WhatsApp
  const handleWhatsAppClick = (course) => {
    const message = `Olá, meu nome é ${fullName}, moro em ${selectedCity}/${selectedState}. Tenho interesse no curso de ${course.name} na Unifatécie. Aqui estão meus dados:\n\nNome: ${fullName}\nCidade: ${selectedCity}\nEstado: ${selectedState}\nCurso: ${course.name}\nEmail: ${email}\nTelefone: ${phone}`;
    const url = `https://wa.me/5531997839600?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2>Cursos Disponíveis na Unifatécie</h2>
      <div>
        <label>
          Cidade:
          <input type="text" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} />
        </label>
        <label>
          Estado:
          <input type="text" value={selectedState} onChange={(e) => setSelectedState(e.target.value)} />
        </label>
        <label>
          Nome Completo:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
      </div>
      {Object.keys(courses).map((group, index) => (
        <div key={index}>
          <h3>{group}</h3>
          {courses[group].map((course, index) => (
            <div key={index}>
              <h4>{course.name}</h4>
              <p>Modalidade: {course.modalidade}</p>
              <p>Duração: {course.duracao} anos</p>
              <p>Mensalidades: {course.mensalidades}</p>
              <p>Adesão: {course.adesao}</p>
              <p>Valor Mensal: {course.valorMensal}</p>
              <p>Aula Prática: {course.aulaPratica}</p>
              <p>Estágio: {course.estagio}</p>
              <p>TCC: {course.tcc}</p>
              {course.reajuste && (
                <div>
                  <h5>Simulação de Preços com Reajuste Anual de 10%</h5>
                  {calculateAdjustedPrice(parseFloat(course.valorMensal.replace('R$ ', '').replace(',', '.')), course.duracao, 0.10).map((price, index) => (
                    <p key={index}>Ano {index + 1}: R$ {price}</p>
                  ))}
                </div>
              )}
              <button onClick={() => handleWhatsAppClick(course)}>Enviar mensagem</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UnifatecieCourses;
