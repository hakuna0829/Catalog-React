import React from 'react';
import { BottomNavigationTab, Divider } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { BrandBottomNavigation } from '../../components/brand-bottom-navigation.component';
import { ColorPaletteIcon, LayoutIcon, StarOutlineIcon, MenuIcon, AssetMessagingIcon } from '../../components/icons';

export const HomeBottomNavigation = (props): React.ReactElement => {

  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    <SafeAreaLayout insets='bottom'>
      <Divider/>
      <BrandBottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='Catalogs'
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='Leads'
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title='Messages'
          icon={AssetMessagingIcon}
        />
      </BrandBottomNavigation>
    </SafeAreaLayout>
  );
};
