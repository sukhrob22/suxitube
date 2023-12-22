import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';
import moment from 'moment/moment';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '360px', md: '305px' },
                boxShadow: 'none',
                borderRadius: 0,
                color: 'rgb(248,250,252)',
            }}
        >
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{
                        width: { xs: '100%', sm: '360px', md: '305px' },
                        height: '180px',
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    background: colors.primary,
                    height: '200px',
                    position: 'relative',
                }}
            >
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography
                        my={'5px'}
                        sx={{ opacity: '.4', color: 'rgb(248,250,252)' }}
                    >
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        fontWeight={'bold'}
                        color={'rgb(248,250,252)'}
                    >
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        sx={{ opacity: '.6', color: 'rgb(248,250,252)' }}
                    >
                        {video?.snippet?.description?.slice(0, 70)}
                    </Typography>
                </Link>

                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <Stack
                        direction={'row'}
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                        color={'rgb(248,250,252)'}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                        <Typography>
                            {video?.snippet?.channelTitle}
                            <CheckCircle
                                sx={{
                                    fontSize: '12px',
                                    color: 'gray',
                                    ml: '5px',
                                }}
                            ></CheckCircle>
                        </Typography>
                    </Stack>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;

//  bu yerdagi ? so'roq belgisi bor bo'lishi mumkin yo yo bo'lishi mumkin no requairet muhim emas degan bor bo'lsa yaxshi yo bo'lsa bizga qandaydir hato chiqarmaydi
