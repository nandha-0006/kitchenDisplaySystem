import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/Restaurant.png';
import imgDetail2 from '../assets/Fast-Food.png';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Sustainability and Ethical Practices: We have a best Ambians'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    We are committed to minimizing our environmental impact and promoting sustainable practices. From our eco-friendly packaging to our focus on responsible sourcing and waste reduction, we strive to make a positive difference in our industry and community.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '70%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}

            style={{display: "flex", alignItems: "center", justifyContent: "center"}}

            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "70%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Your TasteBuds, In Our Hands: Safeguarding Your Peace of Mind Every Step of the Way'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Eating is a necessity, but cooking is an art <br /> 
                    Food is the ingredient that binds us together
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;