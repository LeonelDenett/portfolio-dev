// Next
import { useState } from 'react';
// Mui Components
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { duration } from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Home() {
  const [dashboard, setDashboard] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    handleDashboard()
    setChecked((prev) => !prev)
    // setTimeout(() => {
    //   setChecked((prev) => !prev)
    // }, 500);
  };

  const handleDashboard = () => {
    setDashboard((prev) => !prev);
    // setTimeout(() => {
    //   console.log('3s');
    //   setDashboard((prev) => !prev);
    // }, 250);
  };

  console.log("checked:", checked)
  console.log("dashboard:", dashboard)
  return (
    <Box className={styles.dashboard}>
      {/* Header */}
      <Box className={styles.header}>
        <Typography sx={{fontSize: '1rem'}}>LD</Typography>
        <Box className={styles.headerIcons}>
          <GitHubIcon sx={{mr:2}} fontSize="large"/>
          <LinkedInIcon fontSize="large"/>
        </Box>
      </Box>
      {/* Main */}
      <Box className={styles.main}>
        {/* Title */}
        <Typography color="secondary" component="h1" variant="h1" mb={5}>Welcome.</Typography>
        {/* Content */}
        <Box className={styles.container}>
          <Divider sx={{color: 'red', backgroundColor: 'green', width: '0.1rem', minHeight: "15rem", maxHeight: '15rem'}} orientation="vertical" flexItem/>
          {/* Dashboard */}
          <Collapse timeout={1000} orientation='horizontal' in={dashboard} unmountOnExit style={{width: '20rem'}}>
            <Swiper
              spaceBetween={0}
              style={{width: '20rem', maxHeight: "15rem"}}
              pagination={true}
              modules={[Pagination]}
            >
              {/* Swiper Slide 1 */}
              <SwiperSlide>
                <Box className={styles.mediaContainer} style={dashboard ? {opacity: 1} : {opacity: 0}}>
                  <Typography variant="p" color="primary" sx={{fontSize: '0.9rem', width: '18rem'}}>
                    My name is Leonel Denett, I'm a full stack developer based in Bretagne, France.<br/>
                    I have developed websites and mobile applications for e-commerce booking platforms.
                  </Typography>
                  <br/><br/>
                  <Typography variant="p" color="primary" sx={{fontSize: '0.9rem', width: '18rem'}}>
                    I'm passionate about beautiful interfaces and intuitively implemented UX.
                  </Typography>
                </Box>
              </SwiperSlide>
              {/* Swiper Slide 2 */}
              <SwiperSlide>
                <Box className={styles.mediaContainer} style={dashboard ? {opacity: 1, transition: "all 2s", overflow: "hidden"} : {opacity: 0, transition: "all 3s", backgroundColor: "yellow"}}>
                  <Typography variant="p" color="primary" sx={{fontSize: '0.9rem', width: '18rem'}}>
                    Messi 2, I'm a full stack developer based in Bretagne, France.<br/>
                    I have developed websites and mobile applications for e-commerce booking platforms.
                  </Typography>
                  <br/><br/>
                  <Typography variant="p" color="primary" sx={{fontSize: '0.9rem', width: '18rem'}}>
                    I'm passionate about beautiful interfaces and intuitively implemented UX.
                  </Typography>
                </Box>
              </SwiperSlide>
              {/* Swiper Slide 3 */}
              <SwiperSlide>
                <Box className={styles.mediaContainer} style={dashboard ? {opacity: 1, transition: "all 2s", overflow: "hidden"} : {opacity: 0, transition: "all 3s", backgroundColor: "yellow"}}>
                  <Typography variant="p" color="primary" sx={{fontSize: '0.9rem', width: '18rem'}}>
                    Messi 3, I'm a full stack developer based in Bretagne, France.<br/>
                    I have developed websites and mobile applications for e-commerce booking platforms.
                  </Typography>
                  <br/><br/>
                  <Typography variant="p" color="primary" sx={{fontSize: '0.9rem', width: '18rem'}}>
                    I'm passionate about beautiful interfaces and intuitively implemented UX.
                  </Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Collapse>
          {/* Projects */}
          <Collapse timeout={1000} orientation='horizontal' in={checked} en unmountOnExit>
            <Box className={styles.projects} style={checked ? {opacity: 1} : {opacity: 0}}>
              <Typography variant="p" color="primary" sx={{fontSize: '0.9rem'}}>
                Messi van Gemert is a Netherlands-based web developer, whose personal website shows how easy
                it is to include a lot of information on a dffddfdfdf dfdfdfdfdf single page without the page becoming too busy or crowded.
              </Typography>
            </Box>
          </Collapse>
        </Box>
        {/* Projects List */}
        <Box className={styles.projects}>
          <Typography color="secondary" component="h2" variant="h2" mt={5} mb={3}>Projects</Typography>
          <div className={styles.coolBox}>
          </div>
          <Box className={styles.projectsList}>
            <List disablePadding>
              <ListItem onClick={handleChange} className={styles.listItems} disablePadding>
                <Typography sx={{fontSize: '1.2rem'}}>Charles Cantin</Typography>
              </ListItem>
              <ListItem onClick={handleChange} className={styles.listItems} disablePadding>
                <Typography sx={{fontSize: '1.2rem'}}>BBQ Recepis</Typography>
              </ListItem>
              <ListItem className={styles.listItems} disablePadding>
                <Typography sx={{fontSize: '1.2rem'}}>Ostheopat Andrea</Typography>
              </ListItem>
              <ListItem className={styles.listItems} disablePadding>
                <Typography sx={{fontSize: '1.2rem'}}>WeekFood</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        {/* Projects Data */}
        <Box style={dashboard ? {opacity: 1, transition: "all 2s", backgroundColor: "purple", width: "250px", height: "250px", overflow: "hidden"} : {opacity: 0, transition: "all 3s", backgroundColor: "yellow", width: "250px", height: "250px"}}>
            <p>dfsjdfsjksdfjkdsfjksdfjksdfjdfsjnsdfnkkndsjn</p>
        </Box>
        {/* <Box style={{height: "150px", MaxWidth: '100%', backgroundColor: 'red',overflow: "hidden"}}>
          <Collapse orientation='horizontal' in={checked} style={{backgroundColor: 'purple', maxWidth: '100%'}}>
                <Typography style={{overflow: "hidden"}} variant="h6">Hola messisdfdsffsddsfsdfsdfsdfsdfdfsdsf
                sdfdfsfsdfsdfdsfdssdffdsfdsdsfdfssdfdfsfsdfsdfdsfdssdffdsfdsdsfdfssdfdfsfsdfsdfdsfdssdffdsfdsdsfdfssdfdfsfsdfsdfdsfdssdffdsfdsdsfdfssdfdfsfsdfsdfdsfdssdffdsfdsdsfdfssdfdfsfsdfsdfdsfdssdffdsfdsdsfdfssdfdfsfsdfsdfdsfdssdffdsfdsdsfdfs
                </Typography>
          </Collapse>
        </Box> */}
      </Box>
    </Box>
  )
}
