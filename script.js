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
        const response = await fetch(`https://data.winnipeg.ca/resource/hfwk-jp4h.json?$where=park='${park_name}'&$limit=100`)

        if (!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`)
        }

        return response.json()
    }

    catch(error){
        console.error("Failed to fetch park", error.message)
    }
}

const createTreeInfoBox = ( (commonName, treeName, treeId, treeWard) => {
    const treeContainer = document.createElement("div")
    const treeType = document.createElement("p")
    const commonTreeName = document.createElement("p")
    const treeIdPar = document.createElement("p")
    const treeWardPar = document.createElement("p")

    treeType.textContent = `Botanical Name:  ${treeName}`
    commonTreeName.textContent = `Common Name:  ${commonName}`
    treeIdPar.textContent = `Tree ID:  ${treeId}`
    treeWardPar.textContent = `Tree Electoral Ward:  ${treeWard}`

    treeContainer.append(treeIdPar)
    treeContainer.append(commonTreeName)
    treeContainer.append(treeType)
    treeContainer.append(treeWardPar)
    document.body.append(treeContainer)

    treeContainer.className = "treeContainer"
}) 


async function listTrees(){
    const trees = await searchPark(searchBar.value)
    console.log(trees)

    for (const tree of trees){
        createTreeInfoBox(tree["common_name"], tree["botanical_name"], tree["tree_id"], tree["electoral_ward"])
    }
}

searchButton.addEventListener("click", () => {
    listTrees()
})