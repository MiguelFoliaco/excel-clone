import styled from "styled-components";
import { theme } from "../../../app/theme";
import { Button as B } from "@mui/material";
export const Button = styled(B)`
  background-color: ${theme.pallete.primary.light};
  padding: 10px 20px !important;
  border-radius: 0px !important;
  font-size: ${theme.text.link.size};
  color: ${theme.pallete.primary.textConstrast};
  font-weight: bold;
  border: none;
  letter-spacing: 2px !important;
  box-shadow: none !important;
  &:hover {
    background-color: ${theme.pallete.primary.main};
  }
`;

export const ButtonLink = styled(B)`
  background-color: ${theme.pallete.primary.light};
  padding: 10px 20px !important;
  box-shadow: none !important;
  border: none;
  &:hover {
    background-color: ${theme.pallete.primary.main};
  }
  a {
    letter-spacing: 2px;
    font-weight: bold;
    font-size: ${theme.text.link.size};
    color: ${theme.pallete.primary.textConstrast};
  }
`;
