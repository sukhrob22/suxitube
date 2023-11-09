import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => {
    return (
        <Box minHeight={'90vh'}>
            <Stack
                direction={'row'}
                justifyContent={'cemter'}
                alignItems={'center'}
                height={'80%'}
            >
                <CircularProgress />
            </Stack>
        </Box>
    );
};

export default Loader;
