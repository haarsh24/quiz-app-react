import { v4 as uuid } from "uuid";

export const quizzes = [
  {
    _id: uuid(),
    alt: "bigBangTheory",
    image:
      "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834636/big-bang-theory_zfuwrx.webp",
    category: "Shows",
    title: "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard.",
    quiz: [
      {
        _id: uuid(),
        question: "Sheldon is which type of scientist in big bang theory?",
        options: [
          { _id: uuid(), option: "Experimental physicist", isCorrect: true },
          { _id: uuid(), option: "Aerospace engineer", isCorrect: false },
          { _id: uuid(), option: "Microbiologist", isCorrect: false },
          { _id: uuid(), option: "Theoretical physicist", isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: "What state is Sheldon originally from?",
        options: [
          { _id: uuid(), option: "Houston", isCorrect: false },
          { _id: uuid(), option: "El Paso", isCorrect: false },
          { _id: uuid(), option: "Texas", isCorrect: true },
          { _id: uuid(), option: "Dallas", isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: "From which state penny belongs to?",
        options: [
          {
            _id: uuid(),
            option: "Omaha",
            isCorrect: false,
          },
          { _id: uuid(), option: "Minneapolis", isCorrect: false },
          { _id: uuid(), option: "Kansas", isCorrect: false },
          { _id: uuid(), option: "Nebraska", isCorrect: true },
        ],
      },
    ],
  },
 
];
