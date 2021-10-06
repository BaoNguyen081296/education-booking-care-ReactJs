import { paths } from 'configs/paths';

export const adminMenu = [
  {
    // Manage User
    name: 'menu.admin.manageUser',
    menus: [
      {
        name: 'menu.admin.crud',
        link: paths.SYSTEM.USER_MANAGE,
      },
      {
        name: 'menu.admin.crudRedux',
        link: paths.SYSTEM.USER_REDUX,
      },
      {
        name: 'menu.admin.manageDoctor',
        link: paths.SYSTEM.USER_DOCTOR,
        // subMenus: [
        //   {
        //     name: 'menu.system.system-administrator.userManage',
        //     link: paths.SYSTEM.USER_MANAGE,
        //   },
        //   {
        //     name: 'menu.system.system-administrator.userRedux',
        //     link: paths.SYSTEM.USER_REDUX,
        //   },
        // ],
      },
      {
        name: 'menu.admin.manageAdmin',
        link: paths.SYSTEM.USER_ADMIN,
      },
    ],
  },
  {
    // Manage Clinic
    name: 'menu.admin.clinic',
    menus: [
      {
        name: 'menu.admin.manageClinic',
        link: paths.SYSTEM.USER_DOCTOR,
      },
    ],
  },
  {
    // Manage handbook (cẩm nang)
    name: 'menu.admin.handbook',
    menus: [
      {
        name: 'menu.admin.manageHandbook',
        link: paths.SYSTEM.USER_DOCTOR,
      },
    ],
  },
  {
    // Manage Specialty (Chuyên khoa)
    name: 'menu.admin.specialty',
    menus: [
      {
        name: 'menu.admin.specialty',
        link: paths.SYSTEM.USER_DOCTOR,
      },
    ],
  },
];
