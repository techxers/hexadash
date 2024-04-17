import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';
import Overview from './Overview';
import Features from './features';
const Installation = lazy(() => import('../../container/pages/Installation'));
const FolderStructure = lazy(() => import('../../container/pages/FolderStructure'));
const NewPage = lazy(() => import('../../container/pages/NewPage'));
const Customization = lazy(() => import('../../container/pages/Customization'));
const Navigation = lazy(() => import('../../container/pages/Navigation'));
const Routing = lazy(() => import('../../container/pages/Routing'));
const MultiLang = lazy(() => import('../../container/pages/Multi-language'));
const Redux = lazy(() => import('../../container/pages/Redux'));
const Tailwind = lazy(() => import('../../container/pages/Tailwind'));
const Auth0 = lazy(() => import('../../container/pages/Auth0'));
const Credits = lazy(() => import('../../container/pages/Credits'));
const Axios = lazy(() => import('../../container/pages/AxiosIntegration'));
const Firebase = lazy(() => import('../../container/pages/FirebaseIntegration'));
const Charts = lazy(() => import('./charts'));
const Tables = lazy(() => import('./table'));

const Admin = React.memo(() => {
  const {pathname} = useLocation();
  // console.log(location)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
      <Suspense
        fallback={
          <div className="spin">
            <Spin />            
          </div>
        }
      >
      <Routes>          
          <Route path="/*" element={<Overview />} />
          <Route path="/development/installation" element={<Installation />} />
          <Route path="/development/folder-structure" element={<FolderStructure />} />
          <Route path="/development/create" element={<NewPage />} />
          <Route path="/development/customization" element={<Customization />} />
          <Route path="/development/navigation" element={<Navigation />} />
          <Route path="/development/routing" element={<Routing />} />
          <Route path="/development/multi-lang" element={<MultiLang />} />
          <Route path="/development/redux" element={<Redux />} />
          <Route path="/development/tailwind" element={<Tailwind />} />
          <Route path="/axios-integrate" element={<Axios />} />
          <Route path="/firebase-integrate" element={<Firebase />} />
          <Route path="/auth0-integrate" element={<Auth0 />} />
          <Route path="features/*" element={<Features />} />
          <Route path="/table/*" element={<Tables />} />  
          <Route path="/credits" element={<Credits />} />
          <Route path="charts/*" element={<Charts />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
