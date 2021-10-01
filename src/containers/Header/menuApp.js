import { path } from 'utils';

export const adminMenu = [
  {
    // Manage User
    name: 'menu.admin.manageUser',
    menus: [
      {
        name: 'menu.admin.crud',
        link: path.SYSTEM.USER_MANAGE,
      },
      {
        name: 'menu.admin.crudRedux',
        link: path.SYSTEM.USER_REDUX,
      },
      {
        name: 'menu.admin.manageDoctor',
        link: path.SYSTEM.USER_DOCTOR,
        // subMenus: [
        //   {
        //     name: 'menu.system.system-administrator.userManage',
        //     link: path.SYSTEM.USER_MANAGE,
        //   },
        //   {
        //     name: 'menu.system.system-administrator.userRedux',
        //     link: path.SYSTEM.USER_REDUX,
        //   },
        // ],
      },
      {
        name: 'menu.admin.manageAdmin',
        link: path.SYSTEM.USER_ADMIN,
      },
    ],
  },
  {
    // Manage Clinic
    name: 'menu.admin.clinic',
    menus: [
      {
        name: 'menu.admin.manageClinic',
        link: path.SYSTEM.USER_DOCTOR,
      },
    ],
  },
  {
    // Manage handbook (cẩm nang)
    name: 'menu.admin.handbook',
    menus: [
      {
        name: 'menu.admin.manageHandbook',
        link: path.SYSTEM.USER_DOCTOR,
      },
    ],
  },
  {
    // Manage Specialty (Chuyên khoa)
    name: 'menu.admin.specialty',
    menus: [
      {
        name: 'menu.admin.specialty',
        link: path.SYSTEM.USER_DOCTOR,
      },
    ],
  },
];
