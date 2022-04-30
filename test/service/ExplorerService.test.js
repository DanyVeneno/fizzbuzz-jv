const ExplorerService = require("./../../lib/services/ExplorerService")
const Reader = require("../lib/utils/Reader")


describe("Test para ExplorerService",() => {

    test("Requerimiento 1: Calcular todos los explorers de la missión LaunchX",() => {

    const explorers =[{mission:"node"}];
    const explorersInNode= ExplorerService.filterByMission(explorers,"node");
    expect(explorersInNode.length).toBe(1);

    })  

    test("Requerimiento 2:Obtener la cantidad los explorers en la missión NodeJS",() => {

    const explorers =[{mission:"node"}];
    const getAmountOfExplorersByMission = explorers.filter((explorer)=> explorer.mission === mission)
    expect(explorersInNode.length).toBe(1);
    
        })  
    test("Requerimiento 3:Obtener todos los nombres de los explorers en la missión NodeJS",() => {

    const explorers =[{mission:"node"}];
    const explorersInNode= ExplorerService.filterByMission(explorers,"node");
    expect(explorersInNode.length).toBe(1);
        
            })  

})