import "./assets/css/style.css";
import pereson from "./assets/img/person.jpg";
import personfamele from "./assets/img/personfemale.jpg";
import personamele from "./assets/img/personmale.jpg";


export default function Contact() {
    return (
        <section class="contact" id="contact-person">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-2-s-12 mt-5 pt-3" data-aos="fade-up">
                        <h3>Contact</h3>
                    </div>
                </div>
            </div>
            <div class="row recoment justify-content-center text-white" data-aos-delay="300">
                <div class="col-md-4">
                    <div class="content-recoment" data-aos="flip-up">
                        <img src={personamele} alt="" />
                        <div class="content-text">
                            <h6>Pa Habibi</h6>
                            <p>Wali Kelas X-7</p>
                            <p>Jika ada kepentingan bisa menghubungi</p>
                            <a href="https://api.whatsapp.com/send/?phone=6287779600017" target="_blank"><button type="button" class="glow-on-hover">Message</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-recoment" data-aos="flip-up">
                        <img src={personamele} alt="" />
                        <div class="content-text">
                            <h6>Ryvan</h6>
                            <p>Ketua Kelas</p>
                            <p>Jika ada kepentingan bisa menghubungi</p>
                            <a href="https://api.whatsapp.com/send/?phone=6285724946059" target="_blank"><button type="button" class="glow-on-hover">Message</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-recoment" data-aos="flip-up">
                        <img src={personamele} alt=""></img>
                        <div class="content-text">
                            <h6>Zahra</h6>
                            <p>Sekertaris</p>
                            <p>Jika ada kepentingan bisa menghubungi</p>
                            <a href="https://api.whatsapp.com/send/?phone=6285924087137" target="_blank"><button type="button" class="glow-on-hover">Message</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-recoment" data-aos="flip-up">
                        <img src={personamele} alt=""></img>
                        <div class="content-text">
                            <h6>Meike</h6>
                            <p>Bendahara</p>
                            <p>Jika ada kepentingan bisa menghubungi</p>
                            <a href="https://api.whatsapp.com/send/?phone=6285175020581" target="_blank"><button type="button" class="glow-on-hover">Message</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-recoment" data-aos="flip-up">
                        <img src={personamele} alt=""></img>
                            <div class="content-text">
                                <h6>Nala</h6>
                            <p>Kebersihan</p>
                                <p>Jika ada kepentingan bisa menghubungi</p>
                            <a href="https://api.whatsapp.com/send/?phone=6283827348872" target="_blank"><button type="button" class="glow-on-hover">Message</button></a>
                            </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-recoment" data-aos="flip-up">
                        <img src={personamele} alt=""></img>
                            <div class="content-text">
                                <h6>Indah</h6>
                            <p>kerohanian</p>
                                <p>Jika ada kepentingan bisa menghubungi</p>
                            <a href="https://api.whatsapp.com/send/?phone=6281296551127" target="_blank"><button type="button" class="glow-on-hover">Message</button></a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
