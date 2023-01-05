import React from "react";

const AddTask = () => {
  return (
    <div class="inbox-container">
      <div class="inbox">
        <div class="msg msg-department anim-y">
          Marketing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 492 492"
          >
            <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
          </svg>
        </div>
        <div class="msg selected-bg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail1"
            class="mail-choice"
            checked
          />
          <label for="mail1"></label>
          <div class="msg-content">
            <div class="msg-title">Write an articke about design</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            class="members mail-members"
          />
        </div>
        <div class="msg anim-y">
          <input type="checkbox" name="msg" id="mail2" class="mail-choice" />
          <label for="mail2"></label>
          <div class="msg-content">
            <div class="msg-title">Disrupt next level aesthetic raw</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://images.unsplash.com/flagged/photo-1574282893982-ff1675ba4900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            alt=""
            class="members mail-members"
          />
        </div>
        <div class="msg selected-bg anim-y">
          <input
            type="checkbox"
            name="msg"
            id="mail3"
            class="mail-choice"
            checked
          />
          <label for="mail3"></label>
          <div class="msg-content">
            <div class="msg-title">Chicharrones craft beer tattooed</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80"
            alt=""
            class="members mail-members"
          />
        </div>
        <div class="msg anim-y">
          <input type="checkbox" name="msg" id="mail4" class="mail-choice" />
          <label for="mail4"></label>
          <div class="msg-content">
            <div class="msg-title">Vaporware readymade shabby</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            class="members mail-members"
          />
        </div>
        <div class="msg anim-y">
          <input type="checkbox" name="msg" id="mail5" class="mail-choice" />
          <label for="mail5"></label>
          <div class="msg-content">
            <div class="msg-title"> Four dollar toast taxidermy</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt=""
            class="members mail-members"
          />
        </div>
        <div class="msg anim-y">
          <input type="checkbox" name="msg" id="mail6" class="mail-choice" />
          <label for="mail6"></label>
          <div class="msg-content">
            <div class="msg-title">Slow-carb disrupt kogi tote bag</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt=""
            class="members mail-members"
          />
        </div>
        <div class="msg anim-y">
          <input type="checkbox" name="msg" id="mail7" class="mail-choice" />
          <label for="mail7"></label>
          <div class="msg-content">
            <div class="msg-title">Pour-over subway tile twee</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            class="members mail-members"
          />
        </div>
        <div class="msg anim-y">
          <input type="checkbox" name="msg" id="mail8" class="mail-choice" />
          <label for="mail8"></label>
          <div class="msg-content">
            <div class="msg-title">Create AdWords campaign</div>
            <div class="msg-date">22 Feb, 2019</div>
          </div>
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            class="members mail-members"
          />
        </div>
      </div>
      <div class="add-task">
        <button class="add-button">Add task</button>
      </div>
    </div>
  );
};

export default AddTask;
