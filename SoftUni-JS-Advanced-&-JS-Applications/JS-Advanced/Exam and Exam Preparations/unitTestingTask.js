import { expect } from "chai"
import { planYourTrip } from "./planYourTrip.js"
describe(`tests`,function(){
    describe(`tests for choosingDestination `,function(){
        it(`test for year`,function(){
            expect(() => planYourTrip.choosingDestination(`Ski Resort`,`Winter`,2023)).to.throw("Invalid Year!");
        })
        it(`test for destination`,function(){
            expect(() => planYourTrip.choosingDestination(`Ski`,`Winter`,2024)).to.throw("This destination is not what you are looking for.");
        })
        it(`test for season - correct`,function(){
            expect(planYourTrip.choosingDestination(`Ski Resort`,`Winter`,2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        })
        it(`test for season - incorrect`,function(){
            expect(planYourTrip.choosingDestination(`Ski Resort`,`Summer`,2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        })
    })
    describe(`tests for exploreOptions`,function(){
        it(`test for activites`, function(){
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],1)).to.equal(`Skiing, Winter Hiking`)
        })
        it(`test for activites`, function(){
            expect(planYourTrip.exploreOptions([`Snowboarding`],0)).to.equal(``)
        })
        it(`test for activites`, function(){
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],2)).to.equal(`Skiing, Snowboarding`)
        })
        it(`test for activites`, function(){
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],0)).to.equal(`Snowboarding, Winter Hiking`)
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],`0`)).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],[0])).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],{})).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],3)).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],-1)).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"],1.1)).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions({},1)).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(`Snowboarding`,1)).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions([],1)).to.throw("Invalid Information!")
        })
        it(`test for inputs`, function(){
            expect(() => planYourTrip.exploreOptions(1,1)).to.throw("Invalid Information!")
        })
    })
    describe(`tests for estimateExpenses`, function(){
        it (`tests for cost`,function(){
            expect(planYourTrip.estimateExpenses(10,50)).to.equal("The trip is budget-friendly, estimated cost is $500.00.")
        })
        it (`tests for cost`,function(){
            expect(planYourTrip.estimateExpenses(10,40)).to.equal("The trip is budget-friendly, estimated cost is $400.00.")
        })
        it (`tests for cost`,function(){
            expect(planYourTrip.estimateExpenses(10,49.99)).to.equal("The trip is budget-friendly, estimated cost is $499.90.")
        })
        it (`tests for cost`,function(){
            expect(planYourTrip.estimateExpenses(10,51)).to.equal("The estimated cost for the trip is $510.00, plan accordingly.")
        })
        it (`tests for cost`,function(){
            expect(planYourTrip.estimateExpenses(10,50.01)).to.equal("The estimated cost for the trip is $500.10, plan accordingly.")
        })
        it (`tests for cost`,function(){
            expect(planYourTrip.estimateExpenses(10,50.001)).to.equal("The estimated cost for the trip is $500.01, plan accordingly.")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(`10`,50)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(-10,50)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(0,50)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses([10],50)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses({},50)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(10,`50`)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(10,[50])).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(10,{})).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(10,-50)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(10,0)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(-10,-50)).to.throw("Invalid Information!")
        })
        it (`tests for inputs`,function(){
            expect(() => planYourTrip.estimateExpenses(0,0)).to.throw("Invalid Information!")
        })
    })
})