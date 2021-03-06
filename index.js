const Reader = require('./../lib/utils/Reader')
const ExploreService = require('./../lib/services/ExplorerService')


const explorers = Reader.readJsonFile("explorers.json")

//console.log(explorers)

console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));