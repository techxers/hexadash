import {
  UilChartBar, UilCompactDisc, UilCreateDashboard, UilEye, UilPrescriptionBottle, UilServer, UilTable
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavTitle } from './Style';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';

const MenuItems = ({ toggleCollapsed }) => {

  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const {  topMenu  } = useSelector(state => {
      return {
          topMenu: state.ChangeLayoutMode.topMenu,
      };
  });

  const pathName = window.location.pathname;

  const pathArray = pathName.length > 1 ? pathName.split('/') : [];

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${pathArray.length > 2 ? pathArray[1] : ''}`] : [],
  );
  const [openItems, setOpenItems] = React.useState(
    !topMenu ? [ `${ pathArray.length < 2 ? 'overview' : pathArray.length >= 2 ? pathArray[pathArray.length - 1] : '' }`, ] : []
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    setOpenItems([item.key]);
    if (item.keyPath.length === 1) setOpenKeys([]);
  };
  
  const items = [
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t("Get Started")}</NavTitle>, 
      'starter-title',
      null,
      null,
      'group'
    ),
    getItem(
    <NavLink onClick={toggleCollapsed} to={``}>
      Overview
    </NavLink>, 
    'overview', 
    !topMenu && <UilEye />),
    getItem("Development", 'development', !topMenu && <UilCreateDashboard />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/installation`}>
          {t("Installation")}
        </NavLink>, 
        'installation', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/folder-structure`}>
          {t("Folder Structure")}
        </NavLink>, 
        'folder-structure', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/create`}>
          {t("Create Starter Page")}
        </NavLink>, 
        'create', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/customization`}>
          {t("Theme Configuration")}
        </NavLink>, 
        'customization', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/routing`}>
          {t("Routing")}
        </NavLink>, 
        'routing', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/navigation`}>
          {t("Navigation")}
        </NavLink>, 
        'navigation', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/multi-lang`}>
          {t("Multi Language")}
        </NavLink>, 
        'multi-lang', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/redux`}>
          {t("Redux")}
        </NavLink>, 
        'redux', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/development/tailwind`}>
          {t("Tailwind")}
        </NavLink>, 
        'tailwind', 
        null
      )
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">
        {t("Integration")}
      </NavTitle>, 
      'Integration',
      null,
      null,
      'group'
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`/axios-integrate`}>
        Axios Integration
      </NavLink>, 
      'axios-integrate', 
      !topMenu && <UilServer />),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`/firebase-integrate`}>
        Firebase Integration
      </NavLink>, 
      'firebase-integrate', 
      !topMenu && <UilServer />),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`/auth0-integrate`}>
        Auth0 Integration
      </NavLink>, 
      'auth0-integrate', 
      !topMenu && <UilServer />),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">
        {t("Components")}
      </NavTitle>, 
      'Components',
      null,
      null,
      'group'
    ),
    getItem("Forms", 'features', !topMenu && <UilCompactDisc />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/features/form-layout`}>
          {t("Form")} {t("Layouts")}
        </NavLink>, 
        'form-layout', 
        null
      )
    ]),
    getItem("Table", 'table', !topMenu && <UilTable />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/table/basic`}>
          Basic Table
        </NavLink>, 
        'basic', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/table/dataTable`}>
          Data Table
        </NavLink>,
        'dataTable', 
        null
      )
    ]),
    getItem("Charts", 'charts', !topMenu && <UilChartBar />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/charts/chartjs`}>
          Chart JS
        </NavLink>, 
        'chartjs', 
        null
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`/charts/google-chart`}>
          Google Chart
        </NavLink>,
        'google-chart', 
        null
      ),
      getItem(t("Recharts"), 'recharts', !topMenu && <UilChartBar />, [
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/recharts/bar`}>
            Bar Chart
          </NavLink>, 
          'bar', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/recharts/area`}>
            Area Chart
          </NavLink>,
          'area', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/recharts/composed`}>
            {t("Composed")} {t("Chart")}
          </NavLink>,
          'composed', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/recharts/line`}>
            {t("Line")} {t("Chart")}
          </NavLink>,
          'line', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/recharts/pie`}>
            {t("Pie")} {t("Chart")}
          </NavLink>,
          'pie', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/recharts/radar`}>
            {t("Radar")} {t("Chart")}
          </NavLink>,
          'radar', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/recharts/radial`}>
            {t("Radial")} {t("Charts")}
          </NavLink>,
          'radial', 
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`/charts/peity`}>
            {t("Peity")} {t("Charts")}
          </NavLink>,
          'peity', 
          null
        ),
      ]),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`/credits`}>
        Credits
      </NavLink>, 
      'credits', 
      !topMenu && <UilPrescriptionBottle />),
  ];
  
  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode='inline'
      defaultOpenKeys={openItems}
      openKeys={openKeys}
      selectedKeys={openItems}
      overflowedIndicator={<UilEllipsisV />}
      items={items}
    />
  );
};

MenuItems.propTypes = {
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
