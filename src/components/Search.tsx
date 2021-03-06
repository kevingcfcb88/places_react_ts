import React, {useState, useEffect} from 'react';
import {Grid, Input} from 'semantic-ui-react';


interface IProps {
    request: Function;
}

export const SearchBar = ({request} : IProps) =>{

    const [state, setState] = useState("");
    const [didMount, setDidMount] = useState(false)

    const setTemporalState= (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setState(event.target.value);
    }

    useEffect(()=>{
        if(didMount){
            request(state);
        }
        setDidMount(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state]);

    return (
        <Grid.Row style={{marginTop: "50px"}} >
            <Grid.Column width="2" textAlign='center'>
                <Input 
                    focus 
                    placeholder="Search..." 
                    value={state}
                    onChange={setTemporalState}
                />
            </Grid.Column>
        </Grid.Row>
    );
};