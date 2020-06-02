import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon, MenuIcon } from '../../components/icons';
import ContentView from '../../layouts/dashboards/trainings-1';

export const Trainings1Screen = ({ navigation }): React.ReactElement => {

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title='Trainings'
        leftControl={renderDrawerAction()}
      />
      <ContentView/>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
