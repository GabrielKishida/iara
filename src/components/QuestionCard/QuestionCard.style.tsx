import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import { Col, Row } from "../theme/grid";

interface CardContainerProps {
    inputColor: string; 
  }

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  class: "flex-container";
  background-color: ${({inputColor}) => inputColor};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
`;

export const ImageCardContainer = styled(CardContainer)`
    margin: 30px 0px;
    width: auto;
`

export const ImageRow = styled(Row)`
    justify-content: center;
`

export const AnswerButton = styled.button`
  class: "flex-container";
  background-color: ${COLORS.verdeEscuro};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: row;
  min-width: 100px;
`;

export const AnswerRow = styled(Row)`
  justify-content: space-evenly;
  margin: 15px 0px;
`;