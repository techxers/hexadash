import { Col, Row } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Overview = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Overview Page',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Introduction" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                  <h2>
                    Welcome
                  </h2>
                  <p>HexaDash NextJS is a feature-filled NextJS admin template with Tailwind CSS and some awesome component library that ships with hundreds of ready-to-use components. HexaDash NextJS is developed by using the utility classes from Tailwind CSS. You can continue working with any other Tailwind CSS project as it uses the standard PostCSS configuration method together with purging classes as it is recommended. The limitless possibilities come in your hand with its rich component library. The theme features a beautiful dashboard, many ready-to-use hand-crafted components, widgets, pages, and so on. The cool thing is that you can use these components on any page with the utmost possible ease. The theme fits any device just because of its improved responsiveness. This powerful and amazingly flexible theme suits the best for many web applications including CRM, CMS, Admin Panels, Dashboards, etc. What makes it stand out, you know? Our developer team has implemented the theory of modularity while hammering out this amazing theme which will eventually help you to reduce the development cost and time.</p>
                  <p><strong>HexaDash</strong> has 2 Unique demo pages and 7 apps. It is a perfect solution for any kind of custom project like E-commerce, Project Management, Support, Educational Dashboard, CRM, Marketing Dashboard, and so on...</p>
                  <p><strong>HexaDash</strong> 130+ pages, 90+ components, 50+ Charts, and 90+ widgets developed with a mobile-first design approach. </p>
                  <h2>Featured App</h2>
                  <ul>
                    <li>Email</li>
                    <li>Chat</li>
                    <li>eCommerce</li>
                    <li>Social App</li>
                    <li>Project</li>
                    <li>Contact</li>
                    <li>Support</li>
                  </ul>
                  <h2>Key Feature</h2>
                  <p>HexaDash contains increadible features listed below.</p>
                  <ul>
                    <li><strong>NextJS</strong></li>
                    <li>Build with <strong>React 18.2.0</strong></li>
                    <li>Modern Design</li>
                    <li>Fully Responsive Design</li>
                    <li><strong>Authentication</strong> </li>
                    <li><strong>Antd 5.94.</strong> compatible</li>
                    <li><strong>TailwindCSS 3.3.3</strong> compatible</li>
                    <li><strong>React Hooks</strong> </li>
                    <li><strong>Redux Thunk</strong></li>
                    <li><strong>Multi Language</strong> support with i18n ( JSON object )</li>
                    <li>Multiple Layouts</li>
                    <li>React Library Based components<strong> (No Jquery)</strong></li>
                    <li>Email, eCommerce,  Projects, Supports, Calendar, Contact & many more apps.</li>
                    <li>Settings, Gallery, Pricing, Banners, Testimonials, Faqs, Maintenance , 404, Terms & Conditions, Coming Soon and many more pages.</li>
                    <li>Clean Code</li>
                    <li>Async Loading</li>
                    <li>Code Splitting</li>
                  </ul>
                  <h2>Layout Features</h2>
                  <ul>
                    <li>Light & Dark Mode Supported</li>
                    <li>Sidebar & Top menu supported</li>
                    <li>LTR & RTL Supported</li>
                  </ul>
                  <h2>Dependencies</h2>
                  <ul>
                    <li>NextJS</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Antd</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Overview;
