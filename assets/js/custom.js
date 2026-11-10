(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin: 25,
	    nav: false,
	    dots: true,
	    autoplay: true,
	    slideTransition: 'linear',
	    autoplayTimeout: 3000,
	    autoplaySpeed: 3000,
	    smartSpeed: 3000,
	    autoplayHoverPause: true,
	    responsive: {
	        0: {
	            items: 1
	        },
	        550: {
	            items: 2
	        },
	        768: {
	            items: 3
	        },
	        1024: {
	            items: 4
	        },
	        1280: {
	            items: 5
	        }
	    }
	});


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").stop(true, false).slideDown("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").stop(true, false).slideUp("medium");
	    }
	 );


	$( "#tabs" ).tabs({
	    show: { effect: "fadeIn", duration: 300 },
	    hide: { effect: "fadeOut", duration: 150 }
	});


	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    var pad = function(n) { return n < 10 ? '0' + n : n; };
	    return {
	      'total': t,
	      'days': pad(days),
	      'hours': pad(hours),
	      'minutes': pad(minutes),
	      'seconds': pad(seconds)
	    };
	  }
	  
	  function initializeClock(endtime){
	    var daysSpan = document.querySelector(".days > .value");
	    var hoursSpan = document.querySelector(".hours > .value");
	    var minutesSpan = document.querySelector(".minutes > .value");
	    var secondsSpan = document.querySelector(".seconds > .value");
	    if (!daysSpan) return;

	    function updateClock() {
	      var t = getTimeRemaining(endtime);
	      daysSpan.innerText = t.days;
	      hoursSpan.innerText = t.hours;
	      minutesSpan.innerText = t.minutes;
	      secondsSpan.innerText = t.seconds;
	      if (t.total <= 0) {
	        clearInterval(timeinterval);
	      }
	    }

	    updateClock();
	    var timeinterval = setInterval(updateClock, 1000);
	  }
	  initializeClock(((new Date()).getFullYear()+1) + "/1/1");
	})()

	// Interactive Services Modal
	var serviceDetails = {
	  web: {
	    badge: 'Digital Development',
	    title: 'Web Development',
	    icon: 'fa-code',
	    desc: 'We design and build fast, mobile-responsive websites, portfolio pages, institutional portals, and dynamic web applications tailored for your business or startup.',
	    features: [
	      '100% Mobile Responsive Design',
	      'Modern UI/UX & Smooth Animations',
	      'SEO-Friendly Clean Structure',
	      'Custom Contact & Admin Portals',
	      'Fast Loading & Cross-Browser Ready',
	      'Domain, Hosting & Maintenance Support'
	    ],
	    tools: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL']
	  },
	  courses: {
	    badge: 'IT & Computer Training',
	    title: 'Course Studies',
	    icon: 'fa-graduation-cap',
	    desc: 'Structured, career-focused computer education covering both Coding and Non-Coding subjects with 1-on-1 lab practice, real project assignments, and verified diploma certification.',
	    features: [
	      'Coding: C, C++, Python, Java & Web Dev',
	      'Non-Coding: MS-Office, Tally GST & DTP',
	      '100% Practical Individual PC Lab',
	      'Flexible Batch Timings & Notes',
	      'ISO Certified DCA & PGDCA Diplomas',
	      'Interview & Job Placement Assistance'
	    ],
	    tools: ['MS Office', 'Tally Prime', 'C / C++', 'Python', 'Web Tech', 'DCA / PGDCA']
	  },
	  video: {
	    badge: 'Media Production',
	    title: 'Video Editing',
	    icon: 'fa-video-camera',
	    desc: 'Engaging video editing services for YouTube channels, Instagram reels, educational tutorials, event highlights, and promotional business commercials.',
	    features: [
	      'YouTube, Reels & Promo Editing',
	      'Color Correction & Cinematic Grading',
	      'Smooth Transitions & Motion Titles',
	      'Background Music & Audio Syncing',
	      'Subtitles, Intros & Logo Animation',
	      'Full HD / 4K Export Formats'
	    ],
	    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro']
	  },
	  photo: {
	    badge: 'Creative Design',
	    title: 'Photo Editing',
	    icon: 'fa-camera',
	    desc: 'High-precision photo editing, studio retouching, background replacement, festival posters, flex banners, and social media creative design.',
	    features: [
	      'High-End Portrait & Skin Retouching',
	      'Clean Background Removal & Replacement',
	      'Social Media Posters & Thumbnails',
	      'Flex Banners, Flyers & Visiting Cards',
	      'Old Photo Restoration & Colorizing',
	      'Print-Ready & Digital Formats'
	    ],
	    tools: ['Adobe Photoshop', 'Lightroom', 'CorelDRAW', 'Canva Pro']
	  }
	};

	function openServiceModal(key) {
	  var data = serviceDetails[key];
	  if (!data) return;

	  $('#serviceModalBadge').text(data.badge);
	  $('#serviceModalTitle').text(data.title);
	  $('#serviceModalIcon').html('<i class="fa ' + data.icon + '"></i>');
	  $('#serviceModalDesc').text(data.desc);

	  var featuresHtml = data.features.map(function(item) {
	    return '<li><i class="fa fa-check-circle"></i><span>' + item + '</span></li>';
	  }).join('');
	  $('#serviceModalFeatures').html(featuresHtml);

	  var toolsHtml = data.tools.map(function(tool) {
	    return '<span>' + tool + '</span>';
	  }).join('');
	  $('#serviceModalTools').html(toolsHtml);

	  $('#serviceModalBookBtn').data('selected-service', data.title);
	  $('#serviceModal').modal('show');
	}

	$('.service-card').on('click keydown', function(e) {
	  if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') {
	    return;
	  }
	  if (e.type === 'keydown') e.preventDefault();
	  var key = $(this).data('service');
	  openServiceModal(key);
	});

	$('#serviceModalBookBtn').on('click', function(e) {
	  e.preventDefault();
	  var serviceName = $(this).data('selected-service') || 'your services';
	  $('#serviceModal').modal('hide');
	  setTimeout(function() {
	    var target = $('.section[data-section="section6"]');
	    if (target.length) {
	      var headerHeight = $('.main-header').outerHeight() || 80;
	      $('html, body').animate({ scrollTop: target.offset().top - headerHeight + 2 }, 800);
	      $('#contact-message').val('Hello, I would like to enquire about ' + serviceName + '.').focus();
	    }
	  }, 250);
	});

	$('#contact-form').on('submit', function(e) {
	  e.preventDefault();
	  var name = $('#contact-name').val().trim();
	  var safeName = name ? ', ' + $('<div>').text(name).html() : '';
	  $('#contact-feedback')
	    .html('<i class="fa fa-check-circle"></i> Thank you' + safeName + '! Your message has been received. We will get back to you soon.')
	    .addClass('show');
	  this.reset();
	});

	// Hero Typing Skill Animation
	(function initTyping() {
	  var el = document.getElementById('typed-skill');
	  if (!el) return;
	  var words = [
	    'Web Development',
	    'C, C++ & Python',
	    'MS-Office & Tally GST',
	    'Photoshop & CorelDRAW',
	    'DCA & PGDCA Diploma'
	  ];
	  var wordIndex = 0;
	  var charIndex = words[0].length;
	  var isDeleting = true;

	  function tick() {
	    var currentWord = words[wordIndex];
	    if (isDeleting) {
	      charIndex--;
	      el.textContent = currentWord.substring(0, charIndex);
	    } else {
	      charIndex++;
	      el.textContent = currentWord.substring(0, charIndex);
	    }

	    var delay = isDeleting ? 45 : 85;
	    if (!isDeleting && charIndex === currentWord.length) {
	      isDeleting = true;
	      delay = 1800;
	    } else if (isDeleting && charIndex === 0) {
	      isDeleting = false;
	      wordIndex = (wordIndex + 1) % words.length;
	      delay = 350;
	    }
	    setTimeout(tick, delay);
	  }

	  setTimeout(tick, 1800);
	})();

	// Hero Stats Count-Up Animation
	(function initCounters() {
	  $('.stat-number').each(function() {
	    var $this = $(this);
	    var target = parseInt($this.data('count'), 10) || 0;
	    var suffix = $this.data('suffix') || '';
	    $({ countNum: 0 }).animate({ countNum: target }, {
	      duration: 1600,
	      easing: 'swing',
	      step: function() {
	        $this.text(Math.floor(this.countNum) + suffix);
	      },
	      complete: function() {
	        $this.text(target + suffix);
	      }
	    });
	  });
	})();

	// Scroll Reveal Animations
	(function initScrollReveal() {
	  var targets = document.querySelectorAll(
	    '.section-heading, #tabs, .service-card, .video-item, section.contact form, section.contact #map, .footer-main > div'
	  );
	  if (!targets.length) return;

	  targets.forEach(function(el, idx) {
	    el.classList.add('reveal-item');
	    if (el.classList.contains('service-card') || el.parentElement.classList.contains('footer-main')) {
	      el.style.transitionDelay = ((idx % 4) * 0.1) + 's';
	    }
	  });

	  if ('IntersectionObserver' in window) {
	    var observer = new IntersectionObserver(function(entries, obs) {
	      entries.forEach(function(entry) {
	        if (entry.isIntersecting) {
	          entry.target.classList.add('is-visible');
	          obs.unobserve(entry.target);
	        }
	      });
	    }, { threshold: 0.12 });

	    targets.forEach(function(el) { observer.observe(el); });
	  } else {
	    targets.forEach(function(el) { el.classList.add('is-visible'); });
	  }
	})();

	// Interactive Course Syllabus Modal
	var courseCatalog = {
	  'MS - OFFICE': {
	    duration: '2 Months',
	    level: 'Beginner to Pro',
	    syllabus: [
	      'MS Word Formatting & Mail Merge',
	      'MS Excel Formulas, VLOOKUP & Pivot Tables',
	      'MS PowerPoint Animated Presentations',
	      'MS Outlook & Official Documentation'
	    ]
	  },
	  'PHOTOSHOP': {
	    duration: '2 Months',
	    level: 'Creative Track',
	    syllabus: [
	      'Layers, Masking & Selection Tools',
	      'Portrait Retouching & Color Correction',
	      'Social Media Posters & Thumbnails',
	      'Background Removal & Banner Design'
	    ]
	  },
	  'TALLY PRIME + GST': {
	    duration: '2.5 Months',
	    level: 'Accounting Track',
	    syllabus: [
	      'Company Creation & Ledger Management',
	      'Day-to-Day Voucher & Inventory Entries',
	      'GST Billing, E-Way Bill & Tax Returns',
	      'Payroll, TDS & Balance Sheet Reports'
	    ]
	  },
	  'BASIC OF COMPUTER': {
	    duration: '1.5 Months',
	    level: 'Foundation',
	    syllabus: [
	      'Computer Hardware & OS Fundamentals',
	      'File Management & System Settings',
	      'Internet Browsing, Email & Online Forms',
	      'English & Regional Typing Practice'
	    ]
	  },
	  'C & C++ PROGRAMMING': {
	    duration: '3 Months',
	    level: 'Core Coding',
	    syllabus: [
	      'Variables, Loops, Functions & Arrays',
	      'Pointers, Structures & File Handling',
	      'Object-Oriented Programming (Classes)',
	      'Inheritance, Polymorphism & Logic Building'
	    ]
	  },
	  'WEB DEVELOPMENT': {
	    duration: '3 Months',
	    level: 'Frontend Coding',
	    syllabus: [
	      'Semantic HTML5 Page Architecture',
	      'Modern CSS3, Flexbox & Grid Layouts',
	      'Bootstrap Responsive Frameworks',
	      'Interactive JavaScript & DOM Projects'
	    ]
	  },
	  'PYTHON PROGRAMMING': {
	    duration: '3 Months',
	    level: 'Modern Coding',
	    syllabus: [
	      'Python Syntax, Loops & Functions',
	      'Lists, Tuples, Dictionaries & Sets',
	      'File I/O, Modules & Error Handling',
	      'OOP & Real Automation Mini-Projects'
	    ]
	  },
	  'JAVA PROGRAMMING': {
	    duration: '3 Months',
	    level: 'Enterprise Coding',
	    syllabus: [
	      'Java Syntax, JVM & Data Types',
	      'Object-Oriented Principles & Interfaces',
	      'Exception Handling & Collections Framework',
	      'GUI / Console Application Projects'
	    ]
	  },
	  'DCA (DIPLOMA)': {
	    duration: '6 Months',
	    level: 'Certified Diploma',
	    syllabus: [
	      'Computer Fundamentals & Windows OS',
	      'Complete MS-Office (Word, Excel, PPT)',
	      'Internet Applications & Digital Security',
	      'DTP Basics & Practical Project Submission'
	    ]
	  },
	  'PGDCA': {
	    duration: '1 Year',
	    level: 'Post Graduate Diploma',
	    syllabus: [
	      'C & C++ Programming Foundations',
	      'Database Management Systems (SQL)',
	      'Web Design (HTML, CSS, JavaScript)',
	      'Software Engineering & Major Live Project'
	    ]
	  },
	  'PHP & MYSQL': {
	    duration: '3 Months',
	    level: 'Backend Coding',
	    syllabus: [
	      'PHP Server Scripting & Form Handling',
	      'MySQL Database Design & SQL Queries',
	      'User Login, Sessions & Authentication',
	      'Complete Dynamic CRUD Web Application'
	    ]
	  },
	  'CORELDRAW & DTP': {
	    duration: '2 Months',
	    level: 'Print & Design',
	    syllabus: [
	      'Vector Logo & Illustration Design',
	      'Visiting Cards, Brochures & Wedding Cards',
	      'Flex Banners & Commercial Print Layouts',
	      'PageMaker Typography & Pre-Press Export'
	    ]
	  }
	};

	$(document).on('click', '.course-card', function(e) {
	  if ($(e.target).closest('a').length) {
	    return;
	  }
	  var $card = $(this);
	  var title = $card.find('.course-title-bar h4').text().trim();
	  var tag = $card.find('.course-tag').text().trim() || 'Computer Course';
	  var desc = $card.find('.down-content p').text().trim();
	  var info = courseCatalog[title] || {
	    duration: '2–3 Months',
	    level: 'All Levels',
	    syllabus: ['Practical Lab Training', 'Live Guided Exercises', 'Project Assignment', 'Verified Certification']
	  };

	  $('#courseModalBadge').text(tag + ' Track');
	  $('#courseModalTitle').text(title);
	  $('#courseModalDesc').text(desc);
	  $('#courseModalMeta').html(
	    '<span><i class="fa fa-clock-o"></i> Duration: ' + info.duration + '</span>' +
	    '<span><i class="fa fa-signal"></i> Level: ' + info.level + '</span>' +
	    '<span><i class="fa fa-laptop"></i> 100% Practical Lab</span>'
	  );

	  var listHtml = info.syllabus.map(function(topic) {
	    return '<li><i class="fa fa-check-circle"></i><span>' + topic + '</span></li>';
	  }).join('');
	  $('#courseModalSyllabus').html(listHtml);

	  $('#courseModalApplyBtn').data('selected-course', title);
	  $('#courseModal').modal('show');
	});

	$('#courseModalApplyBtn').on('click', function(e) {
	  e.preventDefault();
	  var courseName = $(this).data('selected-course') || 'a computer course';
	  $('#courseModal').modal('hide');
	  setTimeout(function() {
	    var target = $('.section[data-section="section6"]');
	    if (target.length) {
	      var headerHeight = $('.main-header').outerHeight() || 80;
	      $('html, body').animate({ scrollTop: target.offset().top - headerHeight + 2 }, 800);
	      $('#contact-message').val('Hello, I would like to apply for admission in ' + courseName + '.').focus();
	    }
	  }, 250);
	});

})(jQuery);