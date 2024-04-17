import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const MultiLanguage = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Multi Language',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Multi Language" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <p>HexaDash Respect every mother language so that we provide you multi-language support through HexaDash admin. <strong>i18n</strong> language translation library used for tranlation.</p>
                    <p className="mb-0"><strong>How to add new language?</strong> </p>
                    <p className="mb-0">Lets add Bengali language: </p>
                    <p className="mb-0">1) Craete a folder at <code>src/i18n/localization</code> named <code>/bn</code>. Then create a file under this folder named <code>/translation.json</code> </p>
                    <p className="mb-0">2) Update the below code in the <code>src/i18n/config.js</code></p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
resources: {
    bn: {
        translations: require('./localization/bn/translation.json')
    }
},

i18n.languages = ['bn'];
`
}
                            </code>
                        </pre>
                    </div>
                    <p>3) Then Update the dropdown from <code>src/layout/auth-info/info.tsx</code></p>
                    <div className="docs-highlighter">
                        <p className="mb-5">Refer below mentioned code to add language to dropdown:</p>
                        <pre>
                            <code className="language-javascript">
{
`
const country = [
  {
    key: '1',
    label: (
      <Link
        href="#"
        onClick={(e) => onFlagChangeHandle('en', e)}
        className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
      >
        <Image className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" src='/hexadash-nextjs/img/flag/en.png' alt=""  width="20" height="20" />
        <span>English</span>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link
        href="#"
        onClick={(e) => onFlagChangeHandle('esp', e)}
        className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
      >
        <Image className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" src='/hexadash-nextjs/img/flag/esp.png' alt=""  width="20" height="20" />
        <span>Spanish</span>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link
        href="#"
        onClick={(e) => onFlagChangeHandle('ar', e)}
        className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
      >
        <Image className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" src='/hexadash-nextjs/img/flag/ar.png' alt=""  width="20" height="20" />
        <span>Arabic</span>
      </Link>
    ),
  }
];
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

export default MultiLanguage;