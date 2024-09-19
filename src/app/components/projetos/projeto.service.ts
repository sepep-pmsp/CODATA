import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projeto } from './projeto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private projetos = [
    {
      id:1,
      img:'assets/images/ods.png',
      nome: 'Agenda 2030',
      subtitle: 'Projeto ODS Objetivos de Desenvolvimento Sustentável monitorados pelo município de São Paulo ',
      data: '2024'
    },
    {
      id:2,
      img:'assets/images/hydra.png',
      nome: 'Hydra',
      subtitle: 'Projeto de estruturação de datalake e orquestração de dados de saneamento e hidrografia do município de São Paulo',
      data: '2024'
    },
    {
      id:3,
      img:'assets/images/planos_municipais.png',
      nome: 'Planos Setoriais',
      subtitle: 'O Planos Municipais é um site de comunicação integrada dos planos municipais da Cidade de São Paulo. Ele é o resultado de um esforço conjunto e colaborativo entre Secretaria de Governo Municipal e Secretaria da Fazenda. A sua criação foi idealizada e transformada em compromisso no 3° Plano de Ação em Governo Aberto ',
      data: '2024'
    },
    {
      id:4,
      img:'assets/images/site_smae.png',
      nome: 'Site SMAE',
      subtitle: 'Projeto de site para contextualização do SMAE, adicionando conteúdos educativos sobre a plataforma.',
      data: '2024'
    },
    {
      id:5,
      img:'assets/images/smae.png',
      nome: 'SMAE',
      subtitle: 'Sistema de Monitoramento e Gestão Estratégica. Sistema Open Source desenvolvido pela FGV para a Secretaria de Governo da Prefeitura de São Paulo.',
      data: '2024'
    },
    {
      id:6,
      img:'https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg',
      nome: 'Automações para o processo de Acompanhamento Orçamentário do Programa de Metas',
      subtitle: 'Automações de rotinas e análises de dados para auxiliar o acompanhamento orçamentário da equipe da Coordenadorai de Planejamento da Secretaria Executiva de Planejamento e Entregas Prioritárias da Prefeitura de São Paulo.',
      data: '2023'
    },
    {
      id:7,
      img:'assets/images/observasampa.png',
      nome: 'ObservaSampa',
      subtitle: 'O Observatório de Indicadores da Cidade de São Paulo (ObservaSampa) é uma política pública de Estado que tem por objetivo apresentar dados, indicadores e evidências sobre a cidade de São Paulo e suas políticas públicas, por meio de estudos, publicações, dados abertos, representações visuais e outros meios.O ObservaSampa é gerido pela Coordenadoria de Avaliação e Gestão da Informação (CAGI) da Secretaria Executiva de Planejamento e Entregas Prioritárias (SEPEP), que atua na articulação, promoção e disseminação de informações (dados, indicadores, diagnósticos e avaliações) sobre a realidade da cidade, seus cidadãos e suas políticas públicas, fomentando a cultura de políticas públicas baseadas em evidências na Prefeitura de São Paulo.',
      data: '2023'
    },
    {
      id:8,
      img:'https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg',
      nome: 'Data Lake do ObservaSampa',
      subtitle: 'Repositório desenvolvido pelo time da Coordenadoria de Avaliação e Gestão da Informação da Secretaria Executiva de Planejamento e Entregas Prioritárias',
      data: '2023'
    },
    {
      id:9,
      img:'https://cdn.awsli.com.br/2500x2500/2298/2298079/produto/153815267/adesivo-brasao-prefeitura-de-sao-paulo-md-998-1-hlbpsh.jpg',
      nome: 'SAADE',
      subtitle: 'O SAADE tem como objetivo reunir dados de sistemas de diferentes secretarias da Prefeitura em uma única base. Para alcançar esse objetivo, ele utiliza técnicas e fontes de dados variadas, como crawlers, APIs e acesso a bancos de dados, entre outras.',
      data: '2023'
    }
  ]
  constructor(private http: HttpClient) { }

  getProjetos(): Observable<Projeto[]> {
    return of(this.projetos);
  }

  buscarPorId(id: number): Observable<Projeto | undefined> {
    const projeto = this.projetos.find(proj => proj.id === id);
    return of(projeto);
  }
}
