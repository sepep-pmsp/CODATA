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
      data: '2024',
      description:'A Agenda 2030 é uma agenda programática de desenvolvimento pactuada, em 2015, pelos 193 países membros da Organização das Nações Unidas (ONU), dentre eles o Brasil. <br><br> A Agenda define 17 Objetivos do Desenvolvimento Sustentável e 169 metas para promoção do desenvolvimento sustentável para o planeta, as pessoas, com paz e prosperidade. <br><br>É uma bússola para que todos os países, governos, empresas, organizações públicas e privadas trabalhem em parceria para garantir melhores condições de vida e proteger o futuro do planeta.O Município de São Paulo aderiu voluntariamente ao compromisso em 2 de fevereiro de 2018, por meio da Lei Municipal nº 16.817, de iniciativa do Legislativo, que adotou a Agenda 2030 como diretriz das políticas públicas em âmbito municipal.<br><br> Tal compromisso foi reforçado com a assinatura de Memorando de Entendimento juntamente à ONU, em novembro de 2018. <br><br> Dentre demais providências, a Lei Municipal prevê a instalação da Comissão Municipal para o Desenvolvimento Sustentável (Comissão Municipal ODS), instância colegiada paritária de natureza consultiva e deliberativa, de composição intersecretarial, para a efetivação do Programa Municipal de Implementação da Agenda 2030 para o Desenvolvimento Sustentável da Organização das Nações Unidas. <br><br> Esta publicação, intitulada Agenda Municipal 2030, reúne o conjunto de objetivos, metas e indicadores para o Município de São Paulo propostos pela Comissão Municipal ODS. ',
      linkProj:'https://github.com/sepep-pmsp/observatorio-ods',
      linkPage:'',
      imgURL:'assets/images/ods.png'
    },
    {
      id:2,
      img:'assets/images/hydra.png',
      nome: 'Hydra',
      subtitle: 'Projeto de estruturação de datalake e orquestração de dados de saneamento e hidrografia do município de São Paulo',
      data: '2024',
      description:'Este projeto visa criar um ambiente robusto para coleta, conformação, armazenamento e processamento de dados sobre saneamento e hidrografia do município de São Paulo, permitindo análises geoespaciais avançadas.<br><br> Este projeto utiliza uma combinação de ferramentas, incluindo Dagster, MinIO, Postgres e PostGIS, para coletar, processar e armazenar informações hidrográficas em uma arquitetura Docker Compose',
      linkProj:'https://github.com/sepep-pmsp/hydra',
      linkPage:'',
      imgURL:'assets/images/hydra.png'
    },
    {
      id:3,
      img:'assets/images/planos_municipais.png',
      nome: 'Planos Municipais',
      subtitle: 'O Planos Municipais é um site de comunicação integrada dos planos municipais da Cidade de São Paulo. Ele é o resultado de um esforço conjunto e colaborativo entre Secretaria de Governo Municipal e Secretaria da Fazenda.',
      data: '2024',
      description:'O Planos Municipais é um site de comunicação integrada dos planos municipais da Cidade de São Paulo. Ele é o resultado de um esforço conjunto e colaborativo entre Secretaria de Governo Municipal e Secretaria da Fazenda. A sua criação foi idealizada e transformada em compromisso no 3° Plano de Ação em Governo Aberto (2021-2024).<br><br> O processo de geração do Site partiu de um levantamento minucioso dos planos do Município. Aqueles então encontrados foram organizados segundo categorias, como encerrados e vigentes, além de classificados através de determinadas referências, como anos de publicação e encerramento, áreas temáticas e Objetivos de Desenvolvimento Sustentável. O propósito é facilitar a identificação e pesquisa dos planos conforme critérios selecionados.<br><br> O produto do Site foi concebido através de inúmeros encontros virtuais e presenciais entre a Secretaria Executiva de Entregas Prioritárias (SEPEP/SGM) e a Subsecretaria de Planejamento e Orçamento Municipal (SUPOM/SF), no âmbito do Grupo de Trabalho de Governo Aberto. Além disso, contou com contribuições de representantes de outras secretarias e da Sociedade Civil.',
      linkProj:'https://github.com/sepep-pmsp/planos_setorias',
      linkPage:'https://planosmunicipais.prefeitura.sp.gov.br/',
      imgURL:'assets/images/planos_municipais.png'
    },
    {
      id:4,
      img:'assets/images/site_smae.png',
      nome: 'Site SMAE',
      subtitle: 'Projeto de site para contextualização do SMAE, adicionando conteúdos educativos sobre a plataforma.',
      data: '2024',
      description:'O Sistema de Monitoramento e Acompanhamento Estratégico é um software livre e de código aberto que foi desenvolvido com o objetivo de promover melhores práticas na gestão da informação e garantir a consistência na coleta de dados relativos ao Programa de Metas e aos Projetos Prioritários da administração pública municipal. Atualmente, seu escopo diz respeito aos ciclos internos de monitoramento do Programa de Metas e de acompanhamento dos Projetos Prioritários.<br><br> A implementação do SMAE permite substituir e automatizar rotinas anteriormente realizadas de forma manual por meio de softwares proprietários de planilhas e envio de e-mails, que eram morosas e altamente propensas a erros humanos.',
      linkProj:'https://github.com/sepep-pmsp/site_smae',
      linkPage:'https://smae.prefeitura.sp.gov.br/',
      imgURL:''
    },
    {
      id:7,
      img:'assets/images/observasampa.png',
      nome: 'ObservaSampa',
      subtitle: 'O Observatório de Indicadores da Cidade de São Paulo (ObservaSampa) é uma política pública de Estado que tem por objetivo apresentar dados, indicadores e evidências sobre a cidade de São Paulo e suas políticas públicas, por meio de estudos, publicações, dados abertos, representações visuais e outros meios.',
      data: '2023',
      description:'O Observatório de Indicadores da Cidade de São Paulo (ObservaSampa) é uma política pública de Estado que tem por objetivo apresentar dados, indicadores e evidências sobre a cidade de São Paulo e suas políticas públicas, por meio de estudos, publicações, dados abertos, representações visuais e outros meios.<br><br>O ObservaSampa é gerido pela Coordenadoria de Avaliação e Gestão da Informação (CAGI) da Secretaria Executiva de Planejamento e Entregas Prioritárias (SEPEP), que atua na articulação, promoção e disseminação de informações (dados, indicadores, diagnósticos e avaliações) sobre a realidade da cidade, seus cidadãos e suas políticas públicas, fomentando a cultura de políticas públicas baseadas em evidências na Prefeitura de São Paulo.<br><br>A Plataforma do ObservaSampa surgiu em 2014, no âmbito da Secretaria Municipal de Planejamento, Orçamento e Gestão (SEMPLA), e depois o Observatório ficou a cargo da então a Secretaria de Gestão (SMG). Desde sua origem, passou pelas Secretarias de Desenvolvimento Urbano (SMDU) e de Urbanismo e Licenciamento (SMUL). A partir de 2022, foi o ObservaSampa teve o site e sua regulamentação reformulados pela Secretaria Executiva de Planejamento e Entregas Prioritárias (SEPEP) da Secretaria do Governo Municipal (SGM), de acordo com os Decretos nº 61.036, de 7 de fevereiro de 2022, e nº 61.970, de 16 de novembro de 2022.<br><br>O Observatório de Indicadores da Cidade de São Paulo tem recebido a colaboração da academia, da sociedade civil e dos órgãos e secretarias da administração municipal desde sua concepção. O conteúdo desta plataforma é composto a partir de dados produzidos pelas diversas secretarias, empresas e autarquias municipais, bem como por dados obtidos na esfera estadual e nacional.<br><br>A recente reformulação da plataforma também contou com diversas parcerias. A Secretaria Municipal de Inovação e Tecnologia (SMIT) colaborou na melhoria da interface gráfica da plataforma, a partir do design e da API desenvolvidos na própria SEPEP, com o uso de softwares livres. O banco de dados do sistema é gerenciado por SEPEP por meio do módulo de administrador do ObservaSampa, desenvolvido e mantido pela PRODAM. Os painéis interativos foram criados pelos técnicos da Coordenadoria de Avaliação e Gestão da Informação, e contaram com a parceria da Microsoft, que forneceu o treinamento técnico, possibilitando que a equipe tenha autonomia no desenvolvimento e manutenção dos mesmos.<br><br>Além disso, a atuação deste Observatório está ligada, conforme prevê o Decreto nº 61.970/2022, ao processo de proposição, qualificação e apresentação de dados e indicadores na Cidade de São Paulo, discutido no Grupo Técnico Intersecretarial de Indicadores da Cidade de São Paulo (GTI-Indicadores) e observando as determinações da Lei Municipal nº 14.173/06. Dessa forma, o ObservaSampa atua em consonância às inciativas de inovação, transparência, governo aberto e fortalecimento da integridade pública, construindo parcerias com diversos órgãos e Secretarias Municipais, com a academia e a sociedade civil e com instituições públicas estaduais, nacionais e supranacionais. Por meio dessa interlocução, o ObservaSampa objetiva gerar capacidades estatais e fomentar a cultura de políticas públicas baseadas em evidências na Prefeitura Municipal de São Paulo.',
      linkProj:'https://github.com/sepep-pmsp/api_observasampa',
      linkPage:'https://observasampa.prefeitura.sp.gov.br/',
      imgURL:'assets/images/observasampa.png'
    },
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
