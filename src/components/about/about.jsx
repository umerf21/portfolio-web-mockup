import "./about.css"
import award from "../../images/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://cdn9.dissolve.com/p/D943_227_187/D943_227_187_1200.jpg" alt="" className="a-img" />
            </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <h4 className="a-sub">
                    It is a sub para
                </h4>
                <p className="a-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
             <div className="a-award">
                 <img src={award} alt="" className="a-award-img" />
                 <div className="a-award-texts">
                <h2 className="a-award-title">International Design</h2>
                <p className="a-award-desc">Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About