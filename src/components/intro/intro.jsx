import "./intro.css"
import man from "../../images/man.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is </h2>
                <h1 className="i-name">Umer</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Mobile App Developer</div>
                        <div className="i-title-item">Software Engineer</div>
                    </div>
                </div>
                <div className="i-desc">
                Having 2+ years of experience in Software Development with a bachelor's degree in Software Engineering. In my short term of experience, I've worked on more than 5 different projects in which I've created 2 app from scratch, and single-handed manage to complete one.
                </div>
            </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={man} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro