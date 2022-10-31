$(document).ready(() => {
  const $menuButton = $("#hamburger");
  const $navDropdown = $("#drop-down");
  const $overlay = $("#modal-overlay");
  const $blackButton = $(".black-btn");
  const $monthly = $("#monthly");
  const $yearly = $("#yearly");
  const $monthlyYearly = $("#monthly-yearly");
  const $bgBox = $(".bg-box");

  //MOBILE TOP-NAV ICON
  $menuButton.on("click", () => {
    if (
      $menuButton.attr("src") ===
      "../../photosnap-multi-page-website/assets/shared/mobile/menu.svg"
    ) {
      $navDropdown.show();
      $overlay.show();
      $menuButton.attr(
        "src",
        "../../photosnap-multi-page-website/assets/shared/mobile/close.svg"
      );
      console.log("true");
    } else {
      $navDropdown.hide();
      $overlay.hide();
      console.log("false");
      $menuButton.attr(
        "src",
        "../../photosnap-multi-page-website/assets/shared/mobile/menu.svg"
      );
    }
  });

  //PRCING PLAN BUTTON
  $(".switch input").on("click", function () {
    if ($yearly.css("color") == "rgb(128, 128, 128)") {
      $yearly.css("color", "black");
      $monthly.css("color", "grey");
      console.log($("#per-month-year").text())
      $(".per-month-year").text("per year");
      $("#basic").children("#amount").children("h1").text("$190.00");
      $("#pro").children("#amount").children("h1").text("$390.00");
      $("#bs").children("#amount").children("h1").text("$990.00");
    } else {
      $yearly.css("color", "grey");
      $monthly.css("color", "black");
      console.log($("#per-month-year").text())
      $(".per-month-year").text("per month");
      $("#basic").children("#amount").children("h1").text("$19.00");
      $("#pro").children("#amount").children("h1").text("$39.00");
      $("#bs").children("#amount").children("h1").text("$99.00");
    }
    $(this).parent().toggleClass("active");
  });



  
  $(".bg-box")
    .on("mouseenter", (event) => {
      $(event.currentTarget).children(".rgb-border").css("display", "block")
    })
    .on("mouseleave", (event) => {
      $(event.currentTarget).children(".rgb-border").css("display", "none")
    });
})
