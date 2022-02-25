
function Nav({ name, phone, email, social }) {
    return (
        <>
            <div className="click-capture"></div>

            <nav className="navbar navbar-desctop">
                <div className="position-relative w-100">

                    <a className="navbar-brand" href="#">{name?.split(' ')[0]} {name?.split(' ')[1][0]}.</a>
                    <div className="container d-block">
                        <a className="phone  my-0 d-none d-md-block" href={`tel: ${phone}`}>{phone}</a>
                        <a className="email  my-0 d-none d-md-block" href={`mailto: ${phone}`}>{email}</a>
                    </div>

                    <button className="toggler">
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                    </button>
                </div>
            </nav>


            <nav className="navbar-bottom">
                <div className="social">

                    <ul className="social-icons mr-auto mr-lg-0 d-none d-sm-block">
                        {social?.map((item, index) => (
                            <li key={index}>
                                <a href={item?.url} target="_blank" >
                                    <ion-icon name={item?.iconName}></ion-icon>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>

            <nav className="navbar navbar-mobile">
                <span className="close_icon">
                    <ion-icon name="close-outline"></ion-icon>
                </span>

                <ul className="navbar-nav navbar-nav-mobile">
                    <li className="active"><a className="nav-link active" data-menuanchor="home" href="#home">Home</a></li>
                    <li><a className="nav-link" data-menuanchor="about" href="#about">About</a></li>
                    <li><a className="nav-link" data-menuanchor="experience" href="#experience">Experience</a></li>
                    <li><a className="nav-link" data-menuanchor="skills" href="#skills">Skills</a></li>
                    <li><a className="nav-link" data-menuanchor="projects" href="#projects">Projects</a></li>
                    <li><a className="nav-link" data-menuanchor="partners" href="#partners">Partners</a></li>
                    <li><a className="nav-link" data-menuanchor="testimonials" href="#testimonials">Testimonials</a></li>
                    <li><a className="nav-link" data-menuanchor="news" href="#news">News</a></li>
                    <li><a className="nav-link" data-menuanchor="contact" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav