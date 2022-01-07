/* eslint-disable no-unused-vars */
import bugModel from "../Models/bugModel";

export function getBugs() {
    let data = [];
    
    data.push(new bugModel({
        _id: 2345678,
        name: "Crash on Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it crashes",
        version: "V2.0",
        assigned: "Roger Rangel",
        creator: "Brian Culbertson",
        priority: 1,
        time: "11:55"
    }))  
    data.push(new bugModel({
        _id: 2345678,
        name: "Won't Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it crashes",
        version: "V2.0",
        assigned: "Roger Rangel",
        creator: "Brian Culbertson",
        priority: 3,
        time: "11:55"
    }))  
    
    let sorted = data.sort((a, b) => { return a.priority - b.priority })
    return sorted;
}