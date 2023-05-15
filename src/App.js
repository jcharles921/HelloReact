import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import {BlogPage, LoginPage, NotFoundPage, SignupPage} from './pages';

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}   />
        <Route path="/signup" element={<SignupPage/>}   />
        <Route path="/blog" element={<BlogPage/>}   />
        <Route path="*" element={<NotFoundPage/>}   />
      </Routes>
    </Router>
  );
}

export default App;
