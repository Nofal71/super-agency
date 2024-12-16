import { Avatar, Box, Typography } from '@mui/material'
import { Stack, styled } from '@mui/system'
import { motion } from 'framer-motion';
import React from 'react'

const MotionCard = motion(Box)

const TextArea = styled(Typography)(({ }) => ({
    lineHeight: '1.5',
    padding: 3,
    overflow: 'hidden',
    flex: 1
}));

const OuterContainer = styled(Box)(({ }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'space-between',
    alignItems: 'space-between',
    padding: 4,
    overflow: 'hidden',
    boxSizing: 'border-box'
}));

const ProfileAvatar = styled(Box)(({ }) => ({
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'right',
    overflow: 'hidden',
    alignItems: 'flex-end',
}));

const clientTestimonials = [
    {
        qualification: 'Bring to the table win-win survival strategies to ensure proactive domination. User generated content in real-time will have multiple touchpoints for offshoring.',
        name: 'Aiyana',
        position: 'CEO / Specely',
        img: 'https://demo.templateflip.com/super/images/testimonials/client1.jpg'
    },
    {
        qualification: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Organically grow the holistic world view of disruptive innovation.',
        name: 'Alexander',
        position: 'CEO / Combtree',
        img: 'https://demo.templateflip.com/super/images/testimonials/client2.jpg'
    },
    {
        qualification: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise potential.',
        name: 'Ariya',
        position: 'CTO / Softone',
        img: 'https://demo.templateflip.com/super/images/testimonials/client3.jpg'
    },
    {
        qualification: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
        name: 'Braiden',
        position: 'CFO / Markoo',
        img: 'https://demo.templateflip.com/super/images/testimonials/client4.jpg'
    },
];

const ClientTestimonials = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 4,
                padding: 4,
                width: { xs: '100%', md: '70vw' },
                mx: 'auto',
                overflow: 'hidden',
            }}
        >
            {clientTestimonials.map((e, i) => (
                <MotionCard
                    initial={{ opacity: 0, x: i % 2 === 0 ? -400 : 400 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .75, ease: 'easeIn' }}
                    key={i}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        borderRadius: '8px',
                        padding: 4,
                        overflowY: 'hidden'
                    }}
                >
                    <Typography sx={{ fontSize: '5rem', alignSelf: 'flex-start', mt: -4 }}> " </Typography>
                    <OuterContainer>
                        <TextArea>{e.qualification}</TextArea>
                        <ProfileAvatar>
                            <Stack direction={'column'} spacing={1} sx={{
                                mr: 3
                            }}>
                                <Typography variant='body1' >
                                    <b>{e.name}</b>
                                </Typography>
                                <Typography variant='body2' sx={{
                                    textWrap: 'nowrap'
                                }}>
                                    {e.position}
                                </Typography>
                            </Stack>
                            <Avatar
                                src={e.img}
                                variant="square"
                                sx={{ width: 86, height: 86, borderRadius: '20px' }}
                            />
                        </ProfileAvatar>
                    </OuterContainer>
                </MotionCard>
            ))}
        </Box>
    );
};

export default ClientTestimonials;
