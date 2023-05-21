import { Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useGlobal } from '../../hooks';
import { ID } from '../../utils';

const align = [
    {
        value: 'left',
        key: 'Izquierda'
    },
    {
        value: 'right',
        key: 'Derecha'
    },
    {
        value: 'center',
        key: 'Centro'
    },
]
export const Header = () => {

    const params = useParams();
    const { values: { cellSelected, cells }, actions: { setCellSelected, setCells } } = useGlobal()
    const [title, setTitle] = useState('Libro1.json');
    const [text, setText] = useState('');
    const [color, setColor] = useState('#000000');
    const [fondo, setFondo] = useState('#FFFFFF');
    const [textAlign, setTextAlign] = useState('left');

    useEffect(() => {
        if (params?.nameBook) {
            setTitle(`${params?.nameBook}.json`);
        }
    }, [params])

    useEffect(() => {
        if (cellSelected === undefined) return;
        setText(cells[Object.keys(cellSelected)[0]]?.text || '')
        setColor(cells[Object.keys(cellSelected)[0]]?.color || '#000000')
        setFondo(cells[Object.keys(cellSelected)[0]]?.backgroundColor || '#FFFFFF')

    }, [cellSelected]);

    const onSaveCell = (key: string, _value: string) => {
        if (cellSelected === undefined) return;
        const cellKey = Object.keys(cellSelected)[0];
        let value = _value;
        if (key === 'text') {
            const regExg = new RegExp('^=');
            if (regExg.test(value)) {
                try {
                    const str = value.split('=')[1];
                    value = cells[str]?.text || value;
                }
                catch (err) {

                }
            }
        }
        //console.log(cellKey)
        setCellSelected({
            [cellKey]: {
                ...cellSelected[cellKey],
                [key]: value
            }
        });
        setCells({
            ...cells,
            [cellKey]: {
                ...cellSelected[cellKey],
                [key]: value
            }
        });
    }

    return (
        <div style={{ marginBottom: '15px' }}>
            <Grid container sx={{ bgcolor: 'primary.main', minHeight: 1, p: 0.5, justifyContent: 'center' }}>
                <Typography color='#ffffff' sx={{ fontSize: 12 }} textAlign={'center'} variant='subtitle1' >{title}</Typography>
            </Grid>
            {
                cellSelected &&
                <Grid container sx={{ minHeight: '60px', p: 1 }}>
                    <Grid item xs={12}>
                        <TextField
                            onChange={(e) => {
                                onSaveCell('text', e.target.value)
                                setText(e.target.value);
                            }}
                            value={text}
                            fullWidth
                            size={'small'}
                            focused
                            placeholder={Object.keys(cellSelected)[0] || ''}
                        />
                    </Grid>
                    <Grid item xs={1} sx={{ m: 0.2, mt: 1 }}>
                        <InputLabel>Color</InputLabel>
                        <TextField
                            size='small'
                            type='color'
                            fullWidth
                            placeholder='Color'
                            value={color}
                            onChange={(e) => {
                                setColor(e.target.value);
                                onSaveCell('color', e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={1} sx={{ m: 0.2, mt: 1 }}>
                        <InputLabel>Fondo</InputLabel>
                        <TextField
                            size='small'
                            type='color'
                            fullWidth
                            placeholder='Fondo'
                            value={fondo}
                            onChange={(e) => {
                                setFondo(e.target.value);
                                onSaveCell('backgroundColor', e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} sx={{ m: 0.2, mt: 1 }}>
                        <InputLabel>Alineacíon</InputLabel>
                        <Select size='small' value={textAlign}
                            onChange={(e) => {
                                setTextAlign(e.target.value);
                                onSaveCell('textAlign', e.target.value)
                            }}
                        >
                            {align.map(e => (
                                <MenuItem
                                    key={ID(2)}
                                    value={e.value}
                                >
                                    {e.key}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>

                </Grid>
            }
        </div>
    )
}
