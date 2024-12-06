import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const MotionBox = motion(Box);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{
                    p: 3,
                    border: `2px solid #E0E0E0`,
                    borderRadius: '30px',
                    borderTopRightRadius: '0',
                    borderTopLeftRadius: '0',
                    borderTop: 'none',
                    width: '100%',
                    boxSizing: 'border-box'
                }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Hero4 = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabContent = [
        {
            label: "Experience",
            content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
        },
        {
            label: "Flexibility",
            content: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
        },
        {
            label: "Results",
            content: "Completely synergize resource taxing relationships via premier niche markets.",
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70dvh',
                my: '100px',
                gap: 4,
                px: { xs: 2, md: 4 },
            }}
        >
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
                    We believe in <strong>Long Term Partnership.</strong>
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'grey' }}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum,
                    nullam tempor malesuada laoreet tempus blandit pretium etc.
                </Typography>



                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                    sx={{
                        width: '100%',
                        '& .MuiTab-root': {
                            minWidth: 'auto',
                            padding: '8px 16px',
                            mx: 0,
                            textTransform: 'none',
                            color: 'grey',
                            borderBottom: `2px solid #E0E0E0`,
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        },
                        '& .MuiTab-root.Mui-selected': {
                            color: theme.palette.text.primary,
                            fontWeight: 'bold',
                            border: '2px solid #E0E0E0',
                            borderRadius: '20px',
                            borderBottom: 'none',
                            borderBottomRightRadius: '0',
                            borderBottomLeftRadius: '0'
                        },
                    }}
                >
                    {tabContent.map((tab, index) => (
                        <Tab
                            key={index}
                            sx={{
                                padding: 0,
                                display: 'flex',
                                width: 1 / 3
                            }}
                            label={
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Box
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: '50%',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            backgroundColor: '#525252'
                                        }}
                                    >
                                        {index + 1}
                                    </Box>
                                    <Typography>{tab.label}</Typography>
                                </Stack>
                            }
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>

                <Box sx={{ width: '100%' }}>
                    {tabContent.map((tab, index) => (
                        <TabPanel
                            key={index}
                            value={value}
                            index={index}
                            dir={theme.direction}
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Typography variant="body2" sx={{ mb: 2, color: '#525252', maxWidth: '80%', mx: 'auto' }}>
                                {tab.content}
                            </Typography>
                            <Button
                                variant="text"
                                endIcon={<span>→</span>}
                                sx={{
                                    color: '#474747',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                }}
                            >
                                Learn More
                            </Button>
                        </TabPanel>
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
                    src="https://demo.templateflip.com/super/images/illustrations/work-chat.svg"
                    alt="Building Websites"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
            </Box>
        </Box>
    );
};

export default Hero4;
