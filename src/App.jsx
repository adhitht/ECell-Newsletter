import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BooksandPodcast from './components/BooksandPodcast'
import Startups from './components/Startups'
import Title from './components/Title'

function App() {

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{
          position: 'absolute',
          color: "#FFF",
          fontWeight: "700",
          fontSize: "27px",
          lineHeight: "140%",
          textAlign: "justify",
          fontFamily: "Overpass",
          padding: "10%",
          width: "30%",
          alignItems: 'center',
          alignContent: 'center'
        }}>
          Welcome to the riveting world of the Indian Premier League (IPL), where the boundaries of cricket and business blur, and revenue streams flow like never before. In our flagship edition of the E-Cell Newsletter of 2023,
          we delve into the business model that propels IPL to unprecedented heights. We also explore the intriguing shift in start-up dynamics during IPL 2023.
        </div>
        <img src="iplbackground.png" style={{ width: "100%" }} />
      </div>
      <Title title="BOOKS, PODCASTS & MORE" bgcolor="#172671" />
      <div style={{ display: "flex" }}>
        <BooksandPodcast title='Book Recommendation' align="left">
          <li>
            "The Millionaire Fastlane" by MJ DeMarco: With a focus on wealth creation and financial freedom,
            this book challenges conventional wisdom and offers a unique perspective on entrepreneurial success.
          </li>
          <li>"Think and Grow Rich" by Napoleon Hill: A classic in the genre, this book delves into the mindset
            and principles necessary for achieving wealth and success.</li>
        </BooksandPodcast>
        <BooksandPodcast title='Podcast Recommendation' align="right">
          <li>"How I Built This" - Hosted by Guy Raz, this podcast features interviews with
            the founders of successful companies, delving into their stories and the challenges they overcame to build their businesses</li>
          <li>"The Tim Ferriss Show": Tim Ferriss interviews world-class performers from various fields, including entrepreneurs,
            to learn about their strategies and habits for success</li>
          <li>
            Startup Stories - Mixergy. Hosted by Andrew Warner, majority of the interviews are from lesser known companies,
            and hence are fresh. They also have access to a college curriculum on Entrepreneurship
          </li>
        </BooksandPodcast >
      </div >

      <Title title="UPCOMING IITH" />
      <Title title="INCUBATED STARTUPS" />

      <div style={{ display: "flex" }}>
        <Startups title="ALOG TECH’s AIIM*" align="left">
          <p>automates product inspection and counting using static cameras or autonomous mobile robots. AIIM*
            uses computer vision and deep neural network models for identifying, inspecting, tracking and counting various products.</p>
        </Startups>
        <Startups title="BidRyd" align="right">
          <p>is a ride-hailing app developed by MeetAI, where people can request the ride service they want. The ride created by
            the passenger is recomm-ended to the best-suited drivers through BidRyd’s AI-based ride recommendation algorithm.</p>
        </Startups>
      </div>
      <div style={{ display: "flex" }}>

        <Startups title="CrystalBall" align="left">
          <p>
            is a UAV manufacturing company working on solving real-life problems in Survey, Surveillance, Agriculture and Healthcare.</p>
        </Startups>
        <Startups title="Navier Machines" align="right">
          <p>
            are building highly optimized and integrable AI-based solutions for various engineering ecosystems ranging from underwater
            robotics to geospatial satellite data analysis.
          </p>
        </Startups>
      </div>

    </>
  )
}

export default App
