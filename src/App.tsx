import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {PlaceDetails} from './components/PlaceDetails';
import {SearchBar} from './components/Search';
import {Grid}from 'semantic-ui-react';

function App() {
  return (
    <Grid centered columns={2} >
      <SearchBar />
      <Grid.Row textAlign={'left'}>
        <PlaceDetails />
      </Grid.Row>
    </Grid>
  );
}

export default App;
