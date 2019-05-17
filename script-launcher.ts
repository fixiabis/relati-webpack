import { Page } from "./ts/view/Page";
import { MessageBox } from "./ts/view/MessageBox";

import "./ts/page/MainPage";
import "./ts/page/GamePage";
import "./ts/page/HelpPage";

if (!location.hash) Page.switchTo("main");
(window as any).MessageBox = MessageBox;