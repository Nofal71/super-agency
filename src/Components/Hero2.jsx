import { Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const ActivityBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: '1px solid #d3d3d3',
    backgroundColor: '#fff',
}));

const Activities = [
    'Active Colloboration',
    'On-Schedule Delivery',
    'After Sales Services',
    '24x7 On-Support'
]

const MotionBox = motion(Box)


const Hero2 = () => {
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
            <MotionBox
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .7, ease: 'easeIn' }}
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
                    variant="h5"
                    sx={{
                        mb: 2,
                    }}
                >
                    Let our Agile Team understand and serve your needs.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vehicula auctor ornare. Nulla non ullamcorper tellus.
                    Vestibulum pulvinar eros nec tortor maximus, iaculis rutrum nibh mollis.
                </Typography>


                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                    },
                    gridTemplateRows: 'auto',
                    gap: 2,
                }}>
                    {Activities && Activities.map((e, i) => (
                        <ActivityBox key={i}>
                            <CheckCircleIcon
                                sx={{
                                    color: '#4caf50',
                                    fontSize: 30,
                                    mr: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#343a40',
                                    fontWeight: 500
                                }}
                            >
                                {e}
                            </Typography>
                        </ActivityBox>
                    ))}
                </Box>
            </MotionBox>

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
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5, ease: 'easeIn' }}
                    src="https://demo.templateflip.com/super/images/illustrations/development.svg"
                    alt="Building Websites"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
            </Box>
        </Box>
    )
}

export default Hero2
