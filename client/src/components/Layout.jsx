import React, { useState } from "react";
import { useAuth } from "../../Context/auth"; // Ensure the correct path
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Menu from "./menu";
import "./Layout.css"; // Importing the CSS file
import About from "./About";
import Contact from "./Contact";
import SignupPage from "./Signup";
import LoginPage from "./LoginPage";
import New from "./New";
import Show from "./show";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./Pagenotfound";
import Policy from "./Policy";
import UpdateFounder from "./Update";
import Postactive from "./Postactive";
import Founders from "./founders";
import { ToastContainer } from "react-toastify";
import Analytics from "../pages/AnalyticsLayout";
import CRM from "../pages/CrmLayout";
import Ecommerce from "../pages/EcommerceLayout";
import Academy from "../pages/AcademyLayout";
import ContentNavbar from "../pages/ContentNavbarLayout";
import ContentNavSidebar from "../pages/ContentNavSidebarLayout";
import WithoutMenu from "../pages/NoMenuLayout";
import WithoutNavbar from "../pages/NoNavbarLayout";
import Fluid from "../pages/FluidLayout";
import Blank from "../pages/BlankLayout";
import Pricing from "../pages/PricingLayout";
import Checkout from "../pages/CheckoutLayout";
import Email from "../pages/EmailLayout";
import Kanban from "../pages/KanbanLayout";
import Dashboard from "../pages/DashboardLayout";
import Products from "../pages/ProductsLayout";
import ManageReviews from "../pages/ManageReviewsLayout";
import StoreDetails from "../pages/StoreDetailsLayout";
import ShippingDelivery from "../pages/ShippingDeliveryLayout";
import Notifications from "../pages/NotificationsLayout";
import Invoice from "../pages/InvoiceLayout";
import RolesPermissions from "../pages/RolesPermissionsLayout";
import Authentications from "../pages/AuthenticationsLayout";
import ModalExamples from "../pages/ModalExamplesLayout";
import ExtendedUI from "../pages/ExtendedUI";
import CollapsedMenu from "../pages/CollapsedMenu";
import Horizontal from "../pages/HorizontalCollapsedMenu";
import Container from "../pages/ContainerLayout";
import Landing from "../pages/LandingPage";
import Payment from "../pages/PaymentPage";
import HelpCenter from "../pages/HelpCenterPage";
import Charts from "../pages/ChartsPage";
import Calendar from "../pages/CalendarPage";
import Order from "../pages/orderPage";
import Customer from "../pages/CustomerPage";
import Referrals from "../pages/ReferralsPage";
import Locations from "../pages/LocationsPage";
import Users from "../pages/UsersPage";
import Pages from "../pages/PagesPage";
import Cards from "../pages/Cards";
import UserInterface from "../pages/UserInterface";
import Icons from "../pages/Icons";
import FormLayouts from "../pages/FormLayouts";
import FormElements from "../pages/FormElements";
import FormValidations from "../pages/FormValidations";
import Tables from "../pages/Tables";
import DataTables from "../pages/DataTables";
import LeafletMaps from "../pages/LeafletMaps";
import Support from "../pages/Support";
import Documentation from "../pages/Documentation";
import WizardExamples from "../pages/WizardExamples";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const [auth] = useAuth(); // Using the auth context

  console.log(auth); // Debugging log to ensure auth context is available

  const handlechange = () => {
    setToggle(!toggle);
  };

  return (
    <div className="layout">
      <aside className={toggle ? "sidebar sidebar-toggle" : "sidebar"}>
        <div className="sidebar-toggle-icons" onClick={handlechange}>
          {toggle ? (
            <MdKeyboardDoubleArrowLeft size={30} />
          ) : (
            <MdKeyboardDoubleArrowRight size={30} />
          )}
        </div>
        <Menu toggle={toggle} />
      </aside>
      <Header />
      <div className="content-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Policy />} />
            <Route path="/about" element={<About />} />
            <Route path="/founders/new" element={<New />} />
            <Route path="/founders/:id" element={<Show />} />
            <Route path="/founders/:id/update" element={<UpdateFounder />} />
            <Route path="/new-reffer" element={<Postactive />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/content-navbar" element={<ContentNavbar />} />
            <Route
              path="/content-nav-sidebar"
              element={<ContentNavSidebar />}
            />
            <Route path="/without-menu" element={<WithoutMenu />} />
            <Route path="/without-navbar" element={<WithoutNavbar />} />
            <Route path="/fluid" element={<Fluid />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/email" element={<Email />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manage-reviews" element={<ManageReviews />} />
            <Route path="/store-details" element={<StoreDetails />} />
            <Route path="/shipping-delivery" element={<ShippingDelivery />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/roles-permissions" element={<RolesPermissions />} />
            <Route path="/authentications" element={<Authentications />} />
            <Route path="/modal-examples" element={<ModalExamples />} />
            <Route path="/extended-ui" element={<ExtendedUI />} />
            <Route path="/collapsed-menu" element={<CollapsedMenu />} />
            <Route path="/horizontal" element={<Horizontal />} />
            <Route path="/container" element={<Container />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/order" element={<Order />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/users" element={<Users />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/wizard-examples" element={<WizardExamples />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/user-interface" element={<UserInterface />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/form-layouts" element={<FormLayouts />} />
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/form-validations" element={<FormValidations />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/data-tables" element={<DataTables />} />
            <Route path="/leaflet-maps" element={<LeafletMaps />} />
            <Route path="/support" element={<Support />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
