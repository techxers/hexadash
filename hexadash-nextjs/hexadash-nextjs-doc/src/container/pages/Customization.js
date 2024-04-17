import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Prism from "prismjs";
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const NewPage = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Theme Configuration',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Theme Configuration" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <p>For customizing theme go to <code>config/theme/themeVariable.js</code> and customize the variables according to your necessity. HexaDash is based on antd. For additional changes, here is the list of available variable for customization <a href="https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less">https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less</a>. <strong>Using theme variables in the app.</strong></p>

                    <h2>Change font</h2>
                    <p>Simplest way to change font is to go to google fonts, select fonts, click embed copy the link. Now go to <code>/src/pages/_document.tsx</code> and paste the link in head tag. Please remove the links of any unused fonts from the head.</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>HexaDash</title>
        <link rel="icon" href="/hexadash-nextjs/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Changing Light & Dark Mode, Side Navbar & Top Navbar Mode, LTR & RTL Mode</h2>
                    <p>To change layout mode light to dark, ltr to RTL, sidebar type side to top go to <code>src/config/config.js</code> and just change your desired layout mode</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import { theme } from './theme/themeVariables';

const config = {
  menuCollapse: false,
  topMenu: false,
  rtl: false,
  mainTemplate: 'lightMode',
  loggedIn: false,
  theme,
};

export default config;
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Change Logo</h2>
                    <p>To change both dark and light logo, go to <code>src/layout/header/index.tsx</code> and change source of the logo image</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
<Link href="/admin">
  <Image
    className="w-full max-w-[120px] xs:max-w-[100px]"
    src={
      layoutMode === 'lightMode'
        ? '/hexadash-nextjs/img/logo_dark.svg'
        : '/hexadash-nextjs/img/logo_white.svg'
    }
    alt="Logo"
    width="140" 
    height="20"
  />
</Link>
`
}
                            </code>
                        </pre>
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

export default NewPage;
