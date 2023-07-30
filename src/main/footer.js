import './assets/css/style.css';


function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-3">
                        <h4 class="fw-bold">Azka Fajril Qirom</h4>
                        <h6 className='color-grey'>Frontend Developer</h6>
                        <h4 class="fw-bold">Azka</h4>
                    <h6 className='color-grey'>UI/UX Designer</h6>
                    </div>
                    <div class="col-md-3 offset-1">
                        <ul class="d-flex list-unstyled mt-auto">
                            <li><a href="/Listsosmed/" target="_blank">Service</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Portofolio</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 offset-1">
                        <ul class="d-flex list-unstyled">
                            <li>
                                <a href="https://wa.me/6287820563341" target="_blank"><i class="bi bi-whatsapp"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/nine._delightfull/?hl=id" target="_blank"><i
                                    class="bi bi-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/Azkafajril" target="_blank"><i class="bi bi-github"></i></a>
                            </li>
                            <li>
                                <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=9dMantap23@gmail.com" target="_blank"><i class="bi bi-google"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;