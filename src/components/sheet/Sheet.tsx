import { columns, columnsWithOutBlank } from '../../constants/keysSheet'
import { Cell } from './Cell'
import { ID } from '../../utils'
import { Fragment, useEffect, useState } from 'react'

export const SheetBook = () => {
    const [arrRow, setArrRow] = useState<number[]>([]);

    const addRow = (rows: number = 50) => {
        let arr: number[] = [];
        for (let i = 0; i < rows; i++) {
            arr.push(i)
        }
        setArrRow(arr);
    }
    useEffect(() => {
        addRow();
    }, [])

    return (
        <div className='sheet-container'>
            <div className='sheet-header' style={{ width: `${80 * columns.length}px` }}>
                {
                    columns.map(e => (
                        <Cell
                            className='cell-header'
                            key={ID(12)}
                            letter={e}
                            number=' '
                            header='letter'
                            isHeader
                        />
                    ))
                }
            </div>
            <div className='sheet-body'>
                <div className='sheet-left'>
                    {
                        arrRow.map(e => (
                            <Cell
                                className='cell-header'
                                key={ID(12)}
                                number={`${e + 1}`}
                                letter={' '}
                                header='number'
                                isHeader
                            />
                        ))
                    }
                </div>
                <div className='sheet-content'>
                    {
                        arrRow.map(number => (
                            <div className='col' key={ID(10)}>
                                {
                                    columnsWithOutBlank.map(letter => (
                                        <Cell
                                            key={ID(13)}
                                            letter={letter}
                                            number={`${number}`}
                                        />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
