import React from 'react';
import { Grid, Box, RangeInput, FormField, Text, Button } from 'grommet';
import { GraphQLClient } from 'graphql-request';

const MoodInput = ({ label }: { label: string }) => {
    const [value, setValue] = React.useState();
    return (
        <Box direction="row" alignContent="center" align="center" pad="medium">
            <Text size="large" style={{ width: "200px" }}>{label}</Text>
            <Box pad="small" fill={true}>
                <RangeInput
                    value={value}
                    min={1}
                    max={5}
                    step={1}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        fetch('http://100.115.92.199:3005/graphql', {method: 'POST',mode: 'cors', body: JSON.stringify({"query": "mutation { insert_mood_events(objects: [{emotion: \"\", rating: 10}, {emotion: \"\", rating: 10}]) {   returning { emotion rating created_at }}}"}), headers: {'Content-Type': 'application/json'}}).then((res) => res.json()).then(console.log)
                    }} />
            </Box>
        </Box>
    );
}

const save = () => {};

const Header = () => (
    <Box direction="row" >
        <div style={{width:"220px"}}/>
        <Box pad="large" direction="row" fill={true} justify="between">
            <text>1</text>
            <text>2</text>
            <text>3</text>
            <text>4</text>
            <text>5</text>
        </Box>
    </Box>
)

export default () => (
    <Box>
        <Header></Header>
        <MoodInput label="Happiness" />
        <MoodInput label="Energy" />
        <MoodInput label="Anxiety" />
        <MoodInput label="Irritability" />
        <MoodInput label="Willpower" />
        <Box direction="row"><Button label="Save" onClick={save} /> </Box>
    </Box>
); 