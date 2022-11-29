import "./HomePage.css";

import TopSectionImage from "../../assets/image.jpeg";
import CourseComponent from "../../components/CourseComponent/CourseComponent";

import Facebook from "../../assets/fb-logo.jpeg";
import Instagram from "../../assets/insta-logo.jpeg";
function HomePage() {
  return (
    <div className="home-page-container">
      <section>
        <img className="top-section-image" src={TopSectionImage} alt="image" />

        <h1 className="wavy">Welcome To 4Finance...</h1>
      </section>
      <div className="home-page-content">
        <section className="about-us-section">
          <div className="btn-one">
            <h2 className="titles">About Us</h2>
          </div>
          <p className="about-us-section-text">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
            purpose of lorem ipsum is to create a natural looking block of text
            (sentence, paragraph, page, etc.) that doesn't distract from the
            layout. A practice not without controversy, laying out pages with
            meaningless filler text can be very useful when the focus is meant
            to be on design, not content.
          </p>
          <p className="about-us-section-text">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
            purpose of lorem ipsum is to create a natural looking block of text
            (sentence, paragraph, page, etc.) that doesn't distract from the
            layout. A practice not without controversy, laying out pages with
            meaningless filler text can be very useful when the focus is meant
            to be on design, not content.
          </p>
        </section>
        <section className="courses-section">
          <div className="btn-one">
            <h3 className="titles">Courses</h3>{" "}
          </div>
          <div className="course-list">
            <CourseComponent
              name="React.js"
              description="React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.It’s used for handling the view layer for web and mobile apps. "
              creditNumber={3}
            />
            <CourseComponent
              name="ASP.NET Core Wep API"
              description="ASP.NET Web API API stands for the Application Programming Interface.ASP.NET Web API is an extensible framework for building HTTP services that can be accessed from any client such as browsers and mobile devices."
              creditNumber={3}
            />
            <CourseComponent
              name="MySQL"
              description="MySql is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL)"
              creditNumber={3}
            />
          </div>
        </section>

        <section className="contact-us-section">
          <div className="btn-one">
            <h3 className="contact-us-title">Contact Us</h3>
          </div>
          <div className="contact-us-social-media-container">
            <div className="contact-us-num-em">
              <a href="tel:+96170610573">Phone number:+961 70 610 573 </a>
              <a href="mailto:info@4Finance.com">Email:info@4Finance.com</a>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/HB4Finance?mibextid=ZbWKwL">
                <img className="media1" src={Facebook} alt="FB" />
              </a>
              <a href="https://instagram.com/4_finance_?igshid=YmMyMTA2M2Y=">
                <img className="media1" src={Instagram} alt="Insta" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
