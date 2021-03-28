const state = {
  products :[
    {
      id:1,
      title:'asult',
      value:'390'
    },
    {
      id:2,
      title:'anko',
      value:'1000'
    },
    {
      id:3,
      title:'valt',
      value:'400'
    }
  ]
}

const getters ={
  allProducts: (state) => state.products
}

const actions ={

}

const mutations ={

}


export default {
  state,
  getters,
  actions,
  mutations
}
