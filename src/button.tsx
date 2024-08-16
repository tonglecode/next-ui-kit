import React from "react";

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

export type RoundedEnum = typeof roundedEnum;
export type ColorSet = typeof colorSet;

export type BgColorProp = keyof ColorSet | (string & {});
export type RoundedProp = keyof RoundedEnum | (string & {});

export interface ButtonProps {
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: BgColorProp;
  bgOpacity?: string;
  rounded?: RoundedProp;
  onClick?: () => void; // onClick 이벤트 핸들러 추가
}

const Button: React.FC<ButtonProps> = ({
  children,
  paddingX,
  paddingY,
  bgColor,
  bgOpacity,
  rounded,
  onClick,
}) => {
  const getBackgroundColor = (color: BgColorProp): string => {
    return color in colorSet ? colorSet[color as keyof ColorSet] : color;
  };

  const getBorderRadius = (radius: RoundedProp): string => {
    return radius in roundedEnum
      ? roundedEnum[radius as keyof RoundedEnum]
      : radius;
  };

  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-block",
        backgroundColor: bgColor ? getBackgroundColor(bgColor) : undefined,
        opacity: bgOpacity,
        paddingInline: paddingX,
        paddingBlock: paddingY,
        borderRadius: rounded ? getBorderRadius(rounded) : undefined,
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "inherit",
        color: "white", // 텍스트 색상 설정
        transition: "background-color 0.3s, opacity 0.3s", // 부드러운 전환 효과
      }}
    >
      {children}
    </button>
  );
};

export default Button;
