import React from "react";

const Sidebar = () => {
  return (
    <div class="user-profile-area">
      <div class="task-manager">task manager</div>
      <div class="side-wrapper">
        <div class="user-profile">
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            class="user-photo"
          />
          <div class="user-name">Natalie Smith</div>
          <div class="user-mail">natalie.smith@gmail.com</div>
        </div>
        <div class="user-notification">
          <div class="notify alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M10.688 95.156C80.958 154.667 204.26 259.365 240.5 292.01c4.865 4.406 10.083 6.646 15.5 6.646 5.406 0 10.615-2.219 15.469-6.604 36.271-32.677 159.573-137.385 229.844-196.896 4.375-3.698 5.042-10.198 1.5-14.719C494.625 69.99 482.417 64 469.333 64H42.667c-13.083 0-25.292 5.99-33.479 16.438-3.542 4.52-2.875 11.02 1.5 14.718z" />
              <path d="M505.813 127.406a10.618 10.618 0 00-11.375 1.542C416.51 195.01 317.052 279.688 285.76 307.885c-17.563 15.854-41.938 15.854-59.542-.021-33.354-30.052-145.042-125-208.656-178.917a10.674 10.674 0 00-11.375-1.542A10.674 10.674 0 000 137.083v268.25C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333v-268.25a10.66 10.66 0 00-6.187-9.677z" />
            </svg>
          </div>
          <div class="notify alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M467.812 431.851l-36.629-61.056a181.363 181.363 0 01-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04V42.667C298.66 19.136 279.524 0 255.993 0s-42.667 19.136-42.667 42.667V80.96C151.716 99.371 106.66 156.48 106.66 224v53.483c0 32.853-8.939 65.109-25.835 93.291L44.196 431.83a10.653 10.653 0 00-.128 10.752c1.899 3.349 5.419 5.419 9.259 5.419H458.66c3.84 0 7.381-2.069 9.28-5.397 1.899-3.329 1.835-7.468-.128-10.753zM188.815 469.333C200.847 494.464 226.319 512 255.993 512s55.147-17.536 67.179-42.667H188.815z" />
            </svg>
          </div>
        </div>
        <div class="progress-status">12/34</div>
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
        <div class="task-status">
          <div class="task-stat">
            <div class="task-number">12</div>
            <div class="task-condition">Completed</div>
            <div class="task-tasks">tasks</div>
          </div>
          <div class="task-stat">
            <div class="task-number">22</div>
            <div class="task-condition">To do</div>
            <div class="task-tasks">tasks</div>
          </div>
          <div class="task-stat">
            <div class="task-number">243</div>
            <div class="task-condition">All</div>
            <div class="task-tasks">completed</div>
          </div>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="project-title">Projects</div>
        <div class="project-name">
          <div class="project-department">Marketing</div>
          <div class="project-department">Design</div>
          <div class="project-department">Development</div>
          <div class="project-department">Management</div>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="project-title">Team</div>
        <div class="team-member">
          <img
            src="https://images.unsplash.com/flagged/photo-1574282893982-ff1675ba4900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            alt=""
            class="members"
          />
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            class="members"
          />
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            class="members"
          />
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80"
            alt=""
            class="members"
          />
          <img
            src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt=""
            class="members"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
