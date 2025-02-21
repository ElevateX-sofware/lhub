import RoutePath from "../data/constants/routePath";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/User/Home";
import Courses from "../pages/User/Courses";
import MyCourses from "../pages/User/MyCourses";
import Schedule from "../pages/User/Schedule";
import Study from "../pages/User/Study";
import Library from "../pages/User/Library";
import AccountSettings from "../pages/User/AccountSettings";

const ConfigPage = [
    { path: RoutePath.HOME, page: Home, layout: DefaultLayout },
    { path: RoutePath.COURSES, page: Courses, layout: DefaultLayout },
    { path: RoutePath.MY_COURSES, page: MyCourses, layout: DefaultLayout },
    { path: RoutePath.SCHEDULE, page: Schedule, layout: DefaultLayout },
    { path: RoutePath.STUDY, page: Study, layout: DefaultLayout },
    { path: RoutePath.LIBRARY, page: Library, layout: DefaultLayout },
    { path: RoutePath.ACCOUNT_SETTINGS, page: AccountSettings, layout: DefaultLayout },
];

export default ConfigPage;
