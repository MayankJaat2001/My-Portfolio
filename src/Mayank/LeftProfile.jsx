import styled from '@emotion/styled';
import Image from './Image/Image.png'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useRef  } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { EmojiObjectsOutlined, Code, Public, Hexagon, FiberManualRecord, CreateOutlined , Download } from '@mui/icons-material';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Link from '@mui/material/Link';
import ProjectLogo from './Image/Logo.png';
import FlipkartLogo from './Image/Flipkart.png'
import './Image/style.css';
import 'animate.css';



const MainComponent = styled(Box)`
    display:flex;
`
const Component = styled(Box)`
    margin: 1% 0 0 5%;
    width:25%;
    background-color: #C0C0C0;
    position:fixed;    
`;
const ProfileImage = styled('img')({
    margin: '10% 0 10% 30%',
    alignContent: 'center'
});
const OtherComponents = styled(Box)`
    text-align:center;
    margin-top:10%;
    margin-bottom:10%;
`;
const Social = styled(Box)`
    text-align:center;
`;
const Second = styled(Box)`
    margin-left:32%;
    margin-right:5%;
    margin-top:1%;
    width:75%
`;
const BackgroundImg = styled(Box)`
    position:absolute;
    top:0;
    
`;
const AboutSection = styled(Box)`
    color:rgba(0, 0, 0, 0.7);
    height:500px;
    margin:3%;
    animation: backInLeft; 
  animation-duration: 2s;

`
const SkillSection = styled(Box)`
    color:rgba(0, 0, 0, 0.7);
    height:700px;
    margin:3%
    animation: backInLeft; 
  animation-duration: 2s;
`
const EducationSection = styled(Box)`
    height:450px;
    margin:3%;
    animation: backInLeft; 
  animation-duration: 2s;

`;

const ExperienceSection = styled(Box)`
    height:400px;
    margin:3%;
    animation: backInLeft; 
  animation-duration: 2s;

`
const ProjectsSection = styled(Box)`
    height:400px;
    margin:3%
    animation: backInLeft; 
  animation-duration: 2s;
`;


const MyCard = styled(Box)`
    display:flex;
`;

const SkillCard = styled(Box)`
    display:flex;
    margin-left:15%:
`;
const ImageText=styled(Box)`
    color:white;
    animation: backInUp; 
  animation-duration: 2s;
`;

const Projectlogo=styled(Box)`
    display:flex;
    margin-top:5%;
    animation: backInLeft; 
  animation-duration: 2s;
`;

const LeftProfile = () => {
    const Home = useRef(null);
    const About = useRef(null);
    const Skills = useRef(null);
    const Education = useRef(null);
    const Experience = useRef(null);
    const Projects = useRef(null);

    

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
            
        }

        )
    }

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    

    return (
        
        <MainComponent>
            <Component Paperpros={{ sx: { maxHeight: '1000px' } }}>
                <ProfileImage src={Image} alt="My Photo" height={200} style={{ borderRadius: 200 / 2 }} />
                <Typography style={{ fontWeight: 600, textAlign: 'center', fontSize: 20 }}> Mayank Chaudhary </Typography>
                <Typography style={{ textAlign: 'center',color:"inherit" }}> <Link href="https://github.com/MayankJaat2001" underline="none">Engineering Student</Link> | Developer
                </Typography>
                <OtherComponents>
                    <Typography style={{ marginBottom: 5, cursor: 'pointer' }} onClick={() => scrollToSection(Home) } > HOME </Typography>
                    <Typography style={{ marginBottom: 5, cursor: 'pointer' }} onClick={() => scrollToSection(About)}> ABOUT </Typography>
                    <Typography style={{ marginBottom: 5, cursor: 'pointer' }} onClick={() => scrollToSection(Skills)}> SKILLS </Typography>
                    <Typography style={{ marginBottom: 5, cursor: 'pointer' }} onClick={() => scrollToSection(Education)}> EDUCATION </Typography>
                    <Typography style={{ marginBottom: 5, cursor: 'pointer' }} onClick={() => scrollToSection(Experience)}> EXPERIENCE </Typography>
                    <Typography style={{ cursor: 'pointer' }} onClick={() => scrollToSection(Projects)}> PROJECTS </Typography>
                </OtherComponents>
                <Typography style={{ textAlign: 'center' }}>Contact: <Link href='tel:8010082525' underline="none">+91 8010082525</Link>  </Typography>
                
                <Typography style={{ marginBottom: 10, textAlign: 'center' }}> Email: <Link href='mailto:mchaudhary0000@gmail.com'underline="none">mchaudhary0000@gmail.com</Link></Typography>
                <Social style={{ marginBottom: 20 }}>
                    <Link href='https://github.com/MayankJaat2001'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='Github' height={30} /></Link>
                    <Link href='https://www.instagram.com/mayank_jaat_up16'><img src='https://static.vecteezy.com/system/resources/previews/018/930/691/original/instagram-logo-instagram-icon-transparent-free-png.png' alt='Instagram' height={30} /></Link>
                    <Link href='https://www.linkedin.com/in/mayank-chaudhary-33b853140'><img src='https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png' alt='LinkedIN' height={30} /></Link>
                </Social>

            </Component>

            <Second>
                <img src="https://img.freepik.com/free-photo/top-view-workspace-with-laptop-notebook_23-2148430831.jpg" alt="BackgroundImage" height={'750px'} width={'100%'} />
                <BackgroundImg ref={Home}>
                    <ImageText>
                        <Typography style={{ fontSize: 80, margin: '35% 0 0 15%', fontFamily: "Quicksand", fontWeight: 600 }}>Hi!</Typography>
                        <Typography style={{ fontSize: 80, marginLeft: '15%', fontFamily: "Quicksand", fontWeight: 600 }}>I'm Mayank</Typography>
                        <Typography style={{ fontSize: 80, marginLeft: '15%', fontFamily: "Quicksand", fontWeight: 600 }}>Chaudhary</Typography>
                        <Typography style={{ marginLeft: '15%', fontFamily: "Quicksand", fontWeight: 600, fontSize: 18 }}>Computer Science amd Engineering</Typography>
                        <Typography style={{ marginLeft: '15%', fontFamily: "Quicksand", fontWeight: 600, fontSize: 18  }}>Student in <Link href="http://imsec.ac.in">IMS ENGINEERING COLLEGE</Link> 
                </Typography>
                      <Link href='https://drive.google.com/file/d/1CmwKVDDzkENn7yCn9h4VdQBh45jG0-cP/view?usp=sharing' underline="none" color="inherit"><Typography sx={{ border: 3, width:'200px' }} style={{ marginLeft: '15%',marginTop:'5%', fontFamily: 'cursive', fontWeight: 600, fontSize: 18  }}>DOWNLOAD CV <Download/ ></Typography>  </Link>
                    </ImageText>
                </BackgroundImg>
                <AboutSection ref={About}>
                    <Typography >About Me</Typography>
                    <Typography style={{ fontWeight: 600, fontSize: 24 }}>Who I Am?</Typography>
                    <Typography style={{ margin: '5% auto 5% 5%', fontSize: 19, fontFamily: 'cursive' }}>Hi I'm Mayank Chaudhary Computer Science and Engineering Student. I want to secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of my own company.</Typography>
                    <Typography style={{ margin: '5% auto 5% 5%', fontSize: 19, fontFamily: 'cursive' }}>I am a creative thinker, collaborative, have auditing skills, put attention to details and a good ability to manage the time.</Typography>
                    <MyCard>
                        <Card sx={{ maxWidth: 175, marginLeft: '5%', marginRight: '5%', borderBottom: 3, color: '#2c98f0' }}>
                            <CardContent>
                                <EmojiObjectsOutlined style={{ fontSize: 40, color: '#2c98f0', marginBottom: '18%' }} />
                                <Typography style={{ fontWeight: 600, fontFamily: 'sans-serif' }}>Creative Thinker</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 175, marginRight: '5%', borderBottom: 3, color: '#F17A60' }}>
                            <CardContent>
                                <Code style={{ fontSize: 40, color: '#F17A60', marginBottom: '18%' }} />
                                <Typography style={{ fontWeight: 600, fontFamily: 'sans-serif' }}>Java Developer</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 175, marginRight: '5%', borderBottom: 3, color: '#C860F1' }}>
                            <CardContent>
                                <Public style={{ fontSize: 40, color: '#C860F1', marginBottom: '18%' }} />
                                <Typography style={{ fontWeight: 600, fontFamily: 'sans-serif' }}>Web Developer</Typography>
                            </CardContent>
                        </Card>
                    </MyCard>
                </AboutSection>
                <SkillSection ref={Skills}>
                    WHAT I DO?
                    <Typography style={{ fontSize: 24, fontFamily: 'inherit', fontWeight: 600 }}>HERE ARE SOME OF MY SKILLS</Typography>
                    <SkillCard style={{ marginTop: '5%' }}>
                        <Card sx={{ maxWidth: 225, marginRight: '5%', borderBottom: 3, color: '#F17A60' }}>
                            <CardContent>
                                <Hexagon style={{ fontSize: 60, color: '#F17A60', marginBottom: '8%', marginLeft: '30%' }} />
                                <Typography style={{ fontWeight: 600, fontFamily: 'sans-serif', color: 'black', marginBottom: '8%', marginLeft: '35%' }}>Java</Typography>
                                <Typography style={{ color: "#ADA2B2 " }}>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 225, marginRight: '5%', borderBottom: 3, color: '#C526F0' }}>
                            <CardContent>
                                <Hexagon style={{ fontSize: 60, color: '#C526F0', marginBottom: '8%', marginLeft: '30%' }} />
                                <Typography style={{ fontWeight: 600, fontFamily: 'sans-serif', color: 'black', marginBottom: '8%', marginLeft: '22%' }}>HTML & CSS</Typography>
                                <Typography style={{ color: "#ADA2B2 " }}>Web Designing using HTML & CSS and Java script to make websites.</Typography>

                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 225, marginRight: '5%', borderBottom: 3, color: '#4768F1' }}>
                            <CardContent>
                                <Hexagon style={{ fontSize: 60, color: '#4768F1', marginBottom: '8%', marginLeft: '30%' }} />
                                <Typography style={{ fontWeight: 600, fontFamily: 'sans-serif', color: 'black', marginBottom: '8%', marginLeft: '35%' }}>C++</Typography>
                                <Typography style={{ color: "#ADA2B2 " }}>C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.</Typography>

                            </CardContent>
                        </Card>

                    </SkillCard>
                    <Card sx={{ maxWidth: 225, marginRight: '5%', borderBottom: 3, color: '#47F19C', marginTop: '5%' }}>
                        <CardContent>
                            <Hexagon style={{ fontSize: 60, color: '#47F19C', marginBottom: '8%', marginLeft: '30%' }} />
                            <Typography style={{ fontWeight: 600, fontFamily: 'sans-serif', color: 'black', marginBottom: '8%', marginLeft: '35%' }}>SQL</Typography>
                            <Typography style={{ color: "#ADA2B2 " }}>Works on MySQL to store the data and it's modification.</Typography>

                        </CardContent>
                    </Card>
                </SkillSection>

                <EducationSection ref={Education}>
                    EDUCATION
                    <Typography style={{ fontSize: 24, fontFamily: 'inherit', fontWeight: 600 }}>Here About My Education</Typography>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ backgroundColor: '#807583', width: '100%' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Bechelor of Technology in CSE</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '5%' }}>
                                Completed Bachelor of Technology in Computer Science and Engineering from IMS Engineering College,Ghaziabad.
                            </Typography>
                            <Typography style={{ margin: '5% auto 5% 5%' }}> <FiberManualRecord style={{ fontSize: '55%' }} /> 2019-23</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ backgroundColor: '#807583', width: '100%', marginTop: '2%' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Intermediate</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '5%' }}>
                                Completed my intermediate education from Indraprastha Public School with the additional subject of Information Technology.
                            </Typography>
                            <Typography style={{ margin: '5% auto 5% 5%' }}> <FiberManualRecord style={{ fontSize: '55%' }} /> 2018-19</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ backgroundColor: '#807583', width: '100%', marginTop: '2%' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>High School</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '5%' }}>
                                Completed my High School education from Indraprastha Public School.
                            </Typography>
                            <Typography style={{ margin: '5% auto 5% 5%' }}> <FiberManualRecord style={{ fontSize: '55%' }} /> 2016-17</Typography>
                        </AccordionDetails>
                    </Accordion>

                </EducationSection>
                <ExperienceSection ref={Experience}>
                    EXPERIENCE
                    <Typography style={{ fontSize: 24, fontFamily: 'inherit', fontWeight: 600 }}>EXPERIENCE/INTERNSHIPS</Typography>
                    <Timeline>
                        <TimelineItem>

                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <CreateOutlined />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Java Technology at IMS ENGINEERING COLLEGE, Ghaziabad (Aug 2020-Oct 2020)
                                </Typography>

                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>

                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <CreateOutlined />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    FULL STACK WEB DEVELOPMENT at UPSKILLZ EDUTECH (July 2022–Sep 2022)
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        </Timeline>
                </ExperienceSection>
                <ProjectsSection ref={Projects}>
                    PROJECTS
                    <Typography style={{ fontSize: 24, fontFamily: 'inherit', fontWeight: 600 }}>PERSONAL PROJECTS</Typography>
                     
                    <Projectlogo> 
        
                        <Box style={{marginLeft:'5%', alignItem:'center'}}>
                            <div className="wrapper" >
                            <div className="image">
                            <img src='https://3.imimg.com/data3/MU/DM/MY-9763253/student-management-system.png' alt='Student Management System' height={300}/>
                            <div className="content">
                                <h2>Student Management System</h2>
                                <ul>
                                <li>An App to store Student Data.</li>
                                <li>Used to Insert Data, View Data, Delete Stored Rows and Exit.</li>
                                <li>Tech Stack- Java, Swing Framework and MySQL.</li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </Box>
                        <Box style={{marginLeft:'5%', alignItem:'center'}}>
                            <div className="wrapper" >
                            <div className="image">
                            <img src={ProjectLogo} alt='Crop Recommendation System' height={300}/>
                            <div className="content">
                                <h2>Crop Recommendation System</h2>
                                <ul>
                                <li>A Website which Tells Weather Forecast, Recommends Crop and Production of Crop.</li>
                                <li>Recommend Crop by Giving State, District, Season, Year and Area.</li>
                                <li>Predict Production by Giving State, District, Season, Crop, Year and Area.</li>
                                <li>Tech Stack- HTML, CSS, JS, BootStrap and Machine Learning.</li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </Box>
                    </Projectlogo> 
                        <Box style={{marginLeft:'5%', marginTop:'5%', alignItem:'center'}} class="animate__animated animate__backInLeft animate__duration-2s">
                            <div className="wrapper" >
                            <div className="image">
                            <img src={FlipkartLogo} alt='FlipkartLogo' height={300}/>
                            <div className="content">
                                <h2>Flipkart Clone</h2>
                                <ul>
                                <li>It is a Commercial Website looks like Flipkart.</li>
                                <li>We have Product Details, Cart, and we can Search a Product.</li>
                                <li>Tech Stack- React.js, Material UI, Redux, Node.js, Express.js, MongoDB.</li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </Box>

                      
                          
                    
                   
                </ProjectsSection>
                
                
            </Second>
        </MainComponent>
    )

}

export default LeftProfile;
