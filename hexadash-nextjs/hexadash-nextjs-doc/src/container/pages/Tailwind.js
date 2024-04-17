import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Tailwind = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Redux',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tailwind" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Get Started</h2>
                    <p className="mb-0"> Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
                    <p>It's fast, flexible, and reliable — with zero-runtime.</p>
                    <h2>To setup Tailwind CSS , please follow the below steps:</h2>
                    <p className="mb-0">The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.</p>
                    <p className="mb-0"><b>1. Install Tailwind CSS</b></p>
                    <p>Install <b>tailwindcss</b> via npm, and create your <b>tailwind.config.js</b> file.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
npm install -D tailwindcss
npx tailwindcss init

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>2. Configure your template paths</b></p>
                    <p>Add the paths to all of your template files in your <b>tailwind.config.js</b> file.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>3. Add the Tailwind directives to your CSS</b></p>
                    <p>Add the <b>@tailwind </b>directives for each of Tailwind’s layers to your main CSS file.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>4. Start the Tailwind CLI build process</b></p>
                    <p>Run the CLI tool to scan your template files for classes and build your CSS.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>5. Start using Tailwind in your HTML</b></p>
                    <p>Add your compiled CSS file to the <b>`head`</b> and start using Tailwind’s utility classes to style your content.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
  <!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="/dist/output.css" rel="stylesheet">
    </head>
    <body>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </body>
  </html>

`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Editor Setup</h2>
                    <p>Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.</p>
                    <h3>Syntax support</h3>
                    <p>Tailwind CSS uses a lot of custom CSS at-rules like <b>@tailwind, @apply, and @screen</b>, and in many editors this can trigger warnings or errors where these rules aren’t recognized.</p>

                    <p>The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS.</p>

                    <p>If you’re using VS Code, our official <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">Tailwind CSS IntelliSense</a> plugin includes a dedicated Tailwind CSS language mode that has support for all of the custom at-rules and functions Tailwind uses.</p>

                    <p>In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.</p>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Theme Configuration</h2>
                    <p>The <b>theme</b> section of your <b>tailwind.config.js</b> file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8231D3',
        secondary: '#5840FF',
        success: '#01B81A',
        pink: '#f2eafb',
        warning: '#FA8B0C',
        danger: '#ff4d4f',
        info: '#00AAFF',
        link: '#1890ff',
        dark: '#0A0A0A',
        body: '#404040',
        'theme-gray': '#404040',
        'theme-grayDark': 'rgb(255, 255, 255, .06)',
        light: '#747474',
        lightDark: 'rgb(255, 255, 255, .06)',
        'light-extra': '#a0a0a0',
        'light-extraDark': 'rgb(255, 255, 255, .06)',
        violet: '#5840ff',
        section: '#f4f5f7',
        breadcrumbs: '#666D92',
        active: '#01b81a',
        done: '#01b81a',
        deactivated: '#FA8B0C',
        pending: '#FA8B0C',
        blocked: '#ff0f0f',
        early: '#8231d3',
        late: '#fa8b0c',
        progress: '#ff4d4f',
        complete: '#01b81a',
        'google-plus': 'rgb(240, 101, 72)',
        google: 'rgb(241, 67, 54)',
        facebook: 'rgb(58, 88, 155)',
        youtube: '#FF0000',
        twitter: 'rgb(3, 169, 244)',
        github: 'rgb(9, 14, 48)',
        linkedin: 'rgb(0, 122, 185)',
        instagram: 'rgb(209, 32, 143)',
        dribbble: '#c2185b',
        medium: '#66cdaa',
        'primary-transparent': 'rgba(130, 49, 211, 0.082)',
        'secondary-transparent': 'rgba(88, 64, 255, 0.082)',
        'link-transparent': 'rgba(88, 64, 255, 0.082)',
        'success-transparent': 'rgb( 1, 184, 26, 0.082)',
        'pink-transparent': 'rgb(242, 234, 251, 0.082)',
        'warning-transparent': 'rgba(250, 139, 12, 0.082)',
        'danger-transparent': 'rgb( 255, 15, 15, .082)',
        'info-transparent': 'rgba(0, 170, 255, 0.082)',
        'dark-transparent': 'rgba(10, 10, 10, 0.082)',
        'theme-gray-transparent': 'rgba(64, 64, 64, 0.082)',
        'active-transparent': 'rgb( 1, 184, 26, 0.082)',
        'done-transparent': 'rgb( 1, 184, 26, 0.082)',
        'deactivated-transparent': 'rgba(250, 139, 12, 0.082)',
        'pending-transparent': 'rgba(250, 139, 12, 0.082)',
        'blocked-transparent': 'rgba(255, 15, 15, 0.082)',
        'google-plus-transparent': 'rgba(240, 101, 72, 0.063)',
        'google-transparent': 'rgba(241, 67, 54, 0.063)',
        'facebook-transparent': 'rgba(58, 88, 155, 0.063)',
        'twitter-transparent': 'rgba(3, 169, 244, 0.063)',
        'github-transparent': 'rgba(3, 169, 244, 0.063)',
        'linkedin-transparent': 'rgba(0, 122, 185, 0.063)',
        'instagram-transparent': 'rgba(209, 32, 143, 0.063)',
        'shadow-transparent': 'rgba(130, 49, 211, 0.02)',
        'primary-hbr': '#6726A8',
        'secondary-hbr': '#3520C8',
        'success-hbr': '#0D811D',
        'info-hbr': '#0787C7',
        'warning-hbr': '#D9790A',
        'danger-hbr': '#CB0000',
        'dark-hbr': '#272525',
        'gray-hbr': '#585858',
        'light-hbr': '#585858',
        'light-extra-hbr': '#585858',
        regular: '#F1F2F6',
        normal: '#E3E6EF',
        deep: '#C6D0DC',
        regularDark: 'rgb(255, 255, 255, .06)',
        normalDark: 'rgb(255, 255, 255, .06)',
        deepDark: 'rgb(255, 255, 255, .06)',
        regularBG: '#F8F9FB',
        normalBG: '#F4F5F7',
        deepBG: '#EFF0F3',
        insideBG: '#efeffe',
        white: '#ffffff',
        regularBGdark: 'rgb(255, 255, 255, .10)',
        normalBGdark: 'rgb(255, 255, 255, .10)',
        deepBGdark: 'rgb(255, 255, 255, .10)',
        whiteDark: 'rgb(255, 255, 255, .10)',
        currentColor: 'currentColor',
      },
      boxShadow: {
        regular: '0 5px 20px rgba(160,160,160,0.05)',
        pricing: '0 5px 20px rgba(146,153,184,0.2)',
        action: '0 5px 20px rgba(64, 64, 64, 0.08)',
        box: '0 15px 25px rgba(146,153,184,0.2)',
        boxLarge: '0 10px 40px rgba(146,153,184,0.2)',
        custom: '0 15px 50px #9299b820',
        dot: '0 0 0 1px #fff',
        btn: '0 8px 13px rgba(130, 49 ,211, 0.13)',
        faq: '0 15px 40px rgba(116, 116 ,116, 0.08)',
      },
      borderWidth: {
        1: '1px',
        5: '5px',
      },
      borderRadius: {
        4: '4px',
        6: '6px',
        10: '10px',
      },
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
        Awesome: ['FontAwesome'],
      },
      fontSize: {
        10: ['10px', '14px'],
        11: ['11px', '15px'],
        13: ['13px', '18px'],
        15: ['15px', '24px'],
        17: ['17px', '26px'],
        22: ['22px', '30px'],
        42: ['42px', '62px'],
        58: ['58px', '86px'],
      },
      zIndex: {
        998: '998',
        99998: '99998',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      '4xl': { max: '1699px' },
      '3xl': { max: '1599px' },
      '2xl': { max: '1299px' },
      xl: { max: '1199px' },
      lg: { max: '991px' },
      md: { max: '767px' },
      sm: { max: '575px' },
      ssm: { max: '480px' },
      xs: { max: '380px' },
      xxs: { max: '320px' },
      'min-xxs': '320px',
      'min-xs': '380px',
      'min-ssm': '480px',
      'min-sm': '575px',
      'min-md': '768px',
      'min-lg': '991px',
      'min-xl': '1199px',
      'min-2xl': '1299px',
      'min-3xl': '1599px',
      'min-4xl': '1699px',
    },
  },
  plugins: [],
}

`
}
                            </code>
                        </pre>
                    </div>
                  </div>
                </Cards>
                <Cards headless>
                  <h3>For More Information. Visit <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">Tailwind CSS</a></h3>
                </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Tailwind;
