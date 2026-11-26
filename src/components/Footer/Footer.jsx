import './Footer.css';
import iconPhone from '../../assets/page1/phone.svg';
import iconEmail from '../../assets/page1/email.svg';
import iconSkype from '../../assets/page1/skype.svg';
import iconYoutube from '../../assets/page1/youtube.svg';
import iconIn from '../../assets/page1/in.svg';
import iconGoogle from '../../assets/page1/google.svg';
import iconFacebook from '../../assets/page1/facebook.svg';
import iconTwitter from '../../assets/page1/twitter.svg';

function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="container footer__grid">
        <div className="footer__contacts">
          <h3>Свяжитесь с нами</h3>
          <p className="footer__contact-item">
            <img src={iconPhone} alt="" aria-hidden="true" /> 8 (800) 000 00 00
          </p>
          <p className="footer__contact-item">
            <img src={iconEmail} alt="" aria-hidden="true" /> inbox@mail.ru
          </p>
          <p className="footer__contact-item">
            <img src={iconSkype} alt="" aria-hidden="true" /> tu.train.tickets
          </p>
          <p>
            г. Москва
            <br />
            ул. Московская 27-35
            <br />
            555 555
          </p>
        </div>

        <div className="footer__subscribe">
          <h3>Подписка</h3>
          <p>Будьте в курсе событий</p>
          <div className="footer__form">
            <input type="email" name="email" placeholder="e-mail" />
            <button type="button">ОТПРАВИТЬ</button>
          </div>

          <h3>Подписывайтесь на нас</h3>
          <div className="footer__socials">
            <img src={iconYoutube} alt="YouTube" />
            <img src={iconIn} alt="LinkedIn" />
            <img src={iconGoogle} alt="Google" />
            <img src={iconFacebook} alt="Facebook" />
            <img src={iconTwitter} alt="Twitter" />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <span>Лого</span>
          <span>2018 WEB</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;