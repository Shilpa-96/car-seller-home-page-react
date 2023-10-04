const data = [
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043209_rav-4-rear.jpg&w=700&q=90&c=1",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043158_rav4-front.jpg&w=700&q=90&c=1",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnD3-1CjiNUpkKAnCTgbC35AXdTn4brOcIsGaKmCWy1MyOZONS5bWqcki5kWCAU5bv-w&usqp=CAU",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR0Z7GEFYc4_B-2BSGI54COssYQvpyqmRDkObyn1WhsoaciRt8Y4PiGWdut6xTPvurlc&usqp=CAU",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-l02IUJWLY-cvzEc2BXwrgputb6sxLtrtcYoOh_eYAeToEzonIj0sMJE2_4B9fvTXtA&usqp=CAU",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ro7cxzlDcVGGFybo0Wzw8NfMC6yVYbaIRUkbnbZOPiDp7ZTNhjVCn3odiV4KzjryTG0&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXHBEnLfmQ8rsLSZ5RYOmG74pGtOxlwId9RaSDyFQxGcWXHpHTyIF0nAERKI_YdSrfck&usqp=CAU",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmob9BTErH6iO5KK2hc2Av8XjPZF8xvX9rnyffjMGVA-4EadkVG5tVoyVSE-Ogg6z-J4U&usqp=CAU",
    imageo3:
      "https://www.autodeal.com.ph/custom/car-model-photo/original/2022-toyota-rav4-hev-philippines-620cce0370b1b.jpg",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043209_rav-4-rear.jpg&w=700&q=90&c=1",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043158_rav4-front.jpg&w=700&q=90&c=1",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnD3-1CjiNUpkKAnCTgbC35AXdTn4brOcIsGaKmCWy1MyOZONS5bWqcki5kWCAU5bv-w&usqp=CAU",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043209_rav-4-rear.jpg&w=700&q=90&c=1",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043158_rav4-front.jpg&w=700&q=90&c=1",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnD3-1CjiNUpkKAnCTgbC35AXdTn4brOcIsGaKmCWy1MyOZONS5bWqcki5kWCAU5bv-w&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043209_rav-4-rear.jpg&w=700&q=90&c=1",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043158_rav4-front.jpg&w=700&q=90&c=1",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnD3-1CjiNUpkKAnCTgbC35AXdTn4brOcIsGaKmCWy1MyOZONS5bWqcki5kWCAU5bv-w&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Toyota RAV4",
    brand: "Toyota",
    year: 2021,
    review_people: 4,
    type: "Hybrid",
    mileage: 6.1,
    mileage_type: "Automatic",
    emi: 440,
    imgae01:
      "https://cdni.autocarindia.com/ExtraImages/20200603110713_BMW-4-Series-M440i-Coupe-front.jpg",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtuYLURLRKt2etrR_UFaN2fRGJ6SNIVLITAEwT0hmj7TiNBT4asapFqDVXlxk_siZqVY&usqp=CAU",
    imageo3:
      "https://www.cnet.com/a/img/resize/305524d74e3a19231fce44660eace7de25112343/hub/2020/06/01/3416f055-ebbd-4543-beed-3cf87a177cea/2021-bmw-4-series-052.jpg?auto=webp&width=1200",
  },
  {
    model_name: "BMW 3 Series",
    brand: "BMW",
    year: 2019,
    review_people: 4,
    type: "Gasoline",
    mileage: 8.2,
    mileage_type: "Automatic",
    emi: 350,
    imgae01:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043209_rav-4-rear.jpg&w=700&q=90&c=1",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200810043158_rav4-front.jpg&w=700&q=90&c=1",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnD3-1CjiNUpkKAnCTgbC35AXdTn4brOcIsGaKmCWy1MyOZONS5bWqcki5kWCAU5bv-w&usqp=CAU",
  },
  {
    model_name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 5.3,
    mileage_type: "Automatic",
    emi: 400,
    imgae01:
      "https://www.v3cars.com/media/model-imgs/1625717910-VW-T-Cross.jpg",
    image02:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Volkswagen-T-Cross/6087/front-left-side-47.jpg",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd6z5PfLkdFUsjzOKum1bsh7J7LuTTbetXOnlkGGs32thWU8uw28vbRMhdDBYfF05ByI&usqp=CAU",
  },
  {
    model_name: "Cadillac Escalade",
    brand: "Cadillac",
    year: 2020,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.7,
    mileage_type: "Automatic",
    emi: 620,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR0Z7GEFYc4_B-2BSGI54COssYQvpyqmRDkObyn1WhsoaciRt8Y4PiGWdut6xTPvurlc&usqp=CAU",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-l02IUJWLY-cvzEc2BXwrgputb6sxLtrtcYoOh_eYAeToEzonIj0sMJE2_4B9fvTXtA&usqp=CAU",
    imageo3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ro7cxzlDcVGGFybo0Wzw8NfMC6yVYbaIRUkbnbZOPiDp7ZTNhjVCn3odiV4KzjryTG0&usqp=CAU",
  },
  {
    model_name: "BMW 4 Series GTI",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.6,
    mileage_type: "Automatic",
    emi: 530,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEr2ygYYSuUwonWOEp3U5AO6rdm0tT7C1mx7nstz7gjE1hcnSLunTvc3jNxHrjCtuZ8&usqp=CAU",
    image02:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101950_p90390032.jpg&w=730&h=484&q=75&c=1",
    imageo3:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200603101951_p90390036.jpg&w=373&h=245&q=75&c=1",
  },
  {
    model_name: "BMW 4 Series",
    brand: "BMW",
    year: 2021,
    review_people: 4,
    type: "Gasoline",
    mileage: 7.2,
    mileage_type: "Automatic",
    emi: 490,
    imgae01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXHBEnLfmQ8rsLSZ5RYOmG74pGtOxlwId9RaSDyFQxGcWXHpHTyIF0nAERKI_YdSrfck&usqp=CAU",
    image02:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmob9BTErH6iO5KK2hc2Av8XjPZF8xvX9rnyffjMGVA-4EadkVG5tVoyVSE-Ogg6z-J4U&usqp=CAU",
    imageo3:
      "https://www.autodeal.com.ph/custom/car-model-photo/original/2022-toyota-rav4-hev-philippines-620cce0370b1b.jpg",
  },
];

export default data;
