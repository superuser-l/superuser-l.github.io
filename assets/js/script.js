let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'github':
      url = 'https://github.com/tr1xem';
      break;

      case 'discord':
        url = 'https://www.discord.com/users/885063317079592961';
        break; 

	case 'spotify':
        url = 'https://open.spotify.com/user/31hh6ssb4g5hrphb6x6eq2jzl2jm/following';
        break;   
  }

  window.open(url);
}

function centerIntroText() {
  let introText = document.getElementById('intro-text');
  introText.style.position = 'absolute';
  introText.style.top = '50%';
  introText.style.left = '50%';
  introText.style.transform = 'translate(-50%, -50%)';
}

function startIntroTyping() {
  centerIntroText();

  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('welcome.', { delay: 1200 })
    .delete(null, { delay: 1000 })
    .type(`${mobile ? 'tap' : 'press any key'} to enter.`)
    .go();

  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}

function typerStartTyping(typer) {
  typer.reset();


  let text = ['17 Years Old Hindi & English Developer.', 'Interested In Rev Engineering, Assembly , C++ , Python.', 'I use Arch (Btw)', 'WE GO JIMMMMMM'];	

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

function switchScreen() {
  document.title = 'tr1x_em | home';

  $('.intro').fadeOut(1000, function () {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });
  loadSong(currentSongIndex);
    audioPlayer.play().then(() => {
    console.log("Music started");
    updatePlayPauseIcon();
    }).catch(error => {
    console.log("Music play error:", error);
});
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
});

console.log("GG Everything working perfectly fine ,Made with ❤️ by tr1x_em");