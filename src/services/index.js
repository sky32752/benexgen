import React, { Component, Fragment } from "react";

const TweenMax = window.TweenMax;
const ScrollMagic = window.ScrollMagic;

class Services extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: "#services"
    })
      .setTween(
        TweenMax.staggerFromTo(
          [".services-title", ".service-tag", ".service"],
          1,
          {
            y: 40,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1
          },
          0.5
        )
      )
      .addTo(this.controller);
  }

  render() {
    return (
      <Fragment>
        <section
          style={{
            backgroundImage: `url(${require("../img/bg-services.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#F4F7F6"
          }}
          className='container-fluid section'
          id='services'>
          <h2 className='services-title'>
            BUILDING DISRUPTIVE PRODUCT <br /> WITH THE USER IN MIND
          </h2>
          <p className='service-tag text-muted p-5'>
            Our team helps organizations thrive in this digital era by creating
            products from scratch or modernizing current applications.
          </p>

          <div className='row'>
            <div className='service col-md-6 p-5'>
              <img alt='app_development' src={require("../img/app.png")} />
              <h4>Website Designing and Development</h4>
              <p className='text-muted'>
                The best websites are the ones that have an interactive
                interface alongwith a smooth operation. I bet you've clicked on
                certain websites where you click on the download button and
                instead of your favourite song being downloaded , you're
                redirected to another page , or you clicked on the search button
                , but there's no response from the site . Such discrepancies
                lead to the users getting frustrated , and the site not getting
                enough views . Your website's operations are a part of web
                development . It is one of , if not the most important part of a
                website . The majority work is spent on web development so that
                your website can cater to all your needs , and we make sure you
                get the best out of your website , so we put full focus on
                developing the best website for you .
              </p>
            </div>

            <div className='service col-md-6 p-5'>
              <img
                alt='app_development'
                src={require("../img/app-development.png")}
              />
              <h4>Android and iOS App developement</h4>
              <p className='text-muted'>
                These days , a website is not the only thing that you would want
                to have , along-with a website , an application , or simply an
                app on Play store or App Store would do your content a world of
                good . It will also widen your spectrum of work and also have
                more benefits and more people engaging in your content too. This
                works best for people that have a product to sell or a service
                to provide . So how do you get an app ? Learn thousands of lines
                of codes , or spend a fortune hiring an app developer ? No ,
                none of that , we will do the development for you and you will
                reap the benefits , we will develop a phone as well as a desktop
                application , according to your requirements with the best
                interfaces and smooth operations .
              </p>
            </div>
            <div className='service col-md-6 p-5'>
              <img alt='app_development' src={require("../img/loupe.png")} />
              <h4>Search Engine Optimization (Seo) </h4>
              <p className='text-muted'>
                What is SEO and what do you need it for ? Search Engine
                Optimisation is the most powerful tool in order to increase your
                website's traffic . Google has secret algorithms that ranks your
                website and this is significant as the higher your website ranks
                , the more visible it is to the person searching for relevant
                content .
              </p>
            </div>
            <div className='service col-md-6 p-5'>
              <img
                alt='app_development'
                src={require("../img/digital-marketing.png")}
              />
              <h4>Digital Marketing</h4>
              <p className='text-muted'>
                If you are creator , a writer , or have a product or a skill
                that you want to sell or show to the world , you will require a
                lot of advertising and marketing knowledge . Just like new
                movies have promotion campaigns , your website or content too
                needs a campaign as such , and this is where digital marketing
                comes together play . Not only does it direct traffic to your
                website by using various tools , it also gets you a lot of
                benefits of the web .But , all this requires a high level of
                knowledge and marketing skills . Worry not , because you don't
                have to learn any of that , we shall provide the best Digital
                marketers around so that you get the best out of your content .
              </p>
            </div>
            <div className='service col-md-6 p-5'>
              <img alt='app_development' src={require("../img/content.png")} />
              <h4>Software Development</h4>
              <p className='text-muted'>
                Do you have an idea for a software , but lack the time or skills
                to code it yourself ? Worry not , we shall take the utmost care
                in designing your software according to your needs , and
                providing support incase anything goes sideways . The online
                world is a blooming one , and new softwares are required every
                hour , and a cohesive team , means a cohesive software . And
                that is what we ensure you get .
              </p>
            </div>
            <div className='service col-md-6 p-5'>
              <img
                alt='app_development'
                src={require("../img/cloud-computing.png")}
              />
              <h4>Hosting and more...</h4>
              <p className='text-muted'>
                {" "}
                What is the use of a website if it crashes the very moment
                someone clicks on it ? Thus , we provide you a strong web host ,
                which will ensure that your website runs smoothly , even if the
                viewers are in the range of thousands . What is a web host
                ?...Well a web host is a server that hosts your websites and
                stores it's information .a strong server is necessary in order
                for your website to run smoothly , and for your viewers to have
                a fun time with your content , and we have got that covered for
                you !
              </p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Services;
