$(function () {

    var context = $(".widget");
    var currentStation = $(".info");
    var controlsTemplate = '<li class="controls"><div class="minus"><a href="#"><img src="https://raw.githubusercontent.com/annarozmus/assets/master/radio-widget-images/minus-s.png" srcset="https://raw.githubusercontent.com/annarozmus/assets/master/radio-widget-images/minus.png 2x"></a></div><div class="image"><img src="https://raw.githubusercontent.com/annarozmus/assets/master/radio-widget-images/image-circle-s.png" srcset="https://raw.githubusercontent.com/annarozmus/assets/master/radio-widget-images/image-circle.png 2x"></div><div class="plus"><a href="#"><img src="https://raw.githubusercontent.com/annarozmus/assets/master/radio-widget-images/plus-s.png" srcset="https://raw.githubusercontent.com/annarozmus/assets/master/radio-widget-images/plus.png 2x"></a></div></li>';

    $(".station > a").on("click", function () {

        var currentStationName = $(".station-name", this).text();
        var previousLi = $(this).parent().prev();
        $(".current-station").text(currentStationName);

        if (previousLi && previousLi.hasClass("controls")) {
            currentStation.css("visibility", "hidden");
            $(".controls", context).remove();
        } else {
            $(".controls", context).remove();
            $(this).parent().before(controlsTemplate);
            currentStation.css("visibility", "visible");
        }
        return false;
    });

    $(".controls").find("a").on ("click", function () {
        return false;
    })
});
