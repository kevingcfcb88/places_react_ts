import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {PlaceDetails} from './components/PlaceDetails';
import {SearchBar} from './components/Search';
import {Grid, Loader}from 'semantic-ui-react';
import _ from 'lodash';
import cities from 'cities.json';

interface ICity {
    country: string,
    name: string,
    lat: string,
    lng: string
}

function App() {

  const [searching, setSearching] = useState(false);
  const [citiesJson, setCitiesJson] = useState<ICity[]>(Object.entries(cities).map(element => element[1]));
  const [citiesResult, setCitiesResult] = useState<ICity[]>();
  const [queryParam, setQueryParam] = useState("");

  const request = (query:any) : void  => {
    setSearching(true);
    setQueryParam(query);
    if(query.length >= 2){
      setCitiesResult([]);
      setCitiesResult(citiesJson.filter(c => c.name.toLowerCase().includes(query.toLowerCase())));
    }
    setSearching(false);
  }

  function results (): JSX.Element;
  function results (): JSX.Element[];
  function results (): any {
    if(!searching && queryParam.length > 0){
      if(citiesResult)
      return citiesResult.map((c,i) => <div key={i}>{c?.name} - {c?.country}</div>);
    }else if(searching && queryParam.length > 0){
      return (<Loader active />)
    }
    return <div></div>;  
  }

  return (
    <Grid centered columns={2} >
      <SearchBar request={request}/>
      <Grid.Row textAlign={'left'}>
        {results()}
      </Grid.Row>
    </Grid>
  );
}

export default App;
