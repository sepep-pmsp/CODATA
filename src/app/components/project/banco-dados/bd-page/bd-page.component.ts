import { Component } from '@angular/core';

@Component({
  selector: 'app-bd-page',
  templateUrl: './bd-page.component.html',
  styleUrl: './bd-page.component.scss'
})
export class BdPageComponent {
[x: string]: any;
 base_dados =[
  {class_name:'base_of_dados', title:'Base de Dados a', desription:'A base desses dados feitos...', link:'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn:'abrir link', svg: 'assets/icons/link_icon.svg'},
  {class_name:'base_of_dados', title:'Base de Dados b', desription:'A base desses dados feitos...', link:'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn:'abrir link', svg: 'assets/icons/link_icon.svg'},
  {class_name:'base_of_dados', title:'Base de Dados c', desription:'A base desses dados feitos...', link:'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn:'abrir link', svg: 'assets/icons/link_icon.svg'},
  {class_name:'base_of_dados', title:'Base de Dados d', desription:'A base desses dados feitos...', link:'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn:'abrir link', svg: 'assets/icons/link_icon.svg'},
  {class_name:'base_of_dados', title:'Base de Dados e', desription:'A base desses dados feitos...', link:'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn:'abrir link', svg: 'assets/icons/link_icon.svg'},
  {class_name:'base_of_dados', title:'Base de Dados f', desription:'A base desses dados feitos...', link:'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn:'abrir link', svg: 'assets/icons/link_icon.svg'},
 ];

 content_list=[
  {txt:'campo', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',},
  {txt:'autor', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',},
  {txt:'versão', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',},
  {txt:'última atualização', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',},
  {txt:'data de criação', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',}
 ];

 content_field_font = [
  {text:'fonte', class_name_field:'content_font', img:'assets/logos/logo-prefeitura.svg'},
  {text:'licença', class_name_field:'content_license', img:'assets/logos/Creative-Commons-Logo.png'}
 ]

  options = [
    'identificação',
    'distribuição',
    'qualidade',
    'ref.system',
    'metadata'
  ];

  selectedOption: string = this.options[0];
  activeAnimation: { [key: string]: string } = {};
  boxAnimationClass: string = '';

  contentMapping: { [key: string]: string | string[] } = {
    identificação: 'ID: 4L3X-77Z Codinome: Operador Tactica-Delta, Imperio',
    distribuição: 'Fabricante: Galactic Engineering Consortium (GEC) Modelo: DROID-7 Combatant Series Ano de Fabricação: 2 ABY (Após a Batalha de Yavin) Série: D9-TCD Localização Inicial: Sector Corellian (Plataforma C-56-31X)',
    qualidade: 'Nível de Durabilidade: Alto (99.87% resistência a impactos e danos térmicos) Capacidade de Ação: 98% de eficiência em combate corpo a corpo e de longo alcance Sistema de Camuflagem: Camuflagem ativa, visibilidade reduzida em 75% durante manobras furtivas Fornecimento de Energia: Alimentado por cristal kyber modificado com 500 MW de potência por ciclo',
    'ref.system': 'Core Processor: Vortex-12 Quantum Core Controle de Comunicação: HoloCom v9.5 Sistema de Navegação: D-SUB Advanced Tactical Nav Capacidade de Comunicação: Frequência 445-675 GHz Análise de Combate: IA de Aprendizado Autônomo (AFS-AI 5.0)',
    metadata: 'Fabricante de Componentes: Galactic Defense Innovations (GDI) Protocolo de Combate: L.R.S.-Tactical V2.1 Status Atual: Operacional, última atualização de firmware: 6 horas atrás Armas Disponíveis: Blaster HZ-54 Heavy Sabre de luz de combate, blade-type Drones de suporte T-6'
  };

  processedContent: string | string[] = this.contentMapping[this.selectedOption];
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  selectOption(option: string, direction: 'left' | 'right'): void {
    if (option === this.selectedOption) return;
    this.activeAnimation = { [option]: direction === 'left' ? 'slide-left' : 'slide-right' };
    setTimeout(() => {
      this.selectedOption = option;
      this.processedContent = this.contentMapping[option]; 
      this.boxAnimationClass = 'flip-vertical-left';
      this.activeAnimation = {};
    }, 500);

    setTimeout(() => {
      this.boxAnimationClass = '';
    }, 1000);
  }

}
