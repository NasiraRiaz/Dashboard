/* ================= JQUERY ================= */

$(document).ready(function () {


    /* ================= BOOTSTRAP MODALS ================= */

    const usersModal =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById("usersModal")
        );


    const ordersModal =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById("ordersModal")
        );


    const reportsModal =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById("reportsModal")
        );


    const settingsModal =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById("settingsModal")
        );



    /* ================= SIDEBAR TOGGLE ================= */

    $("#menuButton").click(function () {

        if ($(window).width() <= 768) {

            $(".sidebar").toggleClass("show-sidebar");

        } else {

            $(".sidebar").toggleClass("hide-sidebar");

            $(".main-content").toggleClass("full-width");

        }

    });



    /* ================= ACTIVE MENU ================= */

    $(".sidebar-menu a").click(function () {

        $(".sidebar-menu a").removeClass("active");

        $(this).addClass("active");

    });



    /* ================= DASHBOARD ================= */

    $("#dashboardLink").click(function (event) {

        event.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

    });



    /* ================= ANALYTICS ================= */

    $("#analyticsLink").click(function (event) {

        event.preventDefault();

        $("html, body").animate({

            scrollTop:
                $("#analyticsSection").offset().top - 20

        }, 500);

    });



    /* ================= USERS ================= */

    $("#usersLink").click(function (event) {

        event.preventDefault();

        usersModal.show();

    });



    /* ================= ORDERS ================= */

    $("#ordersLink").click(function (event) {

        event.preventDefault();

        ordersModal.show();

    });



    /* ================= REPORTS ================= */

    $("#reportsLink").click(function (event) {

        event.preventDefault();

        reportsModal.show();

    });



    /* ================= SETTINGS ================= */

    $("#settingsLink").click(function (event) {

        event.preventDefault();

        settingsModal.show();

    });



    /* ================= VIEW ALL ================= */

    $("#viewAll").click(function () {

        $(".extra-activity").slideToggle(400);


        if ($(this).text().trim() === "View All") {

            $(this).text("Show Less");

        } else {

            $(this).text("View All");

        }

    });



    /* ================= DOWNLOAD REPORT ================= */

    $("#downloadReport").click(function () {

        const report =

            "ADMIN ANALYTICS REPORT\n" +
            "=======================\n\n" +

            "Total Users: 1,250\n" +

            "Total Orders: 856\n" +

            "Total Revenue: $24,500\n" +

            "Growth Rate: 18.5%\n\n" +

            "MONTHLY SALES\n" +
            "-------------\n" +

            "January: 120\n" +
            "February: 190\n" +
            "March: 150\n" +
            "April: 220\n" +
            "May: 180\n" +
            "June: 250\n";


        const file = new Blob(

            [report],

            {
                type: "text/plain"
            }

        );


        const link = document.createElement("a");


        link.href =
            URL.createObjectURL(file);


        link.download =
            "dashboard-report.txt";


        link.click();


        URL.revokeObjectURL(link.href);

    });



    /* ================= NOTIFICATIONS ================= */

    $("#notificationIcon").click(function () {

        const notificationToast =
            bootstrap.Toast.getOrCreateInstance(
                document.getElementById("notificationToast")
            );


        notificationToast.show();

    });



    /* ================= ADMIN PROFILE ================= */

    $("#adminProfile").click(function () {

        $("#profileMenu").slideToggle(200);

    });



    /* ================= PROFILE OPTION ================= */

    $("#profileOption").click(function () {

        $("#profileMenu").slideUp(200);

        alert("Admin Profile\n\nRole: Administrator");

    });



    /* ================= LOGOUT OPTION ================= */

    $("#logoutOption").click(function () {

        $("#profileMenu").slideUp(200);

        alert("Logout option selected.");

    });



    /* ================= SALES BAR CHART ================= */

    const salesCanvas =
        document.getElementById("salesChart");


    new Chart(salesCanvas, {

        type: "bar",


        data: {

            labels: [

                "January",
                "February",
                "March",
                "April",
                "May",
                "June"

            ],


            datasets: [{

                label: "Sales",


                data: [

                    120,
                    190,
                    150,
                    220,
                    180,
                    250

                ],


                backgroundColor: "#3b82f6",


                borderRadius: 5

            }]

        },


        options: {

            responsive: true,


            maintainAspectRatio: false,


            plugins: {

                legend: {

                    display: false

                }

            },


            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });



    /* ================= DEVICE DOUGHNUT CHART ================= */

    const deviceCanvas =
        document.getElementById("deviceChart");


    new Chart(deviceCanvas, {

        type: "doughnut",


        data: {

            labels: [

                "Desktop",
                "Mobile",
                "Tablet"

            ],


            datasets: [{

                data: [

                    45,
                    40,
                    15

                ],


                backgroundColor: [

                    "#3b82f6",
                    "#f97316",
                    "#22c55e"

                ],


                borderWidth: 2

            }]

        },


        options: {

            responsive: true,


            maintainAspectRatio: false,


            cutout: "65%",


            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });



    /* ================= WEBSITE VISITORS LINE CHART ================= */

    const visitorCanvas =
        document.getElementById("visitorChart");


    new Chart(visitorCanvas, {

        type: "line",


        data: {

            labels: [

                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"

            ],


            datasets: [{

                label: "Visitors",


                data: [

                    120,
                    180,
                    150,
                    220,
                    200,
                    260,
                    300

                ],


                borderColor: "#3b82f6",


                backgroundColor:
                    "rgba(59, 130, 246, 0.10)",


                fill: true,


                tension: 0.4,


                borderWidth: 2,


                pointRadius: 4

            }]

        },


        options: {

            responsive: true,


            maintainAspectRatio: false,


            plugins: {

                legend: {

                    display: false

                }

            },


            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });


});