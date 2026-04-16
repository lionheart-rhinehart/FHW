(function () {
  var css = '\
    .footer { background: #204622; color: #b8d4bc; padding: 80px 20px 50px; }\
    .footer-content { max-width: 1200px; margin: 0 auto; }\
    .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 60px; padding-bottom: 50px; border-bottom: 1px solid rgba(255,255,255,0.1); }\
    .footer-brand { margin-bottom: 25px; }\
    .footer-brand img { max-width: 150px; height: auto; }\
    .footer-description { font-size: 15px; line-height: 1.9; color: #b8d4bc; }\
    .footer-column h4 { font-family: "Montserrat", sans-serif; font-size: 15px; font-weight: 700; color: #ffffff; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 1px; }\
    .footer-links { list-style: none; margin: 0; padding: 0; }\
    .footer-links li { margin-bottom: 14px; }\
    .footer-link { color: #b8d4bc; text-decoration: none; font-size: 15px; transition: all 0.3s ease; }\
    .footer-link:hover { color: #91bb99; padding-left: 5px; }\
    .footer-bottom { text-align: center; padding-top: 35px; }\
    .footer-copyright { font-size: 14px; color: #7a9c7e; }\
    @media (max-width: 992px) { .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; } }\
    @media (max-width: 768px) { .footer-top { grid-template-columns: 1fr; } }\
    @media (min-width: 1921px) { .footer-content { max-width: 1600px; } .footer-description { font-size: 17px; } .footer-link { font-size: 17px; } .footer-column h4 { font-size: 17px; } .footer-brand img { max-width: 180px; } .footer-top { gap: 70px; } }\
    @media (min-width: 2561px) { .footer-content { max-width: 2000px; } .footer { padding: 100px 20px 60px; } .footer-description { font-size: 19px; } .footer-link { font-size: 19px; } .footer-column h4 { font-size: 19px; } .footer-brand img { max-width: 200px; } .footer-top { gap: 80px; } .footer-copyright { font-size: 17px; } }\
  ';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var html = '\
    <footer class="footer">\
      <div class="footer-content">\
        <div class="footer-top">\
          <div>\
            <div class="footer-brand">\
              <a href="index.html"><img src="fhw creative/fhw logo.png" alt="Functional Health Warrior"></a>\
            </div>\
            <p class="footer-description">\
              Comprehensive testing that finds what everyone else missed. Finally feel like yourself again with The Functional Warrior Method\u2122.\
            </p>\
            <a href="https://apply.functionalhealthwarriors.org/350-page" style="display:inline-block;margin-top:25px;padding:14px 40px;background:linear-gradient(135deg,#91bb99,#a8cbb0);color:#204622;text-decoration:none;font-family:Montserrat,sans-serif;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:2px;border-radius:4px;transition:all 0.3s ease;">Sign Up</a>\
          </div>\
          <div class="footer-column">\
            <h4>Pages</h4>\
            <ul class="footer-links">\
              <li><a href="index.html" class="footer-link">Home</a></li>\
              <li><a href="about.html" class="footer-link">About Us</a></li>\
              <li><a href="inquiry.html" class="footer-link">Inquiry</a></li>\
              <li><a href="clients.html" class="footer-link">Client\'s Area</a></li>\
            </ul>\
          </div>\
          <div class="footer-column">\
            <h4>Actions</h4>\
            <ul class="footer-links">\
              <li><a href="https://apply.functionalhealthwarriors.org/350-page" class="footer-link">Sign Up</a></li>\
              <li><a href="inquiry.html" class="footer-link">Learn More</a></li>\
            </ul>\
          </div>\
          <div class="footer-column">\
            <h4>Client Portal</h4>\
            <ul class="footer-links">\
              <li><a href="https://apply.functionalhealthwarriors.org/re-order-medicine" class="footer-link">Medication Re-Order</a></li>\
              <li><a href="#" class="footer-link">JANE Account</a></li>\
            </ul>\
          </div>\
        </div>\
        <div class="footer-bottom">\
          <div class="footer-copyright">\
            \u00A9 2024 Functional Health Warrior. All rights reserved. | Privacy Policy | Terms of Service\
          </div>\
        </div>\
      </div>\
    </footer>\
  ';

  var placeholder = document.getElementById('site-footer');
  if (placeholder) {
    placeholder.innerHTML = html;
  }
})();
