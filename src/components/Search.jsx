import React from 'react';
import {Grid, Input}from 'semantic-ui-react';

export const SearchBar = () =>{

    return (
        <Grid.Row style={{marginTop: "50px"}} >
            <Grid.Column width="2" textAlign='center'>
                <Input focus placeholder="Search..."/>
            </Grid.Column>
        </Grid.Row>
    );
};