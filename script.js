/*
Hudson Drozdowski
Assignment 5
Java Script

https://data.winnipeg.ca/resource/hfwk-jp4h.json
*/

const searchButton = document.getElementById("searchButton")
const searchBar = document.getElementById("search")

async function getTrees(){
    try{
        const response = await fetch("https://data.winnipeg.ca/resource/hfwk-jp4h.json?$where=park='St. Vital Park'&$limit=25")

        if (!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`)
        }

        return response.json()
    }
    catch(error){
        // Logs the error message
        console.error("Failed to fetch park", error.message)
    }
}

async function searchPark(park_name){
    try{
        const response = await fetch(`https://data.winnipeg.ca/resource/hfwk-jp4h.json?$where=park='${park_name}'&$limit=25`)

        if (!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`)
        }

        return response.json()
    }

    catch(error){
        console.error("Failed to fetch park", error.message)
    }
}

async function listTrees(){
    const trees = await searchPark(searchBar.value)
    console.log(trees)
}

searchButton.addEventListener("click", () => {
    listTrees()
})