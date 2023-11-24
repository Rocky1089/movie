const allFavourite = [
    {
        id: 1,
        title: 'Suspicious partner',
        desc: 'A forgetful killer can be dangerous things. Noh ji wook is a prosecutor who changes jobs to become a private attorney at a powerful law firm',
        image: 'https://www.themoviedb.org/t/p/w500/e5ytMZlkGlVWtxSoLypobMaqZEO.jpg',
        year:'2017',
    },
    {
        id: 2,
        title: 'Moonshine',
        desc: 'In depicts human love and desire during the period of the strictest alcohol prohibition law in joseon history.',
        image: 'https://m.media-amazon.com/images/I/51DiwiJO3yL._AC_UF1000,1000_QL80_.jpg',
        year:'2020',
    },
    {
        id: 3,
        title: 'Moon in the day',
        desc: 'Han joon oh is a stunningly good-looking and tall, but secretly plagued by an inferiority complex that leaves him permanently insecure.',
        image: 'https://m.media-amazon.com/images/M/MV5BNmFkNmI1YzctNzBiZi00YWQyLTk2MzUtMzQ3NTVmZWMzNGQ1XkEyXkFqcGdeQXVyMTU2MDUyODcx._V1_FMjpg_UX1000_.jpg',
        year:'2023',
    },
    {
        id: 4,
        title: 'Alchemy of soul',
        desc: 'Activist turned assassin try to end a race war but are forced to choose between honoring their ancestor or losing themselves.',
        image: 'https://m.media-amazon.com/images/M/MV5BZGU1ODJmM2UtNDk0OS00MWIyLWJlNjItMDU3MTU2ZmYxNTM4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg',
        year:'2022',
    },
    {
        id: 5,
        title: 'Our blooming youth',
        desc: 'A prince enduring a mysterious curse meets a woman accused of murder.',
        image: 'https://m.media-amazon.com/images/S/pv-target-images/c3eb298c3de36a554c76e8bd55ecdc59b3a8b942880820526ce4741cda7292d8.jpg',
        year:'2023',
    },
    {
        id: 6,
        title: 'The Red Sleeve',
        desc: 'In korean during the half of the 1700s, Yi san is an allof and perfection-loving young prince',
        image: 'https://m.media-amazon.com/images/M/MV5BZDMzYzU2NmYtNmJlMS00YjlkLWFlYmItZWQ3ZWYxNTNmMzMyXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_FMjpg_UX1000_.jpg',
        year:'2023',
    },
    {
        id: 7,
        title: 'Secret Romantic Guesthouse',
        desc: 'Yoon Dan oh had enjoyed a comfortable life as the beloved youngesst daughter of a well-off family.',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/The_Secret_Romantic_Guesthouse_poster.jpg/250px-The_Secret_Romantic_Guesthouse_poster.jpg',
        year:'2023',
    },
    {
        id: 8,
        title: 'Schorlar Who walk at night',
        desc: 'Set in an alternate joseon dynasty, jo Yang-sun is the daughter of a noble whose family lose everythings when her father was frame for treason.',
        image: 'https://asianwiki.com/images/6/64/Scholar_Who_Walks_the_Night-p1.jpg',
        year:'2015',
    },
    {
        id: 9,
        title: 'Tale of Nokdu',
        desc: 'Jeon Nok lives on an island with his father and older brother.',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_Tale_of_Nokdu.jpg',
        year:'2019',
    },
    {
        id: 10,
        title: 'The king Affection',
        desc: 'A secret palace romance Tv series that happened whe a child who was abandoned on the ground that he was born twin and was a female baby became the son of the world through the death of his  brother biselson',
        image: 'https://x8r7c6g3.rocketcdn.me/wp-content/uploads/2021/11/The-Kings-Affection-001.jpg',
        year:'2021',
    },
    
]

let allMovie = document.getElementById("korean");
console.log(korean);

let createProduct = () => {
    allFavourite.map((value, index) => {
      console.log(index);
      const card = `
          <div key=${index} class='drama'>
              <img src=${value.image} alt=${value.title} class=''/>
              <h1>${value.title}</h1>
               <p class="desc">${value.desc.substr(0, 20)}...</p>
              <small class="year">${value.year}</small><br>
              <button class="btn">Watch Now</button>
          </div>
    `;
      allMovie.innerHTML += card;
    });
  };
  createProduct();
