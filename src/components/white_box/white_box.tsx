import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import { VBox } from "../theme/grid";

export const WhiteBox = styled(VBox)`
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${SPACING.borderRadius}px;
  border-bottom-right-radius: ${SPACING.borderRadius}px;
`;

export const RoundedWhiteBox = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  border-top-left-radius: ${SPACING.borderRadius}px;
  border-top-right-radius: ${SPACING.borderRadius}px;
  border-bottom-left-radius: ${SPACING.borderRadius}px;
  border-bottom-right-radius: ${SPACING.borderRadius}px;
  margin-horizontal: ${SPACING.huge}px;
  width: 80%;
  padding: ${SPACING.medium}px;
  justify-content: flex-start;
  align-self: center;
  flex-wrap: wrap;
`;
