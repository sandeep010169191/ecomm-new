import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-mf-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aliquid commodi molestiae? Voluptatibus repudiandae veniam velit commodi? Modi voluptatum quod accusamus illo expedita vel ipsa, nisi doloribus debitis, molestias ducimus iusto tenetur sequi commodi blanditiis est dolor quidem perspiciatis? Quod minus provident aliquam vero blanditiis, aperiam natus non. Expedita soluta perspiciatis neque voluptatem autem eligendi delectus illo atque repellendus. Provident sit quas mollitia nam assumenda soluta dolor! Cumque voluptates est nostrum facilis tenetur consequatur laudantium minima dolor, veniam cupiditate sint sapiente mollitia nisi nam earum consequuntur perferendis exercitationem necessitatibus deserunt obcaecati. Error ducimus nesciunt saepe quas earum necessitatibus ipsum at!
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-mf-6 d-flex justify-content-center">
                        <img src="/assets/images/about.jpg" alt="About Us" height="350px" width="450px" />
                    </div>
                </div>
            </div> */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>About Us</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aliquid commodi molestiae? Voluptatibus repudiandae veniam velit commodi? Modi voluptatum quod accusamus illo expedita vel ipsa, nisi doloribus debitis, molestias ducimus iusto tenetur sequi commodi blanditiis est dolor quidem perspiciatis? Quod minus provident aliquam vero blanditiis, aperiam natus non. Expedita soluta perspiciatis neque voluptatem autem eligendi delectus illo atque repellendus. Provident sit quas mollitia nam assumenda soluta dolor! Cumque voluptates est nostrum facilis tenetur consequatur laudantium minima dolor, veniam cupiditate sint sapiente mollitia nisi nam earum consequuntur perferendis exercitationem necessitatibus deserunt obcaecati. Error ducimus nesciunt saepe quas earum necessitatibus ipsum at!<br />
                        <br /><NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col" align="right">
                        <img src="/assets/images/about.jpg" alt="About Us" height="350px" width="450px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About