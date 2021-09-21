/// <reference types="react" />
import { BoxProps as OriginalBoxProps, ThemeUIStyleObject } from 'theme-ui';
declare type BoxProps = {
    css?: any;
} & OriginalBoxProps;
export declare const LinkFontFamily = "Poppins, sans-serif";
export declare const MaxWidth = 1150;
export declare const ColorPink = "#fdf8f7";
export declare const ColorBackground = "#fff";
export declare const ColorForeground = "#fafafa";
export declare const ColorBorder = "rgba(0,0,0,1)";
export declare const BorderWidth = 2;
export declare const Section: any;
export declare const ParagraphStyle: any;
export declare const PageHeader: any;
export declare const SectionGroup: any;
export declare const SectionHeader: any;
export declare const CentralizedContainer: any;
export declare const RelativeBox: any;
export declare function FadeInSection(props: any): JSX.Element;
export declare const BlurBall: any;
export declare function LogoNotification(props: {
    name: string;
    dismissable?: boolean;
    children: React.ReactNode;
    link?: string;
}): JSX.Element | null;
export declare const LogoNotificationContainer: any;
export declare function SmallSquiglyDivider(): JSX.Element;
export declare function SquiglyDivider(): JSX.Element;
export declare function ArrowSvgRight0(): JSX.Element;
export declare function ArrowSvgBottom(): JSX.Element;
export declare const RainbowSpan: any;
export declare const BenefitNumber: any;
export declare const ParagraphStyle2: any;
export declare const ColoredBadge: ({ color, sx, children, ...others }: {
    color?: string | undefined;
    sx?: ThemeUIStyleObject | undefined;
    children: React.ReactNode;
} & Omit<BoxProps, "children">) => JSX.Element;
export declare function Divider(props: {
    big?: boolean;
}): JSX.Element;
declare type StackProps = {
    gap?: number | string;
    children?: React.ReactNode;
} & BoxProps;
export declare function HStack({ gap, children, ...others }: StackProps): JSX.Element;
export declare function VStack({ gap, children, ...others }: StackProps): JSX.Element;
export declare function ComplexAlert({ icon, variant, children, onAction, onClose, sx, ...others }: {
    icon?: React.ReactNode;
    variant?: string;
    onAction?: () => void;
    onClose?: () => void;
    children: React.ReactNode;
} & Omit<BoxProps, 'children'>): JSX.Element;
export declare function Banner({ children, variant, right, small, gap, ...others }: {
    variant?: 'primary' | 'success' | 'warning' | 'danger';
    right?: React.ReactNode;
    gap?: string | number;
    children: React.ReactNode;
    small?: boolean;
} & Omit<BoxProps, 'children'>): JSX.Element;
export declare function Smaller({ children, ...others }: {
    children: React.ReactNode;
} & Omit<BoxProps, 'children'>): JSX.Element;
export declare function Breadcrumbs({ children, ...others }: {
    children: React.ReactNode;
} & Omit<BoxProps, 'children'>): JSX.Element;
export declare function Stats({ children, title, ...others }: {
    title: string;
    children: React.ReactNode;
} & Omit<BoxProps, 'children'>): JSX.Element;
export declare function SectionContainer({ children, ...others }: {
    children: React.ReactNode;
} & Omit<BoxProps, 'children'>): JSX.Element;
export declare const Icons: {
    Info: (props: any) => JSX.Element;
};
export declare function Code({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function PaddedContainer({ children, ...rest }: BoxProps): JSX.Element;
export {};
