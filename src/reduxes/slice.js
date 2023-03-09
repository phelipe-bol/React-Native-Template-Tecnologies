import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

//state 1
export const input = createSlice({
  name: 'input',

  initialState: {
    text: 'Sem Entradas',
  },

  reducers: {
    TesteRedux(state, get) {
      state.text = get.payload;
    },
  },
});

//state 2
export const exit = createSlice({
  name: 'exit',

  initialState: {
    text: 'Sem Saídas',
  },

  reducers: {
    TesteRedux2(state, get) {
      state.text = get.payload;
    },
  },
});

//exports
export const {TesteRedux} = input.actions;
export const {TesteRedux2} = exit.actions;

//functions assyncs
export async function RestAsync(dispatch) {
  await axios
    .get('https://api.trakt.tv/movies/popular', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key':
          'dbc3fd7a4b25af923a04f4bed941808cecced7383cf897ccc624fbf52ea3c6ef',
      },
    })
    .then(res => {
      dispatch(TesteRedux(res.data[0].title));
    })
    .catch(error => {
      console.error('erro ao buscar dados internos', error);
    });
}
