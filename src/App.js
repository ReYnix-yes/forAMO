import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import "./components/adaptive/adaptive.css"

function App() {
  return (
    <div class="background-circles">
      <div class="circle"></div>
      <div class='circle2'></div>
      <div class='circle3'></div>
      <div class="light"></div>
      <div class="light2"></div>
      <div className='home'>

        <Nav />
        <div className='home__container'>
          <div className='left__sidebar'>
            <h1 className='left__title'>
              Зарабатывайте больше <br /><span class="left-gradient-text"> c  WELBEX</span>
            </h1>
            <h2 className='left__subtitle'>
              Развиваем и контролируем продажи за вас
            </h2>
            <div className='adap__right'>
              <h3 className='right__title' id='adap__right__title'>Вместе с <span className='right-gradient-text'> бесплатной консультацией</span> мы дарим:</h3>
              <div className='adap__container'>
                <div class="gradient-strip">
                  <div className='adap__text'>Skype аудит</div>
                </div>
                <div class="gradient-strip">
                  <div className='adap__text'>30 виджетов</div>
                </div>
                <div class="gradient-strip">
                  <div className='adap__text'>Dashboard</div>
                </div>
                <div class="gradient-strip">
                  <div className='adap__text'>Месяц аmoCRM</div>
                </div>
              </div>
            </div>
          </div>
          <div className='right__sidebar'>
            <h3 className='right__title'>Вместе с <span className='right-gradient-text'> бесплатной консультацией</span> мы дарим:</h3>
            <div className='right__sidebar__content'>
              <div className='right__sidebar__item'>
                <h4 className='right__sidebar__title'>Виджеты</h4>
                <p className='right__sidebar__text'>30 готовых решений</p>
              </div>
              <div className='right__sidebar__item'>
                <h4 className='right__sidebar__title'>Dashboard</h4>
                <p className='right__sidebar__text'>с показателями вашего бизнеса</p>
              </div>
              <div className='right__sidebar__item'>
                <h4 className='right__sidebar__title'>Skype Аудит</h4>
                <p className='right__sidebar__text'>отдела продаж и CRM системы</p>
              </div>
              <div className='right__sidebar__item'>
                <h4 className='right__sidebar__title'>35 дней</h4>
                <p className='right__sidebar__text'>использования CRM</p>
              </div>
            </div>
            <button className='home__btn'>Получить консультацию</button>
          </div>
        </div >
        <Footer />
      </div >
    </div >

  );
}


export default App;
