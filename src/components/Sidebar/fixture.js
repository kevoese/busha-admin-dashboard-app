import dashboardSVG from '../../assets/svg/dashboard';
import balancesSVG from '../../assets/svg/balances';
import developersSVG from '../../assets/svg/developers';
import transfersSVG from '../../assets/svg/transfers';
import paymentSVG from '../../assets/svg/payments';
import settingSVG from '../../assets/svg/settings';

const menuDatas = [
  {
    title: 'Dashboard',
    icon: dashboardSVG,
    path: '/dashboard'
  },
  {
    title: 'Balances',
    icon: balancesSVG,
    path: '/balances'
  },
  {
    title: 'Developers',
    icon: developersSVG,
    path: '/developers'
  },
  {
    title: 'Transfers',
    icon: transfersSVG,
    path: '/transfers'
  },
  {
    title: 'Payments',
    icon: paymentSVG,
    path: '/payments'
  },
  {
    title: 'Settings',
    icon: settingSVG,
    path: '/settings'
  }
];

export default menuDatas;