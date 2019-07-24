import React from 'react';
import { Box, RangeInput, Text, Button } from 'grommet';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';


const client = new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql'
});

interface MoodInputProps {
    label: string;
    updateFn(val: number): void;
}

const MoodInput = ({ label, updateFn }: MoodInputProps) => {
    const [value, setValue] = React.useState();

    return (
        <Box direction="row" alignContent="center" align="center" pad="medium" style={{opacity: value ? 1 : .5}}>
            <Text size="large" style={{ width: "200px" }}>{label}</Text>
            <Box pad="small" fill={true}>
                <RangeInput
                    min={1}
                    max={5}
                    step={1}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setValue(event.target.value);
                        updateFn(parseInt(event.target.value));
                    }} />
            </Box>
        </Box>
    );
}

const save = () => {};

const handleEmotionUpdate = (emotion: string) => {
    return (val: number) => {

client.query({
    query: gql`
      query TodoApp {
        users {
          id
        }
      }      
    `,
  })
    .then(data => console.log(data))
    .catch(error => console.error(error));
        console.log(emotion, val)
    }
}

const Header = () => (
    <Box direction="row" >
        <div style={{width:"220px"}}/>
        <Box pad="large" direction="row" fill={true} justify="between">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
        </Box>
    </Box>
)

export default () => (
    <Box>
        <Header></Header>
        <MoodInput label="Happiness" updateFn={handleEmotionUpdate('happiness')} />
        <MoodInput label="Energy" updateFn={handleEmotionUpdate('energy')} />
        <MoodInput label="Anxiety" updateFn={handleEmotionUpdate('anxiety')} />
        <MoodInput label="Irritability" updateFn={handleEmotionUpdate('irritability')} />
        <MoodInput label="Willpower" updateFn={handleEmotionUpdate('willpower')} />
        <Box direction="row" justify="end" pad="small">
            <Button label="Save" onClick={save} /> 
        </Box>
    </Box>
); 