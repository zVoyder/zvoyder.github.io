function createFullPage() {
    let page = new fullpage('#fullPage', {
        licenseKey: 'YOUR_KEY_HERE',
        anchors: ['About', 'Works', 'Skills'],
        navigationTooltips: ['About', 'Works', 'Skills'],
        showActiveTooltip: false,
        navigation: true,
        navigationPosition: 'right',
        sectionSelector: '.section',
        scrollOverflow: true,
        responsiveWidth: 900,
        afterLoad:
            function (origin, destination, direction) {
                const aboutLink = document.getElementById('about-link');
                const worksLink = document.getElementById('works-link');
                const skillsLink = document.getElementById('skills-link');
                const footer = document.getElementById('site-footer');

                aboutLink.blur();
                worksLink.blur();
                skillsLink.blur();

                aboutLink.classList.remove('active');
                worksLink.classList.remove('active');
                skillsLink.classList.remove('active');

                aboutLink.classList.add('inactive');
                worksLink.classList.add('inactive');
                skillsLink.classList.add('inactive');

                switch (destination.index) {
                    case 0:
                        aboutLink.classList.add('active');
                        footer.classList.remove('visible');
                        break;
                    case 1:
                        worksLink.classList.add('active');
                        footer.classList.remove('visible');
                        break;
                    case 2:
                        skillsLink.classList.add('active');
                        footer.classList.add('visible');
                        break;
                }
            }
    });

    const watermark = document.querySelector('.fp-watermark');
    if (watermark)
        watermark.remove();

    return page;
}

function activateLink(linkId) {
    const linkIds = ['about-link', 'works-link', 'skills-link', 'cv-link'];
    linkIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.blur();
            el.classList.remove('active');
            el.classList.add('inactive');
        }
    });
    const activeEl = document.getElementById(linkId);
    if (activeEl) {
        activeEl.classList.remove('inactive');
        activeEl.classList.add('active');
    }
}