// Create floating particles  
        function createParticles() {  
            const particlesContainer = document.getElementById("particles");  
            const particleCount = 20;  

            for (let i = 0; i < particleCount; i++) {  
                const particle = document.createElement("div");  
                particle.classList.add("particle");  

                // Random properties  
                const size = Math.random() * 10 + 5;  
                const posX = Math.random() * window.innerWidth;  
                const posY = Math.random() * window.innerHeight;  
                const duration = Math.random() * 10 + 10;  
                const delay = Math.random() * 5;  

                // Apply styles  
                particle.style.width = `${size}px`;  
                particle.style.height = `${size}px`;  
                particle.style.left = `${posX}px`;  
                particle.style.top = `${posY}px`;  
                particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;  
                particle.style.opacity = Math.random() * 0.5 + 0.1;  

                particlesContainer.appendChild(particle);  
            }  
        }  

        // Theme toggle functionality  
        document  
            .getElementById("themeToggle")  
            .addEventListener("click", function () {  
                document.body.classList.toggle("dark-mode");  

                const icon = this.querySelector("i");  
                if (document.body.classList.contains("dark-mode")) {  
                    icon.classList.remove("fa-moon");  
                    icon.classList.add("fa-sun");  
                } else {  
                    icon.classList.remove("fa-sun");  
                    icon.classList.add("fa-moon");  
                }  
            });  

        // Link hover sound effect  
        const links = document.querySelectorAll(".link");  
        links.forEach(link => {  
            link.addEventListener("mouseenter", function () {  
                const hoverSound = new Audio(  
                    "data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyK20ATURJQQAAAAYAAANEaWduAP/7kgAQAAADSAZ7BIpgBEBwDyMRcAAIAGkHAACAANIOAAAgAAQkIkOCEAlIQvToAHmwxmOSEJh5xMdzESYnft0rsMgAJkO048RjhmQgQRk6SQwzB0wk8EAwwsEiHigmZHxAGDQEMRCkwKA0Y4HyWhxM3QLBECTHwLMSisYcG3W7pxOBJh4OpnQFLzCoSDbYZJQkzgHwEITFQSDUMXVJASdBpaWnpb7VZtbT3K1I/UiZ6K"  
                );  
                hoverSound.volume = 0.2;  
                hoverSound.play();  
            });  
        });  

        // Logo animation  
        const profileImg = document.getElementById("profile-img");  
        profileImg.addEventListener("click", function () {  
            this.style.animation = "float 2s ease-in-out";  
            setTimeout(() => {  
                this.style.animation = "";  
            }, 2000);  
        });  

        // Initialize particles on load  
        window.addEventListener("load", createParticles);  

        // Regenerate particles on resize  
        window.addEventListener("resize", function () {  
            const particlesContainer = document.getElementById("particles");  
            particlesContainer.innerHTML = "";  
            createParticles();  
        });  

        // Add custom X logo  

        // Call the function to update the profile image  
        updateProfileImage();  