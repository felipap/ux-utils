import React from 'react';
import { BoxProps as OriginalBoxProps, ThemeUIStyleObject } from 'theme-ui';
declare type BoxProps = {
    css?: any;
} & OriginalBoxProps;
export declare const LinkFontFamily = "Poppins, sans-serif";
export declare const ColorBackground = "#fff";
export declare const ColorForeground = "#fafafa";
export declare const ColorBorder = "rgba(0,0,0,1)";
export declare const BorderWidth = 2;
export declare const Section: import("styled-components").StyledComponent<import("reflexbox").BoxType, any, {}, never>;
export declare const ParagraphStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PageHeader: import("styled-components").StyledComponent<import("reflexbox").BoxType, any, {
    width: 1;
    margin: "auto";
    flexDirection: "column";
    paddingTop: number[];
    paddingX: number[];
}, "flexDirection" | "paddingTop" | "width" | "margin" | "paddingX">;
export declare const SectionGroup: import("styled-components").StyledComponent<"div", any, {
    invert?: boolean | undefined;
    white?: boolean | undefined;
    black?: boolean | undefined;
}, never>;
export declare const SectionHeader: import("styled-components").StyledComponent<"div", any, {
    center?: boolean | undefined;
}, never>;
export declare const CentralizedContainer: import("styled-components").StyledComponent<import("reflexbox").BoxType, any, {}, never>;
export declare const RelativeBox: import("styled-components").StyledComponent<import("reflexbox").BoxType, any, {}, never>;
export declare function FadeInSection(props: {
    children: React.ReactNode;
}): JSX.Element;
export declare const BlurBall: import("styled-components").StyledComponent<"div", any, {
    color: any;
}, never>;
export declare function LogoNotification(props: {
    name: string;
    dismissable?: boolean;
    children: React.ReactNode;
    link?: string;
}): JSX.Element | null;
export declare const LogoNotificationContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare function SmallSquiglyDivider(): JSX.Element;
export declare function SquiglyDivider(): JSX.Element;
export declare function ArrowSvgRight0(): JSX.Element;
export declare function ArrowSvgBottom(): JSX.Element;
export declare const RainbowSpan: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const BenefitNumber: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ParagraphStyle2: import("styled-components").StyledComponent<"div", any, {
    center?: boolean | undefined;
}, never>;
export declare const ColoredBadge: ({ color, sx, children, ...others }: {
    color?: string | undefined;
    sx?: ThemeUIStyleObject | undefined;
    children: React.ReactNode;
} & Omit<BoxProps, "children">) => JSX.Element;
export declare function Divider(props: {
    big?: boolean;
}): JSX.Element;
export declare type StackProps = {
    gap?: number | string | (number | string)[];
    children?: React.ReactNode;
    stretch?: boolean;
    center?: boolean;
} & BoxProps;
export declare function HStack({ gap, children, stretch, center, ...others }: StackProps): JSX.Element;
export declare function VStack({ gap, children, center, stretch, ...others }: StackProps): JSX.Element;
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
export declare const Title: ({ children, ...rest }: BoxProps) => JSX.Element;
export declare const H1: ({ children, ...rest }: BoxProps) => JSX.Element;
export declare const H2: ({ children, ...rest }: BoxProps) => JSX.Element;
export declare const H3: ({ children, ...rest }: BoxProps) => JSX.Element;
export {};
