import React from "react";

const Mail = () => {
  return (
    <div class="mail-detail">
      <div class="mail-detail-header">
        <div class="mail-detail-profile">
          <img
            src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png"
            alt=""
            class="members inbox-detail"
          />
          <div class="mail-detail-name">Natalie Smith</div>
        </div>
        <div class="mail-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trash-2"
          >
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-tag"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check-square"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-paperclip"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
        </div>
      </div>
      <div class="mail-contents">
        <div class="mail-contents-subject">
          <input
            type="checkbox"
            name="msg"
            id="mail20"
            class="mail-choice"
            checked
          />
          <label for="mail20"></label>
          <div class="mail-contents-title">Write an article about design</div>
        </div>
        <div class="mail">
          <div class="mail-time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            12 Mar, 2019
          </div>
          <div class="mail-inside">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            accumsan commodo lectus gravida dictum. Aliquam a dui eu arcu
            hendrerit porta sed in velit. Fusce eu semper magna. Aenean porta
            facilisis neque, ac dignissim magna vestibulum eu. Etiam id ligula
            eget neque placerat ultricies in sed neque. Nam vitae rutrum est.
            Etiam non condimentum ante, eu consequat orci. Aliquam a dui eu arcu
            hendrerit porta sed in velit. Fusce eu semper magna.
          </div>
          <div class="mail-assign">
            <div class="assignee">
              <strong>Okla Nowak</strong> assigned to Natalie Smith.
              <span class="assign-date">25 Nov, 2019</span>
            </div>
            <div class="assignee">
              <strong>Okla Nowak</strong> added to Marketing.
              <span class="assign-date">18 Feb, 2019</span>
            </div>
            <div class="assignee">
              <strong>Okla Nowak </strong> created task.
              <span class="assign-date">18 Feb, 2019</span>
            </div>
          </div>
          <div class="mail-checklist">
            <input
              type="checkbox"
              name="msg"
              id="mail30"
              class="mail-choice"
              checked
            />
            <label for="mail30">Natalie completed this task.</label>
            <div class="mail-checklist-date">19 May, 2020</div>
          </div>
          <div class="mail-doc">
            <div class="mail-doc-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file-text"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
              <div class="mail-doc-detail">
                <div class="mail-doc-name">Article.docx</div>
                <div class="mail-doc-date">added 17 May, 2020</div>
              </div>
            </div>
            <div class="mail-doc-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash-2"
              >
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-download-cloud"
              >
                <path d="M8 17l4 4 4-4M12 12v9" />
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mail-textarea">
        <input type="text" placeholder="Write a comment..." />
        <div class="textarea-icons">
          <div class="attach">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
            </svg>
          </div>
          <div class="send">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-send"
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
