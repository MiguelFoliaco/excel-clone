export interface CellPropeties {
    text?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    textAlign?: string;
    textDecoration?: string;
}
export type Cell = Record<string, CellPropeties>