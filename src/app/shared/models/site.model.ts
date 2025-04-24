export interface Site{
    id: string;
    url: string;
    title: string;
    subtitle: string;
    description: string;
    text: string;
    status: string;
    svg?: string;
    linkPage?: string;
    listContents?: { title: string, content: string | string[] }[];
    sections?: { title: string, paragraph: string }[];
    additionalImages?: string[];
    additionalLinks?: { label: string, url: string }[];
}