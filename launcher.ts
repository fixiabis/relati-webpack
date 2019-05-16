import "./scss/view/page.scss";
import { Page } from "./ts/view/Page";

import "./scss/view/message-box.scss";
import { MessageBox } from "./ts/view/MessageBox";

import "./scss/page/main-page.scss";
import "./ts/page/MainPage";

import "./scss/page/game-page.scss";
import "./ts/page/GamePage";

import "./scss/page/help-page.scss";
import "./ts/page/HelpPage";

import "./scss/view/relati-effect.scss";

if (!location.hash) Page.switchTo("main");
(window as any).MessageBox = MessageBox;