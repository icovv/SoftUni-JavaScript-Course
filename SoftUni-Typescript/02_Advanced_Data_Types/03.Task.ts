function runDiagnostics():number{
    return 20
}

type carBody = {
    material: string,
    state: string
}

type tires = {
    airPressure: number,
    condition: string,
}

type engine = {
    horsepower: number,
    oilDensity: number
}

type diagnostics = {
    partName: string,
    runDiagnostics: () => number
}

function carDiagnostics(carBody:carBody & diagnostics, tires:tires & diagnostics, engine:engine & diagnostics){

}

carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },

{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },

{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics })