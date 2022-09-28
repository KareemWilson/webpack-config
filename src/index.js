import { camelCase } from 'lodash'
import './style.css'

const name =document.querySelector('.name')

name.innerHTML = camelCase('hi kemo how are you')
