import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const CardContainer = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: theme.spacing(.5),
    margin: 'auto',
    maxWidth: '320px',
}));


const ProfileImage = styled(Avatar)(({ theme }) => ({
    width: '100%',
    height: '100%',
    marginBottom: theme.spacing(2),
}));

const SocialIcons = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    '& svg': {
        fontSize: '22px',
        margin: '0 8px',
        color: '#555',
        cursor: 'pointer',
    },
}));

const OuterContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6),
    background: 'white',
    margin: '0 auto',
    width: '70%',
}));

const MotionCard = motion(OuterContainer)

const teamMembers = [
    {
        name: 'Pamela Lopez',
        role: 'CEO',
        image: 'https://demo.templateflip.com/super/images/team/emp-1.jpg',
    },
    {
        name: 'Betty West',
        role: 'Software Developer',
        image: 'https://demo.templateflip.com/super/images/team/emp-2.jpg',
    },
    {
        name: 'Jeremy Little',
        role: 'Digital Marketing',
        image: 'https://demo.templateflip.com/super/images/team/emp-3.jpg',
    },
    {
        name: 'Melissa Long',
        role: 'Software Developer',
        image: 'https://demo.templateflip.com/super/images/team/emp-4.jpg',
    },
    {
        name: 'John Doe',
        role: 'Project Manager',
        image: 'https://demo.templateflip.com/super/images/team/emp-5.jpg',
    },
    {
        name: 'Michael Brown',
        role: 'UX Designer',
        image: 'https://demo.templateflip.com/super/images/team/emp-6.jpg',
    },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


const OurTeam = () => {
    return (
        <MotionCard
            initial={{ opacity: 0, scale: .5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{duration:.5 , ease:'easeIn'}}
        >
            <Slider {...sliderSettings} >
                {teamMembers.map((member, index) => (
                    <Box key={index}>
                        <CardContainer>
                            <ProfileImage variant='square' src={member.image} alt={member.name} />
                            <Typography variant="h6" fontWeight="bold">
                                {member.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {member.role}
                            </Typography>
                            <SocialIcons>
                                <TwitterIcon />
                                <FacebookIcon />
                                <InstagramIcon />
                                <LinkedInIcon />
                            </SocialIcons>
                        </CardContainer>
                    </Box>
                ))}
            </Slider>
        </MotionCard>
    );
};

export default OurTeam;
