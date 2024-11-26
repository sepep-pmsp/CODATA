import { Component } from '@angular/core';

@Component({
  selector: 'app-bd-page',
  templateUrl: './bd-page.component.html',
  styleUrls: ['./bd-page.component.scss'],
})
export class BdPageComponent {
  content_paragraph= [
    {txt_1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima doloribus quia nostrum explicabo, itaque aliquid culpa non, corrupti atque unde fugit hic. Quia delectus laudantium ipsa, assumenda hic possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam, blanditiis fugit ad delectus, saepe et rem ullam aspernatur id sequi rerum optio aliquid eveniet. Cum voluptas dolorem dolore expedita! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus vero reprehenderit delectus tempore ratione, ut officiis culpa voluptates. Autem architecto neque libero magnam labore, alias iure id. Dolores, ab. '},
    {txt_2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima doloribus quia nostrum explicabo, itaque aliquid culpa non, corrupti atque unde fugit hic. Quia delectus laudantium ipsa, assumenda hic possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam, blanditiis fugit ad delectus, saepe et rem ullam aspernatur id sequi rerum optio aliquid eveniet. Cum voluptas dolorem dolore expedita! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus vero reprehenderit delectus tempore ratione, ut officiis culpa voluptates. Autem architecto neque libero magnam labore, alias iure id. Dolores, ab. '},
    {txt_3:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima doloribus quia nostrum explicabo, itaque aliquid culpa non, corrupti atque unde fugit hic. Quia delectus laudantium ipsa, assumenda hic possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam, blanditiis fugit ad delectus, saepe et rem ullam aspernatur id sequi rerum optio aliquid eveniet. Cum voluptas dolorem dolore expedita! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus vero reprehenderit delectus tempore ratione, ut officiis culpa voluptates. Autem architecto neque libero magnam labore, alias iure id. Dolores, ab. '}
  ];

  base_dados = [
    { class_name: 'base_of_dados', title: 'Base de Dados a', description: 'A base desses dados feitos...', link: 'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn: 'abrir link', svg: 'assets/icons/link_icon.svg' },
    { class_name: 'base_of_dados', title: 'Base de Dados b', description: 'A base desses dados feitos...', link: 'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn: 'abrir link', svg: 'assets/icons/link_icon.svg' },
    { class_name: 'base_of_dados', title: 'Base de Dados c', description: 'A base desses dados feitos...', link: 'https://i.pinimg.com/474x/aa/2c/c6/aa2cc6a8122234a7e04b120f6151ea6e.jpg', name_btn: 'abrir link', svg: 'assets/icons/link_icon.svg' },
  ];

  content_list = [
    { txt: 'campo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { txt: 'autor', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  content_field_font = [
    { text: 'fonte', class_name_field: 'content_font', img: 'assets/logos/logo-prefeitura.svg' },
    { text: 'licença', class_name_field: 'content_license', img: 'assets/logos/Creative-Commons-Logo.png' },
  ];

  options = [
    'identificação',
    'distribuição',
    'qualidade',
    'ref.system',
    'metadata',
  ];

  selectedOption: string = this.options[0];
  activeAnimation: { [key: string]: string } = {};
  boxAnimationClass: string = '';

  contentMapping: {
    [key: string]: { type: 'text' | 'list' | 'mixed'; data: string | string[] | { text: string; list: string[] } };
  } = {
    identificação: { type: 'text', data: 'Conteúdo detalhado sobre identificação.\nMais detalhes aqui.' },
    distribuição: { type: 'list', data: ['Regiões\n- Norte\n- Sul', 'Cidades', 'População'] },
    qualidade: { type: 'mixed', data: { text: 'Informações detalhadas sobre qualidade.\nDetalhes técnicos.', list: ['Critério 1', 'Critério 2', 'Critério 3'] } },
    'ref.system': { type: 'text', data: 'Detalhes do sistema de referência.' },
    metadata: { type: 'text', data: 'Metadata' },
  };

  isString(content: any): content is string {
    return typeof content === 'string';
  }
  
  isArray(content: any): content is string[] {
    return Array.isArray(content);
  }
  
  isMixedContent(content: any): content is { text: string; list: string[] } {
    return content && typeof content.text === 'string' && Array.isArray(content.list);
  }

  get processedContent(): string | string[] | { text: string; list: string[] } {
    const content = this.contentMapping[this.selectedOption].data;
    if (typeof content === 'string') {
      return this.formatContent(content);
    }
    return content;
  }

  formatContent(content: string): string {
    return content.replace(/\n/g, '<br>');
  }

  selectOption(option: string, direction: 'left' | 'right'): void {
    if (option === this.selectedOption) return;
    this.activeAnimation = { [option]: direction === 'left' ? 'slide-left' : 'slide-right' };
    setTimeout(() => {
      this.selectedOption = option;
      this.boxAnimationClass = 'flip-vertical-left';
      this.activeAnimation = {};
    }, 500);

    setTimeout(() => {
      this.boxAnimationClass = '';
    }, 1000);
  }
}