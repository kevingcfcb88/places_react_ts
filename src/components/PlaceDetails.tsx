import * as React from 'react';
import {Card, Grid} from 'semantic-ui-react';
import { ICity } from '../App';

interface IPlaceDetailsProps{
    key: number,
    city: ICity
}

export const PlaceDetails = ({key,city}:IPlaceDetailsProps) : JSX.Element => {

    return (
        <Grid.Column>
            <Card>
                <Card.Content textAlign={"left"} key={key}>
                    <Card.Header>{city.name}</Card.Header>
                    <Card.Meta>{city.country}</Card.Meta>
                    <Card.Description>
                        Latitud: {city.lat}
                        Longitud: {city.lng} 
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>        
    );
};