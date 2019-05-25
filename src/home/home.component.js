import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '../_components/appbar';
import Nav from '../_components/nav';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    height: `${580}px`
  },
});
const FeatureArea = () => {
  return (
    <section className="feature-area">
      <div className="container-fluid">
        <div className="feature-inner row">
          <div className="col-lg-2 col-md-6">
            <div className="feature-item d-flex">
              <i className="ti-book"></i>
              <div className="ml-20">
                <h4>New classNamees</h4>
                <p>
                  In the history of modern astronomy, there is probably no one greater leap forward.
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="feature-item d-flex">
              <i className="ti-cup"></i>
              <div className="ml-20">
                <h4>Top Courses</h4>
                <p>
                  In the history of modern astronomy, there is probably no one greater leap forward.
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="feature-item d-flex border-right-0">
              <i className="ti-desktop"></i>
              <div className="ml-20">
                <h4>Full E-Books</h4>
                <p>
                  In the history of modern astronomy, there is probably no one greater leap forward.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const Banner = () => {
  return (
    <section className="home-banner-area">
      <div className="container">
        <div className="row justify-content-center fullscreen align-items-center">
          <div className="col-lg-5 col-md-8 home-banner-left">
            <h1 className="text-white">
              Take the first step <br />
              to learn with us
        </h1>
            <p className="mx-auto text-white  mt-20 mb-40">
              In the history of modern astronomy, there is probably no one
              greater leap forward than the building and launch of the space
              telescope known as the Hubble.
        </p>
          </div>
          <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
            <img className="img-fluid" src="img/header-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
const RegistrationForm = () => {
  return (
    <section className="registration-area">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-5">
            <div className="section-title text-left text-white">
              <h2 className="text-white">
                Watch Our Trainers <br />
                in Live Action
          </h2>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each.
          </p>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-4 col-md-6">
            <div className="course-form-section">
              <h3 className="text-white">Courses for Free</h3>
              <p className="text-white">It is high time for learning</p>
              <form className="course-form-area contact-page-form course-form text-right" id="myForm" action="https://colorlib.com/preview/theme/eclipse/mail.html" method="post">
                <div className="form-group col-md-12">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" onFocus={() => { if (!window.__cfRLUnblockHandlers) return false; this.placeholder = '' }} onBlur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Name'" />
                </div>
                <div className="form-group col-md-12">
                  <input type="text" className="form-control" id="subject" name="subject" placeholder="Phone Number" onFocus={() => { if (!window.__cfRLUnblockHandlers) return false; this.placeholder = '' }} onBlur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Phone Number'" data-cf-modified-402a1d17c8e44dcc8dbb69f2-="" />
                </div>
                <div className="form-group col-md-12">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" onFocus={() => { if (!window.__cfRLUnblockHandlers) return false; this.placeholder = '' }} onBlur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Email Address'" data-cf-modified-402a1d17c8e44dcc8dbb69f2-="" />
                </div>
                <div className="col-lg-12 text-center">
                  <button className="btn text-uppercase">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const PopularCourse = () => {
  return (
    <section className="popular-course-area section-gap">
      <div className="container-fluid">
        <div className="row justify-content-center section-title">
          <div className="col-lg-12">
            <h2>
              Popular Courses <br />
              Available Right Now
          </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
        </div>
        <div className="owl-carousel popuar-course-carusel">
          <div className="single-popular-course">
            <div className="thumb">
              <img className="f-img img-fluid mx-auto" src="../../publicimg/popular-course/p1.jpg" alt="" />
            </div>
            <div className="details">
              <div className="d-flex justify-content-between mb-20">
                <p className="name">programming language</p>
                <p className="value">$150</p>
              </div>
              <a href="#">
                <h4>Learn Angular JS Course for Legendary Persons</h4>
              </a>
              <div className="bottom d-flex mt-15">
                <ul className="list">
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                </ul>
                <p className="ml-20">25 Reviews</p>
              </div>
            </div>
          </div>

          <div className="single-popular-course">
            <div className="thumb">
              <img className="f-img img-fluid mx-auto" src="img/popular-course/p2.jpg" alt="" />
            </div>
            <div className="details">
              <div className="d-flex justify-content-between mb-20">
                <p className="name">programming language</p>
                <p className="value">$150</p>
              </div>
              <a href="#">
                <h4>Learn Angular JS Course for Legendary Persons</h4>
              </a>
              <div className="bottom d-flex mt-15">
                <ul className="list">
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                </ul>
                <p className="ml-20">25 Reviews</p>
              </div>
            </div>
          </div>

          <div className="single-popular-course">
            <div className="thumb">
              <img className="f-img img-fluid mx-auto" src="img/popular-course/p3.jpg" alt="" />
            </div>
            <div className="details">
              <div className="d-flex justify-content-between mb-20">
                <p className="name">programming language</p>
                <p className="value">$150</p>
              </div>
              <a href="#">
                <h4>Learn Angular JS Course for Legendary Persons</h4>
              </a>
              <div className="bottom d-flex mt-15">
                <ul className="list">
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                </ul>
                <p className="ml-20">25 Reviews</p>
              </div>
            </div>
          </div>
          <div className="single-popular-course">
            <div className="thumb">
              <img className="f-img img-fluid mx-auto" src="img/popular-course/p4.jpg" alt="" />
            </div>
            <div className="details">
              <div className="d-flex justify-content-between mb-20">
                <p className="name">programming language</p>
                <p className="value">$150</p>
              </div>
              <a href="#">
                <h4>Learn Angular JS Course for Legendary Persons</h4>
              </a>
              <div className="bottom d-flex mt-15">
                <ul className="list">
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-star"></i></a>
                  </li>
                </ul>
                <p className="ml-20">25 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OtherFeatures = () => {
  return (
    <section className="other-feature-area">
      <div className="container">
        <div className="feature-inner row">
          <div className="col-lg-12">
            <div className="section-title text-left">
              <h2>
                Features That <br />
                Can Avail By Everyone
            </h2>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each.
            </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="other-feature-item">
              <i className="ti-key"></i>
              <h4>Lifetime Access</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                  amet consec tetur adipisicing elit, sed do eiusmod tempor
                  incididunt labore.
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--160">
            <div className="other-feature-item">
              <i className="ti-files"></i>
              <h4>Source File Included</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                  amet consec tetur adipisicing elit, sed do eiusmod tempor
                  incididunt labore.
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--260">
            <div className="other-feature-item">
              <i className="ti-medall-alt"></i>
              <h4>Student Membership</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                  amet consec tetur adipisicing elit, sed do eiusmod tempor
                  incididunt labore.
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="other-feature-item">
              <i className="ti-briefcase"></i>
              <h4>35000+ Courses</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                  amet consec tetur adipisicing elit, sed do eiusmod tempor
                  incididunt labore.
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--160">
            <div className="other-feature-item">
              <i className="ti-crown"></i>
              <h4>Expert Mentors</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                  amet consec tetur adipisicing elit, sed do eiusmod tempor
                  incididunt labore.
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--260">
            <div className="other-feature-item">
              <i className="ti-headphone-alt"></i>
              <h4>Live Supports</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                  amet consec tetur adipisicing elit, sed do eiusmod tempor
                  incididunt labore.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const Videos = () => {
  return (
    <section className="video-area section-gap-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-title text-white">
              <h2 className="text-white">
                Watch Our Trainers <br />
                in Live Action
            </h2>
              <p>
                In the history of modern astronomy, there is probably no one greater leap forward than the building and
                launch of the space telescope known as the Hubble.
            </p>
            </div>
          </div>
          <div className="offset-lg-1 col-md-6 video-left">
            <div className="owl-carousel video-carousel">
              <div className="single-video">
                <div className="video-part">
                  <img className="img-fluid" src="img/video-img.jpg" alt="" />
                  <div className="overlay"></div>
                  <a className="popup-youtube play-btn" href="https://www.youtube.com/watch?v=VufDd-QL1c0">
                    <img className="play-icon" src="img/play-btn.png" alt="" />
                  </a>
                </div>
                <h4 className="text-white mb-20 mt-30">Learn Angular js Course for Legendary Persons</h4>
                <p className="text-white mb-20">
                  In the history of modern astronomy, there is probably no one greater leap forward than the building and
                  launch of the space telescope known as the Hubble.
              </p>
              </div>

              <div className="single-video">
                <div className="video-part">
                  <img className="img-fluid" src="img/video-img.jpg" alt="" />
                  <div className="overlay"></div>
                  <a className="popup-youtube play-btn" href="https://www.youtube.com/watch?v=VufDd-QL1c0">
                    <img className="play-icon" src="img/play-btn.png" alt="" />
                  </a>
                </div>
                <h4 className="text-white mb-20 mt-30">Learn Angular js Course for Legendary Persons</h4>
                <p className="text-white mb-20">
                  In the history of modern astronomy, there is probably no one greater leap forward than the building and
                  launch of the space telescope known as the Hubble.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const Testimonials = () => {
  return (
    <section className="testimonials-area section-gap">
      <div className="container">
        <div className="testi-slider owl-carousel" data-slider-id="1">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="item">
                <div className="testi-item">
                  <img src="img/quote.png" alt="" />
                  <div className="mt-40 text">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned
                      about our dear Mother Earth. If you think about it, you
                      travel across her face and She is the host to your
                      journey.
                  </p>
                  </div>
                  <h4>Fanny Spencer</h4>
                  <p>Chief Executive, Amazon</p>
                </div>
              </div>
            </div>

            <div className="offset-lg-1 col-lg-6">
              <img src="img/testimonial/t1.jpg" alt="" />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="item">
                <div className="testi-item">
                  <img src="img/quote.png" alt="" />
                  <div className="mt-40 text">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned
                      about our dear Mother Earth. If you think about it, you
                    travel across her face <br />
                      and She is the host to your journey.
                  </p>
                  </div>
                  <h4>Fanny Spencer</h4>
                  <p>Chief Executive, Amazon</p>
                </div>
              </div>
            </div>

            <div className="offset-lg-1 col-lg-6">
              <img src="img/testimonial/t1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BlogPost = () => {
  return (<section className="blog-post-area section-gap">
    <div className="container-fluid">
      <div className="feature-inner row">
        <div className="col-lg-12">
          <div className="section-title text-left">
            <h2>
              Features That <br />
              Can Avail By Everyone
          </h2>
            <p>
              There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.
              It’s exciting to think about setting up your own viewing station.
          </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-post">
            <img src="img/blog-post/b1.jpg" className="img-fluid" alt="" />
            <div className="overlay"></div>
            <div className="top-text">
              <p>29th, oct, 2018</p>
              <p>121 likes</p>
              <p>05 comments</p>
            </div>
            <div className="text">
              <h4 className="text-white">Smart Kitchen Setup</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                  sed do.
              </p>
              </div>
              <a href="#" className="primary-btn">
                View Details
              <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt--160">
          <div className="single-blog-post">
            <img src="img/blog-post/b2.jpg" className="img-fluid" alt="" />
            <div className="overlay"></div>
            <div className="top-text">
              <p>29th, oct, 2018</p>
              <p>121 likes</p>
              <p>05 comments</p>
            </div>
            <div className="text">
              <h4 className="text-white">Smart Kitchen Setup</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                  sed do.
              </p>
              </div>
              <a href="#" className="primary-btn">
                View Details
              <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt--260">
          <div className="single-blog-post">
            <img src="img/blog-post/b3.jpg" className="img-fluid" alt="" />
            <div className="overlay"></div>
            <div className="top-text">
              <p>29th, oct, 2018</p>
              <p>121 likes</p>
              <p>05 comments</p>
            </div>
            <div className="text">
              <h4 className="text-white">Smart Kitchen Setup</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                  sed do.
              </p>
              </div>
              <a href="#" className="primary-btn">
                View Details
              <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
const Header = () => {
  return (<header className="default-header">
    <nav className="navbar navbar-expand-lg  navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="img/logo.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="lnr lnr-menu"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                Pages
      </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="elements.html">Elements</a>
                <a className="dropdown-item" href="course-details.html">Course Details</a>
              </div>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                Blog
      </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blog-home.html">Blog Home</a>
                <a className="dropdown-item" href="blog-single.html">Blog Details</a>
              </div>
            </li>
            <li><a href="contacts.html">Contacts</a></li>

            <li>
              <button className="search">
                <span className="lnr lnr-magnifier" id="search"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>);
}
const Footer = () => {
  return (<footer className="footer-area section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 single-footer-widget">
          <h4>Top Products</h4>
          <ul>
            <li><a href="#">Managed Website</a></li>
            <li><a href="#">Manage Reputation</a></li>
            <li><a href="#">Power Tools</a></li>
            <li><a href="#">Marketing Service</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 single-footer-widget">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Brand Assets</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 single-footer-widget">
          <h4>Features</h4>
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Brand Assets</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 single-footer-widget">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Experts</a></li>
            <li><a href="#">Agencies</a></li>
          </ul>
        </div>
        {/* <div className="col-lg-4 col-md-6 single-footer-widget">
          <h4>Newsletter</h4>
          <p>You can trust us. we only send promo offers,</p>
          <div className="form-wrap" id="mc_embed_signup">
            <form target="_blank"
              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
              method="get" className="form-inline">
              <input className="form-control" name="EMAIL" placeholder="Your Email Address"
                onfocus="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = ''"
                onblur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Your Email Address '"
                required="" type="email" data-cf-modified-402a1d17c8e44dcc8dbb69f2-="" />
              <button className="click-btn btn btn-default text-uppercase">subscribe</button>
              <div style="position: absolute; left: -5000px;">
                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
              </div>

              <div className="info"></div>
            </form>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom row align-items-center">
        <div className="col-lg-4 col-md-12 footer-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-behance"></i></a>
        </div>
      </div>
    </div>
  </footer>
  );
}

class Home extends Component {

  render() {
    const { classes } = this.props;

    return (
      // <div>
      //   <Header />
      //   <Banner />
      //   <FeatureArea />
      //   <PopularCourse />
      //   <Videos />
      //   <OtherFeatures />
      //   <Testimonials />
      //   <RegistrationForm />
      //   <BlogPost />
      //   <Footer />
      // </div>
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar />
          <Nav />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>{'Home'}</Typography>
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classNamees: PropTypes.object,
};


function mapStateToProps(state) {
  return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Home)));

export { connectedHomePage as Home };
