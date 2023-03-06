import { useNavigate } from 'react-router';
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About
      <button onClick={() => navigate('/')}>Go Back Home Page</button>
    </div>
  );
};
export default About;
