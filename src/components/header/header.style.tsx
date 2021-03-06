import styled from "styled-components";
import { COLORS, SPACING } from "../theme";

export const HeaderContainer = styled.div`
  class: "flex-container";
  display: flex;
  background-color: ${COLORS.verdeRio};
  border-radius: ${100};
  padding: ${10}px ${10}px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 5px black;
  z-index: 11;
`;


interface LogoCircleProps {
  url: string;
}

export const LogoCircle = styled.div`
  background-color: ${COLORS.areia};
  width: ${SPACING.medium * 2}px;
  height: ${SPACING.medium * 2}px;
  border-radius: ${SPACING.medium}px;
  background-image: url(${(props: LogoCircleProps) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PerfilCircle = styled.div`
  background-color: ${COLORS.areia};
  width: ${SPACING.medium * 2}px;
  height: ${SPACING.medium * 2}px;
  border-radius: ${SPACING.medium}px;
  display: flex;
`;

interface HeaderTextContainerProps {
  align?: "left" | "right";
}

export const HeaderTextContainer = styled.div`
  display: flex;
  ${(props: HeaderTextContainerProps) =>
    props.align === "left" ? "margin-right: auto;" : "margin-left: auto;"}
`;
