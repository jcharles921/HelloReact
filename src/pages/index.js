import {LoginBox} from "../containers/loginbox";
import Signupbox from "../containers/signup/signupbox";
import { BlogBox } from "../containers/blogBox";
import Notfound from "../containers/notfound";

const LoginPage = () => <LoginBox/>;
const SignupPage = () => <Signupbox/>;
const BlogPage = () => <BlogBox/>;
const NotFoundPage = () => <Notfound/>;


export {
    LoginPage,
    SignupPage,
    BlogPage,
    NotFoundPage
}