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
];
