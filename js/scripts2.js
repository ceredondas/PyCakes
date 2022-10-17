let header = `
<a href="index.html" class="logo"><img src="/images/Logo-nav.svg" alt="Logo" /></a>
               
<iconify-icon
id="menu"
icon="iconoir:menu-scale" style="color: #60014a;" width="35"
flip="horizontal"></iconify-icon>

<nav>
    <i class="fa-solid fa-circle-xmark" id="closed"></i>

    <ul>
       <li><a href="index.html" class="pages">Inicio</a></li>
       <li><a href="gallery.html" class="pages">Galería</a></li>
       <li><a href="tutorials.html" class="pages">Tutoriales</a></li>
       <li><a href="contact.html" class="pages">Contacto</a></li>
    </ul>

    <div class="nav-icons">
       <a href="budget.html">
          <i class="fa-solid fa-cart-shopping"></i>
          <p class="nav-icons-text">Tienda</p>
         </a>

         <a href="login.html">
            <i class="fa-solid fa-user"></i>
            <p class="nav-icons-text">Ingresar</p>
         </a>
    </div>
</nav>
`
document.getElementById("idheader").innerHTML = header

let footer = `
<div class="footer-top">
      
            <ul class="footer-ul">
            <li class="footer-li">Horario de atención</li>
            <li class="footer-li">Lunes a Sábados</li>
            <li class="footer-li horario">8:00 a 20:00</li>
            <li class="footer-li">Domingos y feriados</li>
            <li class="footer-li horario">Cerrado</li>
            </ul>

            <a class="footer-logo" href="index.html"><img src="/images/Logo-grande.svg" alt=" PyCakes" /></a>

            <button class="footer-btn">Presupuesto &#8594;</button>
         </div>
            
            <hr />
                  
            <div class="footer-bottom">
            
            <div class="social-media">
               <div class="social-icon">
                  <a href="#">
                     <i class="fa-brands fa-facebook"></i>
                  </a>
                  <p>Facebook</p>
               </div>
            
               <div class="social-icon">
                  <a href="#">
                     <i class="fa-brands fa-instagram"></i>   
                  </a>
                  <p>Instagram</p>
               </div>
            
               <div class="social-icon">
                  <a href="#">
                     <i class="fa-brands fa-pinterest"></i>
                  </a>
                  <p>Pinterest</p>
               </div>
            
               <div class="social-icon">
                  <a href="#">
                     <i class="fa-brands fa-twitter"></i>
                  </a>
                  <p>Twitter</p>
               </div>
            
               <div class="social-icon">
                  <a href="#">
                     <i class="fa-brands fa-youtube"></i> 
                  </a>
                  <p>YouTube</p>
               </div>
            
               <div class="social-icon">
                  <a href="#">
                     <i class="fa-solid fa-envelope"></i> 
                  </a>
                  <p>Contacto</p>
               </div>
            
            </div>
            
            <div class="copyright">
               <div class="footer-small-text">
                  <p>&#169; Todos los derechos reservados 2022.</p>
                  <p>Programado por Carlos Davoli, Flavia Micaela Sandoval Pacheco y Cintia Elizabeth Redondas
                  </p>
               </div>
            </div>
            </div>
`
document.getElementById("idfooter").innerHTML = footer




const menu = document.querySelector("#menu");
const close = document.querySelector("#closed");
const nav = document.querySelector("nav");

function openNav(){
  nav.classList.add("open-nav")
}

menu.addEventListener("click", openNav); 
//=> {
 // nav.classList.add("open-nav")}

close.addEventListener("click", () => {
  nav.classList.remove("open-nav")
})


