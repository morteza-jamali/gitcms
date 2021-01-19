import React from 'react';

export default function Logo(...props: any) {
  return <img alt="Logo" src={`${GLOBALS.PATH.IMAGES}/logo.svg`} {...props} />;
}
