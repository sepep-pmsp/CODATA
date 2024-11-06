export interface Sistemas {
    id: string;
    url: string;
    title: string;
    description: string;
    svg?: string;
    status?: string;
    linkPage?: string;
    listContents?: { title: string, content: string | string[] }[];
    sections?: { title: string, paragraph: string }[];
    additionalImages?: string[];
    additionalLinks?: { label: string, url: string }[];
}

export interface Estudos {
    id: string;
    url: string;
    title: string;
    description: string;
    svg?: string;
    status?: string;
    linkPage?: string;
    researchField?: string; 
    publicationDate?: string;
    additionalImages?: string[];
    listContents?: { title: string, content: string | string[] }[];
    sections?: { title: string, paragraph: string }[];
    quote?: string;
}

export interface Dashboard  {
    id: string;
    url: string;
    title: string;
    caption: string ;
    text: string;
    status?: string;
    linkPage?: string;
    linkGitGub?: string;
    dashboard?: string; 
}

export interface BancoDeDados {
    id: string;
    url: string;
    title: string;
    text: string;
    img?: string;
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
}
