import MainCompoTitle from "./MainCompoTitle"
import { LoremIpsum } from 'react-lorem-ipsum';
import AboutCompo from "./AboutCompo"
import AboutVideo from "./AboutVideo"
import Details from "./Details"
// import Services from "./Services"
// import Arrivals from "./Arrivals"
// import UpCommingSection from "./UpCommingSection"
// import Footer from "./Footer"
import banner from "../Images/about/banner.png"

export default function About () {
    return (
        <div className="mt-20 h-fit">
             <MainCompoTitle img={banner} headTitel="#KnowUs" prag={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={1}/>}/>
             <AboutCompo mainTitle="Who We Are?"/>
             <AboutVideo />
             <Details />
        </div>
    )
}