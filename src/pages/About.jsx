//* Description: renders the About page of the app

// Import Statments
import henry from "/img/illustration-pp-henry.png"
import tom from "/img/illustration-pp-tom.png"
import team from "/img/illustration-team.png"

function About() {
    return (
        <div id='about-wrapper'>
            <div id='about-content'>
                <div id="about-intro">
                    <h2>The Team</h2>
                    <div className="about-card">
                        <img id="profile" src={henry} alt="ROAM Front Cover" />
                        <div id="about-details">
                            <div id="about-text">
                                <h2>Henry Rayment-Pickard</h2>
                                <h2 className="light">Editor</h2>
                                <hr />
                                <p className="medium">Henry Rayment-Pickard is a London-based archaeologist, photographer and writer specialising in Early-Medieval archaeology. He is dedicated to making the heritage industry more engaging, inclusive, and forward-thinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-card">
                        <img id="profile" src={tom} alt="ROAM Front Cover" />
                        <div id="about-details">
                            <div id="about-text">
                                <h2>Tom Stockwell</h2>
                                <h2 className="light">Designer</h2>
                                <hr />
                                <p className="medium">Tom Stockwell is a London-based illustrator, designer, and musician. Through his body of work, he aims to collage feelings of escapism, nostalgia, otherworldliness, and just the downright weird to be honest with you.</p>
                            </div>
                        </div>
                    </div>
                    <div id="special-thanks">
                        <p><span>Special Thanks to:</span> Connor Cudmore, Ben Edge, Leah Fredrickson, Mercedes Halliday, Stephen Pelling, Hugh Rayment-Pickard, Liz Rayment-Pickard, Julie Stockwell, Mark Stockwell, Betty Woodhouse</p>
                    </div>
                </div>
                <div id='about-ending'>
                    <p className="medium">We are humbled at how much interest and support this project has received and just wanted to say thank you and we hope you have enjoyed reading this magazine.<br /><br />We are committed to inclusivity and diversity. Our mission is to celebrate the folk community inspire interest in heritage, and champion the work of all manner of incredible people of all backgrounds, experiences, and walks of life.<br /><br /><span><a href="mailto:roamanthology@gmail.com]">Got a question, shoot us a message!</a></span></p>
                    <img id="profile" src={team} alt="ROAM Front Cover" />
                </div>
            </div>
        </div>
    )
}

export default About