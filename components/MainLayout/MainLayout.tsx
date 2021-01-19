import React from 'react';
import styles from './MainLayout.style';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { TopBar } from '../TopBar/TopBar';

export default function MainLayout() {
  const _styles = makeStyles(styles())();

  return (
    <div className={_styles.root}>
      <TopBar layout="MAIN" />
      <div className={_styles.wrapper}>
        <div className={_styles.contentContainer}>
          <div className={_styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
