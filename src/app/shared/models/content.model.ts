export interface Content {
    class_name: string;
    icon: string;
    txt_name: string;
    title: string;
    description?: string;
    image?: string;
    link?: string;
    items?: any[];
    bigContents: {
        buttonNews: string;
        buttonProjects: string;
        title: string;
        date: string;
    }[];

    smallContents: {
        buttonLabel: string;
        title: string;
        date: string;
    }[];
    imgSrc: string;
    altText: string;
    img: string;
    complete_name: string;
    position: string;
    description_position: string;
}