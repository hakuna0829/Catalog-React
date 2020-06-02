import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderElement,
  DrawerHeaderFooter,
  DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components';
import { BookIcon, GithubIcon,AssetIconIcon, LayoutIcon, AssetDashboardsIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Auth from '@aws-amplify/auth';

const DATA: MenuItemType[] = [
  { title: 'Libraries', icon: GithubIcon },
  { title: 'Documentation', icon: BookIcon },
  { title: 'Settings', icon: BookIcon },
  { title: 'Themes', icon: AssetIconIcon },
  { title: 'Components', icon: AssetDashboardsIcon },
  { title: 'Layouts', icon: LayoutIcon },
  { title: 'SignOut', icon: AssetIconIcon },
];

const version: string = AppInfoService.getVersion();

export const HomeDrawer = ({ navigation }): DrawerElement => {

  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        //navigation.navigate('Libraries');
        return;
      }
      case 1: {
        //WebBrowserService.openBrowserAsync('https://akveo.github.io/react-native-ui-kitten');
        navigation.toggleDrawer();
        return;
      }
      case 2: {
        navigation.navigate('Settings');
        navigation.toggleDrawer();
        return;
      }
      case 3: {
        navigation.toggleDrawer();
        navigation.navigate('Themes');
        return;
      }
      case 4: {
        navigation.toggleDrawer();
        navigation.navigate('Components');
        return;
      }
      case 5: {
        navigation.navigate('Layouts');
        navigation.toggleDrawer();
        return;
      }
      case 6: {
        Auth.signOut();
        return;
      }
    }
  };

  const renderHeader = (): DrawerHeaderElement => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Avatar
            size='giant'
            source={require('../../assets/images/image-app-icon.png')}          
          />
        </TouchableOpacity>
        <Text
          style={styles.profileName}
          category='h6'>
          Kitten Tricks
        </Text>
      </View>
    </Layout>
  );

  const renderFooter = (): DrawerHeaderFooterElement => (
    <React.Fragment>
      <Divider/>
      <DrawerHeaderFooter
        disabled={true}
        description={`Version ${AppInfoService.getVersion()}`}
      />
    </React.Fragment>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
