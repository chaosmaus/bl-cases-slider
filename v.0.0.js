  //elements
  //item: people-quote_cms-img
  const itemsList = $(".cms-slide_content-wrapper");
  let sliderBlocks = $(".cms-slide");
  let singleSlide = $(".cms-slide");
  const cardsArray = [];
  // - CMS -
  // save jQuery object [OK]
  // extract all images url [OK]

  // - SLIDER -
  // for CMS item length create equal number of slides [OK]
  // add img src

  // CMS
  itemsList.each((index, element) => {
    if (sliderBlocks.length <= itemsList.length) {
      if (sliderBlocks.length < itemsList.length) {
        singleSlide.clone().appendTo(".multi-image_cms-slider_mask");
        //update slide counter
        sliderBlocks = $(".cms-slide");
      }
      cardsArray.push(element);
    }

    if (sliderBlocks.length === itemsList.length) {
      $(".cms-slide").each((i, el) => {
        if (cardsArray[i]) {
          el.append(cardsArray[i]);
        }
      });
    }
  });
