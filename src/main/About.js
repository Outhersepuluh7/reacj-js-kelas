import './assets/css/style.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <section class="about" id="about">
            <div class="container-fluid justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-md-2-s-12 mt-5 pt-3" data-aos="zoom-in-up">
                        <h3>About</h3>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card mt-4" data-aos="zoom-in-up">
                                <div class="card-body">
                                    <h4>X-7</h4>
                                    <p>Mantap Mantap Jaya</p>
                                </div>
                            </div>
                            <div class="card mt-3" data-aos="zoom-in-up">
                                <div class="card-body">
                                    <h4>Tentang Kelas</h4>
                                    <p>
                                        anak anak yang keren, kreatif serta berpartisipasi dan memiliki karakter yang berakhlak lalu x-7 kelas yang solid
                                    </p>
                                </div>
                            </div>
                            <div class="card mt-3" data-aos="zoom-in-up">
                                <div class="card-body">
                                    <h4>Note</h4>
                                    <p>sepuluh tujuh jaya jaya jaya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}