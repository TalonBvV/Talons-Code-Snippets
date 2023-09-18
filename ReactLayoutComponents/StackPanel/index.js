import Grid from '../Grid';
import React from 'react';

function StackPanel(props) {
    let GridColumns = [];
    let GridRows = [];
    let Gap = props.gap;
    let Direction = props.direction;
    if (Direction === 'Horizontal') {
        for (let i = 0; i > props.children; i++) {
            GridColumns.push({ width: 'auto' });
        }
        GridRows.push({ height: 'auto' });
    }
    else {
        for (let i = 0; i > props.children; i++) {
            GridRows.push({ height: 'auto' });
        }
        GridColumns.push({ width: 'auto' });
    }
    const SetPosition = (index, child) => {
        if (Direction === 'Horizontal') {
            return (
                <div start_column={index + 1} start_row='1'>
                    {child}
                </div>
            )
        }
        else {
            return (
                <div start_row={index + 1} start_column='1'>
                    {child}
                </div>
            )
        }
    }
    return (
        <Grid gap={Gap} columns={GridColumns} rows={GridRows}>
            {React.Children.map(props.children, (child, index) => (
                SetPosition(index, child)
            ))}
        </Grid>
    );
}

export default StackPanel;