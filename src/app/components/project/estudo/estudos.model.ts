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
    slides?: { image: string; caption: string }[];
}