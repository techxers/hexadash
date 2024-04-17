import React, { Suspense, lazy } from 'react';
import { Row, Col, Skeleton } from 'antd';
import ProfileCard from '../../components/cards/ProfileCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Banner9 } from '../../components/banners/Banners';

const InfoCard = lazy(() => import('../../components/cards/InfoCard'));
const NewsletterTwo = lazy(() => import('../../components/cards/NewsletterTwo'));
const SingleChat = lazy(() => import('../chat/overview/singleChat'));
const Todo = lazy(() => import('./overview/demoFour/Todo'));
const PerformanceOverview = lazy(() => import('./overview/demoFour/PerfomanceOverview'));
const Tasks = lazy(() => import('./overview/demoFour/Tasks'));
const MarketingCampaigns = lazy(() => import('./overview/demoFour/MarketingCampaigns'));
const TeamList = lazy(() => import('./overview/demoFour/TeamList'));
const TrafficChannel = lazy(() => import('./overview/demoFour/TrafficChannel'));
const Locations = lazy(() => import('./overview/demoFour/Locations'));
const RecentSeller = lazy(() => import('./overview/demoFour/RecentSeller'));

function DemoFour() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 9',
    },
  ];

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        ghost
        title="Dashboard"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row justify="center" gutter={25}>
          <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Banner9 />
            </Suspense>
          </Col>
          <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <PerformanceOverview />
            </Suspense>
          </Col>
          <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Row gutter={15}>
                <Col xs={12}>
                  <InfoCard icon="UilBriefcaseAlt" />
                </Col>
                <Col xs={12}>
                  <InfoCard text="Total Awards" icon="UilAward" type="secondary" counter="15k" />
                </Col>
                <Col xs={24}>
                  <NewsletterTwo />
                </Col>
              </Row>
            </Suspense>
          </Col>
          <Col xxl={16} xl={12} lg={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Tasks />
            </Suspense>
          </Col>
          <Col xxl={8} xl={12} lg={24} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            />
            <MarketingCampaigns />
          </Col>

          <Col xxl={8} xl={12} lg={24} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Todo />
            </Suspense>
          </Col>
          <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TeamList />
            </Suspense>
          </Col>
          <Col xxl={8} xl={12} lg={12} xs={24} className="mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ProfileCard />
            </Suspense>
          </Col>
          <Col xxl={8} xs={24} className="3xl:mb-[25px]">
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SingleChat
                className="mb-[25px]"
                match={{
                  params: {
                    id: 'rofiq@gmail.com',
                  },
                }}
                dashboard
              />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24}>
            <Row gutter={25}>
              <Col xl={12} xs={24} className="mb-[25px]">
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <TrafficChannel />
                </Suspense>
              </Col>
              <Col xl={12} xs={24} className="mb-[25px]">
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <Locations />
                </Suspense>
              </Col>
              <Col xs={24}>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <RecentSeller />
                </Suspense>
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default DemoFour;
