function getMovieName() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('movieData');

let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
      rating: 7.6,
      year: 2001,
    },
    "Fantastic Mr. Fox": {
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: ["George Clooney", "Meryl Streep", "Bill Murray", "Jason Schwartzman"],
      runtime: 147,
      rating: 7.9,
      year: 2009,
    },
    "The Grand Budapest Hotel": {
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
      runtime: 159,
      rating: 8.1,
      year: 2014,
    },
  }
}
  
  
  
  




  /* Code I got help with at study group
  
  var movieCount = movie.length;
  var i;

  if movieCount > 0 {
  for(i=0; i < movieCount; i=i + 1) {var movie = movie[i];
    if(movie === "The Grand Budapest Hotel") {
      alert(movie + "this is it!");
    } else {
      alert(movie);
    }
  }
}
}
getMovieName();
console.log(getMovieName);
  /*
    let plot = document.querySelector("#plot"); //what to look at in HTML
    plot.innerHTML = movieData["The Grand Budapest Hotel"].plot;     //Narrowing down what I want to change - change the text
    plot.innerHTML= 
    //Pull info from database
*/


