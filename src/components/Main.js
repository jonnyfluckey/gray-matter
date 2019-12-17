import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/Jonny Fluckey.jpg'
import pic02 from '../images/dashboard.jpg'
import pic03 from '../images/data.jpg'
import pic04 from '../images/slack.jpg'
import pic05 from '../images/integration.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span
            className="image main"
            style={{ width: '50%', float: 'left', margin: '0 25px 0 0' }}
          >
            <img src={pic01} alt="" />
          </span>
          <div>
            <p>
              My name is Jonny Fluckey. I have spent years perfecting the art of
              taking data, and transforming it into reporting and insights that
              helps businesses understand the story behind the data in order to
              make the best decisions.
            </p>
            <p>
              I also love to analyze business processes, and find technological
              solutions to increase efficiency and automate simple tasks so that
              more time can be spent growing and improving the business.
            </p>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What We Do</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3>Data Transformation</h3>
          <p>
            Everyday, your business is collecting and gathering data. From
            customer information to business financials, there are a lot of data
            points that your business can use to ensure you are going after the
            right customers, charging the right prices, and taking the right
            actions to grow your business.
          </p>
          <p>
            Gray Matter Technologies can help you to harness your data, and put
            it to work. We also can help you gain access to websites and API's
            that can produce all the information you need in one interface.
          </p>
          <h3>Process Automation</h3>
          <p>
            The average small business owner spends nearly 22 hours per week on
            activities that contribute little to no value to the company they
            are building*. These tasks include repetitive, rote tasks such as
            emails and status updates.
          </p>
          <p>
            Gray Matter Technologies can help your small business to utilize the
            power of technology to automate tasks and save you time that can be
            used to actively grow your business.
          </p>
          <br />
          <p>
            *Finkel, David. “New Study Shows You're Wasting 21.8 Hours a Week.”
            Inc.com, Inc., 1 Mar. 2018,
            https://www.inc.com/david-finkel/new-study-shows-youre-wasting-218-hours-a-week.html
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Examples</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>Dashboards</h3>
          <p>
            Create stunning visual dashboards to help you understand your
            business data and make decisions to help you grow your business, and
            best utilize your time and efforts.
          </p>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <h3>API & Database Integration</h3>
          <p>
            Build search components to help you access anything you may need
            from a third-party API or your own database, and integrate that data
            into your own web-based dashboard that can be accessed 24/7 from any
            internet connected device.
          </p>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <h3>Slack Integration</h3>
          <p>
            Utilize Slack to help automate business tasks, and integrate
            directly into your company data. Why send a daily message asking for
            status updates when you can have a chatbot do the same task for you,
            and enter the data automatically into the format you need?
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <div>
            <p>
              Contact me via one of the following methods, or fill out the
              contact form below. I will respond within 24 hours
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMobileAlt} size="1x" />
            <span style={{ paddingLeft: '28px' }}>801-750-4086</span>
            <br />
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            <span style={{ paddingLeft: '20px' }}> info@graymatter.tech</span>
          </div>
          <br />
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/jonnyfluckey"
                className="icon fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/jfluckey1"
                className="icon fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jonathonfluckey/"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonnyfluckey"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
