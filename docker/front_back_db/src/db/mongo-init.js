db = db.getSiblingDB(_getEnv("MONGO_INITDB_DATABASE"));
db.createCollection('dinosaurs');

db.dinosaurs.insertMany([
    {
        "name": "Tyrannosaurus Rex",
        "classification": "Dinosauria",
        "order": "Saurischia",
        "diet": "Carnivore"
    },
    {
        "name": "Stegosaurus",
        "classification": "Dinosauria",
        "order": "Ornithischia",
        "diet": "Herbivore"
    },
    {
        "name": "Triceratops",
        "classification": "Dinosauria",
        "order": "Ornithischia",
        "diet": "Herbivore"
    },
    {
        "name": "Velociraptor",
        "classification": "Dinosauria",
        "order": "Saurischia",
        "diet": "Carnivore"
    },
    {
        "name": "Ankylosaurus",
        "classification": "Dinosauria",
        "order": "Ornithischia",
        "diet": "Herbivore"
    }
]);
