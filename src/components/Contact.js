import { LoremIpsum } from 'react-lorem-ipsum';
import TextAndMap from "./TextAndMap"
import ContactUs from "./ContactUs"

// import Footer from "./Footer"
import MainCompoTitle from "./MainCompoTitle"
import banner from "../Images/about/banner.png"

export default function Contact () {
    return (
        <div className="my-10 h-fit">
            <MainCompoTitle img={banner} headTitel="#let's_talk" prag={<LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={1}/>} />
            <TextAndMap title="GET IN TOUCH" title2={{t1:"Visit one of our agency locations",t2:"or contact us today"}} title3="Head Office" map="56 Glossford Street Glasgrow GllUL New York" Envelopetext="contact@example.com" phonetext="contact@example.com" time="Manday to Saturday: 9:00am to 16 pm" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8336811430154!2d-1.2576186231901332!3d51.75436479263161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2seg!4v1693338512295!5m2!1sen!2seg"/>
            <ContactUs />
        </div>
    )
}