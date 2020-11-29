export const state = () => ({
  items: [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About Us',
      path: '/about'
    },
    {
      title: 'Our Services',
      path: '/services'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ],
  isShowingMenu: false
})

export const mutations = {
  SET_MOBILE_MENU(state, bool) {
    state.isShowingMenu = bool
  }
}
