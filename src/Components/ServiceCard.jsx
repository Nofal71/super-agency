import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ServiceCard = ({ icon: Icon, heading, para }) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '300px',
                position: 'relative',
                px: 2,
            }}
        >
            {/* Icon Container */}
            <Paper
                sx={{
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80px',
                    height: '80px',
                    mb: -4,
                    zIndex: 1,
                }}
                elevation={3}
            >
                <Icon sx={{ fontSize: '40px', color: '#1976d2' }} />
            </Paper>

            {/* Content Container */}
            <Paper
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    pt: 6,
                    pb: 4,
                    px: 2,
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                elevation={2}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                >
                    {para}
                </Typography>
            </Paper>
        </Box>
    );
};

export default ServiceCard;
