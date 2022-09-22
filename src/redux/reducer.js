import {calculatorReducer, CALCULATOR_KEY} from './calcRedux/calc.reducer'
import {combinedReducer} from 'redux'

let rootReducer = combinedReducer({
    [CALCULATOR_KEY] : calculatorReducer
})

export  {rootReducer}