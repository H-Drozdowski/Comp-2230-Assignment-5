/*
Hudson Drozdowski
Assignment 5
Java Script

https://data.winnipeg.ca/resource/hfwk-jp4h.json
*/

async function getTrees(){
    try{
        const response = await fetch("https://data.winnipeg.ca/resource/hfwk-jp4h.json")

        if (!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`)
        }

        return response.json()
    }
    catch(error){
        // Logs the error message
        console.error("Failed to fetch countries", error.message)
    }
}

async function listTrees(){
    const trees = await getTrees()
    console.log(trees)
}

listTrees()