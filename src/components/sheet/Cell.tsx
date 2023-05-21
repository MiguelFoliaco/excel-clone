import { CSSProperties, memo, useEffect, useState } from "react";
import { useGlobal } from "../../hooks";
import { isEqual } from 'lodash'

type CellProp = {
    className?: string;
    letter: string;
    number: string;
    isHeader?: boolean;
    header?: 'letter' | 'number';
}
export const CellComponent = ({ letter, number, isHeader, header, className }: CellProp) => {

    const { actions: { setCellSelected }, values: { cells, cellSelected } } = useGlobal()

    const [style, setStyle] = useState<CSSProperties>({});

    useEffect(() => {
        if (cellSelected !== undefined) {
            setStyle({
                color: cellSelected[`${letter}${parseInt(number) + 1}`]?.color,
                backgroundColor: cellSelected[`${letter}${parseInt(number) + 1}`]?.backgroundColor,
                textAlign: cellSelected[`${letter}${parseInt(number) + 1}`]?.textAlign,
            })
        }
    }, [cellSelected])


    return (
        <div
            cell-data={`${letter}${parseInt(number) + 1}`}
            className={`${className || ''} cell`}
            style={style}
            onClick={(e) => {
                if (!isHeader) {
                    setCellSelected({ [`${letter}${parseInt(number) + 1}`]: {} })
                }
            }}
        >
            {
                isHeader &&
                <>
                    {
                        header === 'letter' ?
                            letter
                            :
                            number
                    }
                </>
            }
            {
                !isHeader &&
                <>
                    {
                        cells[`${letter}${parseInt(number) + 1}`]?.text
                        || ''
                    }
                </>
            }
        </div>
    )
}

export const Cell = memo(CellComponent, isEqual)