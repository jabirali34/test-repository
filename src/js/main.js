

$('.clients-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  infinite: true
});

$('.testimonial-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="icon-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="icon-chevron-right"></i></button>',
  infinite: true
});


  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-cols");

    faqItems.forEach(item => {
      const title = item.querySelector(".faq-title");
      const content = item.querySelector(".faq-content");

      // Start with all content hidden
      content.style.display = "none";

      title.addEventListener("click", function () {
        const isOpen = item.classList.contains("open");

        // Close all
        document.querySelectorAll(".faq-cols").forEach(col => {
          col.classList.remove("open");
          col.querySelector(".faq-content").style.display = "none";
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add("open");
          content.style.display = "block";
        }
      });
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".feature-accordion .accordion-item-wrapper");

    accordionItems.forEach(item => {
      const title = item.querySelector(".accordion-title");
      const content = item.querySelector(".accordion-content");

      // Start with all content hidden
      content.style.display = "none";

      title.addEventListener("click", function () {
        const isOpen = item.classList.contains("active");

        // Close all
        accordionItems.forEach(acc => {
          acc.classList.remove("active");
          acc.querySelector(".accordion-content").style.display = "none";
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add("active");
          content.style.display = "block";
        }
      });
    });
  });


