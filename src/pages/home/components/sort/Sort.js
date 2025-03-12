import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { KeyboardArrowDown } from '@mui/icons-material';

const Sort = ({ changeSort }) => {
    const [sortBy, setSortBy] = useState('');

    const handleChange = event => {
        changeSort(event.target.value);
        setSortBy(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 180 }}>
            <FormControl style={{ width: '100%' }} >
                <InputLabel style={{ color: 'white' }} id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sort By"
                    value={sortBy}
                    onChange={handleChange}
                    style={{ background: '#1F1D2B', color: 'white' }}
                    IconComponent={() => <KeyboardArrowDown />}
                >
                    <MenuItem value='price'>Price</MenuItem>
                    <MenuItem value='title'>Title</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Sort