import "./contact.css"
import phone from "../../images/phone.png"
import email from "../../images/email.png"
import address from "../../images/address.png"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"
import { useContext } from "react"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_72fkz69', 'template_hnbybrc', formRef.current, 'mhs5Wa9UAz5AgJh-r')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +971 52 881 0817
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            umerm67@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Al Nahda 2, Dubai, UAE
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows={5} placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                    {done && <h4>Thank You</h4>}
                </div>
            </div>
        </div>
    )
}

export default Contact