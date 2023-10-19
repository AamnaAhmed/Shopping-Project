import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import aboutImage from "../Images/about/a6.jpg"
import { LoremIpsum } from 'react-lorem-ipsum';
import banner from "../Images/about/1.mp4"


export default function AboutCompo ({mainTitle}) {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 my-10 gap-8 flex justify-center items-center">
           <div>
             <img src={aboutImage}/>
           </div>
           <div>
              <h1 className="text-4xl font-bold mb-4">{mainTitle}</h1>
              <p>{<LoremIpsum p={2} avgSentencesPerParagraph={2} avgSentencesPerParagraph={5}/> }</p>
              
              <marquee className="mt-5" bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">{<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={1}/>}</marquee>
           </div>
        </div>
    )
}