import { createGlobalStyle } from "styled-components";
import { BreakPointsDown } from "./Mixins";

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
			${BreakPointsDown('large', `{
					display: none;
				}`)}
			}

			.flex{
				display : flex;

				&-jc-sb {
					justify-content: space-between;
				}

				&-jc-c {
					justify-content: center;
				}
				
				&-ai-c {
					align-items: center;
				}
			}

	a{
			color: inherit;
			text-decoration: none;
			cursor: pointer;
		}

	* {
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		}
 `;