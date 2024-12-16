import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const Contact = () => {
    return (
        <>
            <Typography variant="h4" textAlign="center">
                Contact Us
            </Typography>
            <Box
                sx={{
                    py: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    gap: 1,
                    alignItems: 'center',
                    width: '100%',
                    px: { xs: '0', sm: 5 }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: 2,
                        backgroundColor: '#f4f6f8',
                        minWidth: '30%',
                        padding: '50px 40px',
                    }}
                >
                    <Stack direction="column" width={1} spacing={3}>
                        <InputLabel
                            size="small"
                            sx={{
                                fontSize: '.95rem',
                            }}
                        >
                            Name
                        </InputLabel>
                        <TextField
                            sx={{
                                backgroundColor: 'white',
                            }}
                            fullWidth
                            size="small"
                        />
                    </Stack>
                    <Stack direction="column" width={1} spacing={3}>
                        <InputLabel
                            size="small"
                            sx={{
                                fontSize: '.95rem',
                            }}
                        >
                            Email
                        </InputLabel>
                        <TextField
                            sx={{
                                backgroundColor: 'white',
                            }}
                            fullWidth
                            size="small"
                        />
                    </Stack>
                    <Stack direction="column" width={1} spacing={3}>
                        <InputLabel
                            size="small"
                            sx={{
                                fontSize: '.95rem',
                            }}
                        >
                            Message
                        </InputLabel>
                        <TextField
                            sx={{
                                backgroundColor: 'white',
                            }}
                            multiline
                            rows={4}
                            fullWidth
                            size="small"
                        />
                    </Stack>
                    <Button
                        sx={{
                            backgroundColor: 'yellow',
                            mr: 'auto',
                        }}
                    >
                        Send
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignSelf: 'stretch',
                        p: 5,
                    }}
                >
                    <Stack spacing={3} direction="column" sx={{ mb: 'auto' }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: '900',
                            }}
                        >
                            Let’s talk how we can help you!
                        </Typography>
                        <Typography variant="body1">
                            If you like to work with us then drop us a message using the contact form.
                        </Typography>
                        <Typography variant="body1">See you!</Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} sx={{ mt: 'auto' }}>
                        <Typography variant="body2" sx={{ textWrap: 'nowrap' }}>
                            Email : <b>super-agency@company.com</b>
                        </Typography>
                        <Typography variant="body2" sx={{ textWrap: 'nowrap' }}>
                            Skype : <b>username@skype.com</b>
                        </Typography>
                        <Typography variant="body2" sx={{ textWrap: 'nowrap' }}>
                            Phone : <b>+0718-111-0011</b>
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Contact;
