import React from 'react';
import { BoxProps as OriginalBoxProps, ThemeUIStyleObject } from 'theme-ui';
declare type BoxProps = {
    css?: any;
} & OriginalBoxProps;
declare const theme: any;
export default theme;
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
export declare function PaddedContainer({ children, ...rest }: {
    children: React.ReactNode;
} & BoxProps): JSX.Element;
