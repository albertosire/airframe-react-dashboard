import React from 'react';
import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

// ----------- Pages Imports ---------------
import Analytics from './Dashboards/Analytics';
import ProjectsDashboard from './Dashboards/Projects';
import System from './Dashboards/System';
import Monitor from './Dashboards/Monitor';
import Financial from './Dashboards/Financial';
import Stock from './Dashboards/Stock';
import Reports from './Dashboards/Reports';

import Widgets from './Widgets';

import Cards from './Cards/Cards';
import CardsHeaders from './Cards/CardsHeaders';

import NavbarOnly from './Layouts/NavbarOnly';
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';
import DragAndDropLayout from './Layouts/DragAndDropLayout';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';

import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Colors from './Interface/Colors';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';
import Notifications from './Interface/Notifications';
import CropImage from './Interface/CropImage';
import DragAndDropElements from './Interface/DragAndDropElements';
import Calendar from './Interface/Calendar';
import ReCharts from './Graphs/ReCharts';

import Forms from './Forms/Forms';
import FormsLayouts from './Forms/FormsLayouts';
import InputGroups from './Forms/InputGroups';
import Wizard from './Forms/Wizard';
import TextMask from './Forms/TextMask';
import Typeahead from './Forms/Typeahead';
import Toggles from './Forms/Toggles';
import Editor from './Forms/Editor';
import DatePicker from './Forms/DatePicker';
import Dropzone from './Forms/Dropzone';
import Sliders from './Forms/Sliders';

import Tables from './Tables/Tables';
import ExtendedTable from './Tables/ExtendedTable';
import AgGrid from './Tables/AgGrid';

import Chat from './Apps/Chat';
import Clients from './Apps/Clients';
import EmailDetails from './Apps/EmailDetails';
import Files from './Apps/Files';
import GalleryGrid from './Apps/GalleryGrid';
import GalleryTable from './Apps/GalleryTable';
import ImagesResults from './Apps/ImagesResults';
import Inbox from './Apps/Inbox';
import NewEmail from './Apps/NewEmail';
import Projects from './Apps/Projects';
import SearchResults from './Apps/SearchResults';
import Tasks from './Apps/Tasks';
import TasksDetails from './Apps/TasksDetails';
import TasksKanban from './Apps/TasksKanban';
import VideosResults from './Apps/VideosResults';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

import Icons from './Icons';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';

//------ Route Definitions --------
export const RoutedContent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboards/projects" replace />} />

            <Route path="/dashboards/analytics" element={<Analytics />} />
            <Route path="/dashboards/projects" element={<ProjectsDashboard />} />
            <Route path="/dashboards/system" element={<System />} />
            <Route path="/dashboards/monitor" element={<Monitor />} />
            <Route path="/dashboards/financial" element={<Financial />} />
            <Route path="/dashboards/stock" element={<Stock />} />
            <Route path="/dashboards/reports" element={<Reports />} />

            <Route path="/widgets" element={<Widgets />} />

            <Route path="/cards/cards" element={<Cards />} />
            <Route path="/cards/cardsheaders" element={<CardsHeaders />} />

            <Route path="/layouts/navbar/*" element={<NavbarOnly />} />
            <Route path="/layouts/sidebar/*" element={<SidebarDefault />} />
            <Route path="/layouts/sidebar-a/*" element={<SidebarA />} />
            <Route path="/layouts/sidebar-with-navbar/*" element={<SidebarWithNavbar />} />
            <Route path="/layouts/dnd-layout/*" element={<DragAndDropLayout />} />

            <Route path="/interface/accordions" element={<Accordions />} />
            <Route path="/interface/alerts" element={<Alerts />} />
            <Route path="/interface/avatars" element={<Avatars />} />
            <Route path="/interface/badges-and-labels" element={<BadgesLabels />} />
            <Route path="/interface/breadcrumbs" element={<Breadcrumbs />} />
            <Route path="/interface/buttons" element={<Buttons />} />
            <Route path="/interface/colors" element={<Colors />} />
            <Route path="/interface/dropdowns" element={<Dropdowns />} />
            <Route path="/interface/images" element={<Images />} />
            <Route path="/interface/list-groups" element={<ListGroups />} />
            <Route path="/interface/media-objects" element={<MediaObjects />} />
            <Route path="/interface/modals" element={<Modals />} />
            <Route path="/interface/navbars" element={<Navbars />} />
            <Route path="/interface/paginations" element={<Paginations />} />
            <Route path="/interface/progress-bars" element={<ProgressBars />} />
            <Route path="/interface/tabs-pills" element={<TabsPills />} />
            <Route path="/interface/tooltips-and-popovers" element={<TooltipPopovers />} />
            <Route path="/interface/typography" element={<Typography />} />
            <Route path="/interface/notifications" element={<Notifications />} />
            <Route path="/interface/crop-image" element={<CropImage />} />
            <Route path="/interface/drag-and-drop-elements" element={<DragAndDropElements />} />
            <Route path="/interface/calendar" element={<Calendar />} />

            <Route path="/forms/forms" element={<Forms />} />
            <Route path="/forms/forms-layouts" element={<FormsLayouts />} />
            <Route path="/forms/input-groups" element={<InputGroups />} />
            <Route path="/forms/wizard" element={<Wizard />} />
            <Route path="/forms/text-mask" element={<TextMask />} />
            <Route path="/forms/typeahead" element={<Typeahead />} />
            <Route path="/forms/toggles" element={<Toggles />} />
            <Route path="/forms/editor" element={<Editor />} />
            <Route path="/forms/date-picker" element={<DatePicker />} />
            <Route path="/forms/dropzone" element={<Dropzone />} />
            <Route path="/forms/sliders" element={<Sliders />} />

            <Route path="/graphs/re-charts" element={<ReCharts />} />

            <Route path="/tables/tables" element={<Tables />} />
            <Route path="/tables/extended-table" element={<ExtendedTable />} />
            <Route path="/tables/ag-grid" element={<AgGrid />} />

            <Route path="/apps/chat" element={<Chat />} />
            <Route path="/apps/clients" element={<Clients />} />
            <Route path="/apps/email-details" element={<EmailDetails />} />
            <Route path="/apps/files/:type" element={<Files />} />
            <Route path="/apps/gallery-grid" element={<GalleryGrid />} />
            <Route path="/apps/gallery-table" element={<GalleryTable />} />
            <Route path="/apps/images-results" element={<ImagesResults />} />
            <Route path="/apps/inbox" element={<Inbox />} />
            <Route path="/apps/new-email" element={<NewEmail />} />
            <Route path="/apps/projects/:type" element={<Projects />} />
            <Route path="/apps/search-results" element={<SearchResults />} />
            <Route path="/apps/tasks/:type" element={<Tasks />} />
            <Route path="/apps/task-details" element={<TasksDetails />} />
            <Route path="/apps/tasks-kanban" element={<TasksKanban />} />
            <Route path="/apps/videos-results" element={<VideosResults />} />

            <Route path="/pages/coming-soon" element={<ComingSoon />} />
            <Route path="/pages/confirmation" element={<Confirmation />} />
            <Route path="/pages/danger" element={<Danger />} />
            <Route path="/pages/error-404" element={<Error404 />} />
            <Route path="/pages/success" element={<Success />} />
            <Route path="/pages/timeline" element={<Timeline />} />

            <Route path="/icons" element={<Icons />} />

            <Route path="*" element={<Navigate to="/pages/error-404" replace />} />
        </Routes>
    );
};

export const RoutedNavbars = () => (
    <Routes>
        <Route path="/layouts/sidebar-a/*" element={<SidebarANavbar />} />
        <Route path="/layouts/navbar/*" element={<NavbarOnly.Navbar />} />
        <Route path="/layouts/sidebar-with-navbar/*" element={<SidebarWithNavbar.Navbar />} />
        <Route path="*" element={<DefaultNavbar />} />
    </Routes>
);

export const RoutedSidebars = () => (
    <Routes>
        <Route path="/layouts/sidebar-a/*" element={<SidebarASidebar />} />
        <Route path="/layouts/sidebar-with-navbar/*" element={<SidebarWithNavbar.Sidebar />} />
        <Route path="*" element={<DefaultSidebar />} />
    </Routes>
);
