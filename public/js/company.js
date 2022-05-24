const naspersTextsArray = [
  'The war in Ukraine is terrible. We must all contribute to the victory over tyranny in any way we can. The public position of condemnation is also a contribution.#AvitoPromotesWar https://bit.ly/3KnhJf4',
  'Human life is the highest value. What is happening now in Ukraine is a real genocide. We cannot stand aside. Russia needs to be canceled not only with sanctions, but with every personal position.#AvitoPromotesWar https://bit.ly/3KnhJf4',
  'In every difficult time, there are heroes who turn the tide of history. Today it could be any of us. Let\'s actively support the defenders. And tangibly resist those who attack. The war must be stopped.#AvitoPromotesWar https://bit.ly/3KnhJf4',
  'The death of innocent people, the destruction of homes, forced refugees, false propaganda - this is all that war brings with it. How can we just watch it from the sidelines? We have the strength and ability to help, let\'s use them.#AvitoPromotesWar https://bit.ly/3KnhJf4',
  'Be afraid of indifferent people - it is with their tacit consent that all the most terrible crimes in the world occur. The policy of non-intervention prolongs this terrible war. We have a voice and we must use it.#AvitoPromotesWar https://bit.ly/3KnhJf4',
  'Today peace depends on each of us. Everyone influences at their own level. Someone openly expresses his position, someone works as a volunteer, someone stops doing business with Russia. Let\'s stop the war all together.#AvitoPromotesWar https://bit.ly/3KnhJf4',
  '@bobontour you need to reconsider your position and leave the Russian market. Today, doing business with Russia means financing the war and supporting anti-human actions. #AvitoPromotesWar  https://bit.ly/3KnhJf4',
  '@bobontour Europe is united and today\'s battle on foreign borders can become a battle on the borders of our home. Stop cooperation with Russia, do not give her a chance to destroy our common land. #AvitoPromotesWar  https://bit.ly/3KnhJf4',
  '@bobontour it\'s always harder for leaders, with more power you get more responsibilities. Be honest with yourself. Stop supporting the war. #AvitoPromotesWar https://bit.ly/3KnhJf4',
  '@bobontour today no one should be silent, no one should work with the aggressor, no one should support the war. Stop cooperating with Avito. Be proactive, get out of their market. #AvitoPromotesWar https://bit.ly/3KnhJf4',
  '@bobontour today to work with Russia means to support the war. Reconsider your position, give up blood money. #AvitoPromotesWar https://bit.ly/3KnhJf4',
  '@bobontour you represent not only yourself, not only your company, but also our country. We are against war. Everyone is against the war, except Russia. Support people who want peace, stop cooperating with rashists. #AvitoPromotesWar  https://bit.ly/3KnhJf4',
  // '@ and everyone who is related to the activities of Avito. Do not stand aside, demand action from your management. Avito helps to kill peaceful people, destroy their homes and deprive the nation of its motherland. #AvitoPromotesWar https://bit.ly/3KnhJf4',
  // '@ and everyone who is related to the activities of Avito. Stop pretending you don\'t see what\'s going on. This resource distributes pro-Russian symbols, helps sell the loot from civilians and promotes war. Stop supporting this horror. #AvitoPromotesWar https://bit.ly/3KnhJf4',
  // '@ and everyone who is related to the activities of Avito. Human life is more important than money. Peace is better than war. Stop cooperation with the Russian Federation. State your position to the whole world. #AvitoPromotesWar  https://bit.ly/3KnhJf4',
  // '@ and everyone who is related to the activities of Avito. Silence today is worse than scandal. The attitude of abstinence is humiliating. Stop working with Avito. #AvitoPromotesWar   https://bit.ly/3KnhJf4',
  // '@ and everyone who is related to the activities of Avito. Do not allow your leaders to support the war, express disagreement with company policy. Every vote counts. Help stop the destruction of Ukraine. #AvitoPromotesWar https://bit.ly/3KnhJf4'
];

document.addEventListener("DOMContentLoaded", function (event) {
  const twitter_link = document.getElementById("twitter_button");
  const naspers_link = document.getElementById("naspers_twitter_link");

  function setTwiterLink() {
    let text = twitter_link.dataset.text.replaceAll(" ", "%20");
    twitter_link.href = "https://twitter.com/intent/tweet?text=".concat(text);
  }

  function setNaspersLink() {
    let text = naspersTextsArray[Math.floor(Math.random()*naspersTextsArray.length)];
    naspers_link.href = "https://twitter.com/intent/tweet?text=".concat(text);
  }

  if (twitter_link != undefined) {
    setTwiterLink();
  }

  if(naspers_link != undefined){
    setNaspersLink();
  }

  const swiperLength =
    document.getElementsByClassName("activity__slider").length;
  if (swiperLength > 0) {
    let swiper = new Swiper(".activity__slider", {
      watchOverflow: true,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 0,
      },
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        700: {
          slidesPerView: 2,
        },

        900: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },
      },
    });
  }
});
