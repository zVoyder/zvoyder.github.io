function setupProjectCardHover() {
    document.querySelectorAll('.project-card').forEach(card => {
        const img = card.querySelector('.project-img');
        if (!img) return;
        card.addEventListener('mouseenter', () => {
            img.dataset.static = img.src;
            img.src = img.dataset.gif;
        });
        card.addEventListener('mouseleave', () => {
            img.src = img.dataset.static;
        });
    });
}

function setupPanelVideoAutoplay() {
    window.addEventListener('hashchange', function () {
        if (location.hash.startsWith('#project-')) {
            var panelId = location.hash.substring(1);
            var panel = document.getElementById(panelId);
            if (panel) {
                var video = panel.querySelector('.project-video');
                if (video) {
                    video.currentTime = 0;
                    video.play();
                }
            }
            if (window.fullpage_api)
                window.fullpage_api.setAllowScrolling(false);
        } else {
            var videos = document.querySelectorAll('.panel .project-video');
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0;
            });
            if (window.fullpage_api)
                window.fullpage_api.setAllowScrolling(true);
        }
    });
}

function startLoadingBackground(onComplete) {
    setTimeout(() => {
        const loaderBg = document.getElementById('loader-bg');
        if (loaderBg) {
            loaderBg.style.transition = 'opacity 0.25s ease';
            loaderBg.style.opacity = '0';
            setTimeout(() => {
                loaderBg.remove();
                if (typeof onComplete === 'function')
                    onComplete();
            }, 250);
        } else {
            if (typeof onComplete === 'function')
                onComplete();
        }
    }, 500);
}
