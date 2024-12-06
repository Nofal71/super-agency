import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);

const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: color || '#1a90ff',
    },
}));

const skills = [
    { label: 'Web Design', value: 90, color: '#343a40' },
    { label: 'Mobile App', value: 90, color: '#37bc9b' },
    { label: 'Graphic Design', value: 80, color: '#343a40' },
    { label: 'Digital Marketing', value: 75, color: '#37bc9b' }
];

const Hero3 = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '70dvh',
                    my: 3,
                    gap: 4,
                    px: { xs: 2, md: 4 },
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <motion.img
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .5, ease: 'easeIn' }}
                        src="https://demo.templateflip.com/super/images/illustrations/creative-team.svg"
                        alt="Building Websites"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </Box>
                <MotionBox
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeIn' }}
                    sx={{
                        p: { xs: 2, md: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        width: { xs: '100%', md: '50%' },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 2,
                            fontWeight: 'bold',
                        }}
                    >
                        Our Expert Team delivers the best result.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: 'grey' }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
                    </Typography>
                    <Stack spacing={2} width={'100%'} direction={'column'}>
                        {skills.map((skill, index) => (
                            <React.Fragment key={index}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="body1">{skill.label}</Typography>
                                    <Typography variant="body1">{skill.value}%</Typography>
                                </Box>
                                <BorderLinearProgress variant="determinate" value={skill.value} color={skill.color} />
                            </React.Fragment>
                        ))}
                    </Stack>
                </MotionBox>
            </Box>
        </>
    );
};

export default Hero3;
