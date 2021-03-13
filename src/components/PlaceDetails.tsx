import * as React from 'react';
import {Card} from 'semantic-ui-react';

export const PlaceDetails = () : JSX.Element => {

    return (
        <Card>
            <Card.Content textAlign={"left"}>
                <Card.Header>Matthew Harris</Card.Header>
                <Card.Meta>Co-Worker</Card.Meta>
                <Card.Description>
                Matthew is a pianist living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
    );
};