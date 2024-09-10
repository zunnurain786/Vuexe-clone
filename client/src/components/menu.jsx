import React, { useState } from "react";
import "./Sidebar.css";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaEnvelope, FaChartPie } from "react-icons/fa";

export default function menu({ toggle }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {toggle ? (
        <>
          <Fade left>
            <aside className="sidebar-toggle">
              <ul className="nav-list">
                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />

                    <span>
                      <NavLink to="/#">Dashboard</NavLink>
                    </span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/analytics" className="dropdown-item">
                          Analytics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/crm" className="dropdown-item">
                          CRM
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/ecommerce" className="dropdown-item">
                          E-commerce
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/logistics" className="dropdown-item">
                          Logistics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/academy" className="dropdown-item">
                          Academy
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>Layouts</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/collapsed-menu" className="dropdown-item">
                          Collapsed menu
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/content-navbar" className="dropdown-item">
                          Content Navbar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contant-nav-sidebar"
                          className="dropdown-item"
                        >
                          Content nav + Sidebar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="horizontal" className="dropdown-item">
                          Horizontal
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/without-menu" className="dropdown-item">
                          Without menu
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/without-navbar" className="dropdown-item">
                          Without navbar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/fluid" className="dropdown-item">
                          Fluid
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/container" className="dropdown-item">
                          Container
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/blank" className="dropdown-item">
                          Blank
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>Front Pages</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/landing" className="dropdown-item">
                          Landing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/pricing" className="dropdown-item">
                          Pricing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/payment" className="dropdown-item">
                          Payment
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout" className="dropdown-item">
                          Checkout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/help-center" className="dropdown-item">
                          Help Center
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <h3>Apps & Pages</h3>
                <li>
                  <NavLink to="/email" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Email</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/charts" className="nav-item">
                    <FaChartPie className="nav-icon" />
                    <span>Charts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calendar" className="nav-item">
                    <FaChartPie className="nav-icon" />
                    <span>Calendar</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Kanban" className="nav-item">
                    <FaChartPie className="nav-icon" />
                    <span>Kanban</span>
                  </NavLink>
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>eCommerce</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/#" className="dropdown-item">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products" className="dropdown-item">
                          Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/order" className="dropdown-item">
                          Order
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/customer" className="dropdown-item">
                          Customer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/manage-reviews" className="dropdown-item">
                          Manage Reviews
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/referrals" className="dropdown-item">
                          Referrals
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>Settings</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/store-details" className="dropdown-item">
                          Store details
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/payment" className="dropdown-item">
                          Payments
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout" className="dropdown-item">
                          Checkout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/shipping-delivery"
                          className="dropdown-item"
                        >
                          Shipping and Delivery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/locations" className="dropdown-item">
                          Locations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/notifications" className="dropdown-item">
                          Notifications
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <NavLink to="/academy" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Academy</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/logistics" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Logistics</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/invoice" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Invoice</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/users" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Users</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/roles-permissions" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Roles & Permissions</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/pages" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Pages</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/authentications" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Authentications</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/wizard-examples" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Wizard Examples</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/modal-examples" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Modal Examples</span>
                  </NavLink>
                </li>

                <h4>Components</h4>

                <li>
                  <NavLink to="/cards" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Cards</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/user-interface" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>User interface</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/extended-ui" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Extended UI</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/icons" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Icons</span>
                  </NavLink>
                </li>

                <h3>Forms & Tables</h3>

                <li>
                  <NavLink to="/form-elements" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Form Elements</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/form-layouts" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Form Layouts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/form-Validation" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Form Validations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tables" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Tables</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/data-tables" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Datatables</span>
                  </NavLink>
                </li>

                <h4>Charts & Maps</h4>

                <li>
                  <NavLink to="/charts" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Charts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/leaflet-maps" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Leaflet Maps</span>
                  </NavLink>
                </li>

                <h4>MISC</h4>

                <li>
                  <NavLink to="/support" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Support</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/documentation" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Documentation </span>
                  </NavLink>
                </li>
              </ul>
            </aside>
          </Fade>
        </>
      ) : (
        <>
          <Fade>
            <aside className="sidebar-toggle">
              <ul className="nav-list">
                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />

                    <span>
                      <NavLink to="/#">Dashboard</NavLink>
                    </span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/analytics" className="dropdown-item">
                          Analytics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/crm" className="dropdown-item">
                          CRM
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/ecommerce" className="dropdown-item">
                          E-commerce
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/logistics" className="dropdown-item">
                          Logistics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/academy" className="dropdown-item">
                          Academy
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>Layouts</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/collapsed-menu" className="dropdown-item">
                          Collapsed menu
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/content-navbar" className="dropdown-item">
                          Content Navbar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contant-nav-sidebar"
                          className="dropdown-item"
                        >
                          Content nav + Sidebar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="horizontal" className="dropdown-item">
                          Horizontal
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/without-menu" className="dropdown-item">
                          Without menu
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/without-navbar" className="dropdown-item">
                          Without navbar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/fluid" className="dropdown-item">
                          Fluid
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/container" className="dropdown-item">
                          Container
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/blank" className="dropdown-item">
                          Blank
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>Front Pages</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/landing" className="dropdown-item">
                          Landing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/pricing" className="dropdown-item">
                          Pricing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/payment" className="dropdown-item">
                          Payment
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout" className="dropdown-item">
                          Checkout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/help-center" className="dropdown-item">
                          Help Center
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <h3>Apps & Pages</h3>
                <li>
                  <NavLink to="/email" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Email</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/charts" className="nav-item">
                    <FaChartPie className="nav-icon" />
                    <span>Charts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calendar" className="nav-item">
                    <FaChartPie className="nav-icon" />
                    <span>Calendar</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Kanban" className="nav-item">
                    <FaChartPie className="nav-icon" />
                    <span>Kanban</span>
                  </NavLink>
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>eCommerce</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/#" className="dropdown-item">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products" className="dropdown-item">
                          Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/order" className="dropdown-item">
                          Order
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/customer" className="dropdown-item">
                          Customer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/manage-reviews" className="dropdown-item">
                          Manage Reviews
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/referrals" className="dropdown-item">
                          Referrals
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div
                    className="nav-item"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaTachometerAlt className="nav-icon" />
                    <span>Settings</span>
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/store-details" className="dropdown-item">
                          Store details
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/payment" className="dropdown-item">
                          Payments
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout" className="dropdown-item">
                          Checkout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/shipping-delivery"
                          className="dropdown-item"
                        >
                          Shipping and Delivery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/locations" className="dropdown-item">
                          Locations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/notifications" className="dropdown-item">
                          Notifications
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <NavLink to="/academy" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Academy</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/logistics" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Logistics</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/invoice" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Invoice</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/users" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Users</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/roles-permissions" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Roles & Permissions</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/pages" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Pages</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/authentications" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Authentications</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/wizard-examples" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Wizard Examples</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/modal-examples" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Modal Examples</span>
                  </NavLink>
                </li>

                <h4>Components</h4>

                <li>
                  <NavLink to="/cards" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Cards</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/user-interface" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>User interface</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/extended-ui" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Extended UI</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/icons" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Icons</span>
                  </NavLink>
                </li>

                <h3>Forms & Tables</h3>

                <li>
                  <NavLink to="/form-elements" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Form Elements</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/form-layouts" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Form Layouts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/form-Validation" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Form Validations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tables" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Tables</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/data-tables" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Datatables</span>
                  </NavLink>
                </li>

                <h4>Charts & Maps</h4>

                <li>
                  <NavLink to="/charts" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Charts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/leaflet-maps" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Leaflet Maps</span>
                  </NavLink>
                </li>

                <h4>MISC</h4>

                <li>
                  <NavLink to="/support" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Support</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/documentation" className="nav-item">
                    <FaEnvelope className="nav-icon" />
                    <span>Documentation </span>
                  </NavLink>
                </li>
              </ul>
            </aside>
          </Fade>
        </>
      )}
    </>
  );
}
