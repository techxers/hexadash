import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { DocumentationStyleWrap, SiteMapWrap } from './style';

const Installation = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Installation',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Installation" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <SiteMapWrap>
                    <div className="ninjadash-sitemap">
                        <ul className="list-unstyled mb-0">
                            <li className="p-0 ninjadash-sitemap__parent-title"><Link to="#" className="fw-medium fs-14">hexadash-nextjs</Link>
                            </li>
                            <li>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className=" ri-folder-2-line me-1 align-bottom"></i>src</Link>
                                    </div>
                                    <ul className="ninjadash-sitemap__second-list list-unstyled">
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>authentication</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="fw-medium text-primary"><i className=" ri-folder-2-line me-1 align-bottom"></i>componenets</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="#"><i className="ri-folder-2-line me-1 align-bottom"></i>alerts</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>autoComplete</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>banners</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>buttons</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>cards</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>cascader</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>charts</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>checkbox</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>comments</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>datePicker</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>drawer</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>dropdown</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>header-search</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>heading</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>maps</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>modals</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>page-headers</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>popup</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>pricing</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>slider</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>social-media</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>steps</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>table</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>tabs</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>tags</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>utilities</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>config</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="#"><i className="ri-folder-2-line me-1 align-bottom"></i>api</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>dataService</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>icon</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>map</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>theme</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>auth0.tsx</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>auth0Config.tsx</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>config.tsx</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>dashboard</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="#"><i className="ri-folder-2-line me-1 align-bottom"></i>demo-1</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>demo-2</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>DashboardBase.tsx</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>demoData</Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>i18n</Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>layout</Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>pages</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li><Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>admin</Link></li>
                                                <li><Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>api</Link></li>
                                                <li><Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>_app.tsx</Link></li>
                                                <li><Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>_document.tsx</Link></li>
                                                <li><Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>404.tsx</Link></li>
                                                <li><Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>index.tsx</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>redux</Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>style</Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className=" ri-folder-2-line me-1 align-bottom"></i>utility</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>localStorageControl.tsx</Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="ri-file-2-line me-1 align-bottom"></i>index.tsx</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-file-2-line me-1 align-bottom"></i>.env</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>.gitignore</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>README.md</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>custom.d.ts</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>next.config.js</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>package.json</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>postcss.config.js</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>tailwind.config.js</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="#" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>tsconfig.json</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </SiteMapWrap>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Installation;
