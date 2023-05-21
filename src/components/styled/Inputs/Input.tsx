import { TextField } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Input = styled(TextField)`
  input {
    padding: 10px 5px;
    font-size: ${theme.text.link.size} !important;
  }
`;
