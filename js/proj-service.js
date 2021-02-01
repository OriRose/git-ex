'use strict'

var gProjects = [
    {
        id:"minesweeper",
        name:"Minesweeper",
        title: "Mostly the same as the original Minesweeper. Don't blow up!",
        desc: "I made this project for my first sprint in Coding Academy. Besides the slightly different victory condition, it's very similar to the original game. I think it looks really cool!",
        url: 'https://orirose.github.io/sprint1/',
        publishedAt: 1610993474983
    },{
        id:"bookshop",
        name:"Bookshop",
        title: "My first CRUD based design",
        desc: "This is my first ever CRUD based project. It is designed to organize the inventory for a book store.",
        url: 'https://orirose.github.io/bookshop/',
        publishedAt: 1610993474983
    },{
        id:"ballgame",
        name:"Ball Game",
        title: "My first ever game",
        desc: "This is the first ever game I made using Javascript. Use the arrow keys to collect balls and avoid the glue.",
        url: 'https://orirose.github.io/ball-game/',
        publishedAt: 1610993474983
    }
]

$(document).ready(initPage);

function initPage(){
    renderProjects();
}

function renderProjects(){
    var HTMLstr = gProjects.map(function(project){
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.id}.jpeg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>`
    })
    HTMLstr = HTMLstr.join('')
    document.querySelector('.my-projects').innerHTML = HTMLstr
}

function renderModal(id){
    var project = gProjects.find(function(el){
        return el.id===id
    })
    var HTMLstr = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${project.name}</h2>
              <p class="item-intro text-muted">${project.title}</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpeg" alt="">
              <p>${project.desc}</p>
              <ul class="list-inline">
                <li>Date: January 2021</li>
                <li>Client: Coding Academy</li>
                <li>Category: Coding</li>
              </ul>
              <a href="${project.url}" target="_blank">
              <button class="btn btn-primary" type="button">
                <i class="fa fa-arrow-right"></i>
                check it out
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  document.querySelector('.portfolio-modal').innerHTML = HTMLstr
}