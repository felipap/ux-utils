/// <reference types="react" />
interface Props {
    message: string;
    authorName: string;
    authorCompany: string;
    authorAvatarUrl: string;
}
export default function QuoteBox(props: Props): JSX.Element;
export declare function QuoteSource(props: Props): JSX.Element;
export {};
