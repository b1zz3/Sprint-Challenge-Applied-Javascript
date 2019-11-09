// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// api call
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log('we workin', response);
        const data = response.data.articles;
        console.log('artys', data);
        
        
        var key;
        for (key in data) {
            console.log('key test', key);
            data[key].forEach(item => {
                console.log('item test', item);
            
                const newCard = document.createElement('div');
                const headln = document.createElement('div');
                const authDiv = document.createElement('div');
                const imageDiv = document.createElement('div');
                const image = document.createElement('img');
                const auth = document.createElement('span');

                // assign content
                headln.textContent = item.headline;
                image.src = item.authorPhoto;
                auth.textContent = item.authorName;

                // assign classes
                newCard.classList.add('card');
                headln.classList.add('headline');
                authDiv.classList.add('author');
                imageDiv.classList.add('img-container');

                // parent child relationship
                newCard.appendChild(headln);
                newCard.appendChild(authDiv);

                authDiv.appendChild(imageDiv);
                authDiv.appendChild(auth);

                imageDiv.appendChild(image);
                
                // add card to DOM
                const cardEntry = document.querySelector('.cards-container');
                cardEntry.appendChild(newCard);

            })
        }
    })
    .catch(error => {
        console.log('mo code mo problems', error);
    })