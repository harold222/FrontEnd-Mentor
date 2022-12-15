(function() {
    document.getElementById('check').addEventListener('change', (e) => {
        const hiddeNav = existNav();
        if (e.target.checked && hiddeNav) {
            const rear = document.createElement("div");
            rear.classList.add('rear-container');
            document.body.appendChild(rear);
            hiddeNav.classList.add('show-header-navigation-menu');
        }
    });

    document.getElementById('close').addEventListener('change', (e) => {
        const rearContainer = document.getElementsByClassName('rear-container');
        const hiddeNav = existNav();
        hiddeNav.classList.remove('show-header-navigation-menu');
        document.body.removeChild(rearContainer[0]);
    });

    const existNav = () => {
        const hiddeNav = document.getElementsByClassName('header-navigation-menu');
        return hiddeNav?.length > 0 ? hiddeNav[0] : null;
    }

})();