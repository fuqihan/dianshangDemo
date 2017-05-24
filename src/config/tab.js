/**
 * Created by fuqihan on 2017/5/20.
 */
const personalTab =
  [
    {
      id: 1,
      name: 'personalTab1',
      label: '个人首页'
    },
    {
      id: 2,
      label: '订单管理',
      children: [
        {
          name: 'personalTab2',
          label: '我的订单'
        },
        {
          label: '我的收藏'
        },
        {
          label: '我的评价'
        },
        {
          label: '我的足迹'
        },
        {
          label: '我的优惠券'
        }]
    },
    {
      id: 3,
      label: '账户安全',
      children: [
        {
          label: '账户安全'
        },
        {
          label: '账户余额'
        },
        {
          label: '我的积分'
        },
        {
          label: '积分兑换'
        }]
    },
    {
      id: 4,
      label: '售后服务',
      children: [
        {
          label: '联系客服'
        },
        {
          label: '意见反馈'
        }]
    }
  ]
const businessmenTab =
  [
    {
      id: 1,
      name: 'personalTab1',
      label: '个人首页'
    },
    {
      id: 2,
      label: '订单管理',
      children: [
        {
          name: 'personalTab2',
          label: '我的订单'
        },
        {
          label: '我的收藏'
        },
        {
          label: '我的评价'
        },
        {
          label: '我的足迹'
        },
        {
          label: '我的优惠券'
        }]
    },
    {
      id: 3,
      label: '账户安全',
      children: [
        {
          label: '账户安全'
        },
        {
          label: '账户余额'
        },
        {
          label: '我的积分'
        },
        {
          label: '积分兑换'
        }]
    },
    {
      id: 4,
      label: '售后服务',
      children: [
        {
          label: '联系客服'
        },
        {
          label: '意见反馈'
        }]
    }
  ]
module.exports = {
  personalTab,
  businessmenTab
}
