module.exports = async function (context, req) {
    context.log("Weather Microservie")

    var data = {
        "PartitionKey":"weather",
        "RowKey":req.query.city,
        "temperature":req.query.temperature
    }

    try {
        context.bindings.tableWeather = []
        context.bindings.tableWeather.push(data)

        context.res = {
            status: 200,
            body: "Weather Saved"
        }
    } catch (error) {
        context.res = {
            status: 409,
            body: "Something went wrong"
        }
    }
}