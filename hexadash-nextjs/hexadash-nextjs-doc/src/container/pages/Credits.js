import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const License = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Credit',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Credit" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                  <h2>Credits/Plugins</h2>
                  <p>Here is the list of plugin with the official documentation. <strong>HexaDash</strong> won't be easy to build without using them and we are thankful to them.</p>
                  <div className="card-table table-responsive">
                      <table className="table">
                          <thead>
                              <tr>
                                  <th>Plugins</th>
                                  <th>Url</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>NextJS</td>
                                  <td><a href="https://nextjs.org/" target="_blank" rel="noreferrer">https://nextjs.org/</a></td>
                              </tr>
                              <tr>
                                  <td>React</td>
                                  <td><a href="https://reactjs.org/" target="_blank" rel="noreferrer">https://reactjs.org/</a></td>
                              </tr>
                              <tr>
                                  <td>Redux</td>
                                  <td><a href="https://redux.js.org/" target="_blank" rel="noreferrer">https://redux.js.org/</a></td>
                              </tr>
                              <tr>
                                  <td>React Redux</td>
                                  <td><a href="https://react-redux.js.org/" target="_blank" rel="noreferrer">https://react-redux.js.org/</a></td>
                              </tr>
                              <tr>
                                  <td>Next Redux Wrapper</td>
                                  <td><a href="https://github.com/kirill-konshin/next-redux-wrapper" target="_blank" rel="noreferrer">https://github.com/kirill-konshin/next-redux-wrapper</a></td>
                              </tr>
                              <tr>
                                  <td>Redux Thunk</td>
                                  <td><a href="https://github.com/reduxjs/redux-thunk" target="_blank" rel="noreferrer">https://github.com/reduxjs/redux-thunk</a></td>
                              </tr>
                              <tr>
                                  <td>@redux-devtools/extension</td>
                                  <td><a href="https://www.npmjs.com/package/@redux-devtools/extension" target="_blank" rel="noreferrer">https://www.npmjs.com/package/@redux-devtools/extension</a></td>
                              </tr>
                              <tr>
                                  <td>Typescript</td>
                                  <td><a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">https://www.typescriptlang.org/</a></td>
                              </tr>
                              <tr>
                                  <td>Tailwindcss</td>
                                  <td><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">https://tailwindcss.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Ant Design</td>
                                  <td><a href="https://ant.design/" target="_blank" rel="noreferrer">https://ant.design/</a></td>
                              </tr>
                              <tr>
                                  <td>Styled Components</td>
                                  <td><a href="https://styled-components.com/" target="_blank" rel="noreferrer">https://styled-components.com/</a></td>
                              </tr>
                              <tr>
                                  <td>React i18next</td>
                                  <td><a href="https://react.i18next.com/" target="_blank" rel="noreferrer">https://react.i18next.com//</a></td>
                              </tr>
                              <tr>
                                  <td>Axios</td>
                                  <td><a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">https://github.com/axios/axios</a></td>
                              </tr>
                              <tr>
                                  <td>Firebase</td>
                                  <td><a href="https://firebase.google.com/" target="_blank" rel="noreferrer">https://firebase.google.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Auth0</td>
                                  <td><a href="https://auth0.com/" target="_blank" rel="noreferrer">https://auth0.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Chart JS</td>
                                  <td><a href="https://www.npmjs.com/package/chartjs-react" target="_blank" rel="noreferrer">https://www.npmjs.com/package/chartjs-react</a></td>
                              </tr>
                              <tr>
                                  <td>Rechart JS</td>
                                  <td><a href="https://www.npmjs.com/package/recharts" target="_blank" rel="noreferrer">https://www.npmjs.com/package/recharts</a></td>
                              </tr>
                              <tr>
                                  <td>Google Chart JS</td>
                                  <td><a href="https://www.npmjs.com/package/react-google-charts" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-google-charts</a></td>
                              </tr>
                              <tr>
                                  <td>Peity Chart JS</td>
                                  <td><a href="https://benpickles.github.io/peity/" target="_blank" rel="noreferrer">https://benpickles.github.io/peity/</a></td>
                              </tr>
                              <tr>
                                  <td>React Google Maps</td>
                                  <td><a href="https://www.npmjs.com/package/react-google-maps" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-google-maps</a></td>
                              </tr>
                              <tr>
                                  <td>React Simple Maps</td>
                                  <td><a href="https://www.npmjs.com/package/react-simple-maps" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-simple-maps</a></td>
                              </tr>
                              <tr>
                                  <td>Leaflet</td>
                                  <td><a href="https://www.npmjs.com/package/react-leaflet" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-leaflet</a></td>
                              </tr>
                              <tr>
                                  <td>Swiper</td>
                                  <td><a href="https://www.npmjs.com/package/swiper" target="_blank" rel="noreferrer">https://www.npmjs.com/package/swiper</a></td>
                              </tr>
                              <tr>
                                  <td>Font Awesome</td>
                                  <td><a href="https://fontawesome.com/" target="_blank" rel="noreferrer">https://fontawesome.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Unicons</td>
                                  <td><a href="https://www.npmjs.com/package/@iconscout/react-unicons/" target="_blank" rel="noreferrer">https://www.npmjs.com/package/@iconscout/react-unicons</a></td>
                              </tr>
                              <tr>
                                  <td>Moment JS</td>
                                  <td><a href="https://momentjs.com/" target="_blank" rel="noreferrer">https://momentjs.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Day JS</td>
                                  <td><a href="https://day.js.org/docs/en/installation/installation/" target="_blank" rel="noreferrer">https://day.js.org/docs/en/installation/installation</a></td>
                              </tr>
                              <tr>
                                  <td>React Date Range</td>
                                  <td><a href="https://www.npmjs.com/package/react-date-range/" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-date-range</a></td>
                              </tr>
                              <tr>
                                  <td>React Custom Scroll</td>
                                  <td><a href="https://www.npmjs.com/package/react-custom-scrollbars-2" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-custom-scrollbars-2</a></td>
                              </tr>
                              <tr>
                                  <td>React Masonry CSS</td>
                                  <td><a href="https://www.npmjs.com/package/react-masonry-css" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-masonry-css</a></td>
                              </tr>
                              <tr>
                                  <td>React Responsive Masonry</td>
                                  <td><a href="https://www.npmjs.com/package/react-responsive-masonry" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-responsive-masonry</a></td>
                              </tr>
                              <tr>
                                  <td>React Lightbox Pack</td>
                                  <td><a href="https://www.npmjs.com/package/react-lightbox-pack" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-lightbox-pack</a></td>
                              </tr>
                              <tr>
                                  <td>React Modal Video</td>
                                  <td><a href="https://www.npmjs.com/package/react-modal-video" target="_blank" rel="noreferrer">https://www.npmjs.com/package/react-modal-video</a></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                </div>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>
      </Main>
    </>
  );
};

export default License;