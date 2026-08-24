import React from 'react';
import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import NavbarOnly from './Layouts/NavbarOnly';
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';
import DragAndDropLayout from './Layouts/DragAndDropLayout';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';

import {
    Hub,
    Exemplo1,
    Exemplo2,
    Exemplo3,
    Placeholder
} from './Propostas';

import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';
import { CorporateNavbar } from './../layout/components/CorporateNavbar';
import { CorporateSidebar } from './../layout/components/CorporateSidebar';
import { HubNavbar } from './../layout/components/HubNavbar';
import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';
import { PageLoader } from './../components';

const Analytics = React.lazy(() => import('./Dashboards/Analytics'));
const ProjectsDashboard = React.lazy(() => import('./Dashboards/Projects'));
const System = React.lazy(() => import('./Dashboards/System'));
const Monitor = React.lazy(() => import('./Dashboards/Monitor'));
const Financial = React.lazy(() => import('./Dashboards/Financial'));
const Stock = React.lazy(() => import('./Dashboards/Stock'));
const Reports = React.lazy(() => import('./Dashboards/Reports'));
const Widgets = React.lazy(() => import('./Widgets'));
const Cards = React.lazy(() => import('./Cards/Cards'));
const CardsHeaders = React.lazy(() => import('./Cards/CardsHeaders'));
const Accordions = React.lazy(() => import('./Interface/Accordions'));
const Alerts = React.lazy(() => import('./Interface/Alerts'));
const Avatars = React.lazy(() => import('./Interface/Avatars'));
const BadgesLabels = React.lazy(() => import('./Interface/BadgesLabels'));
const Breadcrumbs = React.lazy(() => import('./Interface/Breadcrumbs'));
const Buttons = React.lazy(() => import('./Interface/Buttons'));
const Colors = React.lazy(() => import('./Interface/Colors'));
const Dropdowns = React.lazy(() => import('./Interface/Dropdowns'));
const Images = React.lazy(() => import('./Interface/Images'));
const ListGroups = React.lazy(() => import('./Interface/ListGroups'));
const MediaObjects = React.lazy(() => import('./Interface/MediaObjects'));
const Modals = React.lazy(() => import('./Interface/Modals'));
const Navbars = React.lazy(() => import('./Interface/Navbars'));
const Paginations = React.lazy(() => import('./Interface/Paginations'));
const ProgressBars = React.lazy(() => import('./Interface/ProgressBars'));
const TabsPills = React.lazy(() => import('./Interface/TabsPills'));
const TooltipPopovers = React.lazy(() => import('./Interface/TooltipsPopovers'));
const Typography = React.lazy(() => import('./Interface/Typography'));
const Notifications = React.lazy(() => import('./Interface/Notifications'));
const CropImage = React.lazy(() => import('./Interface/CropImage'));
const DragAndDropElements = React.lazy(() => import('./Interface/DragAndDropElements'));
const Calendar = React.lazy(() => import('./Interface/Calendar'));
const ReCharts = React.lazy(() => import('./Graphs/ReCharts'));
const Forms = React.lazy(() => import('./Forms/Forms'));
const FormsLayouts = React.lazy(() => import('./Forms/FormsLayouts'));
const InputGroups = React.lazy(() => import('./Forms/InputGroups'));
const Wizard = React.lazy(() => import('./Forms/Wizard'));
const TextMask = React.lazy(() => import('./Forms/TextMask'));
const Typeahead = React.lazy(() => import('./Forms/Typeahead'));
const Toggles = React.lazy(() => import('./Forms/Toggles'));
const Editor = React.lazy(() => import('./Forms/Editor'));
const DatePicker = React.lazy(() => import('./Forms/DatePicker'));
const Dropzone = React.lazy(() => import('./Forms/Dropzone'));
const Sliders = React.lazy(() => import('./Forms/Sliders'));
const Tables = React.lazy(() => import('./Tables/Tables'));
const ExtendedTable = React.lazy(() => import('./Tables/ExtendedTable'));
const AgGrid = React.lazy(() => import('./Tables/AgGrid'));
const Chat = React.lazy(() => import('./Apps/Chat'));
const Clients = React.lazy(() => import('./Apps/Clients'));
const EmailDetails = React.lazy(() => import('./Apps/EmailDetails'));
const Files = React.lazy(() => import('./Apps/Files'));
const GalleryGrid = React.lazy(() => import('./Apps/GalleryGrid'));
const GalleryTable = React.lazy(() => import('./Apps/GalleryTable'));
const ImagesResults = React.lazy(() => import('./Apps/ImagesResults'));
const Inbox = React.lazy(() => import('./Apps/Inbox'));
const NewEmail = React.lazy(() => import('./Apps/NewEmail'));
const Projects = React.lazy(() => import('./Apps/Projects'));
const SearchResults = React.lazy(() => import('./Apps/SearchResults'));
const Tasks = React.lazy(() => import('./Apps/Tasks'));
const TasksDetails = React.lazy(() => import('./Apps/TasksDetails'));
const TasksKanban = React.lazy(() => import('./Apps/TasksKanban'));
const VideosResults = React.lazy(() => import('./Apps/VideosResults'));
const ComingSoon = React.lazy(() => import('./Pages/ComingSoon'));
const Confirmation = React.lazy(() => import('./Pages/Confirmation'));
const Danger = React.lazy(() => import('./Pages/Danger'));
const Error404 = React.lazy(() => import('./Pages/Error404'));
const Success = React.lazy(() => import('./Pages/Success'));
const Timeline = React.lazy(() => import('./Pages/Timeline'));
const Icons = React.lazy(() => import('./Icons'));

const PROPOSTA_SECTIONS = [
    'fluxo-de-trabalho',
    'capacitacao',
    'indicadores-do-prefixo',
    'relatorios',
    'baixar-tabelas',
    'documentacao',
    'sugestoes'
];

//------ Route Definitions --------
export const RoutedContent = () => {
    return (
        <React.Suspense fallback={<PageLoader />}>
        <Routes>
            <Route path="/" element={<Hub />} />
            <Route path="/exemplo1" element={<Exemplo1 />} />
            <Route path="/exemplo2" element={<Exemplo2 />} />
            <Route path="/exemplo3" element={<Exemplo3 />} />
            {['exemplo1', 'exemplo2', 'exemplo3'].flatMap((slug) =>
                PROPOSTA_SECTIONS.map((section) => (
                    <Route
                        key={`${slug}-${section}`}
                        path={`/${slug}/${section}`}
                        element={<Placeholder />}
                    />
                ))
            )}

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
        </React.Suspense>
    );
};

export const RoutedNavbars = () => (
    <Routes>
        <Route path="/" element={<HubNavbar />} />
        <Route path="/exemplo1/*" element={<CorporateNavbar />} />
        <Route path="/exemplo2/*" element={<CorporateNavbar />} />
        <Route path="/exemplo3/*" element={<CorporateNavbar />} />
        <Route path="/layouts/sidebar-a/*" element={<SidebarANavbar />} />
        <Route path="/layouts/navbar/*" element={<NavbarOnly.Navbar />} />
        <Route path="/layouts/sidebar-with-navbar/*" element={<SidebarWithNavbar.Navbar />} />
        <Route path="*" element={<DefaultNavbar />} />
    </Routes>
);

export const RoutedSidebars = () => (
    <Routes>
        <Route path="/" element={null} />
        <Route path="/exemplo1/*" element={<CorporateSidebar />} />
        <Route path="/exemplo2/*" element={<CorporateSidebar />} />
        <Route path="/exemplo3/*" element={<CorporateSidebar />} />
        <Route path="/layouts/sidebar-a/*" element={<SidebarASidebar />} />
        <Route path="/layouts/sidebar-with-navbar/*" element={<SidebarWithNavbar.Sidebar />} />
        <Route path="*" element={<DefaultSidebar />} />
    </Routes>
);
