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
    subtitle: string;
    text: string;
    description: string;
    dates?: number | string;
    svg?: string;
    status?: string;
    linkPage?: string;
    researchField?: string; 
    publicationDate?: string;
    additionalImages?: string[];
    image?: { image_1: string, image_2: string, image_3: string | string[] }[];
    image_desription?: string;
    listContents?: { title: string, content: string | string[] }[];
    sections?: { title: string, paragraph: string }[];
    quote?: string;
    minitext?: { minitext_00: string }[];
}

export interface Dashboard  {
    id: string;
    url: string;
    title: string;
    subtitle: string;
    description: string;
    caption: string ;
    text: string;
    status?: string;
    img?: string;
    linkPage?: string;
    linkGitHub?: string;
    dashboard?: string; 
    svg?: string;
}

export interface BancoDeDados {
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
