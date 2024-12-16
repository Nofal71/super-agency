import React, { useContext, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PaletteIcon from '@mui/icons-material/Palette';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Hero2 from '../../Components/Hero2';
import Hero3 from '../../Components/Hero3';
import { motion } from 'framer-motion';
import Hero4 from '../../Components/Hero4';
import ServiceCard from '../../Components/ServiceCard';
import { DesignServices, Brush, Code } from '@mui/icons-material';
import Counter from '../../Components/CountSetup';
import { ScrollContext } from '../../Context/NavigationRefs';
import OurTeam from '../../Components/OurTeam';
import ClientTestimonials from '../../Components/ClientTestimonials';
import Contact from '../../Components/Contact';


const CardContainer = styled(Box)(({ theme }) => ({
    width: { xs: '90%', sm: 150 },
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    padding: theme.spacing(1.5),
    transition: '0.3s ease',
}));

const MotionCard = motion(CardContainer)
const MotionBox = motion(Box)

const serviceData = [
    {
        icon: DesignServices,
        heading: 'Web Design',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    },
    {
        icon: Brush,
        heading: 'Graphic Design',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    },
    {
        icon: Code,
        heading: 'UI/UX',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    },
];


const cardData = [
    {
        icon: PaletteIcon,
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        fontSize: 40,
    },
    {
        icon: FeedbackIcon,
        title: 'Feedback',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        fontSize: 45,
    },
    {
        icon: EventAvailableIcon,
        title: 'Execution',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        fontSize: 50,
    },
    {
        icon: SupportAgentIcon,
        title: 'Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        fontSize: 42,
    },
];

const images = [
    'https://demo.templateflip.com/super/images/clients/client1.png',
    'https://demo.templateflip.com/super/images/clients/client2.png',
    'https://demo.templateflip.com/super/images/clients/client3.png',
    'https://demo.templateflip.com/super/images/clients/client4.png',
    'https://demo.templateflip.com/super/images/clients/client5.png',
    'https://demo.templateflip.com/super/images/clients/client6.png',
    'https://demo.templateflip.com/super/images/clients/client7.png'
]



const Work = () => {

    const refs = useContext(ScrollContext)

    useEffect(() => {
        console.log(refs.services, 'ref')
    }, [refs])

    return (
        <>
            <Box
                sx={{
                    mt: { xs: 10, md: 15 },
                    textAlign: 'center',
                    mx: 'auto',
                    px: 3,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Work With Us
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 5 }}>
                    Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative
                    approaches to corporate strategy foster collaborative thinking.
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        gap: 3,
                        px: 5
                    }}
                >
                    {cardData.map((card, index) => (
                        <MotionCard
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                ease: 'easeIn',
                            }}
                            viewport={{ once: true }}
                            style={{
                                padding: '16px',
                                borderRadius: '8px',
                                background: '#f8f9fa',
                                textAlign: 'center',
                                width: '100%',
                                maxWidth: '300px',
                            }}
                        >
                            <Box sx={{ fontSize: card.fontSize, color: '#343a40', mb: 2 }}>
                                <card.icon style={{ fontSize: card.fontSize }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {card.description}
                            </Typography>
                        </MotionCard>
                    ))}

                </Box>


                <Hero2 />
                <Hero3 />
                <Hero4 />

                <Box
                    sx={{
                        mt: { xs: 10, md: 15 },
                        textAlign: 'center',
                        mx: 'auto',
                        px: 3,
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Trusted By
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 5 }}>
                        Collaboratively administrate empowered markets via plug-and-play networks.
                    </Typography>
                    <MotionBox
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1, transition: 'scale 1s ease , opacity 1s ease' }}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            px: 4,
                            flexWrap: 'wrap'
                        }} >
                        {
                            images && images.map((image, index) => (
                                < img src={image} key={index} alt='img' />
                            ))
                        }
                    </MotionBox>
                </Box>
            </Box>

            {/* Services */}

            <Box
                ref={refs.services}
                sx={{
                    mt: 3,
                    pt: 1,
                    width: '100%',
                    background: '#E0E0E0'
                }}>
                <Box sx={{
                    my: 10,
                    maxWidth: { xs: 'auto', md: '70dvw' },
                    mx: 'auto',
                    textAlign: 'center'
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 5 }}>
                        Our Services
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 5 }}>
                        Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 4,
                        py: 5,
                    }}
                >
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                ease: 'easeIn',
                            }}
                            viewport={{ once: true }}
                        >
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                heading={service.heading}
                                para={service.para}
                            />
                        </motion.div>
                    ))}
                </Box>

                <Counter />
            </Box>
            <OurTeam />
            <ClientTestimonials />
            <Contact />
        </>
    );
};

export default Work;
