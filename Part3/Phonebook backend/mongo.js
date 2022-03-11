const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb://nehas2:${password}@cluster0-shard-00-00.zhlhs.mongodb.net:27017,cluster0-shard-00-01.zhlhs.mongodb.net:27017,cluster0-shard-00-02.zhlhs.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ao2vd0-shard-0&authSource=admin&retryWrites=true&w=majority`

  mongoose.connect(url, {useNewUrlParser: true , useUnifiedTopology: true} )

const personSchema = new mongoose.Schema({
  name : String,
  number : String
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length > 3 )
{
    const personName = process.argv[3]
    const personNumber = process.argv[4]
    const person = new Person(
    {
        name : personName,
        number : personNumber
    })
    person.save().then(result =>
    {
        console.log(`added ${personName} to phonebook`)
        mongoose.connection.close()
    })
}
else 
{
    console.log("phonebook: ")
    Person.find({}).then(persons =>
        {
            persons.forEach((person) =>
            {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        }
    )
}