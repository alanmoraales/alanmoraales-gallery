import React from "react";

import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";

import hero from "./assets/images/IMG_20200704_195213 (1).jpg";

import { neutral, secondaryFont, typeScale } from "./utils";
import styled from "@emotion/styled";

import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import SocialIcon from "./components/SocialIcon";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  color: ${neutral[100]};
  background-color: ${neutral[500]};
  padding: 20px;
  font-family: ${secondaryFont};
  font-size: ${typeScale.header4};
`;

const Description = styled.div`
  color: ${neutral[600]};
  background-color: ${neutral[300]};
  padding: 20px;
  font-family: ${secondaryFont};
  font-size: ${typeScale.header5};
`;

const Hero = styled.img`
  width: 100%;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  padding-right: 60px;
  padding-left: 60px;
`;

const About = () => {
  return (
    <div>
      <AppBar />
      <Wrapper>
        <Header>About Me</Header>
        <Hero src={hero}></Hero>
        <Description>
          I’m a mexican photographer. I found photography in 2016, and with it,
          a way to explore my self and the world around me. This page it’s a
          place where I can show my work to the world in the way I like.
          However, you can also find me on Instagram, but if you wanna enjoy my
          work, you can do it here.
        </Description>
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
      </Wrapper>
      <Navigation />
    </div>
  );
};

export default About;
