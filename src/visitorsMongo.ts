import {Config, names, uniqueNamesGenerator} from "unique-names-generator";
import {Visitor} from './connectMongo';
import {v4 as uuidv4} from "uuid";

const config: Config = {
    dictionaries: [names]
}

async function addNewVisitor() {

    const newUser = new Visitor({
        id: uuidv4(),
        name: uniqueNamesGenerator(config)
    });

    console.log(newUser);


    await newUser.save().then(() => {
        console.log('Visitor saved successfully');

    }, err => {
        console.error('Error saving user:', err)
    });
}

async function countNumberOfVisitors() {
    return Visitor.countDocuments().then();
}


export {addNewVisitor, countNumberOfVisitors}