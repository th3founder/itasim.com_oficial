const menu=`<ul>
<li><a href="" class="header_navbarContainer_secondLinks_items">Nosotros</a></li>
<li><a href="" class="header_navbarContainer_secondLinks_items">Beneficios</a></li>
<li><a href="" class="header_navbarContainer_secondLinks_items">Pasos a seguir</a></li>    
</ul>`;
document.addEventListener('DOMContentLoaded', init);
function init()
{
    const desplegar=document.querySelector(".header_navbarContainer_secondLinks");
    desplegar.innerHTML=menu;
}
var appear=0;
function hamburguer()
{
    let aparecer=document.querySelector(".header_navbarContainer_second");
    let hide=true;
    appear++;
    aparecer.classList.add("appearH");
    appear>=2?hide=false:0;
    if(!hide)
    {
        aparecer.classList.remove("appearH");
        appear=0;
        hide=true
    }
    console.log(appear);
}