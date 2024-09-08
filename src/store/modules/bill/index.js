import{createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const billSrore = createSlice({
        name: 'bill',
        initialState:{
            billList: [],
        },
        reducers: {
            setBillList(state,action) {
                state.billList = action.payload
            },
            addBill (state,action) {
                state.billList.push(action.payload)
            }
        },

})

const{setBillList,addBill} = billSrore.actions

const fetchBillList = () =>{
    return async(dispatch) => {

        let res = await axios.get('http://localhost:8888/ka')
        console.log(res.data)
        dispatch(setBillList(res.data))
    }
}
const addBillList = (data)=> {
    return  async (dispatch) => {
        let res = await axios.post('http://localhost:8888/ka', data)
        dispatch(addBill(res.data))

    }
}

const billReducer = billSrore.reducer

export {fetchBillList, addBillList}
export default  billReducer