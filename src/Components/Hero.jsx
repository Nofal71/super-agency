import { ArrowRight } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';

const MotionText = motion(Typography)
const MotionStack = motion(Stack)

const Hero = () => {
    return (
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
                    variant="h3"
                    sx={{
                        fontSize: 'calc(1.375rem + 1.5vw)',
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        mb: 2,
                    }}
                >
                    Your Success is Our Mission
                </Typography>
                <MotionText
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                    variant="body1"
                    sx={{
                        mb: 4,
                        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                    }}
                >
                    Leverage agile frameworks to provide a robust synopsis for high-level
                    overviews. Iterative approaches to corporate strategy foster
                    collaborative thinking.
                </MotionText>

                <MotionStack
                    initial={{ opacity: 0, y: 100, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    direction="row"
                    spacing={2}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                    width="100%"
                >
                    <Button
                        variant="contained"
                        endIcon={<ArrowRight />}
                        sx={{
                            backgroundColor: '#FFD700',
                            color: '#000',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: '20px',
                            px: 3,
                            py: 1,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#FFC000',
                            },
                        }}
                    >
                        Get Started
                    </Button>
                    <VideoModal videoSrc='https://youtu.be/aqz-KE-bpKQ' />
                </MotionStack>
            </Box>

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
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5, ease: 'easeIn' }}
                    src="https://demo.templateflip.com/super/images/illustrations/building_websites.svg"
                    alt="Building Websites"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                    }}
                />
            </Box>
        </Box>
    );
};

export default Hero;
