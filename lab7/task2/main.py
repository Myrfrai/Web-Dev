from models import Animal, Dog, Cat

animals = [
    Animal("Animal", 5, "gray"),
    Dog("Rex", 3, "brown"),
    Cat("Milo", 2, "white")
]

for obj in animals:
    print(obj)
    print(obj.speak())
    print(obj.move())