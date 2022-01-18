import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		background-color: #060507;
		color: #fff;

		.hide-for-mobile{
			//hide fortablet and mobile devices
			@media screen and (max-width: 1023px){
            		display: none;
           		}
			}
		}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
 `;