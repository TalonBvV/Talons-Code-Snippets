import React from 'react';

function GenerateGridStyles(gap, columns, rows) {
    let styles = { width: '', height: '', display: '', gap: '', gridTemplateColumns: '', gridTemplateRows: '' };
    styles.width = '100%';
    styles.height = '100%';
    styles.display = 'grid';
    styles.gap = gap;
    styles.gridTemplateColumns = '';
    styles.gridTemplateRows = '';
    for (let i = 0; i < columns.length; i++) {
        if (i === columns.length - 1) {
            styles.gridTemplateColumns += columns[i].width;
        }
        else {
            styles.gridTemplateColumns += columns[i].width + ' ';
        }
    }
    for (let i = 0; i < rows.length; i++) {  
        if (i === rows.length - 1) {
            styles.gridTemplateRows += rows[i].height;
        }
        else {
            styles.gridTemplateRows += rows[i].height + ' ';
        }
    }
    console.log(styles);
    return styles;
}
function GenerateElementStyles(element) {
    let styles = { gridColumn: '', gridRow: '' };
    if (element.props.start_column) {
        styles.gridColumn = element.props.start_column;
    }
    if (element.props.end_column) {
        styles.gridColumn += ' / ' + element.props.end_column;
    }
    if (element.props.start_row) {
        styles.gridRow = element.props.start_row;
    }
    if (element.props.end_row) {
        styles.gridRow += ' / ' + element.props.end_row;
    }
    console.log(styles);
    return styles;
} 

function Grid(props) {
    const styles = GenerateGridStyles(props.gap, props.columns, props.rows);

    return (
        <div style={styles}>
            {
                React.Children.map(props.children,  child => (
                    <div style={GenerateElementStyles(child)}>
                        {child}
                    </div>
                ))
            }
        </div>
    );
}

export default Grid;