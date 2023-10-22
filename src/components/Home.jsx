
import { useNavigate, useParams } from 'react-router';
import './Home.css';
import Bot from '../chatbot/Bot';
import StudentInfo from './StudentInfo';



function Home() {
  const navigate = useNavigate();
  let { verification } = useParams();

  return (
    <div className="home">
      <div className="home-container">
        <img className='logo' src="https://www.happilyever.co/static/media/newLogo.d5911d9d4440299a0327aa45842a62c1.svg" alt="" />
        <div className='comp'>
          {verification === 'login' ? <Bot /> :
            (verification === 'info' ? <StudentInfo /> :
              <>
                <p className='comp-text'>Enter into Student information system</p>
                <button className='enroll-button' onClick={() => { navigate('/student/login') }}>Enroll Now!</button>
              </>)
          }

        </div>
      </div>

    </div>
  );
}

export default Home;
