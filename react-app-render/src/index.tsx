/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import InputControlsLiveSample from "./InputControlsLiveSample/InputControlsLiveSample.tsx";

const rootEl = document.getElementById("root");
const icLiveSample = document.getElementById("ic-live-sample");

{
    rootEl && createRoot(rootEl!).render(<App/>)
}
{
    icLiveSample && createRoot(icLiveSample!).render(<InputControlsLiveSample/>)
}
