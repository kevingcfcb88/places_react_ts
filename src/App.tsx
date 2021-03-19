import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {PlaceDetails} from './components/PlaceDetails';
import {SearchBar} from './components/Search';
import {Grid, Loader}from 'semantic-ui-react';
import _ from 'lodash';
import cities from 'cities.json';

export interface ICity {
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

  const drawRows = (details:any) : JSX.Element[] =>{
    let jsxFinal : JSX.Element[] = [];
    while(details.length > 0){
      if(details.length % 2 == 0){
        jsxFinal.push(
          <Grid.Row>
            {details.shift()}
            {details.shift()}
          </Grid.Row>
        );
      }
      jsxFinal.push(
        <Grid.Row>
          {details.shift()}
          {details.shift()}
        </Grid.Row>
      );
    }
    return jsxFinal;
  }

  function results (): JSX.Element;
  function results (): JSX.Element[];
  function results (): any {
    if(!searching && queryParam.length > 0){
      if(citiesResult){
        const placeDetails = citiesResult.map((c,i) => <PlaceDetails key={i} city={c}/>);
        return (
          <Grid centered columns={2}>
            {drawRows(placeDetails)}
          </Grid>
        )
      }
    }else if(searching && queryParam.length > 0){
      return (<Loader active />)
    }
    return <div></div>;  
  }

  return (
    <Grid centered columns={2} >
      <SearchBar request={request}/>
      <Grid.Row textAlign={'center'}>
        <Grid centered columns={2}>
          {results()}
        </Grid>
      </Grid.Row>
    </Grid>
  );
}

export default App;
