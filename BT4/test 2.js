var listCoursesBlock = document.querySelector('#list-courses');

var courseAPI = 'http://localhost:3000/posts'

function start(){
  getCourse(renderCode);

  handleCreatForm();
  }

start();

// Function

function getCourse(callBack){
  fetch(courseAPI)
    .then(function(response){
      return response.json();
    })
    .then(callBack)
};

function createCourse(data, callBack){
  var option = {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(courseAPI, option)
    .then(function(reponse){    
        reponse.json();
    })
    .then(callBack);
};

function renderCode(courses){
  var listCoursesBlock = document.querySelector('#list-courses');
  var htmls = courses.map(function(courses){
    return ` 
    <li>
      <h4> ${courses.title}</h4>
      <p> ${courses.author}</p>
    </li>`;
  })
  listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreatForm(){
  var craeteBtn = document.querySelector('#create');
  
  craeteBtn.onclick = function(){
    var title = document.querySelector('input[name="title"]').value;
    var author = document.querySelector('input[name="author"]').value;
    
    var formData = {
      title: title,
      author: author,
    };

    createCourse(formData);
  }
}