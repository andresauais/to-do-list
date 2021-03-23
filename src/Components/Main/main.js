import React from "react";

import Side from "./Sidebar/side";
import TaskArea from "./Tasks/taskarea";

function Main(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Side />
        </div>
        <div className="col-9">
          <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                </div>
            </nav>
          </div>
          <TaskArea />
        </div>
      </div>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('sidebarCollapse').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle("active");
  });
});

export default Main;