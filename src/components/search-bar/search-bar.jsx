import { Paper, IconButton } from '@mui/material';
import { colors } from '../../constants/colors';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const changeHandler = (e) => {
        e.preventDefault();
        if (value) {
            navigate(`/search/${value}`);
            setValue('');
        }
    };

    return (
        <Paper
            component={'form'}
            onSubmit={changeHandler}
            sx={{
                border: `1px solid ${colors.secondary}`,
                pl: 2,
                boxShadow: 'none',
                backgroundColor: 'rgb(17,24,39)',
            }}
        >
            <input
                type='text'
                placeholder='Search...'
                className='search-bar'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <IconButton type='submit' sx={{ color: 'rgb(59,130,246)' }}>
                <Search />
                {/* <i className='fa-solid fa-magnifying-glass'></i> */}
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
