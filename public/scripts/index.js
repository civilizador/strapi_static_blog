var $ = jQuery;
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
var allArray;
var randomSix = [];

const newsCycle = () => {
  const first = news[0];
  const news1 = `
    <img src="${
      first.cover.url
    }" height="600vh" width="100%" class="rounded" ></p>
    <h4 class="card-title">
      <a href="/post.html?id=${first._id}">${first.title}</a>
    </h4>
    <h5>${first.description}</h5>
    <p>
    ${first.content.substring(0, 50)}
    </p>
    </br>
    <span class="date">${first.createdAt}</span>
    `;
  $("#newsFirst").append(news1);
  for (i = 1; i < news.length; i++) {
    if (i === 4) {
      break;
    }
    if (i === 2) {
      const item = news[i];
      const news2 = `
        <div id="blocks">
        <div style="border-top:2px dotted navy;border-bottom:2px dotted navy;width:100%;padding-top:10px;padding-bottom:10px;">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left" height="200vh" width="300vh" style="padding-right:10px;">
              </td>
              <td style="width: 100%;position:relative; clear:both;">
                <span class="newsText">
                    <h4 class="card-title">
                      <a href="/post.html?id=${item._id}">${
        item.description
      }</a>
                    </h4>
                </span>
                <span class="date">${item.createdAt}</span>
              </td>
            </tr>
            </div>
          </table>
        </div>
        <p>
          `;
      $("#newsSecond").append(news2);
    } else {
      const item = news[i];
      const news2 = `
        <div id="blocks">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left" height="200vh" width="300vh" style="padding-right:10px;">
              </td>
              <td style="width: 100%;position:relative; clear:both;">
                <span class="newsText">
                    <h4 class="card-title">
                      <a href="/post.html?id=${item._id}">${
        item.description
      }</a>
                    </h4>
                </span>
                <span class="date">${item.createdAt}</span>
              </td>
            </tr>
          </table>
        </div>
        <p>
          `;
      $("#newsSecond").append(news2);
    }
  }
};

const entertainmentCycle = () => {
  const item = entertainment[0];
  const ent = `
  <img src="${
    item.cover.url
  }" class="rounded" height="400vh" width="50%" style="float:right;padding-left:15px;">
    <h4 class="card-title">
      <a href="/post.html?id=${item._id}">${item.title}</a>
    </h4>

    <h5>${item.description}</h5>
    </p>
    <span class="date2">${item.createdAt}</span>
  `;
  $("#entertainmentFirst").append(ent);
  for (let i = 1; i < entertainment.length; i++) {
    if (i === 4) {
      break;
    }
    if (i === 2) {
      const item = entertainment[i];
      const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;float:center; border-left: 2px dotted navy; border-right: 2px dotted navy;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.content.substring(0, 50)}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#entertainmentSecond").append(ent);
    } else {
      const item = entertainment[i];
      const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#entertainmentSecond").append(ent);
    }
  }
};

const techCycle = () => {
  const item = technology[0];
  const tech = `
  <img src="${
    item.cover.url
  }" class="rounded" height="400vh" width="50%" style="float:left;padding-right:15px;">
    <h4 class="bigTitle">
      <a href="/post.html?id=${item._id}">${item.title}</a>
    </h4>

    <h5>${item.description}</h5>
    </p>
    <span class="date2">${item.createdAt}</span>
  `;
  $("#technologyFirst").append(tech);
  for (let i = 1; i < technology.length; i++) {
    if (i === 4) {
      break;
    }
    if (i === 2) {
      const item = technology[i];
      const tech = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;float:center; border-left: 2px dotted navy; border-right: 2px dotted navy;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.content.substring(0, 50)}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#technologySecond").append(tech);
    } else {
      const item = technology[i];
      const tech = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#technologySecond").append(tech);
    }
  }
};

const sportsCycle = () => {
  const item = sports[0];
  const sport = `
  <img src="${
    item.cover.url
  }" class="rounded" height="400vh" width="50%" style="float:left; padding-right:15px;">
    <h4 class="card-title">
      <a href="/post.html?id=${item._id}">${item.title}</a>
    </h4>

    <h5>${item.content.substring(0, 50)}</h5>
    </p>
    <span class="date2">${item.createdAt}</span>
  `;
  $("#sportsFirst").append(sport);
  for (let i = 1; i < sports.length; i++) {
    if (i === 4) {
      break;
    }
    if (i === 2) {
      const item = sports[i];
      const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;float:center; border-left: 2px dotted navy; border-right: 2px dotted navy;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#sportsSecond").append(sport);
    } else {
      const item = sports[i];
      const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;line-height:0px!important;">
      <h4 class="card-title">
        <a href="/post.html?id=${item._id}">${item.title}</a>
      </h4>
        <img src="${
          item.cover.url
        }" class="rounded" height="200vh" width="100%">
      <h5>${item.description}</h5>
      </p>
      <span class="date2">${item.createdAt}</span>
    </div>
    `;
      $("#sportsSecond").append(sport);
    }
  }
};

const selectedCycle = () => {
  for (let i = 0; i < selectedPosts.length; i++) {
    if (i === 4) {
      break;
    } else if (i === 3) {
      const item = selectedPosts[i];
      const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 0px">
        <a href="/post.html?id=${item._id}"><h5>${item.description}</h5></a>
        <p>
        ${item.content.substring(0, 50)}
        </p>
        </br>
        <span class="date">${item.createdAt}</span>

      </div>
      `;
      $("#selected").append(selected);
    } else {
      const item = selectedPosts[i];
      const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 2px dotted navY">
        <a href="/post.html?id=${item._id}"><h5>${item.description}</h5></a>
        <p>
        ${item.content.substring(0, 50)}
        </p>
        </br>
        <span class="date">${item.createdAt}</span>

      </div>
      `;
      $("#selected").append(selected);
    }
  }
};

const randomSixCycle = () => {
  for (let i = 0; i < allArray.length; i++) {
    const item = allArray[i];
    if (i === 2 || i === 5) {
      const node = `
        <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-right: 0px;">
        <h4 class="card-title">
          <a href="/post.html?id=${item._id}">${item.title}</a>
        </h4>
          <img src="${
            item.cover.url
          }" class="rounded" height="200vh" width="100%">
        <h5>${item.description}</h5>
        </p>
        <span class="date2">${item.createdAt}</span>
      </div>
      `;
      $("#randomSix").append(node);
    } else {
      const node = `
      <div class="col-lg-4 col-md-4 mb-4" style="position:relative;line-height:0px!important;border-right:2px dotted navy">
        <h4 class="card-title">
          <a href="/post.html?id=${item._id}">${item.title}</a>
        </h4>
          <img src="${
            item.cover.url
          }" class="rounded"  height="200vh" width="100%">
        <h5>${item.description}</h5>
        <p>
        <span class="date2">${item.createdAt}</span>
      </div>
      `;
      $("#randomSix").append(node);
    }
  }
};

$(document).ready(() => {
  $.ajax({
    url: "banners",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      for (let i = 0; i < data.length; i++) {
        if (i === 5) {
          break;
        }
        const item = data[i];
        const node = `

          <img src="${item.url}" width="19%" align="center">

        `;
        $("#banners").append(node);
      }
    },
    catch: err => {
      console.log(err);
    }
  });

  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (item.Избранное == true) {
          selectedPosts.unshift(item);
        }

        if (item.category == "Наши Беседы") {
          news.unshift(item);
        } else if (item.category == " Партнеры") {
          technology.unshift(item);
        } else if (item.category == " Здоровье") {
          entertainment.unshift(item);
        } else {
          sports.unshift(item);
        }
      }
      allArray = [
        sports[sports.length - 1],
        sports[sports.length - 2],
        technology[technology.length - 1],
        technology[technology.length - 2],
        entertainment[entertainment.length - 1],
        entertainment[entertainment.length - 2]
      ];
    },
    catch: err => {
      console.log(err);
    }
  }).then(() => {
    if (sports.length !== 0) {
      sportsCycle();
    }
    if (entertainment.length !== 0) {
      entertainmentCycle();
    }
    if (news.length !== 0) {
      newsCycle();
    }
    if (technology.legnth !== 0) {
      techCycle();
    }
    if (selectedPosts.length !== 0) {
      selectedCycle();
    }
    if (allArray.length !== 0) {
      randomSixCycle();
    }
  });
});
