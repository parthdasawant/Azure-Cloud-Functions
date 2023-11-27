module.exports = async function (context, req) {

    context.log('Vaccine Registration Microservice')

    // var record = {
    //     "PartitionKey":"vaccine",
    //     "RowKey":"email@email.com",
    //     "Name":"Bob",
    //     "Vendor":"Astra-Zeneca"
    // }

    try{
        context.bindings.tableVaccination = []
        context.bindings.tableVaccination.push(req.body)

        context.res ={
            status : 200,
            body: "Succesful Saved"
        }
    }catch (error){
        context.res ={
            status : 409,
            body: "Some error occurred"
        }
    }
}