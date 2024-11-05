/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import {createRoot} from "react-dom/client";
import Main from "./Main";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";

const rootEl = document.getElementById("root");
createRoot(rootEl!).render(<Main/>)

