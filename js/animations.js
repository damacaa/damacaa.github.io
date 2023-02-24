var AddAnimation = function (target, animation, duration = '1s', delay = '0s', repeat = false) {



    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const square = entry.target;

            if (entry.isIntersecting) {
                square.classList.add(animation);
                return; // if we added the class, exit the function
            }

            // We're not intersecting, so remove the class!
            if (repeat)
                square.classList.remove(animation);
        });
    });

    let element = document.querySelector(target);

    element.style.animationDuration = duration;
    element.style.animationDelay = delay;

    observer.observe(element);

}


AddAnimation('#introText', 'fadeInAnimation', duration = '0.5s', delay = '0.5s', repeat = true);
AddAnimation('#introLinks', 'fadeInAnimation', duration = '0.5s', delay = '0.5s', repeat = true);
AddAnimation('#pixelArtPortrait', 'fadeInAnimation', duration = '0.5s', delay = '0.5s', repeat = true);


AddAnimation('#aboutMeText', 'floatFromLeftAnimation', duration = '1s', delay = '0', repeat = false);




AddAnimation('#projectPageBackground', 'fadeInAnimation', duration = '0.3s', delay = '0s');
AddAnimation('#btClose', 'closeButtonAnimation', duration = '0.4s', delay = '0.5s');
AddAnimation('#projectPageContent', 'projectPageContentAnimation', duration = '0.4s', delay = '0s');

AddAnimation('.slider', 'fadeInAnimation', duration = '0.5s', delay = '0s');