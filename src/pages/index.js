import {LoginBox} from "../containers/loginbox";
import Signupbox from "../containers/signup/signupbox";
import  Blogcomponent  from "../containers/blogbox";
import Notfound from "../containers/notfound";

const LoginPage = () => <LoginBox/>;
const SignupPage = () => <Signupbox/>;
const BlogPage = () => <Blogcomponent/>;
const NotFoundPage = () => <Notfound/>;


export {
    LoginPage,
    SignupPage,
    BlogPage,
    NotFoundPage
}