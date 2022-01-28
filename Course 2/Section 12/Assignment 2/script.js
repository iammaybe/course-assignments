function Movie(name, genre) {
  this.name = name;
  this.genre = genre;
}

Movie.prototype.showName = function () {
  console.log(`The name of the movie is: ${this.name}.`);
};

Movie.prototype.showGenre = function () {
  console.log(`The genre of the movie is: ${this.genre}.`);
};

const movie1 = new Movie('The Godfather', 'Crime');
movie1.showName();
movie1.showGenre();

// =====================

class Movie2 {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }
  showName2() {
    console.log(`The name of the movie is: ${this.name}.`);
  }
  showGenre2() {
    console.log(`The genre of the movie is: ${this.genre}.`);
  }
}

const movie2 = new Movie2('The Shawshank Redemption', 'Drama');
movie2.showName2();
movie2.showGenre2();
