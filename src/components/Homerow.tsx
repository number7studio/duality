import React from 'react';
import Button from './Button';
import Box from './Box';
import { Add } from 'grommet-icons';
import Link from './Link';


interface Props {
    title: string,
    manageRoute?: string,
    quickAddRoute?: string,
}


export default ({title, manageRoute='', quickAddRoute= ''}: Props) => (
    <Box 
        justify="between" 
        alignSelf="stretch" 
        direction="row" 
        align="center" 
        alignContent="center"
        pad="small">
        <Link 
            href={manageRoute}> 
            <Button label={title}/>
        </Link>
        <Link 
            href={quickAddRoute}> 
            <Button primary icon={
                    <Add color='white'/>
                } ></Button>
        </Link>
    </Box>
);
