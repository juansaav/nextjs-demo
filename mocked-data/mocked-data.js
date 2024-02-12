// user = {
//     email: string,
//     posts: [post],
//     likedPosts: [string],
//     jobTitle: string,
// }

// post = {
//     title: string,
//     description: string,
//     tags: [string],
//     userEmail: string,
// }

export const users = [
  {
    email: "user1@example.com",
    posts: [
      "Cute Kittens Playing",
      "Famous Felines Throughout History",
      "The Colorful World of Tropical Fish",
    ],
    likedPosts: ["The Playful Nature of Rabbits", "Basic Cat Care Essentials"],
    jobTitle: "Pet Lover",
  },
  {
    email: "user2@example.com",
    posts: [
      "Golden Retriever Training Tips",
      "Dog Breeds 101: Labrador Retrievers",
      "Living with a Loyal Companion: German Shepherds",
    ],
    likedPosts: [
      "The Mighty Tigers of India",
      "Top 10 Most Intelligent Dog Breeds",
    ],
    jobTitle: "Animal Enthusiast",
  },
  {
    email: "user3@example.com",
    posts: ["Exotic Birds of the Amazon", "Majestic Elephants of Africa"],
    likedPosts: [
      "Conserving Wildlife Habitats",
      "The Joy of Owning a Pet Bird",
    ],
    jobTitle: "Veterinarian",
  },
  {
    email: "user4@example.com",
    posts: ["Fun Facts About Hamsters", "Basic Cat Care Essentials"],
    likedPosts: [
      "Cute Puppies Learning Tricks",
      "The Playful Nature of Rabbits",
    ],
    jobTitle: "Animal Trainer",
  },
  {
    email: "user5@example.com",
    posts: [
      "Caring for Your Pet Fish",
      "Training Your Parrot to Talk",
      "Understanding Cat Behavior: Body Language",
    ],
    likedPosts: [
      "The Colorful World of Tropical Fish",
      "Raising Healthy Guinea Pigs",
    ],
    jobTitle: "Animal Shelter Volunteer",
  },
  {
    email: "user6@example.com",
    posts: [
      "Tips for Responsible Dog Ownership",
      "The Importance of Spaying and Neutering Pets",
    ],
    likedPosts: ["Conserving Wildlife Habitats", "Nurturing Your Pet Reptile"],
    jobTitle: "Pet Groomer",
  },
  {
    email: "user7@example.com",
    posts: [
      "Endangered Species Conservation Efforts",
      "Protecting Sea Turtles from Plastic Pollution",
    ],
    likedPosts: [
      "The Joy of Owning a Pet Bird",
      "Protecting Endangered Penguins",
    ],
    jobTitle: "Wildlife Biologist",
  },
  {
    email: "user8@example.com",
    posts: ["Ferret Care Basics", "Grooming Tips for Long-Haired Cats"],
    likedPosts: [
      "Understanding Cat Behavior: Body Language",
      "Exploring the World of Small Rodents",
    ],
    jobTitle: "Zoologist",
  },
  {
    email: "user9@example.com",
    posts: ["Adopting a Rescue Dog", "Top 10 Most Intelligent Dog Breeds", "Exploring the World of Small Rodents"],
    likedPosts: ["Cute Kittens Playing", "Raising Healthy Guinea Pigs"],
    jobTitle: "Animal Rights Activist",
  },
  {
    email: "user10@example.com",
    posts: [
      "Raising Healthy Guinea Pigs",
      "Cute Puppies Learning Tricks",
      "Protecting Endangered Penguins",
    ],
    likedPosts: [
      "Caring for Your Pet Fish",
      "Dog Breeds 101: Labrador Retrievers",
    ],
    jobTitle: "Pet Store Owner",
  },
];

export const posts = [

  /////////// ANIMALS


  {
    title: "Cute Kittens Playing",
    description: "Watch these adorable kittens playing with yarn!",
    tags: ["cats", "kittens", "playful"],
    userEmail: "user1@example.com",
  },
  {
    title: "Golden Retriever Training Tips",
    description:
      "Learn effective training techniques for your golden retriever.",
    tags: ["dogs", "golden retrievers", "training"],
    userEmail: "user2@example.com",
  },
  {
    title: "Exotic Birds of the Amazon",
    description:
      "Discover the vibrant and diverse bird species found in the Amazon rainforest.",
    tags: ["birds", "Amazon", "exotic"],
    userEmail: "user3@example.com",
  },
  {
    title: "Fun Facts About Hamsters",
    description: "Did you know that hamsters are nocturnal animals?",
    tags: ["hamsters", "facts", "nocturnal"],
    userEmail: "user4@example.com",
  },
  {
    title: "Caring for Your Pet Fish",
    description:
      "Learn the essentials of keeping your pet fish healthy and happy.",
    tags: ["fish", "aquarium", "care"],
    userEmail: "user5@example.com",
  },
  {
    title: "Tips for Responsible Dog Ownership",
    description:
      "Ensure a happy and healthy life for your canine companion with these tips.",
    tags: ["dogs", "ownership", "responsibility"],
    userEmail: "user6@example.com",
  },
  {
    title: "Endangered Species Conservation Efforts",
    description:
      "Support initiatives aimed at protecting endangered species worldwide.",
    tags: ["conservation", "endangered species", "wildlife"],
    userEmail: "user7@example.com",
  },
  {
    title: "Ferret Care Basics",
    description:
      "Learn how to provide proper care and attention to your pet ferret.",
    tags: ["ferrets", "care", "pets"],
    userEmail: "user8@example.com",
  },
  {
    title: "Adopting a Rescue Dog",
    description:
      "Discover the joys of rescuing and adopting a dog in need of a loving home.",
    tags: ["dogs", "rescue", "adoption"],
    userEmail: "user9@example.com",
  },
  {
    title: "Raising Healthy Guinea Pigs",
    description:
      "Ensure your guinea pig thrives with these essential care tips.",
    tags: ["guinea pigs", "care", "health"],
    userEmail: "user10@example.com",
  },
  {
    title: "Famous Felines Throughout History",
    description:
      "Explore the iconic cats that have left their mark on history.",
    tags: ["cats", "history", "famous"],
    userEmail: "user1@example.com",
  },
  {
    title: "Dog Breeds 101: Labrador Retrievers",
    description:
      "Learn about the characteristics and traits of Labrador retrievers.",
    tags: ["dogs", "Labradors", "breeds"],
    userEmail: "user2@example.com",
  },
  {
    title: "Majestic Elephants of Africa",
    description:
      "Discover the beauty and importance of elephants in African ecosystems.",
    tags: ["elephants", "Africa", "majestic"],
    userEmail: "user3@example.com",
  },
  {
    title: "Basic Cat Care Essentials",
    description:
      "Ensure your feline friend lives a happy and healthy life with these care essentials.",
    tags: ["cats", "care", "essentials"],
    userEmail: "user4@example.com",
  },
  {
    title: "Training Your Parrot to Talk",
    description:
      "Tips and tricks for teaching your parrot to mimic human speech.",
    tags: ["parrots", "training", "speech"],
    userEmail: "user5@example.com",
  },
  {
    title: "The Importance of Spaying and Neutering Pets",
    description:
      "Understand why spaying and neutering are crucial for controlling pet populations.",
    tags: ["spaying", "neutering", "pets"],
    userEmail: "user6@example.com",
  },
  {
    title: "Protecting Sea Turtles from Plastic Pollution",
    description:
      "Join efforts to safeguard sea turtles from the harmful effects of plastic pollution.",
    tags: ["sea turtles", "conservation", "pollution"],
    userEmail: "user7@example.com",
  },
  {
    title: "Grooming Tips for Long-Haired Cats",
    description:
      "Keep your long-haired cat looking fabulous with these grooming tips.",
    tags: ["cats", "grooming", "long-haired"],
    userEmail: "user8@example.com",
  },
  {
    title: "Top 10 Most Intelligent Dog Breeds",
    description:
      "Discover the smartest dog breeds known for their intelligence and trainability.",
    tags: ["dogs", "intelligence", "breeds"],
    userEmail: "user9@example.com",
  },
  {
    title: "Cute Puppies Learning Tricks",
    description: "Watch these adorable puppies as they learn new tricks!",
    tags: ["dogs", "puppies", "tricks"],
    userEmail: "user10@example.com",
  },
  {
    title: "The Colorful World of Tropical Fish",
    description:
      "Explore the vibrant hues and fascinating patterns of tropical fish.",
    tags: ["fish", "tropical", "colorful"],
    userEmail: "user1@example.com",
  },
  {
    title: "Living with a Loyal Companion: German Shepherds",
    description:
      "Discover the loyalty and intelligence of German shepherd dogs.",
    tags: ["dogs", "German shepherds", "loyalty"],
    userEmail: "user2@example.com",
  },
  {
    title: "The Mighty Tigers of India",
    description:
      "Learn about the majestic Bengal tigers found in the forests of India.",
    tags: ["tigers", "India", "majestic"],
    userEmail: "user3@example.com",
  },
  {
    title: "The Playful Nature of Rabbits",
    description: "Explore the fun-loving and curious nature of pet rabbits.",
    tags: ["rabbits", "playful", "curious"],
    userEmail: "user4@example.com",
  },
  {
    title: "Understanding Cat Behavior: Body Language",
    description:
      "Decode your cat's body language and understand what they're trying to tell you.",
    tags: ["cats", "behavior", "body language"],
    userEmail: "user5@example.com",
  },
  {
    title: "Conserving Wildlife Habitats",
    description:
      "Learn about the importance of preserving natural habitats for wildlife conservation.",
    tags: ["wildlife", "habitats", "conservation"],
    userEmail: "user6@example.com",
  },
  {
    title: "The Joy of Owning a Pet Bird",
    description:
      "Discover the companionship and delight of having a pet bird in your home.",
    tags: ["birds", "pets", "companionship"],
    userEmail: "user7@example.com",
  },
  {
    title: "Nurturing Your Pet Reptile",
    description:
      "Tips for providing a safe and enriching environment for your pet reptile.",
    tags: ["reptiles", "pets", "care"],
    userEmail: "user8@example.com",
  },
  {
    title: "Exploring the World of Small Rodents",
    description:
      "Learn about the various types of small rodents kept as pets around the world.",
    tags: ["rodents", "pets", "small animals"],
    userEmail: "user9@example.com",
  },
  {
    title: "Protecting Endangered Penguins",
    description:
      "Join efforts to protect and conserve endangered penguin species.",
    tags: ["penguins", "conservation", "endangered species"],
    userEmail: "user10@example.com",
  },


  /////////// CARS

  {
    "title": "Vintage Cars Exhibition",
    "description": "Explore a collection of classic vintage cars from different eras.",
    "tags": ["cars", "vintage", "exhibition"],
    "userEmail": "user1@example.com"
  },
  {
    "title": "Tips for Maintaining Your Sports Car",
    "description": "Learn essential maintenance tips to keep your sports car in top condition.",
    "tags": ["cars", "sports cars", "maintenance"],
    "userEmail": "user2@example.com"
  },
  {
    "title": "Luxury Sedans: A Comparison Guide",
    "description": "Compare features and performance of various luxury sedan models.",
    "tags": ["cars", "luxury sedans", "comparison"],
    "userEmail": "user3@example.com"
  },
  {
    "title": "Off-Roading Adventures: Best SUVs for the Terrain",
    "description": "Discover the best SUV models suited for off-roading adventures.",
    "tags": ["cars", "SUVs", "off-roading"],
    "userEmail": "user4@example.com"
  },
  {
    "title": "Electric Cars: The Future of Automobiles",
    "description": "Explore the advancements and benefits of electric cars for a sustainable future.",
    "tags": ["cars", "electric cars", "sustainability"],
    "userEmail": "user5@example.com"
  },
  {
    "title": "Classic Muscle Cars: A History",
    "description": "Dive into the rich history of classic muscle cars and their impact on automotive culture.",
    "tags": ["cars", "muscle cars", "history"],
    "userEmail": "user6@example.com"
  },
  {
    "title": "Safety Features in Modern Vehicles",
    "description": "Learn about the latest safety technologies implemented in modern vehicles.",
    "tags": ["cars", "safety", "technology"],
    "userEmail": "user7@example.com"
  },
  {
    "title": "Convertible Cars: Enjoying the Open Road",
    "description": "Experience the freedom of driving with the top down in convertible cars.",
    "tags": ["cars", "convertibles", "open road"],
    "userEmail": "user8@example.com"
  },
  {
    "title": "DIY Car Maintenance: Basic Tips for Every Driver",
    "description": "Empower yourself with basic car maintenance skills to save time and money.",
    "tags": ["cars", "maintenance", "DIY"],
    "userEmail": "user9@example.com"
  },
  {
    "title": "Customizing Your Ride: Personalization Options for Cars",
    "description": "Explore various ways to personalize and customize your car to reflect your style.",
    "tags": ["cars", "customization", "personalization"],
    "userEmail": "user10@example.com"
  },
  {
    "title": "Racing Cars: Behind the Scenes",
    "description": "Get an insider's look into the world of professional racing cars and their engineering.",
    "tags": ["cars", "racing", "engineering"],
    "userEmail": "user1@example.com"
  },
  {
    "title": "The Evolution of Hybrid Cars",
    "description": "Trace the evolution and technological advancements of hybrid cars over the years.",
    "tags": ["cars", "hybrids", "evolution"],
    "userEmail": "user2@example.com"
  },
  {
    "title": "Driving Safely in Winter Conditions",
    "description": "Learn essential tips for driving safely in snowy and icy winter conditions.",
    "tags": ["cars", "winter driving", "safety"],
    "userEmail": "user3@example.com"
  },
  {
    "title": "Adventures with 4x4 Trucks",
    "description": "Embark on thrilling adventures with rugged 4x4 trucks built for the toughest terrains.",
    "tags": ["cars", "4x4 trucks", "adventures"],
    "userEmail": "user4@example.com"
  },
  {
    "title": "The Future of Autonomous Vehicles",
    "description": "Explore the potential of autonomous vehicles and their impact on transportation.",
    "tags": ["cars", "autonomous vehicles", "future"],
    "userEmail": "user5@example.com"
  },
  {
    "title": "Vintage Car Restoration: Preserving Automotive History",
    "description": "Discover the art and challenges of restoring vintage cars to their former glory.",
    "tags": ["cars", "restoration", "vintage"],
    "userEmail": "user6@example.com"
  },
  {
    "title": "Essential Car Accessories Every Driver Should Have",
    "description": "Find out about essential accessories that can enhance your driving experience.",
    "tags": ["cars", "accessories", "drivers"],
    "userEmail": "user7@example.com"
  },
  {
    "title": "Family-Friendly Cars: Choosing the Right Model",
    "description": "Tips for selecting the perfect family-friendly car that meets your needs.",
    "tags": ["cars", "family cars", "tips"],
    "userEmail": "user8@example.com"
  },
  {
    "title": "Road Trip Essentials: Packing Tips for Long Drives",
    "description": "Ensure a smooth and enjoyable road trip with these essential packing tips.",
    "tags": ["cars", "road trips", "packing"],
    "userEmail": "user9@example.com"
  },
  {
    "title": "Urban Commuting: Best Cars for City Living",
    "description": "Discover the most suitable cars for navigating city streets and urban environments.",
    "tags": ["cars", "urban commuting", "city living"],
    "userEmail": "user10@example.com"
  },
  {
    "title": "The Art of Car Detailing",
    "description": "Learn the techniques and products used to achieve a professionally detailed car.",
    "tags": ["cars", "detailing", "techniques"],
    "userEmail": "user1@example.com"
  },
  {
    "title": "Eco-Friendly Cars: Reducing Your Carbon Footprint",
    "description": "Discover eco-friendly car options that help reduce emissions and environmental impact.",
    "tags": ["cars", "eco-friendly", "environment"],
    "userEmail": "user2@example.com"
  },
  {
    "title": "Navigating Traffic Jams: Tips for Stress-Free Driving",
    "description": "Stay calm and navigate through traffic jams with these helpful tips.",
    "tags": ["cars", "traffic", "driving tips"],
    "userEmail": "user3@example.com"
  },
  {
    "title": "Choosing the Right Tires for Your Vehicle",
    "description": "Understand the importance of selecting the right tires for your car and driving conditions.",
    "tags": ["cars", "tires", "selection"],
    "userEmail": "user4@example.com"
  },

  ///////////////// FOOD

  {
    "title": "Delicious Pasta Recipes",
    "description": "Explore a variety of mouthwatering pasta recipes for every occasion.",
    "tags": ["food", "pasta", "recipes"],
    "userEmail": "user1@example.com"
  },
  {
    "title": "Healthy Smoothie Ideas",
    "description": "Discover nutritious and tasty smoothie recipes to kickstart your day.",
    "tags": ["food", "smoothies", "healthy"],
    "userEmail": "user2@example.com"
  },
  {
    "title": "International Cuisine: A Culinary Journey",
    "description": "Embark on a culinary adventure with diverse international dishes.",
    "tags": ["food", "international cuisine", "culinary"],
    "userEmail": "user3@example.com"
  },
  {
    "title": "Grilling Tips for Perfect BBQ",
    "description": "Master the art of grilling with expert tips for the perfect BBQ experience.",
    "tags": ["food", "grilling", "BBQ"],
    "userEmail": "user4@example.com"
  },
  {
    "title": "Vegetarian Cooking Made Easy",
    "description": "Learn simple and delicious vegetarian recipes for every meal.",
    "tags": ["food", "vegetarian", "cooking"],
    "userEmail": "user5@example.com"
  },
  {
    "title": "Decadent Desserts: Indulge Your Sweet Tooth",
    "description": "Satisfy your cravings with decadent dessert recipes that are sure to please.",
    "tags": ["food", "desserts", "indulgence"],
    "userEmail": "user6@example.com"
  },
  {
    "title": "Farm-to-Table Dining: Fresh and Local",
    "description": "Experience the freshness of farm-to-table dining with locally sourced ingredients.",
    "tags": ["food", "farm-to-table", "local"],
    "userEmail": "user7@example.com"
  },
  {
    "title": "Baking Bread at Home: Tips and Techniques",
    "description": "Discover the joy of baking bread at home with expert tips and techniques.",
    "tags": ["food", "baking", "bread"],
    "userEmail": "user8@example.com"
  },
  {
    "title": "Quick and Easy Weeknight Meals",
    "description": "Simplify your weeknight dinners with quick and easy meal ideas.",
    "tags": ["food", "weeknight meals", "quick"],
    "userEmail": "user9@example.com"
  },
  {
    "title": "Gourmet Pizza Creations",
    "description": "Elevate your pizza game with gourmet toppings and flavor combinations.",
    "tags": ["food", "pizza", "gourmet"],
    "userEmail": "user10@example.com"
  },
  {
    "title": "The Art of Sushi Making",
    "description": "Learn the techniques and traditions behind the art of sushi making.",
    "tags": ["food", "sushi", "Japanese cuisine"],
    "userEmail": "user1@example.com"
  },
  {
    "title": "Budget-Friendly Meal Planning",
    "description": "Save time and money with budget-friendly meal planning strategies.",
    "tags": ["food", "meal planning", "budget-friendly"],
    "userEmail": "user2@example.com"
  },
  {
    "title": "Spice Up Your Cooking with Indian Flavors",
    "description": "Discover the vibrant and aromatic flavors of Indian cuisine in your own kitchen.",
    "tags": ["food", "Indian cuisine", "spices"],
    "userEmail": "user3@example.com"
  },
  {
    "title": "Homemade Pasta: From Scratch to Plate",
    "description": "Experience the satisfaction of making homemade pasta from scratch.",
    "tags": ["food", "pasta", "homemade"],
    "userEmail": "user4@example.com"
  },
  {
    "title": "Healthy Snack Ideas for On-the-Go",
    "description": "Stay energized throughout the day with healthy snack options for on-the-go lifestyles.",
    "tags": ["food", "snacks", "healthy"],
    "userEmail": "user5@example.com"
  },
  {
    "title": "Traditional Mexican Cuisine: Flavorful and Authentic",
    "description": "Explore the rich and diverse flavors of traditional Mexican dishes.",
    "tags": ["food", "Mexican cuisine", "authentic"],
    "userEmail": "user6@example.com"
  },
  {
    "title": "The Ultimate Guide to Wine Pairing",
    "description": "Enhance your dining experience with expert wine pairing recommendations for every dish.",
    "tags": ["food", "wine pairing", "guide"],
    "userEmail": "user7@example.com"
  },
  {
    "title": "Comfort Food Classics: Nostalgic Recipes",
    "description": "Rediscover the warmth and nostalgia of comfort food classics with timeless recipes.",
    "tags": ["food", "comfort food", "classics"],
    "userEmail": "user8@example.com"
  },
  {
    "title": "Healthy Breakfast Ideas to Start Your Day Right",
    "description": "Fuel your day with nutritious and satisfying breakfast options.",
    "tags": ["food", "breakfast", "healthy"],
    "userEmail": "user9@example.com"
  },
  {
    "title": "Exotic Fruit Tasting Experience",
    "description": "Expand your palate with an exotic fruit tasting experience featuring unique and tropical flavors.",
    "tags": ["food", "fruits", "exotic"],
    "userEmail": "user10@example.com"
  },
  {
    "title": "Plant-Based Cooking: Delicious Vegan Recipes",
    "description": "Discover the versatility and flavor of plant-based cooking with delicious vegan recipes.",
    "tags": ["food", "vegan", "plant-based"],
    "userEmail": "user1@example.com"
  },
  {
    "title": "Healthy Cooking for Busy Professionals",
    "description": "Master the art of healthy cooking with simple and nutritious recipes for busy schedules.",
    "tags": ["food", "healthy cooking", "busy professionals"],
    "userEmail": "user2@example.com"
  },
  {
    "title": "Exploring Mediterranean Cuisine",
    "description": "Journey through the Mediterranean with flavorful dishes inspired by the region's culinary traditions.",
    "tags": ["food", "Mediterranean cuisine", "flavors"],
    "userEmail": "user3@example.com"
  },
  {
    "title": "Homemade Ice Cream: Churn Your Own Treats",
    "description": "Beat the heat with homemade ice cream recipes that are sure to delight.",
    "tags": ["food", "ice cream", "homemade"],
    "userEmail": "user4@example.com"
  },
];
