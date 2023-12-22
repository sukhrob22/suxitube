import { useState, useEffect } from 'react';
import { Stack, Box, Container, Typography } from '@mui/material';
import { colors } from '../../constants/colors';
import { Category, Videos } from '../';
import { ApiService } from '../../service/api.service';

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    const selectedCategoryHandler = (category) => setSelectedCategory(category);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(
                    `search?part=snippet&q=${selectedCategory}`
                );
                setVideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        // pastgagi kabi ham qilib qo'ysak bo'ladi tepadagidan birdan qandaydir hatolarni to'g'irlash
        // uchun try catchdan ham foydalanganmiz pastdagi promse yordamida qilingan
        // ApiService.fetching('search').then((data) => setVideos(data));
    }, [selectedCategory]);

    return (
        <Stack sx={{ backgroundColor: 'rgb(17,24,39)' }}>
            <Category
                selectedCategoryHandler={selectedCategoryHandler}
                selectedCategory={selectedCategory}
            />
            <Box p={2} sx={{ height: '90vh' }}>
                <Container maxWidth={'90%'}>
                    <Typography
                        variant={'h4'}
                        fontWeight={'bold'}
                        mb={2}
                        color={'rgb(248,250,252)'}
                    >
                        {selectedCategory}{' '}
                        <span style={{ color: colors.secondary }}>videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
