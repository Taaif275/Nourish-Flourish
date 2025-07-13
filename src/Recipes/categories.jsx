const categories = [
    {
      title: "Region-Based Cuisine",
      image: "https://img.freepik.com/free-vector/vector-world-globe-map-africa-mediterranean-sea-arabian-peninsula-centered-map-blue-planet-sphere-icon-isolated-white-background_8130-759.jpg?ga=GA1.1.1063396785.1723545078&semt=ais_hybrid",
      continents: [
        { name: "Asia", dishes: ["Sushi", "LemonRice", "PadThai", "Kimchi", "Pho", "DimSum", "Ramen"] },
        { name: "Europe", dishes: ["Pizza", "Paella", "Croissant", "Goulash", "FishAndChips", "Bratwurst", "Ratatouille"] },
        { name: "Africa", dishes: ["JollofRice", "Tagine", "BunnyChow", "Injera", "Fufu", "Braai", "Suya"] },
        { name: "Americas", dishes: ["Burger", "Tacos", "Poutine", "BBQRibs", "Empanadas", "Churrasco", "ClamChowder"] },
      ],
    },
    {
      title: "Goal-Based Dishes",
      image: "https://img.freepik.com/free-vector/dart-dartboard_78370-8133.jpg?ga=GA1.1.1063396785.1723545078&semt=ais_hybrid",
      continents: [
        { name: "Weight Loss", dishes: ["SaladBowl", "GrilledChicken", "Smoothie", "ZucchiniNoodles", "QuinoaSalad", "Oatmeal", "VegetableSoup"] },
        { name: "Muscle Gain", dishes: ["Steak", "ProteinShake", "Eggs", "Salmon", "ChickenBreast", "PeanutButter", "GreekYogurt"] },
        { name: "Vegan", dishes: ["TofuStirfry", "VeganBurger", "LentilSoup", "AvocadoToast", "ChickpeaCurry", "HummusAndVeggies", "VeganPasta"] },
        { name: "Keto", dishes: ["CauliflowerRice", "Avocado & Eggs", "CheeseChips", "Zoodles", "KetoPancakes", "BulletproofCoffee", "BaconWraps"] },
      ],
    },
    {
      title: "Quick & Easy Meals",
      image: "https://img.freepik.com/free-vector/stopwatch-outline-moving-fast_78370-8142.jpg?ga=GA1.1.1063396785.1723545078&semt=ais_hybrid",
      continents: [
        { name: "Breakfast", dishes: ["Pancakes", "Omelet", "Granola", "SmoothieBowl", "FrenchToast", "ChiaPudding", "EggMuffins"] },
        { name: "Lunch", dishes: ["Sandwich", "Burrito", "CaesarSalad", "Wrap", "Quesadilla", "GrilledCheese", "RiceBowl"] },
        { name: "Dinner", dishes: ["Pasta", "GrilledCheese", "Soup", "Curry", "Stir-fry", "Tacos", "BakedPotatoes"] },
        { name: "Snacks", dishes: ["FruitBowl", "Popcorn", "EnergyBars", "Nachos", "PeanutButterToast", "TrailMix", "YogurtParfait"] },
      ],
    },
    {
      title: "Healthy Choices",
      image: "https://img.freepik.com/free-vector/healthy-food-illustration_24877-52322.jpg?ga=GA1.1.1063396785.1723545078&semt=ais_hybrid",
      continents: [
        { name: "Low-Carb", dishes: ["GrilledChicken", "ZucchiniNoodles", "AvocadoSalad", "CauliflowerMash", "EggSalad", "StuffedPeppers", "CabbageRolls"] },
        { name: "High-Protein", dishes: ["LentilSoup", "Eggs", "TunaSalad", "GreekYogurt", "ProteinPancakes", "CottageCheese", "Edamame"] },
        { name: "Gluten-Free", dishes: ["QuinoaBowl", "RiceNoodles", "CornTacos", "ChiaPudding", "Gluten-Free Pancakes", "SweetPotatoFries", "BuckwheatPorridge"] },
        { name: "Organic", dishes: ["FarmVeggies", "HomemadeYogurt", "FreshJuices", "HerbalTea", "OrganicOatmeal", "RawNuts", "FermentedFoods"] },
      ],
    },
    {
      title: "Seasonal Specials",
      image: "https://img.freepik.com/free-vector/seasons-tree-spring-summer-autumn-winter-leaf-plant-snow-flower-vector-illustration_1284-41718.jpg?ga=GA1.1.1063396785.1723545078&semt=ais_hybrid",
      continents: [
        { name: "Winter", dishes: ["HotChocolate", "Stew", "RoastedChestnuts", "PumpkinSoup", "MulledWine", "Shepherd’s Pie", "Beef Stroganoff"] },
        { name: "Spring", dishes: ["StrawberrySalad", "LemonTart", "GrilledVeggies", "HerbChicken", "SpringRolls", "Asparagus Soup", "LambChops"] },
        { name: "Summer", dishes: ["IceCream", "Cold Pasta Salad", "Lemonade", "MangoSalsa", "Gazpacho", "ShrimpSkewers", "WatermelonSalad"] },
        { name: "Autumn", dishes: ["PumpkinPie", "Cider", "RoastTurkey", "StuffedSquash", "CarrotSoup", "AppleCrisp", "BeefPotRoast"] },
      ],
    },
  ];
  
  export default categories;
  