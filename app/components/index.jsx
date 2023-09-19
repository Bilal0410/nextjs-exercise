"use client";

export default function Foo() {

const values = ["Cristiano Ronaldo", "Neymar Jr", "Erling Haaland", "Kylian Mbappe", "De Bruyne"];

const didMatchCondition = values.some((value, index) => {
//    console.log({ index, value});
    if (value >= 3) {
        return true;
    }
});
// console.log(didMatchCondition);

const modules = [
    { name: "Introduction to Programming", isComplete: true },
    { name: "HTML", isComplete: true },
    { name: "CSS", isComplete: false },
    { name: "JavaScript", isComplete: true },
  ];
  
  const isSomeCoursesFinished = modules.some((currentModule, index) => {
    console.log("index", index);
    return currentModule.isComplete === true;
  });
  
  // console.log("isTrue", isSomeCoursesFinished);

  const recipe = {
    ingredient_0: "Egg",
    ingredient_1: "Milk",
    ingredient_2: "Flour",
  };
  
  // 1 way to do it
  for (let index = 0; index <= 2; index++) {
    // We use
    const ingredient = recipe["ingredient_" + index];
    console.log(ingredient);
  }

  // Returns:
  // Egg
  // Milk
  // Flour

  // 2nd way to do it
  for (const item in recipe)
  console.log("item", `${item}: ${recipe[item]}`);

  console.log(Object.keys(recipe));

  // 3rd way to do it
  Object.keys(recipe).map((item) => {
    console.log("Using map", recipe[item]);
  });

  const person = {
    firstName: "Ola",
    lastName: "Nordmann",
    module: "JavaScript",
  };

  Object.entries(person).forEach(([key, value]) => {
    console.log("key:", key, "value:", value);
  });

  // Or

  Object.entries(recipe).map(([key, value]) => {
    console.warn(`Using entries >>> key: ${key}, value: ${value}`);
  });

}