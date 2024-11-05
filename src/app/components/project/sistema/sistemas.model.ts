export interface Sistemas {
    id: string,
    url: string,
    title: string,
    description: string,
    svg?: string,
    status?: string,
    linkPage?: string,
    listContents?: { title: string, content: string | string[] }[];
    sections?: { title: string, paragraph: string }[];
    additionalImages?: string[];
    additionalLinks?: { label: string, url: string }[];
}
