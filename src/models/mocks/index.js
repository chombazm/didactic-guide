function grudgeCreator(name, description) {
    const newGrudge = {};
    newGrudge.name = name
    newGrudge.status = "not_forgiven"
    newGrudge.grudger = ""
    newGrudge.description = description
    newGrudge.date = new Date();
    newGrudge.dateForgiven = null
    
    return newGrudge;

}

function grudgerCreator(name, phone, email,) {
    const newGrudger = Object.create(null);
    newGrudger.name = name
    newGrudger.phone = phone
    newGrudger.email = email
    newGrudger.date = new Date()

    return newGrudger;

}
