import React from "react";

import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import ContactForm from "./components/ContactForm";

import hero from "./assets/images/IMG_20200704_195213.jpg";

import { neutral, secondaryFont, typeScale } from "./utils";
import styled from "@emotion/styled";

import { Icon } from "@iconify/react";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import SocialIcon from "./components/SocialIcon";
// npm install --save-dev @iconify/react @iconify/icons-bi
import arrowDown from "@iconify/icons-bi/arrow-down";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  color: ${neutral[100]};
  padding: 20px;
  font-family: ${secondaryFont};
  font-size: ${typeScale.header3};

  margin: 0 auto;

  @media (min-width: 1280px) {
    font-size: ${typeScale.header2};
  }
`;

const Description = styled.div`
  color: ${neutral[100]};
  padding: 20px;
  font-family: ${secondaryFont};
  font-size: ${typeScale.header5};
  margin: 0 auto;
  max-width: 500px;
  text-align: center;

  @media (min-width: 500px) {
    font-size: ${typeScale.header4};
  }

  @media (min-width: 1280px) {
    font-size: ${typeScale.header3};
    max-width: 700px;
  }
`;

const Hero = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  display: none;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  padding-right: 60px;
  padding-left: 60px;
  max-width: 550px;
  margin: 0 auto;
`;

const DesWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 63px - 55px);
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 1280px) {
    height: calc(100vh - 63px);
  }
`;

const Shadow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
`;

const DownIcon = styled.div`
  color: ${neutral[400]};
  margin: 0 auto;
  padding-top: 20px;
  font-size: ${typeScale.paragraph};
`;

const About = () => {
  return (
    <div>
      <AppBar />
      <Wrapper>
        <DesWrapper background={hero}>
          <Shadow>
            <Header>About Me</Header>
            <Description>
              I’m a mexican photographer. I found photography in 2016, and with
              it, a way to explore my self and the world around me. This page
              it’s a place where I can show my work to the world in the way I
              like. However, you can also find me on Instagram, but if you wanna
              enjoy my work, you can do it here.
            </Description>
            <DownIcon>
              <Icon icon={arrowDown} />
            </DownIcon>
          </Shadow>
        </DesWrapper>
        <Social>
          <SocialIcon
            icon={instagramFilled}
            text="instagram"
            height={40}
            to="https://www.instagram.com/alanmoraales/"
          />
          <SocialIcon
            icon={twitterCircleFilled}
            text="twitter"
            height={40}
            to="https://twitter.com/alanmoraaless"
          />
          <SocialIcon
            icon={githubFilled}
            text="github"
            height={40}
            to="https://github.com/alanmoraales"
          />
        </Social>
        <ContactForm />
      </Wrapper>
      <Navigation />
    </div>
  );
};

export default About;
