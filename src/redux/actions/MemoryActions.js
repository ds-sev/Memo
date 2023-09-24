export default {
  flipTile: (id) => ({
    type: 'FLIP_TILE',
    id
  }),

  restart: () => ({
    type: 'RESTART'
  })
}
