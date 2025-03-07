document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.burger-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    
    burgerMenu.addEventListener('click', function() {
        burgerIcon.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile nav when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerIcon.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
    
    // Place buttons selection
    const placeBtns = document.querySelectorAll('.place-btn');
    placeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            placeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Show more rooms button
    const showMoreBtn = document.querySelector('.btn-more');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            // Implement functionality to load more rooms
            alert('Загрузка дополнительных номеров...');
        });
    }
    
    // Guest counter functionality
    const addBtns = document.querySelectorAll('.btn-add');
    addBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const guestCount = this.parentElement.querySelector('h3');
            let count = parseInt(guestCount.textContent);
            count++;
            if (count > 8) count = 8; // Setting a maximum of 8 guests
            guestCount.textContent = count;
        });
    });
    
    // Room slider navigation
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    
    // This is a placeholder for actual slider functionality
    prevBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Implement prev slide functionality
            console.log('Previous slide');
        });
    });
    
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Implement next slide functionality
            console.log('Next slide');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Закрываем все элементы
            accordionItems.forEach(accordionItem => {
                accordionItem.classList.remove('active');
            });
            
            // Если текущий элемент не был активным, активируем его
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Получаем элементы формы и модального окна
    const contactForm = document.getElementById('contactForm');
    const inquiryForm = document.getElementById('inquiryForm');
    const thankYouModal = document.getElementById('thankYouModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Проверяем, существуют ли элементы, чтобы избежать ошибок
    if (thankYouModal && closeModalBtn) {
        // Функция обработки отправки формы
        function handleFormSubmit(e) {
            e.preventDefault();
            
            // Показываем модальное окно
            thankYouModal.style.display = 'flex';
            
            // Сбрасываем форму
            e.target.reset();
        }

        // Добавляем обработчики событий, если формы существуют
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }
        
        if (inquiryForm) {
            inquiryForm.addEventListener('submit', handleFormSubmit);
        }

        // Закрытие модального окна при клике на кнопку
        closeModalBtn.addEventListener('click', function() {
            thankYouModal.style.display = 'none';
        });

        // Закрытие модального окна при клике вне его содержимого
        window.addEventListener('click', function(e) {
            if (e.target === thankYouModal) {
                thankYouModal.style.display = 'none';
            }
        });
    }

    // Форматирование номера телефона
    const phoneInputs = [
        document.getElementById('phone'),
        document.getElementById('contactPhone')
    ];

    phoneInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы

                if (value.length > 0) {
                    if (value[0] !== '7' && value[0] !== '8') {
                        value = '7' + value; // Добавляем "7" в начало, если её нет
                    }

                    let formattedValue = '+';

                    if (value.length > 0) {
                        formattedValue += value.substring(0, 1);
                    }

                    if (value.length > 1) {
                        formattedValue += ' (' + value.substring(1, 4);
                    }

                    if (value.length > 4) {
                        formattedValue += ') ' + value.substring(4, 7);
                    }

                    if (value.length > 7) {
                        formattedValue += '-' + value.substring(7, 9);
                    }

                    if (value.length > 9) {
                        formattedValue += '-' + value.substring(9, 11);
                    }

                    e.target.value = formattedValue;
                }
            });
        }
    });
});



//  document.addEventListener('DOMContentLoaded', function() {
//             const accordionItems = document.querySelectorAll('.accordion-item');
            
//             accordionItems.forEach(item => {
//                 const header = item.querySelector('.accordion-header');
                
//                 header.addEventListener('click', function() {
//                     // Check if this item is already active
//                     const isActive = item.classList.contains('active');
                    
//                     // Close all items
//                     accordionItems.forEach(accordionItem => {
//                         accordionItem.classList.remove('active');
//                     });
                    
//                     // If clicked item wasn't active, make it active
//                     if (!isActive) {
//                         item.classList.add('active');
//                     }
//                 });
//             });
            
//             // Contact Form Functionality
//             const contactForm = document.getElementById('contactForm');
//             const inquiryForm = document.getElementById('inquiryForm');
//             const thankYouModal = document.getElementById('thankYouModal');
//             const closeModalBtn = document.getElementById('closeModal');
            
//             // Function to handle form submission
//             function handleFormSubmit(e) {
//                 e.preventDefault();
                
//                 // In a real application, you would send the form data to a server here
//                 // For demo purposes, we'll just show the thank you modal
//                 thankYouModal.style.display = 'flex';
                
//                 // Reset form
//                 e.target.reset();
//             }
            
//             // Add event listeners to both forms
//             contactForm.addEventListener('submit', handleFormSubmit);
//             inquiryForm.addEventListener('submit', handleFormSubmit);
            
//             closeModalBtn.addEventListener('click', function() {
//                 thankYouModal.style.display = 'none';
//             });
            
//             // Close modal when clicking outside of content
//             window.addEventListener('click', function(e) {
//                 if (e.target === thankYouModal) {
//                     thankYouModal.style.display = 'none';
//                 }
//             });
            
//             // Phone Input Formatting for both phone inputs
//             const phoneInputs = [
//                 document.getElementById('phone'),
//                 document.getElementById('contactPhone')
//             ];
            
//             phoneInputs.forEach(input => {
//                 if (input) {
//                     input.addEventListener('input', function(e) {
//                         let value = e.target.value.replace(/\D/g, '');
                        
//                         if (value.length > 0) {
//                             if (value[0] !== '7' && value[0] !== '8') {
//                                 value = '7' + value;
//                             }
                            
//                             let formattedValue = '+';
                            
//                             if (value.length > 0) {
//                                 formattedValue += value.substring(0, 1);
//                             }
                            
//                             if (value.length > 1) {
//                                 formattedValue += ' (' + value.substring(1, 4);
//                             }
                            
//                             if (value.length > 4) {
//                                 formattedValue += ') ' + value.substring(4, 7);
//                             }
                            
//                             if (value.length > 7) {
//                                 formattedValue += '-' + value.substring(7, 9);
//                             }
                            
//                             if (value.length > 9) {
//                                 formattedValue += '-' + value.substring(9, 11);
//                             }
                            
//                             e.target.value = formattedValue;
//                         }
//                     });
//                 }
//             });
//         });