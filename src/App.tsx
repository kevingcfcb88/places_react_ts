import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {PlaceDetails} from './components/PlaceDetails';
import {SearchBar} from './components/Search';
import {Grid}from 'semantic-ui-react';
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
  const [citiesResult, setCitiesResult] = useState<ICity>();
  const [queryParam, setQueryParam] = useState("");

  const request = async (query:any) : Promise<ICity>  => {
    setSearching(true);
    setQueryParam(query);
    let res : ICity | undefined = await _.find(cities, city => city["name"] === query);
    console.warn(res);
    if(res === undefined) res = {} as ICity;
    setCitiesResult(res);
    setSearching(false);
    return res;
  }

  function results () : JSX.Element{
    console.log(searching);
    if(!searching && queryParam.length > 0){
      console.log("Results");
      return (<div>{citiesResult?.name} - {citiesResult?.country}</div>)
    }else if(searching && queryParam.length > 0){
      console.warn("Loading...");
      return (<div>Loading...</div>)
    }else{
      return <div></div>;
    }
    
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
