import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters"

const price = () => {
    let valueMax = Infinity
    let valueMin

    const minSearchInput = document.getElementById('min') 
    const maxSearchInput = document.getElementById('max') 

    minSearchInput.addEventListener('input', (event) =>{
        const priceMin = event.target.value
        valueMin = Number(priceMin)

        getData().then((data) => {
            renderGoods(priceFilter(data, valueMax, valueMin))
        })

    })

    maxSearchInput.addEventListener('input', (event) =>{
        const priceMax = event.target.value
        valueMax = Number(priceMax)

        getData().then((data) => {
            renderGoods(priceFilter(data, valueMin, valueMax))
        })        
    })


}

export default price