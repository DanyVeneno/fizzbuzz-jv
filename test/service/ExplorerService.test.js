const ExplorerService = require ("./../../lib/services/ExplorerService")
const Reader = require ("./../../lib/utils/Reader")


describe("Test para ExplorerService",() => {

    //const explorers = Reader.readJsonFile("./explorers.json")

    test("Requerimiento 1: Calcular todos los explorers de la missión LaunchX",() => {

    const explorers =[{mission:"node"}];
    const explorersInNode= ExplorerService.filterByMission(explorers,"node");
    expect(explorersInNode.length).toBe({mission:"node"});

    })  

    /*test("Requerimiento 2:Obtener la cantidad los explorers en la missión NodeJS",() => {

    const explorers =[{mission:"node"}];
    const getAmountOfExplorersByMission = explorers.filter((explorer)=> explorer.mission === mission)
    expect(explorers.length).toBe(10);
    
        })  */
    /*test("Requerimiento 3:Obtener todos los nombres de los explorers en la missión NodeJS",() => {

    const explorers =[{mission:"node"}];
    const explorersInNode= ExplorerService.filterByMission(explorers,"node");
    expect(explorers.githubusername).toBe(1);
        
            })  */

})
