import React from 'react'
import { Box,Stack,Typography ,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'220px',xs:'70px'},
        ml:{sm:'50px'}
    }}position='relative'>
        <Typography color='#FF2625'
        fontWeight='600' fontSize='50px'>
            Figness Club
        </Typography>
        <Typography fontWeight={700}
        xs={{fontSize:{lg:'44px',xs:'40px'}
        }}
        mb='2px'mt='3px'
        >
            Sweat,Smile<br/>and Repeat
        </Typography>
        <Typography fontSize='22px'
        lineHeight='35px'mb={4}>
            Checkout the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises'
        sx={{backgroundColor:'#FF2625',padding:'25px'}}>
            Explore Exercises
        </Button>
        <Typography 
        fontWeight={600}
        color='#FF2625'
        sx={{
            opacity:0.1,
            display:{lg: 'block',xs:'none'}
        }}
        fontSize='200px'>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner