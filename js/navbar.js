document.addEventListener("DOMContentLoaded", function () {

    const navbarContainer =
        document.getElementById("navbar");

    if (!navbarContainer) {
        return;
    }

    fetch("components/navbar.html")

        .then(function (response) {

            if (!response.ok) {
                throw new Error(
                    "Navbar component could not be loaded."
                );
            }

            return response.text();

        })

        .then(function (data) {

            navbarContainer.innerHTML = data;

            initializeNavbar();

        })

        .catch(function (error) {

            console.error(
                "Navbar Error:",
                error
            );

        });


    function initializeNavbar() {

        const navbarToggle =
            document.getElementById("navbarToggle");

        const navbarMenu =
            document.getElementById("navbarMenu");


        if (!navbarToggle || !navbarMenu) {
            return;
        }

        navbarToggle.addEventListener(
            "click",
            function () {

                navbarMenu.classList.toggle("open");

                navbarToggle.classList.toggle("active");


                const menuOpen =
                    navbarMenu.classList.contains("open");


                navbarToggle.setAttribute(
                    "aria-expanded",
                    menuOpen
                );


                navbarToggle.setAttribute(
                    "aria-label",
                    menuOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );

            }
        );


        const navbarLinks =
            navbarMenu.querySelectorAll("a");


        navbarLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navbarMenu.classList.remove(
                        "open"
                    );

                    navbarToggle.classList.remove(
                        "active"
                    );

                    navbarToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    navbarToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }
            );

        });

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !navbarMenu.contains(
                        event.target
                    ) &&
                    !navbarToggle.contains(
                        event.target
                    )
                ) {

                    navbarMenu.classList.remove(
                        "open"
                    );

                    navbarToggle.classList.remove(
                        "active"
                    );

                    navbarToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    navbarToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }

            }
        );

        const servicesToggle =
            document.getElementById("servicesDropdownToggle");

        const servicesDropdown =
            document.getElementById("servicesDropdown");

        if (servicesToggle && servicesDropdown) {

            
const servicesToggle =
    document.getElementById("servicesDropdownToggle");

const servicesDropdown =
    document.getElementById("servicesDropdown");

const servicesNav =
    document.querySelector(".nav-dropdown");

if (servicesToggle && servicesDropdown && servicesNav) {

    servicesToggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const isOpen =
            servicesDropdown.classList.toggle("open");

        servicesToggle.classList.toggle("active", isOpen);

        servicesToggle.setAttribute(
            "aria-expanded",
            isOpen
        );
    });

   
    document.addEventListener("click", function (event) {
        if (!servicesNav.contains(event.target)) {
            servicesDropdown.classList.remove("open");
            servicesToggle.classList.remove("active");
            servicesToggle.setAttribute("aria-expanded", "false");
        }
    });
}
            document.addEventListener("click", function (event) {

                if (
                    !servicesDropdown.contains(event.target) &&
                    !servicesToggle.contains(event.target)
                ) {
                    servicesDropdown.classList.remove("open");
                    servicesToggle.classList.remove("active");

                    servicesToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

        }


        let currentPage =
            window.location.pathname
            .split("/")
            .pop();


        if (
            currentPage === "" ||
            currentPage === "/"
        ) {

            currentPage = "index.html";

        }


        const pageLinks =
            navbarMenu.querySelectorAll(
                "[data-page]"
            );


        pageLinks.forEach(function (link) {

            const page =
                link.getAttribute("data-page");


            if (
                currentPage ===
                page + ".html"
            ) {

                link.classList.add("active");

            }

        });

    }

});