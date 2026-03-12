from models import Animal, Dog, Cat

animals = [
    Animal("Animal", 5, "gray"),
    Dog("Rex", 3, "brown"),
    Cat("Milo", 2, "white")
]

for animal in animals:
    print(animal)
    print(animal.speak())
    print(animal.move())