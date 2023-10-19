import { LoremIpsum } from 'react-lorem-ipsum';
import b1 from "../Images/blog/b1.jpg"
import b2 from "../Images/blog/b2.jpg"
import b3 from "../Images/blog/b3.jpg"
import b4 from "../Images/blog/b4.jpg"
import b5 from "../Images/blog/b6.jpg"

// import Services from "./Services"
// import Arrivals from "./Arrivals"
// import UpCommingSection from "./UpCommingSection"
import BlogCompo from "./BlogCompo"
import MainCompoTitle from "./MainCompoTitle"
import b19 from "../Images/banner/b19.jpg"

export default function Blog () {
    return (
        <div className="my-20 h-fit">
            <MainCompoTitle img={b19} headTitel="#readmore" prag={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={1}/>} />
           <div className="my-20">
           <BlogCompo text="13/01" text2="The Cotton-Jersey Zip-Up Hoodie" text3={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={13}/>} text4="CONTINUE READING" img={b1}/>
            <BlogCompo text="13/01" text2="How to Style a Quiff" text3={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={13}/>} text4="CONTINUE READING" img={b2}/>
            <BlogCompo text="13/01" text2="Must-Have Skater Girl Items" text3={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={13}/>} text4="CONTINUE READING" img={b3}/>
            <BlogCompo text="13/01" text2="Runway-Inspired Trends" text3={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={13}/>} text4="CONTINUE READING" img={b4}/>
            <BlogCompo text="13/01" text2="AW20 Menswear Trends" text3={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={13}/>} text4="CONTINUE READING" img={b5}/>
           </div>
        </div>
    )
}