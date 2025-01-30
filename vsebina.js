var express = require('express')
var router = express.Router();

const knjige = [
    {
      id: 1, 
      title: "Lord of the Rings", 
      description: "An epic fantasy novel by J.R.R. Tolkien.",
      srcImg: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
      author: "J.R.R. Tolkien",
      pages: 1178
    },
    {
      id: 2, 
      title: "1984", 
      description: "A dystopian novel by George Orwell set in a totalitarian regime.",
      srcImg: "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
      author: "George Orwell",
      pages: 328
    },
    {
      id: 3, 
      title: "To Kill a Mockingbird", 
      description: "A novel by Harper Lee about racism and injustice in the American South.",
      srcImg: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      author: "Harper Lee",
      pages: 281
    },
    {
      id: 4, 
      title: "Pride and Prejudice", 
      description: "A romantic novel by Jane Austen exploring themes of marriage and social standing.",
      srcImg: "https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg",
      author: "Jane Austen",
      pages: 279
    },
    {
      id: 5, 
      title: "The Catcher in the Rye", 
      description: "A novel by J.D. Salinger about a disillusioned teenager navigating life in New York.",
      srcImg: "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
      author: "J.D. Salinger",
      pages: 214
    },

    {
      id: 6, 
      title: "The Great Gatsby", 
      description: "A novel by F. Scott Fitzgerald set in the Jazz Age, exploring themes of decadence, idealism, resistance to change, social upheaval, and excess.",
      srcImg: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      author: "F. Scott Fitzgerald",
      pages: 180
    },
    {
      id: 7, 
      title: "Moby-Dick", 
      description: "A novel by Herman Melville that tells the adventures of Ishmael, the narrator, and Captain Ahab, who leads a crew on a quest to kill the elusive white whale.",
      srcImg: "https://upload.wikimedia.org/wikipedia/commons/3/36/Moby-Dick_FE_title_page.jpg",
      author: "Herman Melville",
      pages: 635
    },
];
const films = [
  {
    id: 1, 
    title: "Inception", 
    description: "A mind-bending thriller directed by Christopher Nolan, about a thief who enters the dreams of others to steal secrets.",
    srcImg: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    director: "Christopher Nolan",
    releaseYear: 2010
  },
  {
    id: 2, 
    title: "The Shawshank Redemption", 
    description: "A drama about the friendship between two imprisoned men, directed by Frank Darabont, based on a novella by Stephen King.",
    srcImg: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    director: "Frank Darabont",
    releaseYear: 1994
  },
  {
    id: 3, 
    title: "The Dark Knight", 
    description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham City, while facing the Joker, a criminal mastermind.",
    srcImg: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    director: "Christopher Nolan",
    releaseYear: 2008
  },
  {
    id: 4, 
    title: "Pulp Fiction", 
    description: "A nonlinear narrative film by Quentin Tarantino that intertwines several interconnected stories revolving around crime and redemption.",
    srcImg: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    director: "Quentin Tarantino",
    releaseYear: 1994
  },
  {
    id: 5, 
    title: "Forrest Gump", 
    description: "A drama about a man with a low IQ, played by Tom Hanks, who inadvertently influences several major historical events in the 20th century.",
    srcImg: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    director: "Robert Zemeckis",
    releaseYear: 1994
  },
  {
    id: 6, 
    title: "The Godfather", 
    description: "A mafia drama directed by Francis Ford Coppola, telling the story of the powerful Corleone family and their involvement in organized crime.",
    srcImg: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    director: "Francis Ford Coppola",
    releaseYear: 1972
  },
  {
    id: 7, 
    title: "The Matrix", 
    description: "A science fiction film directed by the Wachowskis that explores the nature of reality and the concept of a simulated world.",
    srcImg: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 1999
  }
];


router.get('/:type', (req, res) => {
  switch(req.params.type){
    case "knjiga":
      if (req.query.id) {
        const foundVsebinas = knjige.filter(
          (vsebina) => vsebina.id === parseInt(req.query.id));
        return res.status(200).json(foundVsebinas[0]);
      }
      return res.status(200).json(knjige);
    case "film":
      if (req.query.id) {
        const foundVsebinas = films.filter(
          (vsebina) => vsebina.id === parseInt(req.query.id));
        return res.status(200).json(foundVsebinas[0]);
      }
      return res.status(200).json(films);
  }
  return res.status(404);
});

router.post('/', (req, res) => {
  let product = req.body;
  let foundProduct = products.find(each => each.code === product.code);
  if (foundProduct) {
    return res.status(400)
        .json({msg: 'Product with code ' + product.code + ' already exists'});
  }
  products.push(product);
  return res.status(200).json({msg: 'Product with code ' + product.code + ' successfully created'});
});
/*
return this.http.patch('/api/product/'+code,
  { favorite: !favorite }
);
*/

router.patch('/:code', (req, res) => {
  let productCode = req.params.code;
  let foundProduct = products.find(each => each.code === productCode);
  if (foundProduct) {
    foundProduct.favorite = req.body.favorite;
    let msg = 'Product with code ' + productCode + ' is now ';
    msg += foundProduct.favorite ? ' favorited.' : ' unfavorited';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'Product with code ' + productCode + ' not found!'});
});

module.exports = router;