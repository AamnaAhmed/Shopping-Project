import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import banner from "../Images/about/1.mp4"


export default function AboutVideo () {
    return (
      <div className="container text-center mb-10">
        <div className="my-5">
          <h2 className="text-3xl font-bold">Download Our <span className="underline underline-offset-1 text-violet-700">App</span><spna className="text-violet-700">#</spna></h2>
        </div>
          <div className=" mx-0 md:mx-14 lg:mx-36">
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1,height:700 }}>
        <CardCover >
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src={banner}
              type="video/mp4"
            />
          </video>
        </CardCover>
      </Card>
          </div>
      </div>
    )
}