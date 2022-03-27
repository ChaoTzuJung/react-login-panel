import React, { CSSProperties, ReactNode } from "react";

export type StyleBaseT = {
  className?: string;
  style?: CSSProperties;
};

export type ParentsBaseT = StyleBaseT & {
  children?: ReactNode;
};

export interface ButtonProps {
  variant?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

export interface FormProps {
  children: ReactNode;
}

export interface CheckboxProps {
  label: string;
  name: string;
  value?: string | number;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type SelectOption = {
  key: string;
  label: string;
  value: string;
};

export interface SelectProps {
  fluid: boolean;
  label?: string;
  placeholder: string;
  options: SelectOption[];
}

export interface InputProps {
  fluid: boolean;
  name: string;
  label?: string;
  placeholder: string;
  value: string;
  icon: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TableCellPropsI extends ParentsBaseT {
  onClick?: () => void;
}

export interface BodyCol {
  id: number;
  username: string;
  email: string;
  status: boolean;
}

export interface HeadCol {
  field: keyof BodyCol;
  headerName: string;
}
