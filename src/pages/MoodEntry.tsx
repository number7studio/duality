import React from 'react';
import { Grid, Box, RangeInput, FormField, Text, Button } from 'grommet';

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
                        setValue(event.target.value)
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