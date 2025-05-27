function runDiagnostics() {
    return 20;
}
function carDiagnostics(carBody, tires, engine) {
}
carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics: runDiagnostics }, { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics: runDiagnostics }, { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics: runDiagnostics });
