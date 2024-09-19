import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projetos = [
    {
      ID:1,
      img:'assets/images/ods.png',
      nome: 'Agenda 2030',
      descricao: 'Projeto ODS Objetivos de Desenvolvimento Sustentável monitorados pelo município de São Paulo ',
      data: '2024'
    },
    {
      ID:2,
      img:'assets/images/hydra.png',
      nome: 'Hydra',
      descricao: 'Projeto de estruturação de datalake e orquestração de dados de saneamento e hidrografia do município de São Paulo',
      data: '2024'
    },
    {
      ID:3,
      img:'assets/images/planos_municipais.png',
      nome: 'Planos Setoriais',
      descricao: 'O Planos Municipais é um site de comunicação integrada dos planos municipais da Cidade de São Paulo. Ele é o resultado de um esforço conjunto e colaborativo entre Secretaria de Governo Municipal e Secretaria da Fazenda. A sua criação foi idealizada e transformada em compromisso no 3° Plano de Ação em Governo Aberto ',
      data: '2024'
    },
    {
      ID:4,
      img:'assets/images/site_smae.png',
      nome: 'Site SMAE',
      descricao: 'Projeto de site para contextualização do SMAE, adicionando conteúdos educativos sobre a plataforma.',
      data: '2024'
    },
    {
      ID:5,
      img:'assets/images/smae.png',
      nome: 'SMAE',
      descricao: 'Sistema de Monitoramento e Gestão Estratégica. Sistema Open Source desenvolvido pela FGV para a Secretaria de Governo da Prefeitura de São Paulo.',
      data: '2024'
    },
    {
      ID:6,
      img:'https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg',
      nome: 'Automações para o processo de Acompanhamento Orçamentário do Programa de Metas',
      descricao: 'Automações de rotinas e análises de dados para auxiliar o acompanhamento orçamentário da equipe da Coordenadorai de Planejamento da Secretaria Executiva de Planejamento e Entregas Prioritárias da Prefeitura de São Paulo.',
      data: '2023'
    },
    {
      ID:7,
      img:'assets/images/observasampa.png',
      nome: 'ObservaSampa',
      descricao: 'O Observatório de Indicadores da Cidade de São Paulo (ObservaSampa) é uma política pública de Estado que tem por objetivo apresentar dados, indicadores e evidências sobre a cidade de São Paulo e suas políticas públicas, por meio de estudos, publicações, dados abertos, representações visuais e outros meios.O ObservaSampa é gerido pela Coordenadoria de Avaliação e Gestão da Informação (CAGI) da Secretaria Executiva de Planejamento e Entregas Prioritárias (SEPEP), que atua na articulação, promoção e disseminação de informações (dados, indicadores, diagnósticos e avaliações) sobre a realidade da cidade, seus cidadãos e suas políticas públicas, fomentando a cultura de políticas públicas baseadas em evidências na Prefeitura de São Paulo.',
      data: '2023'
    },
    {
      ID:7,
      img:'https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg',
      nome: 'Data Lake do ObservaSampa',
      descricao: 'Repositório desenvolvido pelo time da Coordenadoria de Avaliação e Gestão da Informação da Secretaria Executiva de Planejamento e Entregas Prioritárias',
      data: '2023'
    },
    {
      ID:8,
      img:'https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg',
      nome: 'SAADE',
      descricao: 'O SAADE tem como objetivo reunir dados de sistemas de diferentes secretarias da Prefeitura em uma única base. Para alcançar esse objetivo, ele utiliza técnicas e fontes de dados variadas, como crawlers, APIs e acesso a bancos de dados, entre outras.',
      data: '2023'
    }
  ]

  currentSlide = 0;
  maxSlide = Math.ceil(this.projetos.length / 4) - 1;

  nextSlide() {
    if (this.currentSlide < this.maxSlide) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

}
