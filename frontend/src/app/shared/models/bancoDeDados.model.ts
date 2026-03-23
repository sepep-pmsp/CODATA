export interface BancoDeDados {
    optionsConfig: any;
    id: string;
    url: string;
    title: string;
    text: string;
    img?: string;
    description: string;
    status?: string;
    listLink?: { title: string, link: string | string[] }[];
    font: string;
    license: string;
    field: string;
    author: string;
    version: string;
    lastupdate: string;
    creationdate: string;
    identification: string;
    distribution: string;
    quality: string;
    refsystem: string;
    metadata: string;
    svg?: string;
}