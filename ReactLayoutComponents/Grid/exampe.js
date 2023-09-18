import Grid from './index';

function App() {
    return (
        <div className="App">
            <div>
                <Grid columns={[{ width: '200px' }, { width: '200px' }]} rows={[{ height: '100px' }]}>
                    <div start_column='1' end_column='3' start_row='1'>
                        Hello There
                    </div>
                </Grid>
            </div>
        </div>
    );
}

export default App;