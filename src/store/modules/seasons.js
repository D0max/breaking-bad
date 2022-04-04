export default {
  state: {
    seasons: [
      {
        id: 1,
        image: 'season1.jpg',
        title: 'First season',
      },
      {
        id: 2,
        image: 'season2.jpg',
        title: 'Second season'
      },
      {
        id: 3,
        image: 'season3.png',
        title: 'Third season'
      },
      {
        id: 4,
        image: 'season4.jpg',
        title: 'Four season'
      },
    ]
  },
  getters: {
    getSeason: (state) => {
      return state.seasons
    }
  }
}
