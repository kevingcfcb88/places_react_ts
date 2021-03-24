import React from 'react';
import {Card, Grid} from 'semantic-ui-react';
import { ICity } from '../App';

interface IPlaceDetailsProps{
    keyInt: number,
    city: ICity,
    clicked: any
}

export const PlaceDetails = ({keyInt,city,clicked}:IPlaceDetailsProps) : JSX.Element => {
    
    return (
        <Grid.Column key={keyInt}>
            <Card key={keyInt} onClick={clicked} data-key={keyInt}>
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