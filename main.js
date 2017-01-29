/* <!--
Motivational Quotes
--------------------
http://codepen.io/DizNicolasAmor/pen/OWgdBP
  
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor)

This project is a challenge posed by FreeCodeCamp. 
  
--> */

$(document).ready(function() {


  //quotes and authors 
  var quotes = [];
  var authors = [];

  quotes[0] = "No bird soars too high if he soars with his own wings. ";
  authors[0] = "William Blake";
  quotes[1] = "The people who are crazy enough to think they can change the world, are the ones who do. ";
  authors[1] = "Steve Jobs";
  quotes[2] = "In order to succeed, we must first believe that we can. ";
  authors[2] = "Nikos Kazantzakis";
  quotes[3] = "Quality is not an act, it is a habit. ";
  authors[3] = "Aristotle";
  quotes[4] = "It always seems impossible until it's done. ";
  authors[4] = "Nelson Mandela";
  quotes[5] ="Problems are not stop signs, they are guidelines.  ";
  authors[5] = "Robert H. Schuller";
  quotes[6] = "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ";
  authors[6] = "Thomas A. Edison";
  quotes[7] = "A creative man is motivated by the desire to achieve, not by the desire to beat others. ";
  authors[7] = "Ayn Rand";
  quotes[8] = "Love is the only force capable of transforming an enemy into a friend. ";
  authors[8] = "Martin Luther King, Jr.";
  quotes[9] = "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. ";
  authors[9] = "Martin Luther King, Jr.";

  quotes[10] = "The time is always right to do what is right. ";
  authors[10] = "Martin Luther King, Jr.";
  quotes[11] = "Our lives begin to end the day we become silent about things that matter. ";
  authors[11] = "Martin Luther King, Jr.";
  quotes[12] = "Faith is taking the first step even when you don't see the whole staircase. ";
  authors[12] = "Martin Luther King, Jr.";
  quotes[13] = "If a man has not discovered something that he will die for, he isn't fit to live. ";
  authors[13] = "Martin Luther King, Jr.";
  quotes[14] = "If you want to change the world, pick up your pen and write.";
  authors[14] = "Martin Luther";
  quotes[15] = "Everything that is done in this world is done by hope. ";
  authors[15] = "Martin Luther";
  quotes[16] = "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.";
  authors[16] = "Martin Luther";
  quotes[17] = "The true sign of intelligence is not knowledge but imagination. ";
  authors[17] = "Albert Einstein";
  quotes[18] = "When something is important enough, you do it even if the odds are not in your favor. ";
  authors[18] = "Elon Musk";
  quotes[19] = "The mind is everything. What we think, we become. ";
  authors[19] = "Buddha";

  quotes[20] = "Three things cannot be long hidden: the sun, the moon, and the truth. ";
  authors[20] = "Buddha";
  quotes[21] = "I am a slow walker, but I never walk back. ";
  authors[21] = "Abraham Lincoln";
  quotes[22] = "Things may come to those who wait, but only the things left by those who hustle.";
  authors[22] = "Buddha";
  quotes[23] = "You must be the change you wish to see in the world. ";
  authors[23] = "Mahatma Gandhi";
  quotes[24] = "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history. ";
  authors[24] = "Mahatma Gandhi";
  quotes[25] = "A person who never made a mistake never tried anything new. ";
  authors[25] = "Albert Einstein";
  quotes[26] = "Every moment and every event of every man's life on earth plants something in his soul. ";
  authors[26] = "Thomas Merton";
  quotes[27] = "I believe there's an inner power that makes winners or losers. And the winners are the ones who really listen to the truth of their hearts. ";
  authors[27] = "Sylvester Stallone";
  quotes[28] = "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine. ";
  authors[28] = "Neil Armstrong";
  quotes[29] = "Ideas shape the course of history. ";
  authors[29] = "John Maynard Keynes";

  quotes[30] = "What we need is more people who specialize in the impossible. ";
  authors[30] = "Theodore Roethke";
  quotes[31] = "Courage, my friends; it is not too late to build a better world. ";
  authors[31] = "Tommy Douglas";
  quotes[32] = "Setting goals is the first step in turning the invisible into the visible. ";
  authors[32] = "Tony Robbins";
  quotes[33] = "It is in your moments of decision that your destiny is shaped. ";
  authors[33] = "Tony Robbins";
  quotes[34] = "I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk. ";
  authors[34] = "Tony Robbins";
  quotes[35] = "How am I going to live today in order to create the tomorrow I'm committed to? ";
  authors[35] = "Tony Robbins";
  quotes[36] = "Successful people ask better questions, and as a result, they get better answers. ";
  authors[36] = "Tony Robbins";
  quotes[37] ="Passion is the genesis of genius. ";
  authors[37] = "Tony Robbins";
  quotes[38] = "The secret of success is learning how to use pain and pleasure instead of having pain and pleasure use you. If you do that, you're in control of your life. If you don't, life controls you. ";
  authors[38] = "Tony Robbins";
  quotes[39] = "For changes to be of any true value, they've got to be lasting and consistent. ";
  authors[39] = "Tony Robbins";

  quotes[40] = "You see, in life, lots of people know what to do, but few people actually do what they know. Knowing is not enough! You must take action. ";
  authors[40] = "Tony Robbins";
  quotes[41] = "You always succeed in producing a result. ";
  authors[41] = "Tony Robbins";
  quotes[42] = "A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided. ";
  authors[42] = "Tony Robbins";
  quotes[43] = "We can change our lives. We can do, have, and be exactly what we wish. ";
  authors[43] = "Tony Robbins";
  quotes[44] = "It is by acts and not by ideas that people live. ";
  authors[44] = "Anatole France";
  quotes[45] = "Great hopes make great men. ";
  authors[45] = "Thomas Fuller";
  quotes[46] = "I think it is possible for ordinary people to choose to be extraordinary. ";
  authors[46] = "Elon Musk";

  //default quote (that shows when page starts)
  getQuote(quotes, authors);

  //Shows new quote when button is clicked
  $("#new-quote").click(function() {
    getQuote(quotes, authors);
    $("#quoteBody").fadeOut("slow").fadeIn("slow");
  });
  

  function getQuote(q, a) {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    $("#quoteBody").text('\"' + q[randomNumber] + '\"');
    $("#authorBody").text(a[randomNumber]);
    $(".twitter").attr('href', 'https://twitter.com/intent/tweet?hashtags=MotivationalQuotes&text=' + encodeURIComponent('"' + q[randomNumber] + '" - ' + a[randomNumber]));
    
/* I do not add these links because they share the url with a random quote within the image. However I leave the commented code for other projects.

  $(".facebook").attr('href', 'http://www.facebook.com/sharer.php?u=http://codepen.io/DizNicolasAmor/pen/OWgdBP&t=MotivationalQuotes');
  $(".google-plus").attr('href', 'https://plus.google.com/share?url=http://codepen.io/DizNicolasAmor/pen/OWgdBP&t=MotivationalQuotes');

*/
  }
  
}); //document ready function
