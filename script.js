$(document).ready(function() {
    $('.slider').slick({
      infinite: true, // Sonsuz döngü
      slidesToShow: 1, // Aynı anda gösterilecek slayt sayısı
      slidesToScroll: 1, // Bir kaydırmada kaydırılan slayt sayısı
      arrows: true, // İleri ve geri oklar
      dots: true, // Sayfa göstergeleri
      prevArrow: '<button type="button" class="slick-prev">←</button>', // Sol ok
      nextArrow: '<button type="button" class="slick-next">→</button>', // Sağ ok
    });
  });



  $(document).ready(function name() {
    
    $("#iletisim").validate({
        rules:{
            name:{
                minlength: 2
            },
            email:{
                email:true
            },
            phone:{
                number:true,
                minlength: 10,
                maxlength: 10,
                required: true,
                noLeadingZero: true
            },
        },
        messages:{
            name:{
            required: "Please enter your name",
            minlength: "Name at least 2 characters"
            },
            email:"please enter email",
            phone:{
                required: "Please enter a phone number",
                minlength: "Phone number must be at least 10 digits",
                maxlength: "Phone number must be at most 10 digits",
                number: "Please enter a valid phone number"
            },
        },
    
        submitHandler: function(form) {
          form.submit();
        }
       });
    
    
       $.validator.addMethod("noLeadingZero", function(value, element) {
        return this.optional(element) || /^[1-9][0-9]*$/.test(value);
       });
  });


$(document).ready(

  $(function() {
    $("#datepicker").datepicker(); // Datepicker widget'ını etkinleştir
}
    
  ));


  $(function() {
    var apiKey = '7bddc9afb5b8395d57c309dce08c17fa'; // OpenWeatherMap API anahtarınızı buraya ekleyin
    var city = 'Ankara';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    $.getJSON(apiUrl, function(data) {
        var weather = data.weather[0].description; // Hava durumu açıklaması
        var temperature = data.main.temp; // Sıcaklık
        var cityName = data.name; // Şehir adı

        var weatherHtml = '<p>Şehir: ' + cityName + '</p>';
        weatherHtml += '<p>Sıcaklık: ' + temperature + '°C</p>';
        weatherHtml += '<p>Hava: ' + weather + '</p>';

        $('#weather-info').html(weatherHtml);
    }).fail(function() {
        $('#weather-info').html('<p>Hava durumu bilgisi alınamadı.</p>');
    });
});