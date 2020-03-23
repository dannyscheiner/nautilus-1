/**
 * ************************************
 *
 * @module  ServicesWrapper.tsx
 * @author
 * @date 3/11/20
 * @description Display area for services containers
 *
 * ************************************
 */
import React from 'react';
// import View from './View';
import NetworksView from './NetworksView';

import {
  Services,
  SetSelectedContainer,
  Options,
  ViewT,
  Networks,
} from '../App.d';

type Props = {
  services: Services;
  setSelectedContainer: SetSelectedContainer;
  options: Options;
  view: ViewT;
  networks: Networks;
};

const ServicesWrapper: React.FC<Props> = ({
  services,
  setSelectedContainer,
  options,
  view,
  networks,
}) => {
  return (
    <div className="services-wrapper">
      {/*  <View
        services={services}
        setSelectedContainer={setSelectedContainer}
        options={options}
        view={view}
      /> */}
      <NetworksView
        services={services}
        setSelectedContainer={setSelectedContainer}
        options={options}
        networks={networks}
      />
    </div>
  );
};

export default ServicesWrapper;
