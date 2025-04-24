export interface Api{
    id: string;
    url: string;
    titulo: string;
    github?: string;
    description: string;
    texto: string;
    texto2: string;
    img?: string;
    svg?: string;
    listContents?: { title: string, content: string | string[] }[];
    urlProducts?:{ url: string, title: string | string}[];
    functions?:{id:number, metodo: string, endpoint: string, definicao: string, parametros: string, parametros_entrada: string, entrada: string, parametros_saida: string, saida: string | string}[];
}