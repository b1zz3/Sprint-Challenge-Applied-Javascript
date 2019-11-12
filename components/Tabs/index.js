// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// api call
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log('it works', response);
        // create shorthand for response data
        const data = response.data.topics;

        // select entry point for tabs
        const tabEntry = document.querySelector('.topics');
        
        // loop through target response data, append to DOM
        data.forEach(topic => {
            const tabby = document.createElement('div');
            tabby.textContent = topic;
            tabby.classList.add('tab');
            tabEntry.appendChild(tabby);

        })
    })
    .catch(error => {
        console.log('we gots problems', error);
    })