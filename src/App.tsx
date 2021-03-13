import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {PlaceDetails} from './components/PlaceDetails';
import {SearchBar} from './components/Search';
import {Grid}from 'semantic-ui-react';
import {instance} from './utils/Axios';

function App() {

  const request = (query: string) => {
    instance.get("/json",{params: {query}}).then((response : any) => {
      console.log(response);
    });
  }

  return (
    <Grid centered columns={2} >
      <SearchBar request={request}/>
      <Grid.Row textAlign={'left'}>
        <PlaceDetails />
      </Grid.Row>
    </Grid>
  );
}

export default App;
