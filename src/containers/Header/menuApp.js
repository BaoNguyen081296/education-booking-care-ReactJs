import { path } from 'utils';

export const adminMenu = [
  {
    //hệ thống
    name: 'menu.system.header',
    menus: [
      {
        name: 'menu.system.system-administrator.header',
        subMenus: [
          {
            name: 'menu.system.system-administrator.user-manage',
            link: path.SYSTEM.USER_MANAGE,
          },
          {
            name: 'menu.system.system-administrator.user-redux',
            link: path.SYSTEM.USER_REDUX,
          },
        ],
      },
      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
];
