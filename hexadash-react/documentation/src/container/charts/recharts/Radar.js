import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect, useLayoutEffect, useState } from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import reChartData from '../../../demoData/recharts.json';
import { Main } from '../../styled';

const { radar } = reChartData;

const ReChartRadar = () => {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Radar Chart',
    },
  ];
  const [state, setState] = useState({
    responsive: 0,
  });
  const { responsive } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width =
        element !== null
          ? element.closest('.ant-card-body').clientWidth
          : document.querySelector('.ant-card-body').clientWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Radar Chart" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="SIMPLE RADAR CHART" size="large">
              <RadarChart
                cx={window.innerWidth <= 480 ? responsive / 2.2 : responsive / 2.5}
                cy={window.innerWidth <= 480 ? responsive / 2.8 : responsive / 3}
                outerRadius={window.innerWidth <= 480 ? 85 : 150}
                width={responsive - (5 * responsive) / 100}
                height={responsive / 1.4}
                data={radar}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { BarChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

<RadarChart
  cx={window.innerWidth <= 480 ? responsive / 2.2 : responsive / 2.5}
  cy={window.innerWidth <= 480 ? responsive / 2.8 : responsive / 3}
  outerRadius={window.innerWidth <= 480 ? 85 : 150}
  width={responsive - (5 * responsive) / 100}
  height={responsive / 1.4}
  data={radar}
>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis />
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
</RadarChart>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="SPECIFIED DOMAIN RADAR CHART" size="large">
              <RadarChart
                cx={window.innerWidth <= 480 ? responsive / 2.2 : responsive / 2.5}
                cy={window.innerWidth <= 480 ? responsive / 2.8 : responsive / 3}
                outerRadius={window.innerWidth <= 480 ? 85 : 150}
                width={responsive - (5 * responsive) / 100}
                height={responsive / 1.4}
                data={radar}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { BarChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

<RadarChart
  cx={window.innerWidth <= 480 ? responsive / 2.2 : responsive / 2.5}
  cy={window.innerWidth <= 480 ? responsive / 2.8 : responsive / 3}
  outerRadius={window.innerWidth <= 480 ? 85 : 150}
  width={responsive - (5 * responsive) / 100}
  height={responsive / 1.4}
  data={radar}
>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ReChartRadar;
