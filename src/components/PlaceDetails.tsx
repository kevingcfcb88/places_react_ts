import * as React from 'react';
import {Card, Grid} from 'semantic-ui-react';
import { ICity } from '../App';

interface IPlaceDetailsProps{
    keyInt: number,
    city: ICity
}

export const PlaceDetails = ({keyInt,city}:IPlaceDetailsProps) : JSX.Element => {
    
    return (
        <Grid.Column key={keyInt}>
            <Card key={keyInt}>
                <Card.Content textAlign={"left"} key={keyInt}>
                    <Card.Header>{city.name}</Card.Header>
                    <Card.Meta>{city.country}</Card.Meta>
                    <Card.Description>
                        Latitud: {city.lat} <br/>
                        Longitud: {city.lng} 
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>        
    );
};