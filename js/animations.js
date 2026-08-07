var AddScrollAnimation = function (target, duration = '1s', delay = '0s', repeat = false) {

    const element = document.querySelector(target);
    if (!element) return;

    let animationFrame = null;
    let delayTimer = null;

    const cancel = () => {
        if (delayTimer) {
            clearTimeout(delayTimer);
            delayTimer = null;
        }
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
    };

    const waitForImages = (element, timeoutMs = 2000) => {
        const pending = Array.from(element.querySelectorAll('img')).filter(img => !img.complete);
        if (pending.length === 0) return Promise.resolve();
        let done = false;
        return new Promise(resolve => {
            const finish = () => {
                if (!done) {
                    done = true;
                    resolve();
                }
            };
            pending.forEach(img => {
                img.addEventListener('load', finish);
                img.addEventListener('error', finish);
            });
            setTimeout(finish, timeoutMs);
        });
    };

    const animate = () => {
        cancel();
        const jumpToEnd = () => {
            const maxScroll = element.scrollWidth - element.clientWidth;
            if (maxScroll > 0)
                element.scrollLeft = maxScroll;
        };
        jumpToEnd();
        const delayMs = parseFloat(delay) * 1000;
        delayTimer = setTimeout(() => {
            delayTimer = null;
            waitForImages(element).then(() => {
                jumpToEnd();
                const start = element.scrollLeft;
                const distance = -start;
                if (distance === 0) return;
                const durationMs = parseFloat(duration) * 1000;
                const startTime = performance.now();
                const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

                const step = (time) => {
                    const progress = Math.min((time - startTime) / durationMs, 1);
                    element.scrollLeft = start + distance * easeInOutCubic(progress);
                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(step);
                    } else {
                        animationFrame = null;
                    }
                };

                animationFrame = requestAnimationFrame(step);
            });
        }, delayMs);
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
                return;
            }
            if (repeat)
                cancel();
        });
    });

    observer.observe(element);

    ['wheel', 'touchstart', 'mousedown'].forEach(eventName =>
        element.addEventListener(eventName, cancel, { passive: true })
    );
};


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

AddScrollAnimation('#gameList', '0.8s', '0.2s', repeat = true);




AddAnimation('#projectPageBackground', 'fadeInAnimation', duration = '0.3s', delay = '0s');
AddAnimation('#btClose', 'closeButtonAnimation', duration = '0.4s', delay = '0.5s');
AddAnimation('#projectPageContent', 'projectPageContentAnimation', duration = '0.4s', delay = '0s');

//AddAnimation('.slider', 'fadeInAnimation', duration = '0.5s', delay = '0s');