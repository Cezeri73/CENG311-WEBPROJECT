$(document).ready(function () {
  // Initialize Slick carousel
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $(document).ready(function () {
    // Slick Carousel'inizi başlatın
    $(".slider").slick({
      infinite: true, // Sonsuz döngü
      slidesToShow: 1, // Aynı anda gösterilecek slayt sayısı
      slidesToScroll: 1, // Bir kaydırmada kaydırılan slayt sayısı
      arrows: true, // İleri ve geri oklar
      dots: true, // Sayfa göstergeleri
      prevArrow: '<button type="button" class="slick-prev">←</button>', // Sol ok
      nextArrow: '<button type="button" class="slick-next">→</button>', // Sağ ok
    });

    // Kenarlık rengini rastgele değiştiren fonksiyon
    function changeBordersToRandomColor() {
      $(".slide img").css("border-color", getRandomColor()); // Her resmin kenarlığını rastgele bir renkle değiştirdik
    }

    // "Next" ve "Previous" butonlarına tıklanınca çalışacak olay dinleyicileri
    $(".slick-next").on("click", changeBordersToRandomColor);
    $(".slick-prev").on("click", changeBordersToRandomColor);
  });
});




$(document).ready(function () {
  // Form doğrulama için JQuery Validation kullanılıyor
  $("#iletisim").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
    },
    messages: {
      name: {
        required: "Lütfen adınızı girin",
        minlength: "Ad en az 2 karakter olmalı",
      },
      email: {
        required: "Lütfen e-posta adresinizi girin",
        email: "Geçerli bir e-posta adresi girin",
      },
      phone: {
        required: "Lütfen telefon numarası girin",
        minlength: "Telefon numarası en az 10 haneli olmalı",
        maxlength: "Telefon numarası en fazla 10 haneli olmalı",
        number: "Geçerli bir telefon numarası girin",
      },
    },
    
    
  });
  

  // Tarih seçici için
  $("#datepicker").datepicker(); // Datepicker widget'ını etkinleştir
});

$(document).ready(function name(params) {
  $("#iletisim").on("submit", function (event) {
    event.preventDefault(); // Formun gönderilmesini engelle
    alert("Form başarıyla gönderildi!"); // Başarı mesajı
  });
  
})


$(document).ready(function name() {
  function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");
    var timeString = hours + ":" + minutes + ":" + seconds;
    $("#clock").text(timeString); // Saati güncelle
  }

  // Sayfa yüklendiğinde saati güncellemeye başla
  $(function () {
    updateClock(); // İlk değer
    setInterval(updateClock, 1000); // Her saniye güncelle
  });

 

  // Sıfırla ilgili özel doğrulama metodu
 
});

$(document).ready(
  $(function () {
    $("#datepicker").datepicker(); // Datepicker widget'ını etkinleştir
  })
);

$(function () {
  var apiKey = "7bddc9afb5b8395d57c309dce08c17fa"; // OpenWeatherMap API anahtarınızı buraya ekleyin
  var city = "Ankara";
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";

  $.getJSON(apiUrl, function (data) {
    var weather = data.weather[0].description; // Hava durumu açıklaması
    var temperature = data.main.temp; // Sıcaklık
    var cityName = data.name; // Şehir adı

    var weatherHtml = "<p>Şehir: " + cityName + "</p>";
    weatherHtml += "<p>Sıcaklık: " + temperature + "°C</p>";
    weatherHtml += "<p>Hava: " + weather + "</p>";

    $("#weather-info").html(weatherHtml);
  }).fail(function () {
    $("#weather-info").html("<p>Hava durumu bilgisi alınamadı.</p>");
  });
});

//döviz kuru Apiden alındı

$(document).ready($(function() {
 

  var apiKey = '3c66fd30f65742d8b48a1e5e8319027a'; 
  var apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=' + apiKey;

  $.getJSON(apiUrl, function(data) {
      var rates = data.rates; // Tüm döviz kurları
      var usdToTry = rates.TRY; // USD'den TRY'ye oran
      var usdToZAR = rates.ZAR; // USD'den Güney Afrika Randı'na oran

      var ratesHtml = '<p>1 USD = ' + usdToTry.toFixed(2) + ' TRY</p>';
      ratesHtml += '<p>1 USD = ' + usdToZAR.toFixed(2) + ' ZAR (Güney Afrika Randı)</p>';

      $('#currency-rates').html(ratesHtml);
  }).fail(function() {
      $('#currency-rates').html('<p>Döviz kurları alınamadı.</p>');
  });


}));


//donation sayfasındaki negatif girişleri ve sayı olamyan girişleri önlemek için .

$(document).ready(function() {
  // Bağış miktarı için negatif kontrolü ekleyelim
  $('input[type="text"]').on('input', function() {
      let value = $(this).val();

      // Sayıya dönüşebilen bir değer olup olmadığını kontrol et
      if (isNaN(value)) {
          alert("Lütfen sadece rakam giriniz.");
          $(this).val(""); // Geçersiz giriş ise temizle
      } else {
          let num = parseFloat(value);
          if (num < 0) {
              alert("Bağış miktarı negatif olamaz!");
              $(this).val(""); // Negatifse temizle
          }
      }
  });
});

