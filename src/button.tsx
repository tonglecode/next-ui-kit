import React, { ReactNode } from "react";

//프랍에 직관적으로 사용하기 위한 const 타입으로 설정
export const roundedEnum = {
  sm: "2px",
  md: "4px",
  lg: "6px",
  full: "2000px",
} as const;

export const colorSet = {
  deep: "#520922",
  dark: "#980c28",
  main: "#20a1d8",
  light: "#20dbd8",
} as const;

// 기존에 생성한 객체를 타입으로 그대로 적용
type RoundedEnum = typeof roundedEnum;
type ColorSet = typeof colorSet;

interface Props {
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: keyof ColorSet | string; //키값만 허용한다.
  bgOpacity?: string;
  rounded?: keyof RoundedEnum;
}

const Button: React.FC<Props> = ({
  children,
  paddingX,
  paddingY,
  bgColor,
  bgOpacity,
  rounded,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: bgColor && colorSet[bgColor as keyof ColorSet],
        opacity: bgOpacity,
        paddingInline: paddingX,
        paddingBlock: paddingY,
        borderRadius: rounded && roundedEnum[rounded],
      }}
    >
      {children}
    </div>
  );
};

export default Button;
