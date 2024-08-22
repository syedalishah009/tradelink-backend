import type { Schema, Attribute } from '@strapi/strapi';

export interface LaptopStorage extends Schema.Component {
  collectionName: 'components_laptop_storages';
  info: {
    displayName: 'storage';
  };
  attributes: {
    storage: Attribute.String;
    price: Attribute.Decimal;
  };
}

export interface LaptopScreenSize extends Schema.Component {
  collectionName: 'components_laptop_screen_sizes';
  info: {
    displayName: 'screenSize';
  };
  attributes: {
    size: Attribute.String;
  };
}

export interface LaptopRam extends Schema.Component {
  collectionName: 'components_laptop_rams';
  info: {
    displayName: 'RAM';
  };
  attributes: {
    ram: Attribute.String;
    price: Attribute.Decimal;
  };
}

export interface LaptopKeyboard extends Schema.Component {
  collectionName: 'components_laptop_keyboards';
  info: {
    displayName: 'keyboard';
  };
  attributes: {
    keyboard: Attribute.String;
    price: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'laptop.storage': LaptopStorage;
      'laptop.screen-size': LaptopScreenSize;
      'laptop.ram': LaptopRam;
      'laptop.keyboard': LaptopKeyboard;
    }
  }
}
