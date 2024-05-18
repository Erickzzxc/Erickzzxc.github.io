document.querySelector('.nav-img a').addEventListener('mouseover', function() {
        document.querySelector('.nav').classList.add('active');
      });
      
      document.querySelector('.nav-img').addEventListener('mouseleave', function() {
        document.querySelector('.nav').classList.remove('active');
      });
      