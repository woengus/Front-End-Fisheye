function photographerFactory(data) {
    const { name, portrait, city, country,tagline,price, id } = data;
   
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        
        const article = document.createElement( 'a' );
        const idPhotographer = id;
        article.setAttribute("href", '/photographer-page.html?id='+`${idPhotographer}`)
        article.setAttribute("tabindex", 0  )
        article.classList.add("article")
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        img.setAttribute("alt", name)
        const h3 = document.createElement ('h3');
        h3.textContent = `${city}, ${country}`;
        const h4 = document.createElement ('h4');
        h4.textContent = tagline;
        const prix = document.createElement('div');
        prix.textContent = `${price}€/jour`;
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(prix);    
        
        
        

        return (article);
       
    }
    function getPhotographerCard() {
        document.querySelector(
            ".photographer"
          ).innerHTML = `<div class="flex"><h2>${photographer.name}</h2><h3>${photographer.city}, ${photographer.country}</h3><h4>${photographer.tagline}</h4></div><button class="contact_button" onclick="displayModal()">Contactez-moi</button><img src="/assets/photographers/${photographer.portrait}" alt="photo de ${photographer.name}"></img>`;
    } 
    return { name, picture,city,country,tagline,price,id, getUserCardDOM, getPhotographerCard }
}
