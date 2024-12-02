import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 16 16"
          id="heart"
          fill="#0096D1"
          className={styles.icons}
        >
          <path d="M7.54118788,3.94746435 C6.26949528,2.67577175 4.21213798,2.66959186 2.94594467,3.93578517 C1.67975136,5.20197847 1.68593125,7.25933578 2.95762385,8.53102838 L7.66511771,13.2385222 C7.86037986,13.4337844 8.17696235,13.4337844 8.3722245,13.2385222 L13.0552592,8.55824992 C14.3185076,7.28794108 14.3145137,5.23634816 13.0425975,3.9644319 C11.7686258,2.69046028 9.71030505,2.68427942 8.44184829,3.95273618 L7.99458434,4.40086081 L7.54118788,3.94746435 Z M12.3461846,7.85311643 L8.01867111,12.1778621 L3.66473063,7.8239216 C2.78261454,6.94180551 2.77833654,5.51760686 3.65305145,4.64289195 C4.52776637,3.76817703 5.95196501,3.77245504 6.8340811,4.65457113 L7.64343658,5.46392661 C7.84203355,5.66252358 8.16520275,5.65863044 8.35895787,5.4553069 L9.14895507,4.65984296 C10.0259337,3.7828643 11.4510959,3.78714387 12.3354907,4.67153868 C13.2178269,5.55387487 13.2205911,6.97382279 12.3461846,7.85311643 Z"></path>
        </svg>
        <h3 className={styles.logo}>
          {" "}
          <Link to="/" className={styles.logo}>
            WAVY
          </Link>{" "}
        </h3>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          width="35"
          height="35"
          id="cart"
          fill="#0096D1"
          className={styles.icons}
        >
          <path d="M63.2 161h164.7c-9.6-7.3-19.3-14.7-28.9-22 4.8 14.6 9.6 29.2 14.4 43.9 11.6 35.1 23.1 70.2 34.7 105.3C262 330.4 276 372.7 289.9 415c12.1 36.7 24.2 73.4 36.2 110.1 5.9 17.8 11.5 35.7 17.6 53.4.1.3.2.5.3.8 4.9 14.9 21 26.1 36.9 21 14.8-4.8 26.2-20.9 21-36.9-4.8-14.6-9.6-29.2-14.4-43.9-11.6-35.1-23.1-70.2-34.7-105.3-13.9-42.3-27.8-84.6-41.8-126.9-12.1-36.7-24.2-73.4-36.2-110.1-5.9-17.8-11.4-35.7-17.6-53.4-.1-.3-.2-.5-.3-.8-4.2-12.6-15.3-22-28.9-22H63.3c-15.7 0-30.7 13.8-30 30 .6 16.3 13.1 30 29.9 30z"></path>
          <path d="M347 556.1c-16.2 28.9-32.5 57.7-48.7 86.6-2.3 4.2-4.7 8.3-7 12.5-11.1 19.7 2.9 45.1 25.9 45.1h458c21.1 0 42.3.4 63.5 0h.9c15.7 0 30.7-13.8 30-30-.7-16.3-13.2-30-30-30h-458c-21.1 0-42.4-.6-63.5 0h-.9c8.6 15 17.3 30.1 25.9 45.1 16.2-28.9 32.5-57.7 48.7-86.6 2.3-4.2 4.7-8.3 7-12.5 7.7-13.7 3.7-33.4-10.8-41-14.2-7.4-32.8-3.8-41 10.8z"></path>
          <circle cx="746.5" cy="824.9" r="68.1"></circle>
          <path d="M658.4 824.9c.4 37.5 23.9 69.9 58.8 83 33 12.4 73.6 1.6 96.1-25.6 23.9-29 28.7-70.3 8.8-102.9-19.6-32.2-57.2-47.9-93.9-40.7-40.5 7.9-69.4 45.6-69.8 86.2-.1 10.5 9.3 20.5 20 20 10.9-.5 19.9-8.8 20-20 0-1.6.1-3.3.2-4.9 0-.7.1-1.4.2-2.1.3-4-.1 1.3-.2 1.2-.7-.4 2.1-9 2.4-9.8.3-.8.9-4.2 1.6-4.4.2-.1-1.8 3.7-.7 1.7.4-.8.8-1.6 1.1-2.4 1.5-3 3.3-5.7 5.1-8.5 1.9-2.9-2.7 3.1.5-.6 1-1.1 2-2.3 3.1-3.4s2.2-2.2 3.3-3.2c.5-.4 1-.9 1.5-1.3.7-.6 3.6-2 1-.9-2.2.9-.6.5.1 0s1.4-1 2.2-1.5c1.1-.7 2.2-1.4 3.4-2 1.5-.9 3.1-1.6 4.7-2.4.5-.3 2.6-1.3 0-.1-3 1.4 1-.3 1.3-.4 2.7-1 5.6-1.8 8.4-2.4.9-.2 1.8-.3 2.7-.5 2.2-.5-1.9.2-1.9.2 1.8 0 3.7-.4 5.5-.4 3.3-.1 6.5 0 9.8.3 3.7.3-3.8-.7.8.2 1.8.3 3.5.8 5.3 1.2 1.5.4 3 .9 4.5 1.4.4.1 2.4.8 2.5.9.1.3-3.7-1.9-1.7-.7 2.8 1.7 5.9 3 8.7 4.8.7.5 1.4 1 2.2 1.5.7.5 2.2.9.1 0-2-.8-.7-.6 0 .1.7.6 1.3 1.1 2 1.7 2.5 2.2 4.6 4.6 6.8 7 3 3.3-1.4-2.3.5.6.8 1.3 1.7 2.5 2.5 3.8.8 1.3 1.6 2.7 2.3 4l.9 1.8c1.9 3.6.4-.3-.1-.5 1.2.4 2.5 7.6 2.9 8.9.3 1.3.6 2.7.9 4 .8 3.8-.1-1.2-.1-1.3.5.5.3 2.8.3 3.4.2 3 .2 6.1 0 9.1-.1.9-.2 1.8-.2 2.8-.1 2-1.2 1.7.2-1.2-.7 1.5-.7 3.7-1.1 5.3-.7 2.8-1.8 5.5-2.6 8.3-.8 2.5 1.8-3.4.5-1.1-.3.5-.6 1.2-.8 1.8-.8 1.6-1.6 3.1-2.5 4.6-.8 1.3-1.6 2.6-2.5 3.9-2.7 4.1 1.9-2-.4.7-2.2 2.5-4.3 4.9-6.8 7.1-.4.4-2.8 3-3.5 3 0 0 4.1-2.8.9-.8-.6.4-1.1.7-1.6 1.1-2.8 1.8-5.7 3.3-8.6 4.8-3.1 1.6 3.6-1.2-.7.3-1.5.5-2.9 1-4.4 1.5-1.5.4-3 .8-4.6 1.2-.7.1-1.3.3-2 .4-4.4 1 3.2-.2.6 0-3.3.3-6.5.5-9.8.4-1.6 0-3.2-.2-4.9-.3-.6 0-3-.3-.1 0 3.3.3-.7-.2-1.4-.3-3.5-.7-6.9-1.8-10.3-3-.6-.2-2.6-1.2-.1 0 2.9 1.4-.6-.3-1.2-.6-1.6-.8-3.1-1.6-4.6-2.5-1.5-.9-2.9-1.9-4.4-2.9-2.4-1.5.3.8.9.8-.4 0-1.7-1.4-2-1.7-2.6-2.3-5.1-4.7-7.4-7.4 0 0-1.7-1.7-1.7-2 0 .4 2.4 3.4.8.9-1-1.5-2-2.9-2.9-4.4-1-1.7-1.9-3.5-2.8-5.2-2.1-4.1 1 3.2-.6-1.3-1.2-3.4-2.2-6.8-2.9-10.4-.1-.6-.1-1.5-.4-2 1.5 3.3.3 2.8.1.5-.2-2.1-.3-4.2-.3-6.3-.1-10.5-9.1-20.5-20-20-11.2.3-20.6 8.7-20.5 19.9z"></path>
          <circle cx="401.8" cy="824.9" r="68.1"></circle>
          <path d="M313.7 824.9c.4 37.5 23.9 69.9 58.8 83 33 12.4 73.6 1.6 96.1-25.6 23.9-29 28.7-70.3 8.8-102.9-19.6-32.2-57.2-47.9-93.9-40.7-40.6 7.9-69.4 45.6-69.8 86.2-.1 10.5 9.3 20.5 20 20 10.9-.5 19.9-8.8 20-20 0-1.6.1-3.3.2-4.9 0-.7.1-1.4.2-2.1.3-4-.1 1.3-.2 1.2-.7-.4 2.1-9 2.4-9.8.3-.8.9-4.2 1.6-4.4.2-.1-1.8 3.7-.7 1.7.4-.8.8-1.6 1.1-2.4 1.5-3 3.3-5.7 5.1-8.5 1.9-2.9-2.7 3.1.5-.6 1-1.1 2-2.3 3.1-3.4s2.2-2.2 3.3-3.2c.5-.4 1-.9 1.5-1.3.7-.6 3.6-2 1-.9-2.2.9-.6.5.1 0s1.4-1 2.2-1.5c1.1-.7 2.2-1.4 3.4-2 1.5-.9 3.1-1.6 4.7-2.4.5-.3 2.6-1.3 0-.1-3 1.4 1-.3 1.3-.4 2.7-1 5.6-1.8 8.4-2.4.9-.2 1.8-.3 2.7-.5 2.2-.5-1.9.2-1.9.2 1.8 0 3.7-.4 5.5-.4 3.3-.1 6.5 0 9.8.3 3.7.3-3.8-.7.8.2 1.8.3 3.5.8 5.3 1.2 1.5.4 3 .9 4.5 1.4.4.1 2.4.8 2.5.9.1.3-3.7-1.9-1.7-.7 2.8 1.7 5.9 3 8.7 4.8.7.5 1.4 1 2.2 1.5.7.5 2.2.9.1 0-2-.8-.7-.6 0 .1.7.6 1.3 1.1 2 1.7 2.5 2.2 4.6 4.6 6.8 7 3 3.3-1.4-2.3.5.6.8 1.3 1.7 2.5 2.5 3.8.8 1.3 1.6 2.7 2.3 4l.9 1.8c1.9 3.6.4-.3-.1-.5 1.2.4 2.5 7.6 2.9 8.9.3 1.3.6 2.7.9 4 .8 3.8-.1-1.2-.1-1.3.5.5.3 2.8.3 3.4.2 3 .2 6.1 0 9.1-.1.9-.2 1.8-.2 2.8-.1 2-1.2 1.7.2-1.2-.7 1.5-.7 3.7-1.1 5.3-.7 2.8-1.8 5.5-2.6 8.3-.8 2.5 1.8-3.4.5-1.1-.3.5-.6 1.2-.8 1.8-.8 1.6-1.6 3.1-2.5 4.6-.8 1.3-1.6 2.6-2.5 3.9-2.7 4.1 1.9-2-.4.7-2.2 2.5-4.3 4.9-6.8 7.1-.4.4-2.8 3-3.5 3 0 0 4.1-2.8.9-.8-.6.4-1.1.7-1.6 1.1-2.8 1.8-5.7 3.3-8.6 4.8-3.1 1.6 3.6-1.2-.7.3-1.5.5-2.9 1-4.4 1.5-1.5.4-3 .8-4.6 1.2-.7.1-1.3.3-2 .4-4.4 1 3.2-.2.6 0-3.3.3-6.5.5-9.8.4-1.6 0-3.2-.2-4.9-.3-.6 0-3-.3-.1 0 3.3.3-.7-.2-1.4-.3-3.5-.7-6.9-1.8-10.3-3-.6-.2-2.6-1.2-.1 0 2.9 1.4-.6-.3-1.2-.6-1.6-.8-3.1-1.6-4.6-2.5-1.5-.9-2.9-1.9-4.4-2.9-2.4-1.5.3.8.9.8-.4 0-1.7-1.4-2-1.7-2.6-2.3-5.1-4.7-7.4-7.4 0 0-1.7-1.7-1.7-2 0 .4 2.4 3.4.8.9-1-1.5-2-2.9-2.9-4.4-1-1.7-1.9-3.5-2.8-5.2-2.1-4.1 1 3.2-.6-1.3-1.2-3.4-2.2-6.8-2.9-10.4-.1-.6-.1-1.5-.4-2 1.5 3.3.3 2.8.1.5-.2-2.1-.3-4.2-.3-6.3-.1-10.5-9.1-20.5-20-20-11.3.3-20.7 8.7-20.5 19.9zM960.8 258 839.4 571H372.9L269.7 258z"></path>
          <path d="M941.5 252.5c-13.7 35.3-27.3 70.6-41 105.9-21.8 56.3-43.6 112.5-65.3 168.8-5 12.9-10 25.9-15 38.8 6.4-4.9 12.9-9.8 19.3-14.7H430.4c-18.8 0-37.8-.8-56.7 0h-.8c6.4 4.9 12.9 9.8 19.3 14.7-11.7-35.5-23.3-70.9-35-106.4-18.5-56.1-37-112.2-55.4-168.4-4.3-12.9-8.5-25.8-12.8-38.8-6.4 8.4-12.9 16.9-19.3 25.3H932.8c9 0 18 .2 26.9 0h1.2c10.5 0 20.5-9.2 20-20s-8.8-20-20-20H297.8c-9 0-18-.2-26.9 0h-1.2c-12.5 0-23.4 12.9-19.3 25.3 11.7 35.5 23.3 70.9 35 106.4 18.5 56.1 37 112.2 55.4 168.4 4.3 12.9 8.5 25.8 12.8 38.8 2.8 8.4 10.2 14.7 19.3 14.7H782c18.8 0 37.8.7 56.7 0h.8c9.5 0 16.1-6.4 19.3-14.7 13.7-35.3 27.3-70.6 41-105.9 21.8-56.3 43.6-112.5 65.3-168.8 5-12.9 10-25.9 15-38.8 3.8-9.8-4.2-22.4-14-24.6-11.5-2.6-20.6 3.5-24.6 14z"></path>
        </svg>
      </div>
    </>
  );
}

export default Menu;
