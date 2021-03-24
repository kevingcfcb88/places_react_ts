import React, {useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {PlaceDetails} from './components/PlaceDetails';
import {SearchBar} from './components/Search';
import {LocationMap} from './components/LocationMap';
import {Grid, Loader}from 'semantic-ui-react';
import cities from 'cities.json';

export interface ICity {
    country: string,
    name: string,
    lat: string,
    lng: string
}

function App() {

  const [searching, setSearching] = useState(false);
  const [citiesJson, setCitiesJson] = useState<ICity[]>([]);
  const [citiesResult, setCitiesResult] = useState<ICity[]>();
  const [queryParam, setQueryParam] = useState("");
  const [selectedCity, setSelectedCity] = useState(0);

  useEffect(()=>{
    setCitiesJson(Object.entries(cities).map(element => element[1]));
  },[]);

  const request = (query:string) : void  => {
    setQueryParam(query);
    if(query.length >= 2){
      setSearching(true);
      setCitiesResult([]);
      findResults(query).then(result =>{
        setCitiesResult(result);
        setSearching(false);
      });
    }else{
      setSelectedCity(0)
      setCitiesResult([]);
    }
  }

  const clickedCity = (e:MouseEvent) =>{
    e.preventDefault();
    const tempString : string = ((e.currentTarget as HTMLElement).getAttribute('data-key'))!;
    setSelectedCity(parseInt(tempString));
  }

  const findResults = (q:string) : Promise<ICity[]> => {
    return new Promise((resolve, reject) => {
      resolve(citiesJson.filter(c => c.name.toLowerCase().includes(q.toLowerCase())))
      const a:ICity[] = [];
      resolve(a);
    });
  };

  const drawRows = (details:any) : JSX.Element[] =>{
    let jsxFinal : JSX.Element[] = [];
    let rowKey:number = 100;
    while(details.length > 0){
      if(details.length % 2 === 0){
        jsxFinal.push(
          <Grid.Row key={rowKey}>
            {details.shift()}
            {details.shift()}
          </Grid.Row>
        );
      }
      rowKey += 1;
      jsxFinal.push(
        <Grid.Row key={rowKey}>
          {details.shift()}
          {details.shift()}
        </Grid.Row>
      );
      rowKey += 100;
    }
    return jsxFinal;
  }

  function results (): JSX.Element;
  function results (): JSX.Element[];
  function results (): any {
    if(!searching && queryParam.length > 0){
      if(citiesResult){
        const placeDetails : ICity[] = [];

        for (let i = 0; i < 10; i++){
          if(citiesResult[i] !== undefined){
            placeDetails.push(citiesResult[i]);
          }
        }
        const tempArray:JSX.Element[] = placeDetails.map((c,i) => {
          return <PlaceDetails keyInt={++i} city={c} clicked={clickedCity}/>
        })
        return (
          <Grid centered columns={2}>
            {drawRows(tempArray)}
          </Grid>
        )
      }
    }else if(searching && queryParam.length > 0){
      return (<Loader active />)
    }
    return <div></div>;  
  }

  const drawingMap = ():JSX.Element => {
    if(citiesResult && citiesResult.length && selectedCity !== 0){
      const tempCity = citiesResult.filter( (v,i) => i+1 === selectedCity);
      return  <LocationMap lat={parseInt(tempCity[0].lat)} lgt={parseInt(tempCity[0].lng)} city={tempCity[0].name} />
    }
    return <LocationMap lat={51.505} lgt={-0.09} city={"London"}/>
  }

  return (    
    <Grid>
    <Grid.Row>
      <Grid.Column textAlign={'center'} width={8}>
      <SearchBar request={request}/>
          <Grid.Row textAlign={'center'}>
            <Grid centered columns={2}>
              {results()}
            </Grid>
          </Grid.Row>
      </Grid.Column>
      <Grid.Column width={8}>
        {drawingMap()}
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );
}

export default App;
