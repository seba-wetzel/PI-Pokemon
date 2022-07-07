import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_NAME='GET_POKEMON_BY_NAME';
export const RESTORE_POKEMONS= 'RESTORE_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const SORT_POKEMONS = 'SORT_POKEMONS';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';


export function getPokemons(){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemons')
        .then(res=>{
            dispatch({
                type:GET_POKEMONS,
                payload: res.data
            })
        })
    }
}

export function getPokemonById(id){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemons/'+id)
        .then(res=>{
            dispatch({
                type:GET_POKEMON_BY_ID,
                payload: res.data
            })
        })
    }
}

export function postNewPokemon(body){
    return function (dispatch){
        axios.post('http://localhost:3001/pokemons',body)

    }
}

export function getPokemonByName(name){
    return function (dispatch){
        axios.get('http://localhost:3001/pokemons?name='+name)
        .then(res=>{
            dispatch({
                type:GET_POKEMON_BY_NAME,
                payload: res.data
            })
        })
    }
}

export function restorePokemons(name){
    return function (dispatch){
        dispatch({
            type:RESTORE_POKEMONS
        })
    }
}

export function getTypes(){
    return function (dispatch){
        axios.get('http://localhost:3001/types')
        .then(res=>{
            dispatch({
                type: GET_TYPES,
                payload: res.data 
            })
        })
    }
}